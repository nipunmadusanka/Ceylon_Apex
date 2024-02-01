export default function ProjGallery() {
  return(
    <div className="lg:w-10/12 w-11/12 flex flex-col lg:grid grid-cols-2 gap-[15px] mx-auto pt-24"> 
      <div className="overflow-hidden relative scalepointer group">
        <img 
          src="../img/portfolio_2col_7.jpeg" 
          alt="project" 
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out"
        />
        <div className="bg-white absolute bottom-[5%] left-[5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
          <h5 className="text-xl mb-1 text-white">Brand Inspiration</h5>
          <p className="uppercase text-xs text-white tracking-wide leading-none">brand</p>
        </div>
      </div>
      <div className="overflow-hidden relative scalepointer group">
        <img 
          src="../img/portfolio_2col_1.jpeg" 
          alt="project" 
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out" 
        />
        <div className="bg-white absolute bottom-[5%] left-[5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
          <h5 className="text-xl mb-1 text-white">Brand Inspiration</h5>
          <p className="uppercase text-xs text-white tracking-wide leading-none">brand</p>
        </div>
      </div>
      <div className="overflow-hidden relative scalepointer group col-start-1 col-end-3">
        <img 
          src="../img/portfolio_classic_1.jpeg" 
          alt="project" 
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out" 
        />
        <div className="bg-white absolute bottom-[5%] left-[2.5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
          <h5 className="text-xl mb-1 text-white">Brand Inspiration</h5>
          <p className="uppercase text-xs text-[#626161] tracking-wide leading-none">brand</p>
        </div>
      </div>
      <div className="overflow-hidden relative scalepointer group">
        <img 
          src="../img/portfolio_2col_6.jpeg" 
          alt="project" 
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out" 
        />
        <div className="bg-white absolute bottom-[5%] left-[5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
          <h5 className="text-xl mb-1 text-white">Brand Inspiration</h5>
          <p className="uppercase text-xs text-white tracking-wide leading-none">brand</p>
        </div>
      </div>
      <div className="overflow-hidden relative scalepointer group">
        <img 
          src="../img/portfolio_2col_3.jpeg" 
          alt="project" 
          className="lg:max-w-full lg:h-auto w-full h-80 object-cover group-hover:scale-110 duration-500 ease-in-out" 
        />
        <div className="bg-white absolute bottom-[5%] left-[5%] p-3 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none duration-500">
          <h5 className="text-xl mb-1 text-white">Brand Inspiration</h5>
          <p className="uppercase text-xs text-white tracking-wide leading-none">brand</p>
        </div>
      </div>
    </div>
  )
}