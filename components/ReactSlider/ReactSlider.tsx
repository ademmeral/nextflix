'use client';

import { useSlider } from "@/components/ReactSlider/useSlider"
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
  useSlider(ref)
  const cls = _class ? ` ${_class}` : ''
  return (
    <div className={`rsl_container${cls}`} id={id ? id : ''} ref={ref}>
      <div className="rsl_shadow rsl_hide">
        <button type="button" className="rsl_arrow">
          {left}
        </button>
      </div>
      <div className="rsl_shadow">
        <button type="button" className="rsl_arrow">
        {right}
        </button>
      </div>
      <ul className="rsl_list">
        {children}
      </ul>
    </div>
  )
}

export default ReactSlider