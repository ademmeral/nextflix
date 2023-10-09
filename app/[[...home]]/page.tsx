import InfoButton from '@/components/InfoButton/InfoButton';
import FeaturedMovie from '@/components/ShowCase/FeaturedMovie/FeaturedMovie'
import GenresStripe from '@/components/ShowCase/GenresStripe/GenresStripe';
import Movies from '@/components/ShowCase/Movies/Movies';
import { getMany } from '@/utils/utils';
import { notFound } from 'next/navigation';

async function ShowCase({params} : Record<string, any>) {
  if (params.home.length && params.home[0] !== 'home') 
    return notFound();

  // POPULAR & TOP-RATED MOVIES & GENRES
  const tops = `movie/top_rated?language=en-US&page=1`
  const pops = `movie/popular?language=en-US&page=1`
  const upcom = `movie/upcoming?language=en-US&page=1`
  const gnrs = `genre/movie/list?language=en`;

  const [
    {results: topRated}, {results: populars}, {results: upcomings}, {genres}
  ] = await Promise.all([getMany(tops), getMany(pops), getMany(upcom),getMany(gnrs)])

  return (
    <div className='fluid showcase'>
      <FeaturedMovie item={topRated[0]} press={true}>
        <InfoButton type="movies" item={topRated[0]}/>
      </FeaturedMovie>
      <GenresStripe genres={genres} type={'movies'}/>
      <Movies movies={topRated} title='TOP RATED' type={'movies'}/>
      <Movies movies={populars} title='POPULAR' type={'movies'}/>
      <Movies movies={upcomings} title='UPCOMING' type={'movies'}/>
    </div>
  )
}

export default ShowCase