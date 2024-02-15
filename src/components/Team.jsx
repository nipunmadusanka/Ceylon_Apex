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
  <div class="p-6">
    <h3 class="mb-4 text-xl font-medium text-slate-700">Something to remember</h3>
    <p>
      All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.
    </p>
  </div>
</div>
      <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row content-center items-center mx-auto gap-[15px] text-white">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px] mb-12 lg:mb-0">
          <h4 className="leading-none font-medium">
            Our Team <span className="inline-block w-16 h-[1px] bg-black ml-4 align-middle"></span>
          </h4>
          <h2 className="text-5xl lg:text-7xl leading-none font-medium">Meet our creative team members.</h2>
          <h4 className="leading-none font-medium flex gap-[15px] items-center">
            <a href="" className="text-white hover:text-[#212529] flex gap-[15px] items-center">
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