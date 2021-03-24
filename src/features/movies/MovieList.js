import { selectMovies } from "./movieSlice";
import { useSelector, useDispatch } from 'react-redux';

export function MovieList() {
   const movies = useSelector(selectMovies);
   const listItems = movies.map(movie => <li>{movie.title} ({movie.year})</li>)
   return <div>
         <p>Here are your movies:</p>
         <ul>
            {listItems}
         </ul>
      </div>
}