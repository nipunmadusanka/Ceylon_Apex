export default function Post({title, summary, date}) {
  return(
    <article className="flex flex-col lg:flex-row py-20 border-t border-black items-start gap-[30px]">
      <header className="lg:w-1/2 flex flex-col gap-[30px]">
        <h3 className="text-4xl">{title}</h3>
        <p className="text-sm capitalize font-medium">
          <a href="" className="text-[#404040] hover:text-[#212529] flex gap-[15px] items-center">
            Read more
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.57107 0.928932C8.57107 0.65279 8.34721 0.428932 8.07107 0.428932L3.57107 0.428932C3.29493 0.428932 3.07107 0.65279 3.07107 0.928932C3.07107 1.20507 3.29493 1.42893 3.57107 1.42893L7.57107 1.42893L7.57107 5.42893C7.57107 5.70507 7.79493 5.92893 8.07107 5.92893C8.34721 5.92893 8.57107 5.70507 8.57107 5.42893L8.57107 0.928932ZM1.35355 8.35355L8.42462 1.28249L7.71751 0.575379L0.646447 7.64645L1.35355 8.35355Z" fill="black"/>
            </svg>
          </a>
        </p>
      </header>
      <div className="lg:w-1/2 flex flex-col gap-[30px]">
        <p className="leading-relaxed text-[#404040]">{summary}</p>
        <p className="text-xs tracking-widest text-[#404040] font-medium">{date}</p>
      </div>
    </article>
  )
}