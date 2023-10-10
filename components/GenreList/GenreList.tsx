import Genre from "./Genre";
import ReactSlider from "@/components/ReactSlider/ReactSlider";
// import { usePathname } from "next/navigation";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from 'react-icons/lia'

async function GenreList({genres} : {genres?:Category[]}) {

  return (
    <ReactSlider 
      left={<LiaAngleLeftSolid size={30}/>} 
      right = {<LiaAngleRightSolid size={30}/>}
      id="genre_slide"
    >
      {genres?.map((gen,i) => (
        <Genre key={i + 8978} gen={gen} />
      ))}
    </ReactSlider>
  )
}

export default GenreList