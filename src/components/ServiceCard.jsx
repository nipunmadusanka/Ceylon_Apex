export default function ServiceCard({numb, title, desc, children}) {
  return(
    <article className="bg-[#252525] text-[#DEDEDE] w-full pt-[100px] px-[60px] pb-[45px] flex flex-col gap-[30px] items-start justify-between hover:-translate-y-3 duration-300 ease-in-out scalepointer">
      {children}
      <h3 className="text-4xl flex gap-[30px]">
        <span>{`${numb}.`}</span> <span>{`${title}`}</span>
      </h3>
      <hr className="w-full border-[rgba(255,255,255,0.15)] -mb-2" />
      <p className="text-[#ADADAD]">{desc}</p>
    </article>
  )
} 