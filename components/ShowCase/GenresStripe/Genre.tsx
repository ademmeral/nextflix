'use client';

import Link from "next/link"

type Props = {
  gen : {id:number, name: string},
  type:string
}
function Genre({gen, type}:Props){

  const path = type === 'movies'
    ? `/movies/category/${gen.name.toLowerCase()}/${gen.id}`
    : `/series/category/${gen.name.toLowerCase()}/${gen.id}`;
    
  return (
    <li key={gen.id} className="genre">
      <button type="button">
        <Link 
          href={path}
        >{gen.name}
        </Link>
      </button>
    </li>
  )
}

export default Genre