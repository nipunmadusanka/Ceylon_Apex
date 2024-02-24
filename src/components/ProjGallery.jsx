export default function ProjGallery() {
  return (
    <div className="lg:w-10/12 w-11/12 flex flex-col lg:grid grid-cols-2 gap-[15px] mx-auto pt-24">
      <div className="overflow-hidden relative scalepointer group">
        <img
          src="../img/port1.png"
          alt="project"
          className="lg:max-w-full lg:h-auto w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out"
        />
        <a href="https://www.youtube.com/watch?v=EMLrkbMyD9g" target="blank">
          <div className="bg-black absolute bottom-[5%] left-[5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
            <h5 className="text-xl mb-1 text-white">MAIN REEL</h5>
            <p className="uppercase text-xs text-white tracking-wide leading-none">Ceylon Apex</p>
          </div>
        </a>
      </div>
      <div className="overflow-hidden relative scalepointer group">
        <img
          src="../img/port2.png"
          alt="project"
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out"
        />
        <a href="https://www.youtube.com/watch?v=1rPRV859msQ" target="blank">
          <div className="bg-black absolute bottom-[5%] left-[5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
            <h5 className="text-xl mb-1 text-white">Line Art</h5>
            <p className="uppercase text-xs text-white tracking-wide leading-none">Ceylon Apex</p>
          </div>
        </a>
      </div>
      <div className="overflow-hidden relative scalepointer group col-start-1 col-end-3">
        <img
          src="../img/port5.png"
          alt="project"
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out"
        />
        <a href="https://www.youtube.com/watch?v=zohGyKOU80w" target="blank">
          <div className="bg-black absolute bottom-[5%] left-[2.5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
            <h5 className="text-xl mb-1 text-white">Landing Page</h5>
            <p className="uppercase text-xs text-[#626161] tracking-wide leading-none">Ceylon Apex</p>
          </div>
        </a>
      </div>
      <div className="overflow-hidden relative scalepointer group col-start-1 col-end-3">
        <img
          src="../img/port6.png"
          alt="project"
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out"
        />
        <a href="https://www.youtube.com/watch?v=vBmTqIf1gDg" target="blank">
          <div className="bg-black absolute bottom-[5%] left-[2.5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
            <h5 className="text-xl mb-1 text-white">Character Art</h5>
            <p className="uppercase text-xs text-[#626161] tracking-wide leading-none">Ceylon Apex</p>
          </div>
        </a>
      </div>
      <div className="overflow-hidden relative scalepointer group">
        <img
          src="../img/port4.png"
          alt="project"
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out"
        />
        <div className="bg-black absolute bottom-[5%] left-[5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
          <h5 className="text-xl mb-1 text-white">Brand Inspiration</h5>
          <p className="uppercase text-xs text-white tracking-wide leading-none">Ceylon Apex</p>
        </div>
      </div>
      <div className="overflow-hidden relative scalepointer group">
        <img
          src="../img/port3.png"
          alt="project"
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out"
        />
        <a href="https://www.youtube.com/watch?v=NEEUXJrvO64" target="blank">
          <div className="bg-black absolute bottom-[5%] left-[5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
            <h5 className="text-xl mb-1 text-white">Character Movement</h5>
            <p className="uppercase text-xs text-white tracking-wide leading-none">Ceylon Apex</p>
          </div>
        </a>
      </div>
    </div>
  )
}