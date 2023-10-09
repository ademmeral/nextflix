'use client';

import s from './style.module.css';

type PropsType = {
  h: number,
  w:number,
  amount : Required<number>,
  rounded : number|string,
  _class : string,
  id: string
}

function ReactSkeleton({h, w, amount, rounded, _class, id} : Partial<PropsType>) {

  const styleWrapper = {
    height: h ? `${h}px` : 'auto',
    width : w ? `${w}px` : 'auto',
  }
  const styleLi = {
    borderRadius : !rounded ? 0 : typeof rounded === 'string' ? rounded : `${rounded}px`,
  }

  return (
    <div className={``} style={styleWrapper}>
      <ul className="h-full flex gap-4">
        {[...Array(amount).keys()]
          .map((k) => (
          <li 
            key={k} 
            className={`${s.skeleton} ${_class}`}
            style={styleLi}
            id={id}
          ></li>
        ))}
      </ul>
    </div>
  )
}

export default ReactSkeleton