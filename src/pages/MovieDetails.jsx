// import { Link, Outlet  } from "react-router-dom";
// import {Container} from "components/App.styled";


// const MovieDatails = () => {
//   return (
//     <Container>
//       <button type="button"> Go back</button>
//       <div>
//         <img src="https://via.placeholder.com/960x240" alt="" />
//       </div>
//       <div>
//         <h2>film name</h2>
//         <p>User Score:</p>
//         <h3>Overview</h3>
//         <p>text overview</p>
//         <h4>Genres</h4>
//         <p>film geners</p>
//       </div>
//       <div>
//         <p>Additional information</p>
//         <ul>
//           <li>
//             <Link to="cast">Cast</Link>
//           </li>
//           <li>
//             <Link to="reviews">Reviews</Link>
//           </li>
//         </ul>
//          <Outlet />
//       </div>
      
//     </Container>
//   );
// };

// export default MovieDatails;

import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { loadDetailFilm } from "Api/Api";
import { MoviesCard, MoviesInfo, MoviesTitle, Text, Subtitle, Links, ListLinks } from './MovieDetails.styled'

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  
    useEffect(() => {
     loadDetailFilm(id)
      .then(resp => {
          console.log('resp in MovDet component', resp);
        setMovieInfo(resp);
      })
      .catch(error => {
        console.log(error.message);
      });
    }, [id]);
   
    if (!movieInfo) {
      return (
        <div>
          <h1>Something went wrong...</h1>
          {/* <img src={NOT_FOUND} alt="bad search" /> */}
        </div>
      );
    }
  const genres = movieInfo.genres;
  const factGenres = genres.map(elem => elem.name + ' ').join('');
    return (
      <>
        <MoviesCard>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`}
            alt=""
          />
          <MoviesInfo>
            <MoviesTitle>{movieInfo.title}</MoviesTitle>
            <Text>User Score: {Math.round(movieInfo.popularity)} points</Text>
            <Subtitle>Overview</Subtitle>
            <Text>{movieInfo.overview}</Text>
            {movieInfo.overview === '' && (
              <p>We don`t have any overview for this movie.</p>
            )}
            <Subtitle>Genres</Subtitle>
            <Text>{factGenres}</Text>
          </MoviesInfo>
        </MoviesCard>
        <h4>Additional information</h4>
        <ul>
          <ListLinks>
            <Links to="cast">Cast</Links>
          </ListLinks>
          <ListLinks>
            <Links to="reviews">Reviews</Links>
          </ListLinks>
        </ul>
        <Outlet />
      </>
    );
}