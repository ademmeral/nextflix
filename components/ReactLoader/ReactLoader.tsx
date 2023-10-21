'use client';

import s from './style.module.css';

type PropsType = {
  size?:number,
  color?:string,
  thickness?:number,
}
function ReactLoader({size, color, thickness}: PropsType) {
  const parentStyle = {
    width : size ? `${size}px` : '100px',
    height : size ? `${size}px` : '100px',
  }
  const commonStyle = {
    borderWidth : thickness ? `${thickness}px` : '3px',
    borderStyle : 'solid',
  }
  const spinnerStyle = {
    ...commonStyle,
    borderTopColor: color ? color : '#ffffff',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  }
  const layerStyle = {
    ...commonStyle,
    opacity : '.3',
    borderColor: color ? color : '#ffffff',
  }
  return (
    <div className={s.container}>
      <div className={s.wrapper} style={parentStyle}>
        <div className={s.spinners} style={spinnerStyle}></div>
        <div className={s.spinners} style={layerStyle}></div>
      </div>
    </div>
  )
}

export default ReactLoader