import Link from 'next/link';
import { AiFillPlayCircle } from 'react-icons/ai';
import s from './style.module.css';

function Header() {
  return (
    <header className={s.header}>
      <nav className={`${s.nav} fluid`}>
        <figure className={`${s.logo}`}>
          <AiFillPlayCircle  size={35}/>
          <h3>
            <Link href={'/'}>NEXTFLIX</Link>
          </h3>
        </figure>
        <ul className={`${s.links}`}>
          <li>
            <Link href={'/movies'}>Movies</Link>
          </li>
          <li>
            <Link href={'/series'}>Series</Link>
          </li>
          <li>
            <Link href={'/kids'}>Kids</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header