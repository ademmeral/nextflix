import Item from "./Item";
import ReactSlider from "@/components/ReactSlider/ReactSlider";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from 'react-icons/lia'
import s from './style.module.css';

type ItemListProps = {items : (Movie[]|Serie[]), ctgName:string};

function ItemList({items, ctgName}: ItemListProps) {

  return (
    <div className={`${s.categories}`}>
      <div className={`${s.category}`}>
        <h3>{ctgName?.toUpperCase()}</h3>
        <ReactSlider 
          left={<LiaAngleLeftSolid size={50}/>}
          right={<LiaAngleRightSolid size={50}/>}
          id="movies"
        >
        {items?.map((it:Serie|Movie,i:number) => <Item
              key={i + 741236987}
              item={it}
            />
          )}
        </ReactSlider>
      </div>
    </div>
  )
}

export default ItemList