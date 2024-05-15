import Movie from '../Movie/movie.js'
import './movieList.css'
function MovieList(props){
    return(
        <>
          <div className="tour-container">
        {props.netflixMovies.map(movie => (
            <Movie key={movie.id} name={movie.title || movie.name} imgPath={movie.poster_path} 
            release_date={movie.release_date || movie.first_air_date} overview={movie.overview}  original_title={movie.original_title}/>
        ))}
        </div>
     </>
    )
}
export default MovieList;