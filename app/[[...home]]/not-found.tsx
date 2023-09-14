import Link from "next/link"

function NotFound() {
  return (
    <div className="fluid not-found">
      <article>
        <h3>404, Not Found</h3>
        <Link href={'/'} className="go-home">
          <small>Go home</small>
        </Link>
      </article>
    </div>
  )
}

export default NotFound