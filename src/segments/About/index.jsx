import { useEffect, useRef } from "react";
import VRImage from "../../assets/vr.png";
import PersonnelImage from "../../assets/pic-1.png";
import { whyChooseUs, ourApproaches } from "../../data";
import { convertHexToRgba, cssPerfectShape } from "../../util";
import { Link } from "react-scroll";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

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
        "#about .vision-item",
        "#about .vision-item .image-container",
        "#about h2",
        "#about .approach",
        "#about .contact-us"
      ],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    )

    .fromTo(
      [
        "#about .spotlight",
        "#about .why-choose-us-container .why-choose-us"
      ],
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.3 }
    );

  }, { scope: container });


  useEffect(() => {

    const cards = document.querySelectorAll("#about .card-hover");

    const handleMouseMove = (e) => {

      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);

    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };

  }, []);


  return (
    <section id="about" ref={container}>
      <div className="container">

        {/* LEFT COLUMN */}
        <div className="left-column">

          <div className="spotlight"></div>

          {/* Vision Section */}
          <div className="vision-container">

            {/* Vision Card */}
            <div className="vision-item card-hover">

              <div className="vision-content">
                <h2>Our Vision</h2>
                <h4 className="title">
                  Transforming Technology into Progress
                </h4>

                <p className="description">
                  Our vision is to empower individuals with skills, 
                  career opportunities, and technical expertise, while supporting organizations with reliable and professional services.
                </p>
              </div>

              <div className="image-container">
                <img src={VRImage} alt="Vision Illustration"/>
              </div>

            </div>


            {/* Who We Are Card */}
            <div className="vision-item card-hover">

              <div className="vision-content">
                <h2>Who We Are</h2>

                <h4 className="title">
                  Your Trusted Technology Partner
                </h4>

                <p className="description">
                 SHASAA GROUPS is a dynamic organization focused on building a bridge between education, industry, and employment. Through its specialized divisions, the group 
                 delivers training programs, recruitment solutions, engineering project services, overseas opportunities, and digital innovation services
                </p>
              </div>

              <div className="image-container">
                <img src={PersonnelImage} alt="Our Team"/>
              </div>

            </div>

          </div>


          {/* Why Choose Us */}
          <div className="why-choose-us-container">

            {whyChooseUs.map((item, index) => (

              <div
                key={index}
                className="blur why-choose-us card-hover"
                style={{
                  background: convertHexToRgba("--bg-secondary", 0.3)
                }}
              >

                <div className="icon">
                  <img src={item.imageIcon} alt={item.title}/>
                </div>

                <h3 className="title">{item.title}</h3>

                <p className="description">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* RIGHT COLUMN */}
        <div className="right-column">

          <h2 className="title">Our Approach</h2>

          <div className="boxes-wrapper">

            {ourApproaches.map((approach, index) => {

              const Icon = approach.icon;

              return (
                <div className="approach card-hover" key={index}>

                  <div
                    className="icon"
                    style={{
                      ...cssPerfectShape(50, 50),
                      background: convertHexToRgba("--primary", 0.1)
                    }}
                  >
                    <Icon/>
                  </div>

                  <div>
                    <h3 className="title">{approach.title}</h3>

                    <p className="description">
                      {approach.description}
                    </p>
                  </div>

                </div>
              );

            })}


            {/* Contact Box */}
            <div className="contact-us card-hover">

              <h2 className="title">
                Reach out to see how our IT solutions can boost your success.
              </h2>

              <Link
                to="contact"
                smooth={true}
                className="btn primary"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;