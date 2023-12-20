import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createContext, useState } from "react";
import Main from "./components/Main";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import References from "./components/References";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Pointer from "./components/Pointer";

export const Context = createContext()

export default function App() {
  
  const isMobile = window.innerWidth < 1024

  const [sidebar, setSidebar] = useState(false)
  const [video, setVideo] = useState(false)

  return (
    <Context.Provider value={{sidebar, setSidebar, video, setVideo, isMobile}}>
      <Main>
        <Topbar />
        <Sidebar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <References />
        <Team />
        {/* <Blog /> */}
        <Banner />
        <Footer />
        {!isMobile && <Pointer />}
      </Main>
    </Context.Provider>
  )
}
