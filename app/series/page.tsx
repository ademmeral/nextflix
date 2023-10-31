import InfoButton from '@/components/InfoButton/InfoButton';
import { notFound } from 'next/navigation';
import FeaturedItem from '@/components/FeaturedItem/FeaturedItem';
import ItemList from '@/components/Cards/ItemList';
import GenreList from '@/components/GenreList/GenreList';
import { getCategories, getByCategory } from '@/utils/utils';
import InitialPage from '@/components/InitialPage';

type SeriesPagePropsType = {
  searchParams : {category:string, id: string},
}
async function SeriesPage({searchParams : {category, id}}:SeriesPagePropsType) {
  if (!(id||category)) return <InitialPage slug='tv' />

  const [{results: series}, {genres}] = await Promise.all([
    getByCategory('tv', id), getCategories('tv')
  ]) as Awaited<Promise<[Series, Categories]>>;

  if (!(series||genres)) return notFound();

  return (
    <div className='fluid showcase'>
      <FeaturedItem item={series[0]} press={true}>
        <InfoButton type="series" item={series[0]} />
      </FeaturedItem>
      <GenreList genres={genres} />
      <ItemList items={series} ctgName={category} />
    </div>
  )
}

export default SeriesPage