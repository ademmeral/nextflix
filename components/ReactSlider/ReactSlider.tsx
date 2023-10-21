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

function ReactSlider({children, left, right, _class, id}: ReactSliderPropsType) {
  const ref = useRef(null);
  const listRef = useRef(null);
  useSlider({
    parent : '.rsl__container__list',
    arrows : '.rsl__container__shadow__arrow'
  }, [ref, listRef])

  return (
    <div className={`rsl__container ${_class ? _class : ''}`.trim()} id={id ? id : ''} ref={ref}>
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
      <ul className="rsl__container__list" ref={listRef}>
        {children}
      </ul>
    </div>
  )
}

export default ReactSlider