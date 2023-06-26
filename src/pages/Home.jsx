import { getMovies } from 'Api/Api';
import {FilmList} from '../components/FilmList/FilmList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [datamovies, setDataMovies] = useState([]);
  useEffect(() => {
    getMovies()
      .then(resp => {
        setDataMovies(resp.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <FilmList movies={datamovies} />
    </div>
  );
};

export default Home;
