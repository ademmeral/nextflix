import { notFound } from 'next/navigation';
import './style.css';
import { getMany } from '@/utils/utils';

type Props = {
  params : {id: string}
}
async function SingleMovie({params:{id}} : Props) {
  if ( isNaN(+id[1]) ) return notFound();
  const movie = await getMany(`movie/${id}?language=en-US`)
  if (!movie) return notFound();
  const bgImg = `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path})`

  return (
    <div className="single-movie fluid">
      <figure
        key={movie.id}
        style={{'backgroundImage' : bgImg}}>
        <img src='' alt={movie.original_title} /> {/* For the sake of SEO */ }
      </figure>
      <article>
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
      </article>
      <div className="buttons">
        <button type="button" className='btn'>Play</button>
      </div>
    </div>
  )
}

export default SingleMovie