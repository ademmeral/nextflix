import FeaturedMovie from '@/components/ShowCase/FeaturedMovie/FeaturedMovie'
import GenresStripe from '@/components/ShowCase/GenresStripe/GenresStripe';
import Movies from '@/components/ShowCase/Movies/Movies';
import { getMany } from '@/utils/utils';
import { notFound } from 'next/navigation';

type Props = {
  params : {names : string[]}
}

async function ShowCase({params : {names}}:Props) {
  // POPULAR & TOP-RATED MOVIES & GENRES
  const byCtg = `discover/tv?language=en-US&page=1&with_genres=${names[1]}`
  const gnrs = 'genre/tv/list?language=en'
  const [
    {results: byCategory}, {genres}
  ] = await Promise.all([getMany(byCtg),getMany(gnrs)])
  if (!byCategory) notFound();
  return (
    <div className='fluid showcase'>
      <FeaturedMovie movie={byCategory[0]}/>
      <GenresStripe genres={genres} type='series'/>
      <Movies movies={byCategory} title={names[0].toUpperCase()} type='series'/>
    </div>
  )
}

export default ShowCase