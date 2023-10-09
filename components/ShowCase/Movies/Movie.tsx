import Link from "next/link";
import s from './style.module.css';

type MovieType = {
  movie : Record<string, any>,
  type: string
}

function Movie({movie, type}: MovieType){
  
  const src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
  const href = {
    pathname : `/${type}/movie`,
    query : {
      id : movie.id
    }
  };
  
  return (
    <li className={`${s.movie}`} key={movie.id}>
      <Link href={href}>
        <img
          src={src}
          alt={type === 'movies' ? movie.original_title : movie.name}
        />
      </Link>
    </li>
  )
}

export default Movie