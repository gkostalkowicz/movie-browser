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
    reducers: {},
  });
  
export const selectMovies = state => state.movies.movies;

export default movieSlice.reducer;
