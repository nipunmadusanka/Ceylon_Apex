import { useContext } from "react"
import { Context } from "../App"

export default function Slide({ title, subtitle, image, active }) {
  const { isMobile } = useContext(Context)
  const handleContactClick = () => {
    // Specify the email address
    const emailAddress = 'ceylonapex@gmail.com';

    // Create a mailto link
    const mailtoLink = `mailto:${emailAddress}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  };
  return (
    <div className="bg-[length:90%] sm:bg-[length:80%] bg-no-repeat lg:bg-cover lg:bg-[position:left_125px_center] h-screen overflow-hidden relative" {...(!isMobile && { style: { backgroundImage: `url(${image})` } })}>
      {isMobile && <img src={image} alt={title} className="w-10/12 h-[calc(100%-100px)] object-cover object-center absolute right-0 top-0" />}
      <div className="flex flex-col items-start justify-center h-full gap-[30px] lg:w-min">
        <h1 className="text-8xl lg:text-9xl leading-none font-semibold -ml-1 -mt-16 lg:m-0 z-20" style={{color: active ? "white" : "black",}}>{title}</h1>
        <p className="text-[#404040] z-20">{subtitle}</p>
        <button
          className="bg-[#343434] text-white px-6 py-2 lg:px-12 lg:py-4 hover:shadow-[200px_0_0_0_#212529_inset] transition-shadow duration-300 ease-in text-xs font-semibold lg:text-sm z-30"
          onClick={handleContactClick}
        >
          Contact us
        </button>
      </div>
    </div>
  )
}