import { getMovies } from 'Api/Api';
import { FilmList } from '../components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import styled from "@emotion/styled";

const TrendMovies = styled.h1`
font-size: 24px;
  display: inline-flex;
  color: black;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0;

  :hover {
    color: orangered;
  }
`;
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
      <TrendMovies>Trending today</TrendMovies>
      <FilmList movies={datamovies} />
    </div>
  );
};

export default Home;
