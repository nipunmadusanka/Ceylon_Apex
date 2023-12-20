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
          <h4 className="leading-none font-medium">
            Testimonials <span className="inline-block w-16 h-[1px] bg-black ml-4 align-middle"></span>
          </h4>
          <h2 className="text-5xl lg:text-7xl leading-none font-medium">What our client’s says about our work.</h2>
        </div>
        <div className="lg:w-1/2">
          <div className="w-96 lg:w-[800px]">
            <Slider {...sliderSettings}>
              <TestimCard
                author={{name: "Deon Norjan", position: "Project manager"}}
                quote="Magazine and housed in a nice, gilded frame. It showed a lady fitted out with  organization boa who sat upright, raising towards heltorganic associat minor issue help woke from troubled dreams, he found himself transformed"
                key="01"
              />
              <TestimCard
                author={{name: "Kevin Powell", position: "Social media expert"}}
                quote="Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame. It showed a lady fitted out   organization boa who sat upright"
                key="02"
              />
              <TestimCard
                author={{name: "Jhon Doe", position: "Developer team leader"}}
                quote="Magazine and housed in a nice, gilded frame. It showed a lady fitted out with  organization boa who sat upright, raising towards heltorganic associat minor issue help woke from troubled dreams, he found himself transformed"
                key="03"
              />
              <TestimCard
                author={{name: "Susan Smith", position: "Art director"}}
                quote="Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame. It showed a lady fitted out   organization boa who sat upright"
                key="04"
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}