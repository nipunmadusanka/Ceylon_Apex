export default function TeamProfile({img, name, position}) {
  return(
      <article className="cursor-pointer">
        <div className="overflow-hidden max-w-max">
          <img src={`../img/${img}`} className="hover:scale-110 duration-300" width="356" height="374" />
        </div>
        <div className="tracking-wide">
          <h5 className="text-2xl font-medium leading-relaxed text-[#404040]">{name}</h5>
          <p className="uppercase text-sm text-white">{position}</p>
        </div>
      </article>
  )
}