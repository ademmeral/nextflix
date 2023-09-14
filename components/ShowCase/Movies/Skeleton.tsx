import './style.css';

function MoviesSkeleton() {
  return (
    <div className="categories">
      <div className="category skeleton">
        <h3></h3>
        <ul className="movies">
          {
            [...Array(6).keys()]
            .map((k) => <li className="movie" key={k}></li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default MoviesSkeleton