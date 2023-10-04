import Link from 'next/link';
import {AiFillPlayCircle} from 'react-icons/ai';
import './style.css';

function Header() {
  return (
    <header className='header'>
      <nav className={'nav fluid'}>
        <figure className={'logo-wrapper'}>
          <AiFillPlayCircle  size={35}/>
          <h3>
            <Link href={'/'}>NEXTFLIX</Link>
          </h3>
        </figure>
        <ul className={'links'}>
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