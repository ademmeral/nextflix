import ReactLoader from "./ReactLoader/ReactLoader"
import ReactSkeleton from "./ReactSkeleton/ReactSkeleton"

function Loading() {
  return (
    <div className="fluid showcase">
      <div className="w-full h-full absolute inset-0 bg-slate-900 -z-10"></div>
      <div className="min-h-[300px] md:min-h-[400px] grid place-items-center">
        <ReactLoader />
      </div>
      <ReactSkeleton h={60} amount={8} />
      <ReactSkeleton h={60} w={250} amount={1} />
      <ReactSkeleton h={250} amount={6} />
    </div>
  )
}

export default Loading