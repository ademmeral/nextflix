import { compact } from '@/utils/utils';
import s from './style.module.css';

type FeaturedItemPropsType = {
  item : Movie|Serie|SingleItemType,
  children? : React.ReactNode,
  press? : boolean,
}

// Image component is unuseful (doing some interesting things ),I therefore used normal img tag <3
function FeaturedItem({item, press, children}:FeaturedItemPropsType) {
  const bgImg = `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.backdrop_path})`;

  return (
    <div className={s.wrapper}>
      <figure
        key={item.id}
        style={{'backgroundImage' : bgImg}}
        className={s.figure}
        >
        <img src='' alt={(item as Movie).original_title || (item as Serie).name} />
      </figure>
      <article className={s.article}>
        <h2>{(item as Movie).original_title || (item as Serie).name}</h2>
        <p>{press ? compact(item.overview, 200) : item.overview}</p>
      </article>
      <div className={s.buttons}>
        <button type="button" className='btn'>Play</button>
        {children}
      </div>
    </div>
  )
}

export default FeaturedItem