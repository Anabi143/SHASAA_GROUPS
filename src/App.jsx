import Navbar from "./segments/Navbar";
import Hero from "./segments/Hero/Index";
import Achievement from "./segments/Achievement";
import About from "./segments/About";
import Service from "./segments/Services";
import Gallery from "./segments/Gallery";
import Vlog from "./segments/Vlog";
import Testimonials from "./segments/Testimonials";
import Contact from "./segments/Contact";
import Team from "./segments/Team";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "swiper/css";

function App() {
  const location = useLocation();

  /* Handle scroll when navigating from other pages */
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>

        <section id="hero">
          <Hero />
        </section>

        <section id="achievement">
          <Achievement />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="vlog">
          <Vlog />
        </section>

        <section id="services">
          <Service />
        </section>

        <section id="gallery">
          <Gallery />
        </section>
        
       <section id="team">
          <Team />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>



      </main>


    </>
  );
}

export default App;