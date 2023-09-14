import Movie from "./Movie";
import './style.css';

type MoviesType = {
  movies : Record<string, any>[],
  title: string,
  type: string
}

function Movies({movies, title, type}: MoviesType) {

  return (
    <div className="categories">
      <div className="category">
        <h3>{title}</h3>
        <ul className="movies">
          {movies.map((movie) => <Movie movie={movie} type={type}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Movies