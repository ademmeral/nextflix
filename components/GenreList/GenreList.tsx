import Genre from "./Genre";
import XRSlider from "@/XReact/XRSlider/XRSlider";
// import { usePathname } from "next/navigation";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from 'react-icons/lia'

async function GenreList({genres} : {genres?:Category[]}) {

  return (
    <XRSlider 
      left={<LiaAngleLeftSolid size={30}/>} 
      right = {<LiaAngleRightSolid size={30}/>}
      id="genre_slide"
    >
      {genres?.map((gen,i) => (
        <Genre key={i + 8978} gen={gen} />
      ))}
    </XRSlider>
  )
}

export default GenreList