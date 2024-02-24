import { useContext } from "react"
import { Context } from "../App"
import VideoPopup from "./VideoPopup"

export default function References() {
  const {setVideo} = useContext(Context)
  return(
    <>
      <section className="w-full bg-[url(../img/bg_2.jpg)] bg-cover lg:h-[calc(100vh-100px)]">
        <div className="w-11/12 lg:w-10/12 mx-auto flex justify-start items-end h-full">
          <ul className="flex flex-wrap gap-[15px]">
            <li className="w-56 h-52 bg-white flex justify-center items-end p-8">
              <div className="flex">
                <div className="text-5xl font-semibold">6</div>
                <div className="text-xs capitalize self-end w-min mb-1 ml-1">Years of experience</div>
              </div>
            </li>
            {/* <li className="w-56 h-52 bg-white flex justify-center items-center p-8">
            <span className="flex h-20 w-20 relative cursor-pointer" onClick={()=>{
              setVideo(true)
            }}>
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" className="z-10 absolute -translate-x-1/3 -translate-y-1/2 top-1/2 left-1/2">
                <path d="M0.203918 0.650879V29.3541L27.9504 14.9334L0.203918 0.650879ZM2.59215 4.64336L22.6104 14.9457L2.59215 25.3494V4.64336Z" fill="white"/>
              </svg>
              <span className="animate-ping inline-flex h-full w-full rounded-full bg-yellow-500 opacity-50"></span>
              <span className="absolute inset-0 inline-flex rounded-full h-20 w-20 bg-[#A67C00]"></span>
            </span>
            </li> */}
            {/* <li className="w-56 h-52 bg-transparent flex justify-center items-end p-8 cursor-pointer">
            <h4 className="underline underline-offset-4 flex gap-[15px] items-center text-white -mt-1">
              Contact Us 
              <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3">
                <path d="M8.57107 0.928932C8.57107 0.65279 8.34721 0.428932 8.07107 0.428932L3.57107 0.428932C3.29493 0.428932 3.07107 0.65279 3.07107 0.928932C3.07107 1.20507 3.29493 1.42893 3.57107 1.42893L7.57107 1.42893L7.57107 5.42893C7.57107 5.70507 7.79493 5.92893 8.07107 5.92893C8.34721 5.92893 8.57107 5.70507 8.57107 5.42893L8.57107 0.928932ZM1.35355 8.35355L8.42462 1.28249L7.71751 0.575379L0.646447 7.64645L1.35355 8.35355Z" fill="white"/>
              </svg>
            </h4>
            </li> */}
          </ul>
        </div>
      </section>
      <VideoPopup />
    </>
  )
}