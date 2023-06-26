import axios from 'axios';

// axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `2e42ce2c27880cb4cf3402f1ec0650d2`,
};


// // функція отримання переліку топових фільмів на стор HOME
// export const getMovies = async function () {
//   const response = await axios.get('/trending/movie/day');
//   return response.data;
// };


// // функція пошуку фільма за назвою
// export const getFilm = async function (query) {
//     const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
//     return response.data;
// }

// export const getMovies = async function () {
//     const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day');
//     return response.data;
// }

// export const loadDetailFilm = async function (movieId) {
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`);
//     return response.data;
// }

// export const loadCastFilm = async function (movieId) {
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`);
//     return response;
// }

// export const loadReviewsFilm = async function (movieId) {
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`);
//     return response;
// }

// export const getFilm = async function (query) {
//     const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
//     return response;
// }

export const getMovies = async function () {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day');
    return response.data;
}

export const loadDetailFilm = async function (movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`);
    return response.data;
}

export const loadCastFilm = async function (movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`);
    return response;
}

export const loadReviewsFilm = async function (movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`);
    return response;
}

export const getFilm = async function (query) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
    return response;
}






// import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/';
// // const API_KEY = '2e42ce2c27880cb4cf3402f1ec0650d2';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTQyY2UyYzI3ODgwY2I0Y2YzNDAyZjFlYzA2NTBkMiIsInN1YiI6IjY0OTJkMDI5NjVlMGEyMDBhZDFmYmVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4ZXvxdlhLH2-0L5B4xYa5r2mswRo7xqoD8Pvnumz6UI',
//   },
// };

// // функція отримання переліку топових фільмів на день
// export const getMovies = async () => {
//   const response = await axios.get(
//     `${BASE_URL}trending/movie/day?language=en-US`,
//     options
//   );
//   return response.data;
// };

// // функція отримання детальної інформації по обраному фільму
// export const getDetailMovie = async movie_id => {
//   const response = await axios.get(
//     `${BASE_URL}movie/${movie_id}?language=en-US`,
//     options
//   );
//   return response.data;
// };

// // функція отримання детальної інформації про акторський склад для сторінки кінофільму
// export const getCast = async movie_id => {
//   const response = await axios.get(
//     `${BASE_URL}movie/${movie_id}/credits?language=en-US`,
//     options
//   );
//   return response.data;
// };

// // функція запиту оглядів для сторінки кінофільму
// export const getReviews = async movie_id => {
//   const response = await axios.get(
//     `${BASE_URL}movie/${movie_id}/reviews?language=en-US`,
//     options
//   );
//   return response.data;
// };

// // функція пошуку фільма за назвою
// export const getFilm = async filmName => {
//   const response = await axios.get(
//     `${BASE_URL}search/movie?query=${filmName}&include_adult=false&language=en-US&page=1`,
//     options
//   );
//   return response.data;
// };
