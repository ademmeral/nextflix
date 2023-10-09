import NotFound from "@/components/NotFound/NotFound"

function NotFoundPage({title, link} : Record<string, any>) {
  return <NotFound title="404, Page not found!" link="Go home"/>
}

export default NotFoundPage