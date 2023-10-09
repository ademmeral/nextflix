import SingleItem from "@/components/SingleItem/SingleItem";
import { getMany } from "@/utils/utils";
import { notFound } from "next/navigation";

async function SeriePage({searchParams: {id}} : Record<string, any>) {
    const getMovie = await getMany(`movie/${id}?language=en-US`) as Awaited<Record<string, any>>
    if (!getMovie) return notFound();
    return <SingleItem singleItem={getMovie}/>
}

export default SeriePage