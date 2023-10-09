import FeaturedMovie from '../ShowCase/FeaturedMovie/FeaturedMovie';

type PropsType = {
  singleItem: Record<string, any>
}
async function SingleItem({singleItem} : PropsType) {

  return (
    <div className={`fluid`}>
      <FeaturedMovie item={singleItem}/>
    </div>
  )
}

export default SingleItem