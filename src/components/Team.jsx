import Slider from "react-slick"
import TeamProfile from "./TeamProfile";

export default function Team() {
  const sliderSettings = {
    dots:false,
    arrows: false,
    autoplay: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return(
    <section className="py-24" id="team">
      <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row content-center items-center mx-auto gap-[15px]">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px] mb-12 lg:mb-0">
          <h4 className="leading-none font-medium">
            Our Team <span className="inline-block w-16 h-[1px] bg-black ml-4 align-middle"></span>
          </h4>
          <h2 className="text-5xl lg:text-7xl leading-none font-medium">Meet our creative team members.</h2>
          <h4 className="leading-none font-medium flex gap-[15px] items-center">
            <a href="" className="text-[#404040] hover:text-[#212529] flex gap-[15px] items-center">
              See all members 
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57107 0.928932C8.57107 0.65279 8.34721 0.428932 8.07107 0.428932L3.57107 0.428932C3.29493 0.428932 3.07107 0.65279 3.07107 0.928932C3.07107 1.20507 3.29493 1.42893 3.57107 1.42893L7.57107 1.42893L7.57107 5.42893C7.57107 5.70507 7.79493 5.92893 8.07107 5.92893C8.34721 5.92893 8.57107 5.70507 8.57107 5.42893L8.57107 0.928932ZM1.35355 8.35355L8.42462 1.28249L7.71751 0.575379L0.646447 7.64645L1.35355 8.35355Z" fill="black"/>
              </svg>
            </a>
          </h4>
        </div>
        <div className="lg:w-1/2">
          <div className="w-80 lg:w-[800px]">
            <Slider {...sliderSettings}>
              <TeamProfile key="01" img="team_1.jpeg" name="Jhon Doe" position="Fullstack Developer" />
              <TeamProfile key="02" img="team_2.jpeg" name="Susan Smith" position="UI/UX Designer" />
              <TeamProfile key="03" img="team_3.jpeg" name="Anna Johnson" position="Social media Manager" />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}