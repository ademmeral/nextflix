'use client';

import Genre from "./Genre";
import ReactSlider from "@/components/ReactSlider/ReactSlider";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

import './style.css';

type Props = {
  genres :   {id: number, name: string}[],
  type: string
}
function GenresStripe({genres, type}: Props) {

  return (
    <ReactSlider 
      left={<FaAngleLeft size={30}/>} 
      right = {<FaAngleRight size={30}/>}
      id="genre_slide"
    >
      {genres.map((gen,i) => <Genre key={i + 8978} gen={gen} type={type} />)}
    </ReactSlider>
  )
}

export default GenresStripe