import "./Gallery.css";
import ceoImage from "../../assets/ceo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {

  const container = useRef(null);

  useGSAP(() => {

    gsap.timeline({
      scrollTrigger:{
        trigger:container.current,
        start:"top 80%",
        end:"bottom top"
      }
    })

    .fromTo(
      "#portfolio .ceo-image",
      { x:-80, opacity:0 },
      { x:0, opacity:1, duration:1 }
    )

    .fromTo(
      "#portfolio .ceo-content",
      { x:80, opacity:0 },
      { x:0, opacity:1, duration:1 },
      "-=0.7"
    );

  }, {scope:container});


  return (
    <section id="portfolio" ref={container}>
      <div className="container">

        <div className="section-header">
          <h3>Message from the CEO</h3>
          <h2>Vision, Leadership & Commitment</h2>
        </div>

        <div className="ceo-wrapper">

          <div className="ceo-image">
            <img src={ceoImage} alt="CEO" />
          </div>

          <div className="ceo-content">

            <p>
              At <strong>SHASAA GROUPS</strong>, our vision is to create a platform
              where skills, opportunities, and innovation come together to
              transform lives and organizations.
            </p>

            <p>
              Our journey started with a simple mission — to bridge the gap
              between education and industry by providing practical skills,
              career guidance, and professional solutions.
            </p>

            <p>
              Today, SHASAA GROUPS has grown into a multi-division organization
              offering services in training, recruitment, engineering,
              overseas opportunities, and digital solutions.
            </p>

            <p>
              We believe that every individual has the potential to succeed
              when provided with the right guidance, skills, and opportunities.
            </p>

              <div className="ceo-sign">
                <h3>SAA</h3>
                <span>CEO & Founder – SHASAA GROUPS</span>
              </div>

              <Link to="/gallery" className="gallery-btn">
                View Our Gallery
              </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;