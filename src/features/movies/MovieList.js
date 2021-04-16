import { selectMovies, incrementYears, randomizeYears, incrementYearsAsync, fetchMovies } from "./movieSlice";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from "react";
import styles from './Movies.module.css';

export function MovieList() {
   const dispatch = useDispatch();
   const postStatus = useSelector(state => state.movies.status);
   useEffect(() => {
      if (postStatus == 'idle') {
         dispatch(fetchMovies());
      }
   }, [postStatus, dispatch]);

   const movies = useSelector(selectMovies);
   const listItems = movies.map(movie => <li>
         <a href="#">
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