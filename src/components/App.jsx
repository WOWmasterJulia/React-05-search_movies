import { Route, Routes } from "react-router-dom";
import Home  from "pages/home/Home";
import Movies from "pages/movies/Movies";
import MovieDetails from "pages/movieDetails/MovieDetails";
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Layout } from './Layout/Layout';
import NotFound from "pages/notfound/Notfound";

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
        <Route path="*" element={<NotFound />} />
      </Route>  
    </Routes>
  );
};

