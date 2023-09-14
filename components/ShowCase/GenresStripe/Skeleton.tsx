import './style.css';


function GenresStripeSkeleton() {

  return (
    <div className={"genres-stripe-wrapper skeleton"}>
      <div className="shadow left"></div>
      <div className="shadow right"></div>
      <ul className="genres hide-scroll">
        {[...Array(6).keys()]
          .map((k) => <button key={k} type='button' disabled></button>)}
      </ul>
    </div>
  )
}

export default GenresStripeSkeleton