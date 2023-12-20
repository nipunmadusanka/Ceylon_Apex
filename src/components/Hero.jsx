import Slider from "react-slick"
import Slide from "./Slide"

import icon1 from "../assets/b-social-1.svg"
import icon2 from "../assets/b-social-2.svg"
import icon3 from "../assets/b-social-3.svg"

const slides = [
  {
    image: "../img/slider_1.jpeg",
    title: "Design",
    subtitle: "Helplessly as he looked what's happened to me he thought wasn't a dream. His room, a proper human",
    active: false
  },
  {
    image: "../img/slider_2.jpeg",
    title: "Develop",
    subtitle: "Helplessly as he looked what's happened to me he thought wasn't a dream. His room, a proper human",
    active: false
  },
  {
    image: "../img/slider_2.jpeg",
    title: "Enhance",
    subtitle: "Helplessly as he looked what's happened to me he thought wasn't a dream. His room, a proper human",
    active: false
  },
]
export default function Hero() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    speed: 700, 
    easing: "ease-in",
    dotsClass: "slick-slider-dots absolute top-1/2 -left-[5.5%] -translate-y-1/2",
    customPaging: i => (
      <button className="w-4 opacity-20 h-24 text-center">
        <span className="bg-black w-0.5 block h-24"></span>
      </button>
    )
  }
  return(
    <section className="flex h-screen relative pt-24 lg:pt-0">
      <div className="hidden lg:w-1/12 lg:block">
      </div>
      <div className="lg:w-10/12 w-11/12 mx-auto h-full">
        <Slider {...sliderSettings} className="h-full">
          {slides.map((slide, i) => <Slide {...slide} key={i} />)}
        </Slider>
      </div>
      {/* <div className="hidden w-1/12 lg:flex flex-col justify-center items-center gap-[60px] translate-y-[30px]">
        <button className="p-[2px] opacity-50 hover:opacity-90 border border-black rounded-md">
          <img src={icon1} alt="be-hance" className="w-4 h-4" />
        </button>
        <button className="p-[2px] opacity-50 hover:opacity-90 border border-black rounded-md">
          <img src={icon2} alt="facebook" className="w-4 h-4" />
        </button>
        <button className="p-[2px] opacity-50 hover:opacity-90 border border-black rounded-md">
          <img src={icon3} alt="linkedin" className="w-4 h-4" />
        </button>
      </div> */}
    </section>
  )
}