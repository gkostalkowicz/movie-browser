import { selectMovies, fetchMovieList, fetchMovieDetails } from "./movieSlice";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from "react";
import styles from './Movies.module.css';

export function MovieList() {
   const dispatch = useDispatch();
   const requestStatus = useSelector(state => state.movies.requestStatus);
   useEffect(() => {
      if (requestStatus == 'idle') {
         dispatch(fetchMovieList());
      }
   }, [requestStatus, dispatch]);

   function handleClick(movieId, e) {
      e.preventDefault();
      dispatch(fetchMovieDetails(movieId));
   }

   const movies = useSelector(selectMovies);
   const listItems = movies.map(movie => <li>
         <a href="#" onClick={(e) => handleClick(movie.id, e)}>
            <span className={styles.title}>{movie.title}</span>
            <span className={styles.year}> {movie.year}</span>
         </a>
      </li>);
   return <div className={styles.MovieList}>
         <ul>
            {listItems}
         </ul>
      </div>
}