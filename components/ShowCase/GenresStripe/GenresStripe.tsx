'use client';

import Genre from "./Genre";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import './style.css';
import { useSlider } from "@/utils/hooks";

type Props = {
  genres :   {id: number, name: string}[],
  type: string
}

function GenresStripe({genres, type}: Props) {
  const slider = useSlider({ parent: '.genres', arrows: '.shadow' });
  return (
    <div className={"genres-stripe-wrapper"}>
      <div className="shadow left">
        <button type="button"><FaAngleLeft size={30} /></button>
      </div>
      <div className="shadow right">
        <button><FaAngleRight size={30} /></button>
      </div>
      <ul
        className="genres hide-scroll" 
      >{genres.map(gen => <Genre key={gen.id} gen={gen} type={type} />)}
      </ul>
    </div>
  )
}

export default GenresStripe