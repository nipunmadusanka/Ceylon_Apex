export default function ServiceCard({ numb, title, desc, children }) {
  return (
    <div>
      {/* <article className="bg-[#252525] text-[#DEDEDE] h-[400px] pt-[80px] w-full px-[40px] pb-[45px] flex flex-col gap-[5px] items-start justify-between hover:-translate-y-3 duration-300 ease-in-out scalepointer">
      {children}
      <h3 className="text-4xl flex gap-[30px]">
        <span>{`${numb}.`}</span> <span>{`${title}`}</span>
      </h3>
      <hr className="w-full border-[rgba(255,255,255,0.15)] -mb-2" />
      <p className="text-[#ADADAD] pt-5">{desc}</p>
    </article> */}

      <div class="overflow-hidden text-center bg-[#252525] lg:h-72 lg:w-80 rounded shadow-md text-[#DEDEDE] shadow-slate-800">
        <figure class="p-6 pb-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mx-auto stroke-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" role="graphics-symbol" aria-labelledby="title-01 desc-01">
            <title id="title-01">{title}</title>
            <desc id="desc-01">A more detailed description of the icon</desc>
           {children}
            </svg>
        </figure>
        <div class="p-6">
          <h3 class="mb-4 text-xl font-medium text-slate-200"><span>{`${title}`}</span></h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>

  )
} 