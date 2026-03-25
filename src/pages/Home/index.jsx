import Hero from "../segments/Hero/Index";
import Achievement from "../segments/Achievement";
import About from "../segments/About";
import Service from "../segments/Services";
import Gallery from "../segments/Gallery";
import Testimonials from "../segments/Testimonials";
import Contact from "../segments/Contact";
import Team from "../segments/Team";
import Footer from "../segments/Footer";


function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="achievement">
        <Achievement />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="team">
        <Team />
      </section>

      <Footer />
    </>
  );
}

export default Home;