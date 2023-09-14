import FeaturedMovie from '@/components/ShowCase/FeaturedMovie/FeaturedMovie'
import GenresStripe from '@/components/ShowCase/GenresStripe/GenresStripe';
import Movies from '@/components/ShowCase/Movies/Movies';
import { getMany } from '@/utils/utils';

type Props = {
  params : {name : string}
}

async function ShowCase({params : {name}}:Props) {
  // POPULAR & TOP-RATED MOVIES & GENRES
  const byCtg = `discover/movie?language=en-US&page=1&with_genres=${name[1]}`
  const gnrs = 'genre/movie/list?language=en'
  const [
    {results: byCategory}, {genres}
  ] = await Promise.all([getMany(byCtg),getMany(gnrs)])
  // const ctgId = genres.find((c:Record<string, any>) => c.name.toLoweCase() === name)

  return (
    <div className='fluid showcase'>
      <FeaturedMovie movie={byCategory[0]}/>
      <GenresStripe genres={genres} type='movies'/>
      <Movies movies={byCategory} title={name[0].toUpperCase()} type='movies'/>
    </div>
  )
}

export default ShowCase