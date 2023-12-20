import { useContext, useEffect, useRef } from "react"
import { Context } from "../App"
import videosrc from '../assets/video.mp4'

export default function VideoPopup() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const {video, setVideo} = useContext(Context)
  
  useEffect(()=>{
    let listener = containerRef.current.addEventListener('click',()=>{
      setVideo(false)
    })

    if(video == true) {
      document.body.style.overflowY = 'hidden'
      videoRef.current.play()
    } else {
      document.body.style.overflowY = 'scroll'
      videoRef.current.pause()
    }

    return () => {
      if (containerRef.current !== null) {
        containerRef.current.removeEventListener('click', listener)
      }
    }

  },[video])
  return(
    <section className={`bg-[rgba(0,0,0,0.8)] inset-0 fixed flex items-center justify-center w-full duration-300 ${video ? "opacity-100 z-30": "opacity-0 -z-10"}`} ref={containerRef}>
      <video loop muted className={`duration-500 aspect-video w-full px-2 lg:w-8/12 shadow-md ${!video && "translate-y-full"}`} ref={videoRef}>
        <source src={videosrc} type="video/mp4"/>
      </video>
    </section>
  )
}