// src/api.ts
import axios from 'axios';

const API_KEY = 'eaae7f92825aa266d568f699ef2402fc'; // Ganti dengan API Key Anda
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchNowPlayingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
};
