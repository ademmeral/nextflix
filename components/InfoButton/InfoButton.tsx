import Link from "next/link"
import { FaInfo } from "react-icons/fa"

type InfoButtonPropstype = {
  item : Movie|Serie,
  type: string
}
function InfoButton({type, item}: InfoButtonPropstype) {
    
  const href = {
    pathname : `${type}/${type.slice(0, -1)}`,
    query : {
      id : item.id
    }
  }

  return (
      <button type='button'>
          <Link href={href} className={`info`}>
              <FaInfo size={25} color={'#fff'} />
          </Link>
      </button>
  )
}

export default InfoButton