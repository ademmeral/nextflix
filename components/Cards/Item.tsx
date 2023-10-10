import Link from "next/link";
import s from './style.module.css';

function Item({item}: {item : Movie|Serie}){
  
  const isMovie = (item as Movie).original_title ?  true : false
  const setTitle = (item as Movie).original_title || (item as Serie).name;

  const src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`;
  const href = {
    pathname : isMovie ? `/movies/movie` : `/series/serie`,
    query : {
      id : item.id
    }
  };
  
  return (
    <li className={`${s.movie}`} key={item.id}>
      <Link href={href}>
        <img src={src} alt={setTitle} />
      </Link>
    </li>
  )
}

export default Item