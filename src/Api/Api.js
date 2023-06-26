import axios from 'axios';

// axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `2e42ce2c27880cb4cf3402f1ec0650d2`,
};


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
