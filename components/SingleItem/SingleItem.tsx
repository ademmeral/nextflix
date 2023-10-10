import FeaturedItem from "../FeaturedItem/FeaturedItem"

async function SingleItem({singleItem} : {singleItem: SingleItemType}) {

  return (
    <div className={`fluid`}>
      <FeaturedItem item={singleItem}/>
    </div>
  )
}

export default SingleItem
