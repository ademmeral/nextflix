import ReactSpinner from "./ReactSpinner/ReactSpinner"
import ReactSkeleton from "./ReactSkeleton/ReactSkeleton"

function LoadingPage() {
  return (
    <div className="fluid showcase">
      <div className="w-full h-full absolute inset-0 bg-slate-900 -z-10"></div>
      <div className="min-h-[300px] md:min-h-[400px] grid place-items-center">
        <ReactSpinner  size={100} color="white" thickness={5}/>
      </div>
      <ReactSkeleton w={250} h={60} amount={8} />
      <ReactSkeleton w={250} h={60} amount={1} />
      <ReactSkeleton w={200} h={250} amount={6} />
      <ReactSkeleton w={250} h={60} amount={1} />
      <ReactSkeleton w={200} h={250} amount={6} />
    </div>
  )
}

export default LoadingPage