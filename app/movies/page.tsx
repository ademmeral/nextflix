import FeaturedMovie from '@/components/ShowCase/FeaturedMovie/FeaturedMovie'
import GenresStripe from '@/components/ShowCase/GenresStripe/GenresStripe';
import Movies from '@/components/ShowCase/Movies/Movies';
import { delay, getMany } from '@/utils/utils';

type Props = {
  searchParams : {category : string, movie: string}
}
async function ShowCase({searchParams : {category, movie}}:Props) {

  // POPULAR & TOP-RATED MOVIES & GENRES
  const byCtg = `discover/movie?language=en-US&page=1&with_genres=${category}`
  const gnrs = 'genre/movie/list?language=en'
  const [
    {results: byCategory}, {genres}
  ] = await Promise.all([getMany(byCtg),getMany(gnrs)]);

  if (!(byCategory || genres)) throw new Error('Error');

  return (
    <div className='fluid showcase'>
      <FeaturedMovie movie={byCategory[0]}/>
      <GenresStripe genres={genres} type='movies'/>
      <Movies movies={byCategory} title={category} type='movies'/>
    </div>
  )
}

export default ShowCase