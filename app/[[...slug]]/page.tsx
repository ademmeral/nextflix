import { notFound } from "next/navigation"
import InitialPage from "../../components/InitialPage"

type HomePagePropsType = {
    params: {
        slug: string[]
    }
}
function HomePage({ params: { slug } }: HomePagePropsType) {
    // if (slug && slug[0] === 'error') throw new Error();
    // if (slug && slug[0] === '404') notFound();
    return !slug || slug[0] === 'home'
        ? <InitialPage slug={'movie'} />
        : notFound();
}

export default HomePage