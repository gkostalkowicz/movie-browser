import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async() => {
  const response = await axios.get('http://www.omdbapi.com/?apikey=99c8fe6e&s=front');
  return response.data;
});

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
      movies: [
          {
              "title": "I Care a Lot",
              "year": 2020
          },
          {
              "title": "News of the World",
              "year": 1999
          }
      ],
    },
    reducers: {
      incrementYears: (state, action) => {
        state.movies.forEach(
          movie => movie.year += action.payload
        );
      },
      randomizeYears: (state, action) => {
        const { min, max } = action.payload;
        state.movies.forEach(
          movie => movie.year = min + Math.round(Math.random() * (max - min))
        );
      }
    },
    extraReducers: {
      [fetchMovies.fulfilled]: (state, action) => {
        state.movies = action.payload.Search.map(movie => {
          return {
            title: movie.Title,
            year: movie.Year
          };
        });
      }
    }
  });

export const { incrementYears, randomizeYears } = movieSlice.actions;

export const selectMovies = state => state.movies.movies;

export default movieSlice.reducer;

export const incrementYearsAsync = () => {
  return async (dispatch, getState) => {
    await sleep(2000);
    dispatch(incrementYears(7));
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
