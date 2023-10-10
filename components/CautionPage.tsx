
import Link from "next/link"

type CautionPagePropsType = {
  title: string,
  link : string
}
function CautionPage({title, link}: CautionPagePropsType, error: string) {
  return (
    <div className="fluid not-found">
      <article>
        <h3>{error || title}</h3>
        <Link 
          href={`/${link.split(' ')[1]}`} 
          className="text-center text-lg underline underline-offset-4">
          <small>{link}</small>
        </Link>
      </article>
    </div>
  )
}

export default CautionPage