import FeaturedMovie from '@/components/ShowCase/FeaturedMovie/FeaturedMovie'
import GenresStripe from '@/components/ShowCase/GenresStripe/GenresStripe';
import Movies from '@/components/ShowCase/Movies/Movies';
import { getMany } from '@/utils/utils';
import { notFound } from 'next/navigation';

type Props = {
  params : {home: string[]}
}
async function ShowCase({params: {home}}: Props) {
  // POPULAR & TOP-RATED MOVIES & GENRES
  if ( home && !['movies', 'series', 'kids'].includes(home[0]) ) 
    return notFound();

  const ctg = home && home[0] === 'series' ? 'tv' : 'movie';
  const type = home && home[0] === 'series' ? home[0] : 'movies'
  const tops = `${ctg}/top_rated?language=en-US&page=1&includes_adult=false`
  const pops = `${ctg}/popular?language=en-US&page=1&include_adult=false`
  const gnrs = 'genre/movie/list?language=en';

  const [
    {results: topRated}, {results: popular}, {genres}
  ] = await Promise.all([getMany(tops), getMany(pops),getMany(gnrs)])

  return (
    <div className='fluid showcase'>
      <FeaturedMovie movie={topRated[0]}/>
      <GenresStripe genres={genres} type={type}/>
      <Movies movies={topRated} title='TOP RATED' type={type}/>
      <Movies movies={popular} title='POPULAR' type={type}/>
    </div>
  )
}

export default ShowCase