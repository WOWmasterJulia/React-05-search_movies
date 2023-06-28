import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from '../../components/Search/Searchbar';
import {FilmList}  from '../../components/FilmList/FilmList';
import { getFilm } from 'Api/Api';
import { Wrapper, Text } from './Movies.styled';


const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  const [movies, setMovies] = useState([]);
  // const [isEmpty, setIsEmpty] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchWord') ?? '';
  const [error, setError] = useState(null);

    useEffect(() => {
      if (!searchQuery) {   
      return
      }

      setError(null); 

      getFilm(searchQuery)
        .then(resp => {
          if (resp.data.results.length === 0) {setError('We have no movies for your request... 😕')}; 
            setMovies(resp.data.results);
            return;
          })
          
        .catch(error => {
          console.log(error.message);
          setError('Oops! Something went wrong! Try reloading the page!')
        })
        .finally(() => {});
  }, [searchQuery]);

  const onChange = evt => {
    if (evt.target.value === '') {
      setSearchParams({});
    }
    setSearchWord(evt.target.value);
  };
  
  const onSubmit = evt => {
    evt.preventDefault();
    if (searchWord.trim() === '') {
      return setError('Oops!')
    }
    setSearchParams({ searchWord });
    setSearchWord('');
  };

  return (
    <Wrapper>
      <Searchbar
        value={searchWord}
        onChange={onChange}
        SearchOnSubmit={onSubmit}
      />
      {movies.length > 0 && <FilmList movies={movies} />}
      {error && <Text>Sorry. There are no movies ... 😭 Try again.</Text>}
    </Wrapper>
  );
};

export default Movies;