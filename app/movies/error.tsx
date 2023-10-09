'use client';

import NotFound from "@/components/NotFound/NotFound";

function ErrorPage() {
  return <NotFound 
    title="An error has occured. We are sorry for that!" 
    link="Go home" 
  />
}

export default ErrorPage