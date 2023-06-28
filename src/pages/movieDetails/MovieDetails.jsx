import { useParams, Outlet, useLocation} from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { loadDetailFilm } from "Api/Api";
import { MoviesCard, MoviesInfo, MoviesTitle, Text, Subtitle, Links, ListLinks } from './MovieDetails.styled'
import { BackLink } from "components/Backlink/Backlink";

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [movieInfo, setMovieInfo] = useState(null);
  
  useEffect(() => {
    loadDetailFilm(id)
      .then(resp => {
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
      <BackLink to={backLinkHref}>GO BACK</BackLink>
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
          <Links to="cast" state={{ from: location.state?.from ?? '/movies' }}>
            Cast
          </Links>
        </ListLinks>
        <ListLinks>
          <Links to="reviews" state={{ from: location.state?.from ?? '/movies' }}>
            Reviews
          </Links>
        </ListLinks>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;