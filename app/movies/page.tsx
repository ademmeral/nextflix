import InfoButton from '@/components/InfoButton/InfoButton';
import FeaturedMovie from '@/components/ShowCase/FeaturedMovie/FeaturedMovie'
import GenresStripe from '@/components/ShowCase/GenresStripe/GenresStripe';
import Movies from '@/components/ShowCase/Movies/Movies';
import { delay, getMany } from '@/utils/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaInfo } from 'react-icons/fa';

type Props = {
  searchParams : {category : string, movie: string}
}
async function ShowCase({searchParams : {category, movie}}:Props) {
  // await delay(10000)

  // POPULAR & TOP-RATED MOVIES & GENRES
  const byCtg = `discover/movie?language=en-US&page=1&with_genres=${category}`
  const gnrs = 'genre/movie/list?language=en'
  const [
    {results: byCategory}, {genres}
  ] = await Promise.all([getMany(byCtg),getMany(gnrs)]);

  if (!(byCategory || genres)) return notFound();

  return (
    <div className='fluid showcase'>
      <FeaturedMovie item={byCategory[0]}>
        <InfoButton type="movies" item={byCategory[0]} />
      </FeaturedMovie>
      <GenresStripe genres={genres} type='movies'/>
      <Movies movies={byCategory} title={category} type='movies'/>
    </div>
  )
}

export default ShowCase