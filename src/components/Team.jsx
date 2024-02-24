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
<div class="overflow-hidden bg-black rounded shadow-md text-white shadow-slate-200">
</div>
      <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row content-center items-center mx-auto gap-[15px] text-white">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px] mb-12 lg:mb-0">
          <h4 className="leading-none font-medium">
            Our Team <span className="inline-block w-16 h-[1px] bg-black ml-4 align-middle"></span>
          </h4>
          <h2 className="text-5xl lg:text-7xl leading-none font-medium">Meet our creative team members.</h2>
          <h4 className="leading-none font-medium flex gap-[15px] items-center">
            
          </h4>
        </div>
        <div className="lg:w-1/2">
          <div className="w-80 lg:w-[800px]">
            <Slider {...sliderSettings}>
              <TeamProfile key="01" img="1.Creative Director.png" name="Gihan Weerasekara" position="Creative Director" />
              <TeamProfile key="03" img="3.Scriptwriter & Photographer.png" name="Lahiru Waduthanthri" position="Scriptwriter & Photographer" />
              <TeamProfile key="01" img="4.Animator & videographer.png" name="Chathuranga Aberathne" position="Animator & videographer" />
              <TeamProfile key="02" img="5.Storyboard Artists.png" name="Harshi Madhuwanthi" position="Storyboard Artists" />
              <TeamProfile key="03" img="Animator.png" name="Sachin Anupama" position="Animator" />
              <TeamProfile key="03" img="UX Designer_.png" name="Nipun Madusanka" position="UX Designer" />
              <TeamProfile key="03" img="IMG_3243.JPG" name="Harshaka abegunawardane" position="Music director" />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}