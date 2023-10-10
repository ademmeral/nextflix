'use client';
import { usePathname } from "next/navigation";
import Link from "next/link"
import s from './style.module.css';

function Genre({gen}:{gen:Category}){
  const pname = usePathname().includes('series') ? '/series' : '/movies';
  const href = {
    pathname : pname,
    query : {
      category : `${gen.name.toLowerCase()}`,
      id : gen.id
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