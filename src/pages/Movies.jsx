// import { Link } from "react-router-dom";

// const Movies = () => {
//     // return <div>Movies PAGE</div>
//     return (
//         <div>
//             {['dog-1', 'dog-2', 'dog-3', 'dog-4'].map(dog => {
//                 return (
//                     <Link key={dog} to={'${dog}'}>{dog}</Link>
//                 );
//             })}
//         </div>);
// };

// export default Movies;



// import { NavLink } from "react-router-dom";
// import { SearchForm } from "components/SearchForm/SearchForm";

// import {Container} from "components/App.styled";


// const Movies = () => {
//   return (
//      <Container>
//           {/* <SearchForm /> */}
//           <div>Movies PAGE</div>
//     </Container>
//   );
// };

// export default Movies;

//______________________________________________________
// import { useSearchParams, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { getFilm } from 'Api/Api';
// import { Link  } from 'react-router-dom';

// const ListOfFilm = styled.ul`
//   margin-top: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   li {
//     font-size: 18px;
//     font-weight: 600;
//   }
// `;

// const InputWrapper = styled.form`
//   box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
//     0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
//   padding: 10px;
//   border-radius: 5px;
//   background-color: #edf3fb;
//   input {
//     outline: none;
//   }
//   label {
//     color: grey;
//   }
// `;

// const Container = styled.section`
//   padding: 20px;
//   background-color: #fff;
// `;

// const ErrorText = styled.p`
//   margin-top: 20px;
//   color: red;
// `;
// const Button = styled.button`
//   align-self: start;
//   padding: 5px 20px;
//   margin-left: 10px;
  

//   background-color: teal;
//   border: none;
//   outline: none;
//   color: aliceblue;
//   border-radius: 5px;

//   transform: scale(1);
//   transition: transform 200ms;

//   &:hover,
//   &:focus {
//     transform: scale(1.05);
//   }
// `;

// const Movies = () => {
//   const [searchFilm, setSearchFilm] = useSearchParams();
//   const [films, setFilms] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('');
//   const location = useLocation(); //для отримання шляху з якого переходимо для передачи через props
//   const filmName = searchFilm.get('filmName') ?? '';

//   useEffect(() => {
//     const fetchFilm = async () => {
//       try {
//         const date = await getFilm(filmName);
//         const films = date.results;

//         if (!films.length && filmName !== '') {
//           setError(`Фільми зі словом ${filmName} не знайдені`);
//           setFilms([]);
//           setStatus('rejected');
//         } else {
//           setFilms(films);
//           setError(null);
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchFilm();
//   });

//   const updateSearch = event => {
//     const filmNameValue = event.target.value;
//     if (filmNameValue === '') {
//       return setSearchFilm({});
//     }
//     setSearchFilm({ filmName: filmNameValue });
//   };

//   return (
//     <Container>
//       <InputWrapper>
//         <label> Пошук фільму за ключовим словом</label>
//         <input type="text" value={filmName} onChange={updateSearch} />
//         <Button type="submit">Search</Button>
//       </InputWrapper>

//       {status === 'rejected' && <ErrorText>{error}</ErrorText>}

//       <ListOfFilm>
//         {films.map(film => (
//           <li key={film.id}>
//             <Link to={`${film.id}`} state={{ from: location }}>
//               {film.title}
//             </Link>
//           </li>
//         ))}
//       </ListOfFilm>
//     </Container>
//   );
// };

// export default Movies;
//_____________________________



import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from '../components/Search/Searchbar';
import {FilmList}  from '../components/FilmList/FilmList';
import { getFilm } from 'Api/Api';
import { Wrapper, Text } from './Movies.styled';

export const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchWord') ?? '';

    useEffect(() => {
    if (!searchQuery) {
      return
    }
      getFilm(searchQuery)
        .then(resp => {
          if (resp.length === 0) {
            setIsEmpty(true);
            return;
          }
          setMovies(resp.data.results);
        })
        .catch(error => {
          console.log(error.message);
        })
        .finally(() => {});
  }, [searchQuery]);


    const onChange = evt => {
      setSearchWord(evt.target.value);
    };
  const onSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ searchWord });
  };

  // movies.map(({ id, title, release_date }) => {
  //   return console.log(id, title, Date.parse(release_date));
  // });

  return (
    <Wrapper>
      <Searchbar
        value={searchWord}
        onChange={onChange}
        SearchOnSubmit={onSubmit}
      />
      <FilmList movies={movies} />
      {isEmpty && <Text>Sorry. There are no movies ... 😭</Text>}
    </Wrapper>
  );
};

export default Movies;