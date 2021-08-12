import React from 'react';
import styles from './App.css';
import { MovieList } from './features/movies/MovieList';
import { MovieDetail } from './features/movies/MovieDetail';

function App() {
  return (
    <div>
      <div className="MovieList">
        <MovieList />
      </div>
      <div className="MovieDetail">
        <MovieDetail />
      </div>
    </div>
  );
}

export default App;
