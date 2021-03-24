import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movies/movieSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer
  },
});
