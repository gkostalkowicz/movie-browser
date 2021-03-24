import { selectMovies, incrementYears, randomizeYears } from "./movieSlice";
import { useSelector, useDispatch } from 'react-redux';

export function MovieList() {
   const movies = useSelector(selectMovies);
   const dispatch = useDispatch();
   const listItems = movies.map(movie => <li>{movie.title} ({movie.year})</li>)
   return <div>
         <p>Here are your movies:</p>
         <ul>
            {listItems}
         </ul>
         <button onClick={() => dispatch(incrementYears(4))}>Back to the future</button>
         <button onClick={() => dispatch(randomizeYears({min: 1960, max: 2021}))}>Surprise me</button>
      </div>
}