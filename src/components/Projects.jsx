import ProjGallery from "./ProjGallery";

export default function Projects() {
  return (
    <section className=" text-white" id="works">
      <div className="lg:w-10/12 w-11/12 flex flex-col lg:flex-row items-center mx-auto gap-[15px]">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px]">
          <h4 className="leading-none font-medium">
            Showcase <span className="inline-block w-16 h-[1px] bg-black ml-4 align-middle"></span>
          </h4>
          <h2 className="text-5xl lg:text-7xl leading-none font-medium">Check out our creative works.</h2>
        </div>
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px]">
          <p></p>
          <p></p>
          <p className="text-white">Introducing Ceylon Apex, where creativity knows no bounds. As purveyors of innovative and captivating works, Ceylon Apex is a powerhouse of artistic expression, bringing together a fusion of imagination and craftsmanship. From mesmerizing visual art to thought-provoking literature, and cutting-edge design to awe-inspiring performances, our portfolio reflects a commitment to pushing the boundaries of creativity. Join us on a journey where every creation tells a unique story, and where the extraordinary becomes the norm. Ceylon Apex – Unleashing Creativity, Inspiring Innovation.</p>
          <h4 className="leading-none font-medium flex gap-[15px] items-center">
            {/* <a href="" className="text-[#404040] hover:text-[#212529] flex gap-[15px] items-center">
              Explore all projects
              <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3">
                <path d="M8.57107 0.928932C8.57107 0.65279 8.34721 0.428932 8.07107 0.428932L3.57107 0.428932C3.29493 0.428932 3.07107 0.65279 3.07107 0.928932C3.07107 1.20507 3.29493 1.42893 3.57107 1.42893L7.57107 1.42893L7.57107 5.42893C7.57107 5.70507 7.79493 5.92893 8.07107 5.92893C8.34721 5.92893 8.57107 5.70507 8.57107 5.42893L8.57107 0.928932ZM1.35355 8.35355L8.42462 1.28249L7.71751 0.575379L0.646447 7.64645L1.35355 8.35355Z" fill="black" />
              </svg>
            </a> */}
          </h4>
        </div>
      </div>
      <ProjGallery />
    </section>
  )
}