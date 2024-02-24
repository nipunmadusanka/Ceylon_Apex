export default function About() {
  return(
    <section className="lg:min-h-[60vh] pt-24 text-white" id="about">
      <div className="flex flex-col lg:flex-row lg:w-10/12 lg:gap-[15px] gap-[30px] w-11/12 content-center items-center h-full  mx-auto">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px]">
          <h4 className="leading-none font-medium">About us <span className="inline-block w-16 h-[1px] bg-black ml-4 align-middle"></span></h4>
          <h2 className="text-5xl lg:text-7xl leading-none font-medium">Best creative and modern agency.</h2>
          <h4 className="leading-none font-medium flex gap-[15px] items-center">
            {/* <a href="" className="text-[#404040] hover:text-[#212529] flex gap-[15px] items-center">
              Our services 
              <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3">
                <path d="M8.57107 0.928932C8.57107 0.65279 8.34721 0.428932 8.07107 0.428932L3.57107 0.428932C3.29493 0.428932 3.07107 0.65279 3.07107 0.928932C3.07107 1.20507 3.29493 1.42893 3.57107 1.42893L7.57107 1.42893L7.57107 5.42893C7.57107 5.70507 7.79493 5.92893 8.07107 5.92893C8.34721 5.92893 8.57107 5.70507 8.57107 5.42893L8.57107 0.928932ZM1.35355 8.35355L8.42462 1.28249L7.71751 0.575379L0.646447 7.64645L1.35355 8.35355Z" fill="black"/>
              </svg>
            </a> */}
          </h4>
        </div>
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px] text-white">
          {/* <h3 className="text-4xl">I'm baby meditation slow-carb tumeric actually poutine ascot vaporware food truck</h3> */}
          <p className="text-white">Transforming imagination into captivating realities, Ceylon Apex aspires to be a global leader in animation, delivering awe-inspiring storytelling and cutting-edge visuals that enchant audiences and redefine the boundaries of creative expression.</p>
          <div className="flex justify-between w-full">
            <div className="flex">
              <div className="lg:text-5xl text-4xl font-semibold">6</div>
              <div className="text-xs capitalize self-end w-min mb-1 ml-1 text-white">Years of experience</div>
            </div>
            <div className="flex">
              <div className="lg:text-5xl text-4xl font-semibold">5</div>
              <div className="text-xs capitalize self-end w-min mb-1 ml-1 text-white">Awards won</div>
            </div>
            <div className="flex">
              <div className="lg:text-5xl text-4xl font-semibold">181</div>
              <div className="text-xs capitalize self-end w-min mb-1 ml-1 text-white">Successfull projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}