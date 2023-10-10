import { getOne } from "@/api/items";
import SingleItem from "@/components/SingleItem/SingleItem";
import { notFound } from "next/navigation";

type SingleSerieProps = {
    searchParams : {id: string} 
} 
async function SingleSeriePage({searchParams: {id}} : SingleSerieProps) {
    // await delay(10000)
    const getMovie = await getOne(`tv/${id}`) as Awaited<SingleItemType>
    if (!getMovie) return notFound();
    return <SingleItem singleItem={getMovie}/>
}

export default SingleSeriePage