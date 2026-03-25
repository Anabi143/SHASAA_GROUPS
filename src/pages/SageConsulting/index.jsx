import logo from "../../assets/services/img3.jpeg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import {
  FaUserTie,
  FaSearch,
  FaUsers,
  FaUniversity,
  FaGraduationCap
} from "react-icons/fa";
import Moments from "../../components/Moments";

import promoVideo from "../../assets/services/shape.mp4";


import BoxAnimation from "../../assets/BoxAnimation";
import "./SageConsulting.css";

gsap.registerPlugin(ScrollTrigger);

const SageConsulting = () => {

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
        "#sage-consulting .sage-subtitle",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#sage-consulting .sage-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#sage-consulting .sage-description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#sage-consulting .service-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }
      );


    /* COMMITMENT SECTION */

    gsap.timeline({
      scrollTrigger: {
        trigger: ".commitment-section",
        start: "top 80%",
      }
    })

      .fromTo(
        ".commitment-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        ".commitment-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        ".commitment-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}

    <section id="sage-consulting" ref={container}>

      <BoxAnimation />

      <div className="container">

        {/* LEFT CONTENT */}

        <div className="sage-content">
             <img src={logo} alt="SHASAA GROUP" className="service-page-logo" />


          <span className="sage-subtitle">
            SHASAA GROUPS
          </span>

          <h1 className="sage-title">
             SAGE CONSULTING
          </h1>

          <h3 className="sage-usage">
             SHASAA Advanced Guidance & Enterprise 
          </h3>

          <p className="sage-description">
            SAGE HR Consultancy provides professional HR consultancy
            and recruitment solutions for companies across multiple
            industries.
          </p>

          <p className="sage-description">
            Our goal is to connect qualified talent with the right
            organizations and support companies in building strong
            and efficient teams.
          </p>

        </div>


        {/* RIGHT SERVICES */}

        <div className="service-grid">

          <div className="service-card">
            <FaUserTie className="service-icon" />
            Recruitment & Staffing
          </div>

          <div className="service-card">
            <FaSearch className="service-icon" />
            Candidate Screening
          </div>

          <div className="service-card">
            <FaUsers className="service-icon" />
            Talent Acquisition Support
          </div>

          <div className="service-card">
            <FaUniversity className="service-icon" />
            Campus Recruitment Drives
          </div>

          <div className="service-card">
            <FaGraduationCap className="service-icon" />
            Internship Placement Programs
          </div>

        </div>

      </div>


      {/* COMMITMENT SECTION */}

      <div className="commitment-section">

        <h3 className="commitment-subtitle">
          Our Commitment
        </h3>

        <h2 className="commitment-title">
          Reliable Recruitment Support
        </h2>

        <p className="commitment-text">
          Delivering reliable recruitment solutions while supporting
          candidates in building meaningful careers and helping
          organizations develop strong and efficient teams.
        </p>

      </div>

    </section>
          {/* ================= MOMENTS SECTION ================= */}

      <Moments images={momentImages} />

    </>
  );
};

export default SageConsulting;