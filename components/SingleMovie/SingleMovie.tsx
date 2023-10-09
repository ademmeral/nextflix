import { notFound } from 'next/navigation';
import { getMany } from '@/utils/utils';
import FeaturedMovie from '../ShowCase/FeaturedMovie/FeaturedMovie';
import {FaInfo} from 'react-icons/fa';
import s from './style.module.css';

type Props = {
  singleMovie: Record<string, any>
}
async function SingleMovie({singleMovie} : Props) {

  return (
    <div className={`fluid`}>
      <FeaturedMovie movie={singleMovie}/>
    </div>
  )
}

export default SingleMovie