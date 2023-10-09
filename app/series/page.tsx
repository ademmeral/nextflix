import InfoButton from '@/components/InfoButton/InfoButton';
import FeaturedMovie from '@/components/ShowCase/FeaturedMovie/FeaturedMovie'
import GenresStripe from '@/components/ShowCase/GenresStripe/GenresStripe';
import Movies from '@/components/ShowCase/Movies/Movies';
import { getMany } from '@/utils/utils';
import { notFound } from 'next/navigation';

type Props = {
  searchParams : {category : string}
}

async function ShowCase({searchParams : {category}}:Props) {
  // POPULAR & TOP-RATED MOVIES & GENRES
  const byCtg = `discover/tv?language=en-US&page=1&with_genres=${category}`
  const gnrs = 'genre/tv/list?language=en'
  const [
    {results: byCategory}, {genres}
  ] = await Promise.all([getMany(byCtg),getMany(gnrs)]);
  
  if (!(byCategory||genres)) notFound();

  return (
    <div className='fluid showcase'>
      <FeaturedMovie item={byCategory[0]}>
        <InfoButton type="series" item={byCategory[0]} />
      </FeaturedMovie>
      <GenresStripe genres={genres} type='series'/>
      <Movies movies={byCategory} title={category} type='series'/>
    </div>
  )
}

export default ShowCase