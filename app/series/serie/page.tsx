import SingleMovie from "@/components/SingleMovie/SingleMovie";
import { getMany } from "@/utils/utils";
import { notFound } from "next/navigation";

async function SeriePage({searchParams: {id}} : Record<string, any>) {
    const getMovie = await getMany(`movie/${id}?language=en-US`) as Awaited<Record<string, any>>
    if (!getMovie) return notFound();
    return <SingleMovie singleMovie={getMovie}/>
}

export default SeriePage