'use client';

import s from './style.module.css';

function ReactLoader() {
  return (
    <div className={s.loader}>
      <p className={s.spinner}></p>
    </div>
  )
}

export default ReactLoader