import { useLocation } from 'react-router-dom';
import { MoviesTitle, Container, ListOfFilm, Link } from './FilmList.styled';


export const FilmList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ id, title, release_date }) => (
        <ListOfFilm key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviesTitle>{title} ({release_date})
            </MoviesTitle>
          </Link>
        </ListOfFilm>
      ))}
    </Container>
  );
};