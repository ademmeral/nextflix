'use client';

import Link from "next/link";

function Loading() {
  return (
    <div className="fluid error">
      <article>
        <h3>An error has occured. We are sorry for that!</h3>
        <Link href={'/'} className="go-home">
          <small>Go home</small>
        </Link>
      </article>
    </div>
  )
}

export default Loading