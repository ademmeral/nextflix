import SingleItem from "@/components/SingleItem/SingleItem";
import { notFound } from "next/navigation";
import { delay, getOne } from "@/utils/utils";

type SingleMovieProps = {
    searchParams : {id: string} 
} 
async function SingleMoviePage({searchParams: {id}} : SingleMovieProps) {
    // await delay(100000)
    const getMovie = await getOne(`movie/${id}`) as Awaited<SingleItemType>
    if (!getMovie) return notFound();
    return <SingleItem singleItem={getMovie}/>
}

export default SingleMoviePage