export default function Footer() {
  return (
    <>
      <section className="py-24 bg-zinc-800">
        <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col lg:flex-row text-white gap-5">
          <div className="lg:w-5/12">
            <h1 className="text-4xl font-bold">Ceylon Apex</h1>
            <p className="mt-[10px] text-white">Step into the extraordinary with Ceylon Apex. We are the pulse of innovation, crafting boundless creativity that transcends the ordinary. Welcome to a world where ideas unfold, and possibilities are limitless. Ceylon Apex – Unleashing the Extraordinary.</p>
          </div>
          <div className="lg:w-3/12 text-white">
            <h5 className="text-lg uppercase font-bold">Contacts</h5>
            <p className="mt-[10px]">No 1362, Kumburu Idama, 17 canal, Padalangala, Embilipitiya</p>
            <p className="mt-[10px]">+94719070387 <br />ceylonapex@gmail.com</p>
          </div>
          <div className="lg:w-2/12 text-white font-bold">
            <h5 className="text-lg uppercase">Office</h5>
            <p className="mt-[10px]">9AM - 5PM <br />(sunday closed)</p>
          </div>
          <div className="lg:w-2/12 text-white">
            <h5 className="text-lg uppercase font-bold">Social</h5>
            <ul className="mt-[10px] leading-relaxed">
              <li className="hover:text-[#6f6f6f] cursor-pointer">Instagram</li>
              <li className="hover:text-[#6f6f6f] cursor-pointer">Linkedin</li>
              <li className="hover:text-[#6f6f6f] cursor-pointer">Facebook</li>
            </ul>
          </div>
        </div>

      </section>
      <div className="text-white flex justify-center py-2">
        <div>
          Designed & Developed by ❤️ <a className="hover:underline hover:text-yellow-400" href="https://www.linkedin.com/company/craftwarelab" target="_blank" rel="noreferrer">Craftwarelab</a>
        </div>
      </div>
    </>
  )
}