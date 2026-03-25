import logo from "../../assets/services/img4.jpeg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import {
  FaLaptopCode,
  FaBullhorn,
  FaPalette,
  FaPenNib,
  FaSearch,
} from "react-icons/fa";

import Moments from "../../components/Moments";

import promoVideo from "../../assets/services/shape.mp4";

import BoxAnimation from "../../assets/BoxAnimation";
import "./AnabiSolutions.css";

gsap.registerPlugin(ScrollTrigger);

const AnabiSolutions = () => {

  const navigate = useNavigate();
  const container = useRef(null);

  // ✅ VIDEO ONLY DATA
  const momentImages = [
    {
      src: promoVideo,
      title: "Our Creative Work",
      description: "Short showcase of our digital projects"
    }
  ];

  useEffect(() => {

    /* ---------- HERO SECTION ANIMATION ---------- */

    gsap.timeline({ delay: 0.5 })

      .fromTo(
        "#anabi-solutions .anabi-subtitle",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#anabi-solutions .anabi-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#anabi-solutions .anabi-usage",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#anabi-solutions .anabi-description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#anabi-solutions .service-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }
      );


    /* ---------- MISSION SCROLL ANIMATION ---------- */

    gsap.timeline({
      scrollTrigger: {
        trigger: ".mission-section",
        start: "top 80%",
      }
    })

      .fromTo(
        ".mission-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        ".mission-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        ".mission-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section id="anabi-solutions" ref={container}>

        <BoxAnimation />

        <div className="container">

          {/* LEFT CONTENT */}

          <div className="anabi-content">
            <img src={logo} alt="SHASAA GROUP" className="service-page-logo" />

            <span className="anabi-subtitle">
              SHASAA GROUPS
            </span>

            <h1 className="anabi-title">
              ANABI SOLUTION
            </h1>

            <h3 className="anabi-usage">
               Accelerating New-age Analytics, Branding & Innovation 
            </h3>

            <p className="anabi-description">
              ANABI Solutions is the digital technology and innovation
              division of SHASAA GROUP. We help businesses build a strong
              digital presence, improve brand identity, and grow through
              modern technology solutions.
            </p>

            <p className="anabi-description">
              Our services focus on creative branding, digital marketing,
              and technology-driven strategies to help organizations
              succeed in the modern digital world.
            </p>

          </div>


          {/* RIGHT SERVICES */}

          <div className="service-grid">

            <div className="service-card">
              <FaLaptopCode className="service-icon" />
              Website Development
            </div>

            <div className="service-card">
              <FaBullhorn className="service-icon" />
              Social Media Marketing
            </div>

            <div className="service-card">
              <FaPalette className="service-icon" />
              Digital Branding
            </div>

            <div className="service-card">
              <FaPenNib className="service-icon" />
              Content Creation
            </div>

            <div className="service-card">
              <FaSearch className="service-icon" />
              Search Engine Optimization
            </div>

          </div>

        </div>


        {/* ================= MISSION SECTION ================= */}

        <div className="mission-section">

          <h3 className="mission-subtitle">
            Our Mission
          </h3>

          <h2 className="mission-title">
            Innovative Digital Growth
          </h2>

          <p className="mission-text">
            To provide innovative digital solutions that empower businesses
            to grow, build strong brands, and succeed in the evolving
            digital economy.
          </p>

        </div>

      </section>


      {/* ================= MOMENTS SECTION ================= */}

      <Moments images={momentImages} />

    </>
  );
};

export default AnabiSolutions;