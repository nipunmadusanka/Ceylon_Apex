export default function Footer() {
  return(
    <section className="py-24">
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col lg:flex-row gap-[15px]">
        <div className="lg:w-5/12">
          <h1 className="text-4xl font-bold">Ceylon Apex</h1>
          <p className="mt-[30px] text-[#404040]">You can start and finish one of these popular software landing in under a day - for free! Check the list below</p>
        </div>
        <div className="lg:w-3/12 text-[#404040]">
          <h5 className="text-lg uppercase">Contacts</h5>
          <p className="mt-[30px]">No 1362, Kumburu Idama, 17 canal, Padalangala, Embilipitiya</p>
          <p className="mt-[30px]">+94719070387 <br />ceylonapex@gmail.com</p>
        </div>
        <div className="lg:w-2/12 text-[#404040]">
          <h5 className="text-lg uppercase">Office</h5>
          <p className="mt-[30px]">9AM - 5PM <br />(sunday closed)</p>
        </div>
        <div className="lg:w-2/12 text-[#404040]">
          <h5 className="text-lg uppercase">Social</h5>
          <ul className="mt-[30px] leading-relaxed">
            <li className="hover:text-[#212529] cursor-pointer">Instagram</li> 
            <li className="hover:text-[#212529] cursor-pointer">Linkedin</li> 
            <li className="hover:text-[#212529] cursor-pointer">Github</li> 
            <li className="hover:text-[#212529] cursor-pointer">Facebook</li> 
          </ul>
        </div>
      </div>
    </section>
  )
}