import { Route, Routes } from "react-router-dom";
import Home  from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Container, Header, Link } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        
        </Route>
      </Routes>
    </Container>
  );
};







// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
