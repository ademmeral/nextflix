import Item from "./Item";
import XRSlider from "@/XReact/XRSlider/XRSlider";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from 'react-icons/lia'
import s from './style.module.css';

type ItemListProps = {items : (Movie[]|Serie[]), ctgName:string};

export default function ItemList({items, ctgName}: ItemListProps) {

  return (
    <div className={`${s.categories}`}>
      <div className={`${s.category}`}>
        <h3>{ctgName?.toUpperCase()}</h3>
        <XRSlider 
          left={<LiaAngleLeftSolid size={50}/>}
          right={<LiaAngleRightSolid size={50}/>}
          id="movies"
        >
        {items?.map((it:Serie|Movie,i:number) => <Item
              key={i + 741236987}
              item={it}
            />
          )}
        </XRSlider>
      </div>
    </div>
  )
}