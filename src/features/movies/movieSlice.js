import { createSlice } from '@reduxjs/toolkit';

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
  });

export const { incrementYears, randomizeYears } = movieSlice.actions;
export const selectMovies = state => state.movies.movies;
export default movieSlice.reducer;
