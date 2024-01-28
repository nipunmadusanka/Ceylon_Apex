import { useContext } from "react"
import { Link } from "react-scroll"
import { Context } from "../App"

export default function Menu() {
  const {sidebar, setSidebar} = useContext(Context)
  const handleMenuSidebar = () => {
    if (sidebar) {
      setSidebar(false)
      document.body.style.overflowY = 'scroll'
    }
  }
  return(
    <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
      <li className="uppercase cursor-pointer">
        <Link
          className="text-white lg:text-base text-[42px] leading-[1.25em] font-medium lg:text-[#6f6f6f] lg:hover:text-[#212529]"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={()=>{
            handleMenuSidebar()
          }}
        >
          About
        </Link>
      </li>
      <li className="uppercase cursor-pointer">
        <Link
          className="text-white lg:text-base text-[42px] leading-[1.25em] font-medium lg:text-[#6f6f6f] lg:hover:text-[#212529]"
          to="services"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={()=>{
            handleMenuSidebar()
          }}
        >
          Services
        </Link>
      </li>
      <li className="uppercase cursor-pointer">
        <Link
          className="text-white lg:text-base text-[42px] leading-[1.25em] font-medium lg:text-[#6f6f6f] lg:hover:text-[#212529]"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={()=>{
            handleMenuSidebar()
          }}
        >
          Works
        </Link>
      </li>
      <li className="uppercase cursor-pointer">
        <Link
          className="text-white lg:text-base text-[42px] leading-[1.25em] font-medium lg:text-[#6f6f6f] lg:hover:text-[#212529]"
          to="team"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={()=>{
            handleMenuSidebar()
          }}
        >
          Team
        </Link>
      </li>
      {/* <li className="uppercase cursor-pointer">
        <Link
          className="text-white lg:text-base text-[42px] leading-[1.25em] font-medium lg:text-[#6f6f6f] lg:hover:text-[#212529]"
          to="blog"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={()=>{
            handleMenuSidebar()
          }}
        >
          Blog
        </Link>
      </li> */}
    </ul>
    
  )
}