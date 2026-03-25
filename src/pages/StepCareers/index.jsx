import logo from "../../assets/services/img2.jpeg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import {
  FaFileAlt,
  FaUserTie,
  FaComments,
  FaChalkboardTeacher,
  FaLinkedin
} from "react-icons/fa";

import Moments from "../../components/Moments";

import promoVideo from "../../assets/services/shape.mp4";
import BoxAnimation from "../../assets/BoxAnimation";
import "./StepCareers.css";

gsap.registerPlugin(ScrollTrigger);

const StepCareers = () => {

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
        "#step-careers .step-subtitle",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#step-careers .step-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#step-careers .step-description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        "#step-careers .service-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }
      );


    /* OBJECTIVE SECTION */

    gsap.timeline({
      scrollTrigger: {
        trigger: ".objective-section",
        start: "top 80%",
      }
    })

      .fromTo(
        ".objective-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        ".objective-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(
        ".objective-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

  }, []);

  return (
     <>
      {/* ================= HERO SECTION ================= */}

    <section id="step-careers" ref={container}>

      <BoxAnimation />

      <div className="container">

        {/* LEFT CONTENT */}

        <div className="step-content">
          <img src={logo} alt="SHASAA GROUP" className="service-page-logo" />

        <span className="step-subtitle">
            SHASAA GROUPS
          </span>

          <h1 className="step-title">
             STEP CAREERS
          </h1>

          <h3 className="step-usage">
            SHASAA Talent Employment Platform 
          </h3>

          <p className="step-description">
            STEP Careers is a career support platform designed to guide
            students and job seekers toward successful employment
            opportunities.
          </p>

          <p className="step-description">
            The platform focuses on improving career readiness,
            professional skills, and job placement support through
            structured training and mentorship programs.
          </p>

        </div>


        {/* SERVICES */}

        <div className="service-grid">

          <div className="service-card">
            <FaFileAlt className="service-icon" />
            Resume Building
          </div>

          <div className="service-card">
            <FaUserTie className="service-icon" />
            Interview Preparation
          </div>

          <div className="service-card">
            <FaComments className="service-icon" />
            Career Counseling
          </div>

          <div className="service-card">
            <FaChalkboardTeacher className="service-icon" />
            Placement Training
          </div>

          <div className="service-card">
            <FaLinkedin className="service-icon" />
            LinkedIn Profile Development
          </div>

        </div>

      </div>


      {/* OBJECTIVE SECTION */}

      <div className="objective-section">

        <h3 className="objective-subtitle">
          Objective
        </h3>

        <h2 className="objective-title">
          Building Job-Ready Professionals
        </h2>

        <p className="objective-text">
          To help students and graduates become confident, skilled,
          and job-ready professionals by providing structured career
          guidance, professional skill development, and employment
          support.
        </p>

      </div>

    </section>
      {/* ================= MOMENTS SECTION ================= */}

      <Moments images={momentImages} />

    </>

  );
};

export default StepCareers;