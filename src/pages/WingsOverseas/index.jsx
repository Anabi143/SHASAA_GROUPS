import logo from "../../assets/services/img5.jpeg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";


import {
  FaGlobe,
  FaUserCheck,
  FaFileAlt,
  FaPlaneDeparture
} from "react-icons/fa";
import Moments from "../../components/Moments";

import promoVideo from "../../assets/services/shape.mp4";

import BoxAnimation from "../../assets/BoxAnimation";
import "./WingsOverseas.css";

gsap.registerPlugin(ScrollTrigger);

const WingsOverseas = () => {

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

    /* HERO ANIMATION */

    gsap.timeline({ delay: 0.5 })

      .fromTo(
        "#wings-overseas .wings-subtitle",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#wings-overseas .wings-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#wings-overseas .wings-description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#wings-overseas .service-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }
      );

    /* VISION SECTION */

    gsap.timeline({
      scrollTrigger: {
        trigger: ".vision-section",
        start: "top 80%",
      }
    })

      .fromTo(
        ".vision-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        ".vision-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        ".vision-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

  }, []);

  return (
         <>
      {/* ================= HERO SECTION ================= */}

    <section id="wings-overseas" ref={container}>

      <BoxAnimation />

      <div className="container">

        {/* LEFT CONTENT */}

        <div className="wings-content">
          <img src={logo} alt="SHASAA GROUP" className="service-page-logo" />



          <span className="wings-subtitle">
            SHASAA GROUPS
          </span>

          <h1 className="wings-title">
            WINGS
          </h1>

          <h3 className="wings-usage">
             Worldwide International Network & Global Services 
          </h3>

          <p className="wings-description">
            SHASAA WINGS Overseas focuses on helping skilled professionals
            explore international career opportunities.
          </p>

          <p className="wings-description">
            We provide guidance and support for candidates seeking
            employment opportunities in global markets, especially
            in Gulf countries and other international locations.
          </p>

        </div>


        {/* RIGHT SERVICES */}

        <div className="service-grid">

          <div className="service-card">
            <FaGlobe className="service-icon" />
            Overseas Job Opportunities
          </div>

          <div className="service-card">
            <FaUserCheck className="service-icon" />
            Interview Coordination
          </div>

          <div className="service-card">
            <FaFileAlt className="service-icon" />
            Documentation Assistance
          </div>

          <div className="service-card">
            <FaPlaneDeparture className="service-icon" />
            Pre-departure Guidance
          </div>

        </div>

      </div>


      {/* VISION SECTION */}

      <div className="vision-section">

        <h3 className="vision-subtitle">
          Our Vision
        </h3>

        <h2 className="vision-title">
          Global Career Success
        </h2>

        <p className="vision-text">
          To create a trusted platform that helps professionals
          achieve global career success and explore international
          employment opportunities with confidence.
        </p>

      </div>

    </section>
       {/* ================= MOMENTS SECTION ================= */}

      <Moments images={momentImages} />

    </>
  );
};

export default WingsOverseas;