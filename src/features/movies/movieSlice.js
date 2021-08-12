import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_KEY = '99c8fe6e';

export const fetchMovieList = createAsyncThunk('movies/fetchMovieList', async() => {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=front`);
  return response.data;
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async id => {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  return response.data;
});

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
      movies: [],
      movieDetails: null,
      requestStatus: 'idle',
      responseError: null
    },
    extraReducers: {
      [fetchMovieList.pending]: (state, action) => {
        state.requestStatus = 'loading';
      },  
      [fetchMovieList.fulfilled]: (state, action) => {
        state.requestStatus = 'succeeded';
        state.movies = action.payload.Search.map(movie => {
          return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year
          };
        });
      },
      [fetchMovieList.rejected]: (state, action) => {
        state.requestStatus = 'failed';
        state.responseError = action.error.message;
      },
      [fetchMovieDetails.fulfilled]: (state, action) => {
        state.movieDetails = {
          actors: action.payload.Actors,
          plot: action.payload.Plot,
          title: action.payload.Title,
          year: action.payload.Year
        }
      }
    }
  });

export const selectMovies = state => state.movies.movies;

export default movieSlice.reducer;
