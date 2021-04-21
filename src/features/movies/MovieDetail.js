import { useSelector } from "react-redux"

function movieDetailsView(movieDetails) {
    return <div>
        <h1>{movieDetails.title} ({movieDetails.year})</h1>
        <p><i>{movieDetails.plot}</i></p>
        <p>Starring: {movieDetails.actors}.</p>
        </div>
}

export function MovieDetail() {
    const movieDetails = useSelector(state => state.movies.movieDetails);
    return !movieDetails ? <p><b>Please select a movie.</b></p> : movieDetailsView(movieDetails);
}
