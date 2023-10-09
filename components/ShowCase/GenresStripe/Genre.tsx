'use client';

import Link from "next/link"
import s from './style.module.css';

type Props = {
  gen : {id:number, name: string},
  type:string
}
function Genre({gen, type}:Props){

  const href = {
    pathname : `/${type}`,
    query : {
      category : `${gen.name.toLowerCase()}`
    }
  };
    
  return (
    <li key={gen.id} className={`${s.genre}`}>
      <button type="button">
        <Link href={href}>{gen.name}</Link>
      </button>
    </li>
  )
}

export default Genre