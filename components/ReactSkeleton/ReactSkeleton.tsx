'use client';

import s from './style.module.css';

type PropsType = {
  h?: number,
  w?:number,
  amount : Required<number>,
  rounded ?: number|string,
  _class ?: string,
  id?: string,
}

function ReactSkeleton({h, w, amount, rounded, _class, id} : PropsType) {

  const styleLi = {
    borderRadius : !rounded ? 0 : typeof rounded === 'string' ? rounded : `${rounded}px`,
    height: h ? `${h}px` : '100%',
    width : w ? `${w}px` : 'auto',
    flex: !w ? `1` : '',
  }

  const cls = _class ? ' ' + _class : '';
  return (
    <div className={`${s.skeletonContainer}`}>
      <ul className={s.skeletonList} >
        {[...Array(amount).keys()]
          .map((k) => (
          <li 
            key={k} 
            className={`${s.skeleton}${cls}`}
            style={styleLi}
            id={id ? id : ''}
          ></li>
        ))}
      </ul>
    </div>
  )
}

export default ReactSkeleton