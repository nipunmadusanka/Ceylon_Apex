import Post from "./Post"

export default function Blog() {
  return(
    <section className="py-24" id="blog">
      <div className="lg:w-10/12 w-11/12 flex flex-col lg:flex-row text-white content-center items-start h-full mx-auto gap-[15px]">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-[30px]">
          <h4 className="leading-none font-medium">Insights <span className="inline-block w-16 h-[1px] bg-black ml-4 align-middle"></span></h4>
          <div className="lg:max-w-min">
          <h2 className="text-5xl lg:text-7xl leading-none font-medium">Read our recent published news.</h2>
          </div>
          <a href="" className="text-[#404040] hover:text-[#212529] flex gap-[15px] items-center">
              Read all posts
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57107 0.928932C8.57107 0.65279 8.34721 0.428932 8.07107 0.428932L3.57107 0.428932C3.29493 0.428932 3.07107 0.65279 3.07107 0.928932C3.07107 1.20507 3.29493 1.42893 3.57107 1.42893L7.57107 1.42893L7.57107 5.42893C7.57107 5.70507 7.79493 5.92893 8.07107 5.92893C8.34721 5.92893 8.57107 5.70507 8.57107 5.42893L8.57107 0.928932ZM1.35355 8.35355L8.42462 1.28249L7.71751 0.575379L0.646447 7.64645L1.35355 8.35355Z" fill="black"/>
              </svg>
            </a>
        </div>
        <div className="pt-16 lg:pt-0 lg:w-1/2 flex flex-col items-start justify-center gap-[30px]">
          <Post 
            title="Engage your community like never before"
            summary="Fanny pack chambray pinterest adaptogen salvia. Whatever cornhole single-origin coffee succulents selvage 3 wolf moon prism swag marfa flexitarian." 
            date="APR 30, 2022" 
          />
          <Post 
            title="Borne can make your community like never before"
            summary="Fanny pack chambray pinterest adaptogen salvia. Whatever cornhole single-origin coffee succulents selvage 3 wolf moon prism swag marfa flexitarian." 
            date="MAR 24, 2022" 
          />
          <Post 
            title="Adum software industry: how achive the goal"
            summary="Fanny pack chambray pinterest adaptogen salvia. Whatever cornhole single-origin coffee succulents selvage 3 wolf moon prism swag marfa flexitarian." 
            date="FEB 25, 2022" 
          />
        </div>
      </div>
    </section>
  )
}