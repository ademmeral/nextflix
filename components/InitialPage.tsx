import InfoButton from '@/components/InfoButton/InfoButton';
import ItemList from '@/components/Cards/ItemList';
import FeaturedItem from '@/components/FeaturedItem/FeaturedItem';
import GenreList from '@/components/GenreList/GenreList';
import { getMany } from '@/api/item';
import { getCategories } from '@/api/genres';

async function InitialPage({slug} : {slug:string}) {

  const [
    { results: topRated }, { results: populars },
    { results: upcomings }, {genres}
  ] = await Promise.all(
    [
      getMany(`${slug}/top_rated`), getMany(`${slug}/popular`),
      getMany(`${slug}/upcoming`), getCategories(slug)
    ]
  ) as Awaited<Promise<[
    Movies|Series, Movies|Series, Movies|Series, Categories
  ]>>;
  
  if (!(topRated || populars || upcomings ||genres))
    throw new Error('Something went wrong while fetching data!');

  return (
    <div className='fluid showcase'>
      <FeaturedItem item={topRated[0]} press={true}>
        <InfoButton type="movies" item={topRated[0]}/>
      </FeaturedItem>
      <GenreList genres={genres}/>
      <ItemList items={topRated} ctgName="top rated"/>
      <ItemList items={populars} ctgName="populars"/>
      {slug !== 'tv' && <ItemList items={upcomings} ctgName="upcomings"/>}
    </div>
  )
}

export default InitialPage