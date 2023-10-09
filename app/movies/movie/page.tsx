import SingleItem from "@/components/SingleItem/SingleItem";
import { delay, getMany } from "@/utils/utils";
import { notFound } from "next/navigation";

async function MoviePage({searchParams: {id}} : Record<string, any>) {
    // await delay(10000)
    const getMovie = await getMany(`movie/${id}?language=en-US`) as Awaited<Record<string, any>>
    if (!getMovie) return notFound();
    return <SingleItem singleItem={getMovie}/>
}

export default MoviePage