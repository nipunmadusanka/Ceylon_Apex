import Slider from "react-slick"
import TestimCard from "./TestimCard"

export default function Testimonials() {
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
    <section className="py-24">
      <div className="lg:w-10/12 w-11/12 flex flex-col lg:flex-row items-center mx-auto gap-[15px]">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px] mb-12 lg:mb-0">
          <h4 className="leading-none font-medium text-white">
            Testimonials <span className="inline-block text-white w-16 h-[1px] bg-black ml-4 align-middle"></span>
          </h4>
          <h2 className="text-5xl lg:text-7xl leading-none text-white font-medium">What our client’s says about our work.</h2>
        </div>
        <div className="lg:w-1/2">
          <div className="w-96 lg:w-[800px]">
            <Slider {...sliderSettings}>
              <TestimCard
                author={{name: "Deon Norjan", position: "Project manager"}}
                quote="Working with Ceylon-Apex has been an incredible journey. Their commitment to innovative solutions and strategic marketing has elevated our project to new heights. Their clear communication and timely feedback made the development process smooth and efficient. Were proud of the result and look forward to more collaborations."
                key="01"
              />
              <TestimCard
                author={{name: "Kevin Powell", position: "Social media expert"}}
                quote="Ceylon-Apex's expertise in the marketing field is truly exceptional. Their insights and strategic direction helped us craft a social media presence that not only engages but also converts. Their attention to detail and understanding of the digital landscape made all the difference. We could not have asked for a better partner in this endeavor."
                key="02"
              />
              <TestimCard
                author={{name: "Jhon Doe", position: "Developer team leader"}}
                quote="Developing the web application for Ceylon-Apex was a remarkable experience. Their vision and clear requirements enabled our team to build a robust and user-friendly platform. Their feedback was invaluable in refining the project to meet the highest standards. Its been a pleasure to see their ideas come to life through our code."
                key="03"
              />
              <TestimCard
                author={{name: "Susan Smith", position: "Art director"}}
                quote="Collaborating with Ceylon-Apex has been a rewarding creative experience. Their passion for innovative design and strategic thinking made the creative process both challenging and fulfilling. Their feedback helped us push boundaries and deliver a visually stunning and effective website. Its been an honor to work with such a forward-thinking agency."
                key="04"
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}