import FeaturedMovieLoader from "@/components/ShowCase/FeaturedMovie/Loader"
import GenresStripeSkeleton from "@/components/ShowCase/GenresStripe/Skeleton"
import MoviesSkeleton from "@/components/ShowCase/Movies/Skeleton"

function Loading() {
  return (
    <div className="fluid showcase">
      <FeaturedMovieLoader />
      <GenresStripeSkeleton/>
      <MoviesSkeleton />
    </div>
  )
}

export default Loading