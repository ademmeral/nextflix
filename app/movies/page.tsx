import InfoButton from '@/components/InfoButton/InfoButton';
import ItemList from '@/components/Cards/ItemList';
import FeaturedItem from '@/components/FeaturedItem/FeaturedItem';
import GenreList from '@/components/GenreList/GenreList';
import { getByCategory } from '@/api/items';
import { notFound } from 'next/navigation';
import { getCategories } from '@/api/genres';
import InitialPage from '@/components/InitialPage';
import { delay } from '@/utils/utils';

type MoviesPagePropsType = {
  searchParams : {category:string, id: string},
}
async function MoviesPage({searchParams : {category, id}}:MoviesPagePropsType) {
  // await delay(100000)
  if (!(id||category)) return <InitialPage slug='movie' />;

  const [{results}, {genres}] = await Promise.all([
    getByCategory('movie', id), getCategories('movie')
  ]) as Awaited<Promise<[Movies, Categories]>>;
  
  if (!(results || genres)) return notFound();

  return (
    <div className='fluid showcase'>
      <FeaturedItem item={results[0]} press={true}>
        <InfoButton type="movies" item={results[0]} />
      </FeaturedItem>
      <GenreList genres={genres}/>
      <ItemList items={results} ctgName={category}/>
    </div>
  )
}

export default MoviesPage