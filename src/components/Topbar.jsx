import { useRef, useEffect, useContext } from "react"
import { Context } from "../App"
import Menu from "./Menu"
import { animateScroll as scroll } from "react-scroll"

export default function Topbar() {
  const { sidebar, setSidebar } = useContext(Context)
  const containerRef = useRef(null)
  useEffect(() => {
    let listener
    if (containerRef.current !== null) {
      listener = window.addEventListener('scroll', () => {
        if (containerRef.current !== null) containerRef.current.classList.toggle('shadow-sm', window.scrollY >= 100)
      })
    }
    return () => {
      if (listener !== undefined) {
        window.removeEventListener('scroll', listener)
      }
    }
  }, [])
  return (
    <div className="fixed inset-x-0 bg-black w-full z-20" ref={containerRef} id="top">
      <div className="flex justify-between items-center mx-auto py-5 w-11/12 lg:w-10/12 lg:py-0 lg:h-[100px]">
        <img
          src="../img/logo1.png"
          alt="Company Logo"
          className="cursor-pointer w-24 h-auto"
          onClick={() => { scroll.scrollToTop() }}
        />
        <nav className="hidden lg:block lg:w-6/12">
          <Menu />
        </nav>
        <div className="lg:w-3/12">
          <div className="flex justify-end items-center">
            <button className={`${sidebar && "rotate-90"} hover:rotate-90 duration-150`} onClick={() => {
              setSidebar(true)
              document.body.style.overflowY = 'hidden'
            }}>
              <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                <circle cx="14" cy="24" r="3" fill="black" />
                <circle cx="24" cy="24" r="3" fill="black" />
                <circle cx="34" cy="24" r="3" fill="black" />
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}