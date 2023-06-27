import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from '../components/Search/Searchbar';
import {FilmList}  from '../components/FilmList/FilmList';
import { getFilm } from 'Api/Api';
import { Wrapper, Text } from './Movies.styled';

const Movies = () => {
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