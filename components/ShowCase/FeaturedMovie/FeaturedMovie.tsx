import {AiOutlinePlusCircle} from 'react-icons/ai';
import './style.css';
import { compact } from '@/utils/utils';

type Props = {
  movie : Record<string, any>
}

// Image component is unuseful (doing some interesting things ),I therefore used normal img tag <3
function FeaturedMovie({movie}:Props) {
  const bgImg = `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path})`;

  return (
    <div className="featured-movie-wrapper">
      <figure
        key={movie.id}
        style={{'backgroundImage' : bgImg}}>
        <img src='' alt={movie.original_title} />
      </figure>
      <article>
        <h2>{movie.original_title}</h2>
        <p>{compact(movie.overview, 200)}</p>
      </article>
      <div className="buttons">
        <button type="button" className='btn'>Play</button>
        <button type='button'>
          <AiOutlinePlusCircle size={50}/>
        </button>
      </div>
    </div>
  )
}

export default FeaturedMovie