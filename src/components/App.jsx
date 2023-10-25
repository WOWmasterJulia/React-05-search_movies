import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { Layout } from './Layout/Layout';
// import Home  from "pages/home/Home";
// import Movies from "pages/movies/Movies";
// import MovieDetails from "pages/movieDetails/MovieDetails";
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import NotFound from "pages/notfound/Notfound";


const Home = lazy(() => import('../pages/home/Home'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/notfound/Notfound'));


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

