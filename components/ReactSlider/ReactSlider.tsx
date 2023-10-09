'use client';

import { useSlider } from "./useSlider"
import { useRef } from "react";
import './rsl.css';

type ReactSliderPropsType = {
  children : React.ReactNode,
  left? : React.ReactNode,
  right? : React.ReactNode,
  _class? : string,
  id? : string,
}

function ReactSlider({children, left,right, _class, id}: ReactSliderPropsType) {
  const ref = useRef(null)
  useSlider({
    parent : '.rsl__container__list',
    arrows : '.rsl__container__shadow__arrow'
  }, ref)

  return (
    <div className={`rsl__container ${_class}`} id={id} ref={ref} key={crypto.randomUUID()}>
      <div className="rsl__container__shadow rsl__hide">
        <button type="button" className="rsl__container__shadow__arrow">
          {left}
        </button>
      </div>
      <div className="rsl__container__shadow">
        <button type="button" className="rsl__container__shadow__arrow">
        {right}
        </button>
      </div>
      <ul className="rsl__container__list">
        {children}
      </ul>
    </div>
  )
}

export default ReactSlider