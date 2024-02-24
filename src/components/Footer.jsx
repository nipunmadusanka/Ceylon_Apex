export default function Footer() {
  return (
    <section className="py-24 bg-zinc-800">
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col lg:flex-row gap-[15px] text-white">
        <div className="lg:w-5/12">
          <h1 className="text-4xl font-bold">Ceylon Apex</h1>
          <p className="mt-[30px] text-white">Step into the extraordinary with Ceylon Apex. We are the pulse of innovation, crafting boundless creativity that transcends the ordinary. Welcome to a world where ideas unfold, and possibilities are limitless. Ceylon Apex – Unleashing the Extraordinary.</p>
        </div>
        <div className="lg:w-3/12 text-white">
          <h5 className="text-lg uppercase">Contacts</h5>
          <p className="mt-[30px]">No 1362, Kumburu Idama, 17 canal, Padalangala, Embilipitiya</p>
          <p className="mt-[30px]">+94719070387 <br />ceylonapex@gmail.com</p>
        </div>
        <div className="lg:w-2/12 text-white">
          <h5 className="text-lg uppercase">Office</h5>
          <p className="mt-[30px]">9AM - 5PM <br />(sunday closed)</p>
        </div>
        <div className="lg:w-2/12 text-white">
          <h5 className="text-lg uppercase">Social</h5>
          <ul className="mt-[30px] leading-relaxed">
            <li className="hover:text-[#6f6f6f] cursor-pointer">Instagram</li>
            <li className="hover:text-[#6f6f6f] cursor-pointer">Linkedin</li>
            <li className="hover:text-[#6f6f6f] cursor-pointer">Github</li>
            <li className="hover:text-[#6f6f6f] cursor-pointer">Facebook</li>
          </ul>
        </div>
      </div>
    </section>
  )
}