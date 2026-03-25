import "./Services.css";
import { services } from "../../data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Service = () => {

  const container = useRef(null);

  useGSAP(() => {

    gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom top",
      }
    })

    .fromTo(
      [
        "#services .section-header h3",
        "#services .section-header h2",
        "#services .services .service",
        "#services .spotlight",
      ],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5 }
    );

  }, { scope: container });


  useEffect(() => {

    const cards = document.querySelectorAll("#services .service");

    const handleMouseMove = (e) => {

      const rect = e.currentTarget.getBoundingClientRect();

      e.currentTarget.style.setProperty(
        "--x",
        `${e.clientX - rect.left}px`
      );

      e.currentTarget.style.setProperty(
        "--y",
        `${e.clientY - rect.top}px`
      );

    };

    cards.forEach(card => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };

  }, []);


  return (
    <section id="services" ref={container}>
      <div className="container">

        <div className="section-header">
          <h3>Our Service</h3>
          <h2>Empowering Your Business with Tailored IT Solutions</h2>
        </div>

        <div className="services">

          {services.map((service, index) => (

            <a
              key={index}
              href={service.link}
              className="service"
              style={{
                backgroundImage: `url(${service.icon})`,
              }}
            >

              <div className="overlay"></div>

              <div className="content">
                <h3>{service.title}</h3>
              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Service;