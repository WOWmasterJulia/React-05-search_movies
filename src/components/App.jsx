import { Route, Routes } from "react-router-dom";
import Home  from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
// import { Container, Header, Link } from "./App.styled";
import { Layout } from './Layout/Layout';
import NotFound from "pages/Notfound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:id" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
       <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

