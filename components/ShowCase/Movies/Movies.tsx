import Movie from "./Movie";
import ReactSlider from "@/components/ReactSlider/ReactSlider";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import './style.css';

type MoviesType = {
  movies : Record<string, any>[],
  title: string,
  type: string
}

function Movies({movies, title, type}: MoviesType) {

  return (
    <div className="categories">
      <div className="category">
        <h3>{title}</h3>
        <ReactSlider 
          left={<FaAngleLeft size={30}/>}
          right={<FaAngleRight size={30}/>}
          id="movies"
        >
          {movies.map((movie,i) => <Movie
              key={i + 741236987}
              movie={movie}
              type={type} 
            />
          )}
        </ReactSlider>
      </div>
    </div>
  )
}

export default Movies