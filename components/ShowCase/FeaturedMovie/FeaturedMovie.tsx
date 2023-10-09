import {AiOutlinePlusCircle} from 'react-icons/ai';
import { compact } from '@/utils/utils';
import s from './style.module.css';

type Props = {
  movie : Record<string, any>,
  children? : React.ReactNode,
  press? : boolean,
}

// Image component is unuseful (doing some interesting things ),I therefore used normal img tag <3
function FeaturedMovie({movie, press, children}:Props) {
  const bgImg = `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path})`;

  return (
    <div className={s.wrapper}>
      <figure
        key={movie.id}
        style={{'backgroundImage' : bgImg}}
        className={s.figure}
        >
        <img src='' alt={movie.original_title} />
      </figure>
      <article className={s.article}>
        <h2>{movie.original_title || movie.name}</h2>
        <p>{press ? compact(movie.overview, 200) : movie.overview}</p>
      </article>
      <div className={s.buttons}>
        <button type="button" className='btn'>Play</button>
        {children}
      </div>
    </div>
  )
}

export default FeaturedMovie