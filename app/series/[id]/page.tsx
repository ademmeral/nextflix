import { notFound } from 'next/navigation';
import './style.css';
import { getMany } from '@/utils/utils';

type Props = {
  params : {id: string}
}
async function SingleMovie({params:{id}} : Props) {
  const movie = await getMany(`tv/${id}?language=en-US`)
  if (!movie) notFound();
  const bgImg = `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path})`

  return (
    <div className="single-movie fluid">
      <figure
        key={movie.id}
        style={{'backgroundImage' : bgImg}}>
        <img src='' alt={movie.name} /> {/* For the sake of SEO */ }
      </figure>
      <article>
        <h2>{movie.name}</h2>
        <p>{movie.overview}</p>
      </article>
      <div className="buttons">
        <button type="button" className='btn'>Play</button>
      </div>
    </div>
  )
}

export default SingleMovie