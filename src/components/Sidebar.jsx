import { useContext } from "react"
import { Context } from "../App"

import icon1 from "../assets/w-social-1.svg"
import icon2 from "../assets/w-social-2.svg"
import icon3 from "../assets/w-social-3.svg"
import Menu from "./Menu"

export default function Sidebar() {
  const {isMobile, sidebar, setSidebar} = useContext(Context)
  return(
    <div className={`w-screen h-screen bg-[rgba(0,0,0,0.8)] fixed inset-0 z-30 duration-300 ${!sidebar && "translate-x-full"}`}>
      <aside className="bg-zinc-800 fixed top-0 right-0 h-screen w-full lg:max-w-[30%] pt-6 pb-20 px-8 lg:py-12 lg:px-14 text-white flex flex-col justify-start gap-[15px] lg:gap-[30px]">
        <div className="text-xl text-white text-right origin-center hover:rotate-[360deg] duration-300 cursor-pointer hover:scale-125 self-end" onClick={()=>{
          setSidebar(false)
          document.body.style.overflowY = 'scroll'
          }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2.22566 0.810956C1.83514 0.420436 1.20197 0.420436 0.811452 0.810956C0.420922 1.20148 0.420922 1.83465 0.811452 2.22517L6.5862 7.9999L0.811512 13.7746C0.420982 14.1651 0.420982 14.7983 0.811512 15.1888C1.20203 15.5793 1.8352 15.5793 2.22572 15.1888L8.0004 9.4141L13.7751 15.1888C14.1656 15.5793 14.7988 15.5793 15.1893 15.1888C15.5798 14.7983 15.5798 14.1651 15.1893 13.7746L9.4146 7.9999L15.1893 2.22517C15.5799 1.83465 15.5799 1.20148 15.1893 0.810956C14.7988 0.420436 14.1657 0.420436 13.7751 0.810956L8.0004 6.5857L2.22566 0.810956Z" fill="white"/>
          </svg>
        </div>
        { isMobile && 
          <div className="lg:hidden">
            <h1 className="text-4xl mb-10 font-bold">Ceylon Apex.</h1>
            <Menu />
          </div>
        }
        <div className="flex flex-col justify-between gap-[15px] lg:gap-[30px] group mt-auto lg:mt-0 cursor-pointer">
          <h2 className="text-lg lg:text-4xl">Ceylon Apex. Best Creative Agency</h2>
          <p className="text-[#808080] text-sm lg:text-base">Welcome to Ceylon Apex – your gateway to captivating animation! We blend cutting-edge visuals with imaginative storytelling to redefine creative boundaries. Join us on a global journey of awe-inspiring experiences!</p>
          <h4 className="leading-none font-medium text-sm lg:text-base">
            {/* <a href="" className="opacity-30 group-hover:opacity-100 duration-300 relative flex gap-[30px] items-center">
              <div><span>Read more</span><div className="w-0 group-hover:w-full duration-300 h-[1px] bg-white mt-1"></div></div>
              <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3 group-hover:rotate-45 duration-300">
                <path d="M8.57107 0.928932C8.57107 0.65279 8.34721 0.428932 8.07107 0.428932L3.57107 0.428932C3.29493 0.428932 3.07107 0.65279 3.07107 0.928932C3.07107 1.20507 3.29493 1.42893 3.57107 1.42893L7.57107 1.42893L7.57107 5.42893C7.57107 5.70507 7.79493 5.92893 8.07107 5.92893C8.34721 5.92893 8.57107 5.70507 8.57107 5.42893L8.57107 0.928932ZM1.35355 8.35355L8.42462 1.28249L7.71751 0.575379L0.646447 7.64645L1.35355 8.35355Z" fill="white"/>
              </svg>
            </a> */}
          </h4>
        </div>
        <div className="flex flex-col gap-[15px] lg:mt-auto">
          <h5 className="uppercase tracking-[4px] font-light text-[10px]">Follow us</h5>
          <ul className="flex gap-[15px] items-center">
            <li>
              <button>
              < img className="w-4 h-4 opacity-60 hover:opacity-90 duration-300 rounded-sm" src={icon1} alt="social" />
              </button>
              </li>
            <li>
              <button>
                <img className="w-4 h-4 opacity-60 hover:opacity-90 duration-300 rounded-sm" src={icon2} alt="social" />
              </button>
              </li>
            <li>
              <button>
                <img className="w-4 h-4 opacity-60 hover:opacity-90 duration-300 rounded-sm" src={icon3} alt="social" />
              </button>
              </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}