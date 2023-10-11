import InfoButton from '@/components/InfoButton/InfoButton';
import ItemList from '@/components/Cards/ItemList';
import FeaturedItem from '@/components/FeaturedItem/FeaturedItem';
import GenreList from '@/components/GenreList/GenreList';
import { getMany } from '@/api/items';
import { getCategories } from '@/api/genres';

async function InitialPage({slug} : {slug:string}) {

  const [
    { results: topRated }, { results: populars }, {genres}, upcomings
  ] = await Promise.all(
    [
      getMany(`${slug}/top_rated`), getMany(`${slug}/popular`),
      getCategories(slug)
    ].concat(slug !== 'tv' ? getMany('movie/upcoming') : [])
  ) as Awaited<Promise<[
    Movies|Series, Movies|Series, Categories, Movies|undefined
  ]>>;
  
  if (!(topRated || populars || genres))
    throw new Error('Something went wrong while fetching data!');

  return (
    <div className='fluid showcase'>
      <FeaturedItem item={topRated[0]} press={true}>
        <InfoButton type="movies" item={topRated[0]}/>
      </FeaturedItem>
      <GenreList genres={genres}/>
      <ItemList items={topRated} ctgName="top rated"/>
      <ItemList items={populars} ctgName="populars"/>
      {upcomings && slug !== 'tv' 
        ? <ItemList items={upcomings.results} ctgName="upcomings"/>
        : null
      }
    </div>
  )
}

export default InitialPage