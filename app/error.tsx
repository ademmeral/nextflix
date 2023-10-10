'use client';


import Link from "next/link"

function ErrorPage() {
  return (
    <div className="fluid not-found">
      <article className="">
        <h3>{'An error has occured. We are sorry!'}</h3>
        <Link 
          href={`/home`} 
          className="text-center underline underline-offset-8 text-gray-400 mt-4"
          >Go home
        </Link>
      </article>
    </div>
  )
}

export default ErrorPage