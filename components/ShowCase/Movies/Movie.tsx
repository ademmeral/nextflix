import Link from "next/link";

type MovieType = {
  movie : Record<string, any>,
  type: string
}

function Movie({movie, type}: MovieType){
  
  const src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
  const path = type === 'movies' ? '/movies/movie/' : '/series/';
  
  return (
    <li className="movie" key={movie.id}>
      <Link href={path + movie.id}>
        <img
          src={src}
          alt={type === 'movies' ? movie.original_title : movie.name}
        />
      </Link>
    </li>
  )
}

export default Movie