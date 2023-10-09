import Link from "next/link"

function NotFound({title, link} : Record<string, any>) {
  return (
    <div className="fluid not-found">
      <article>
        <h3>{title}</h3>
        <Link href={`/${link.split(' ')[1]}`} className="go-home">
          <small>{link}</small>
        </Link>
      </article>
    </div>
  )
}

export default NotFound