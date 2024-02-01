export default function TestimCard({quote, author}) {
  return(
      <article className="flex flex-col gap-[30px] items-start lg:max-w-[350px] z-10 cursor-pointer">
        <svg width="69" height="56" viewBox="0 0 69 56" fill="none">
          <path d="M31.1422 39.7529C31.1422 48.9647 24.739 55 16.1492 55C7.40327 55 1 48.8059 1 39.7529C1 35.6236 1.62471 32.6059 5.21678 23.8705L14.2751 1H29.7366L22.8648 26.253C28.0187 28.4765 31.1422 33.2412 31.1422 39.7529ZM68 39.7529C68 48.9647 61.5967 55 53.007 55C44.2611 55 37.8578 48.8059 37.8578 39.7529C37.8578 35.6236 38.4826 32.6059 42.0745 23.8705L51.1329 1H66.5944L59.7226 26.253C64.8765 28.4765 68 33.2412 68 39.7529Z" stroke="#646464" strokeMiterlimit="10"/>
        </svg>
        <p className="font-light text-white">{quote}</p>
        <div className="flex items-start">
          <span className="mt-3 inline-block w-16 h-[1px] bg-black mr-4 align-middle"></span>
          <h6 className="text-sm text-white"><span className="font-semibold">{author.name}</span><br /><span className="font-light">{author.position}</span></h6>
        </div>
      </article>
  )
}