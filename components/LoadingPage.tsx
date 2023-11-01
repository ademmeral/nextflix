import XRSkeleton from '@/XReact/components/XRSkeleton/XRSkeleton'
import XRSpinner from '@/XReact/components/XRSpinner/XRSpinner'

function LoadingPage() {
  return (
    <div className="fluid showcase">
      <div className="w-full h-full absolute inset-0 bg-slate-900 -z-10"></div>
      <div className="min-h-[300px] md:min-h-[400px] grid place-items-center">
        <XRSpinner  
          size={100} 
          color="white" 
          thickness={5} 
          className="initial_page_spinner" 
          id='initial_page_spinner'
        />
      </div>
      <XRSkeleton w={250} h={60} amount={8} />
      <XRSkeleton w={250} h={60} amount={1} />
      <XRSkeleton w={200} h={250} amount={6} />
      <XRSkeleton w={250} h={60} amount={1} />
      <XRSkeleton w={200} h={250} amount={6} />
    </div>
  )
}

export default LoadingPage