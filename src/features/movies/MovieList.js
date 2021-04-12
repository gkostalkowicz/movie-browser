import { selectMovies, incrementYears, randomizeYears, incrementYearsAsync, fetchMovies } from "./movieSlice";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from "react";

export function MovieList() {
   const dispatch = useDispatch();
   const postStatus = useSelector(state => state.movies.status);
   useEffect(() => {
      if (postStatus == 'idle') {
         dispatch(fetchMovies());
      }
   }, [postStatus, dispatch]);

   const movies = useSelector(selectMovies);
   const listItems = movies.map(movie => <li>{movie.title} ({movie.year})</li>);
   return <div>
         <p>Here are your movies:</p>
         <ul>
            {listItems}
         </ul>
         <button onClick={() => dispatch(incrementYears(4))}>Back to the future</button>
         <button onClick={() => dispatch(randomizeYears({min: 1960, max: 2021}))}>Surprise me</button>
         <button onClick={() => dispatch(incrementYearsAsync())}>Wait a second...</button>
         <button onClick={() => dispatch(fetchMovies())}>Get the latest ones</button>
      </div>
}