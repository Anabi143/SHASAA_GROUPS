import logo from "../../assets/services/img6.jpeg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaDraftingCompass,
  FaCube,
  FaBuilding,
  FaFan,
  FaProjectDiagram,
  FaMapMarkedAlt
} from "react-icons/fa";

import Moments from "../../components/Moments";
import promoVideo from "../../assets/services/shape.mp4";

import BoxAnimation from "../../assets/BoxAnimation";
import "./ShapeSolutions.css";

gsap.registerPlugin(ScrollTrigger);

const ShapeSolutions = () => {

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
    const ctx = gsap.context(() => {

      gsap.timeline({ delay: 0.5 })
        .fromTo(
          ".shape-subtitle",
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          ".shape-title",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          ".shape-description",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          ".service-card",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }
        );

      /* STRENGTH SECTION */
      gsap.timeline({
        scrollTrigger: {
          trigger: ".strength-section",
          start: "top 80%",
        }
      })
        .fromTo(
          ".strength-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          ".strength-title",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          ".strength-text",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        );

    }, container);

    return () => ctx.revert();

  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section id="shape-solutions" ref={container}>

        <BoxAnimation />

        <div className="container">

          {/* LEFT CONTENT */}
          <div className="shape-content">
            <img src={logo} alt="SHASAA GROUP" className="service-page-logo" />

            <span className="shape-subtitle">
              SHASAA GROUPS
            </span>

            <h1 className="shape-title">
              SHAPE SOLUTION
            </h1>

            <h3 className="shape-usage">
              SHASAA High-tech Architecture & Project Engineering
            </h3>

            <p className="shape-description">
              SHAPE Solutions is the engineering and design division of
              SHASAA GROUP specializing in CAD engineering services
              and BIM-based project solutions.
            </p>

            <p className="shape-description">
              We support engineering companies, construction firms,
              and infrastructure projects with accurate design
              and modeling services.
            </p>
          </div>

          {/* SERVICES */}
          <div className="service-grid">

            <div className="service-card">
              <FaDraftingCompass className="service-icon"/>
              2D Drafting
            </div>

            <div className="service-card">
              <FaCube className="service-icon"/>
              3D Modeling
            </div>

            <div className="service-card">
              <FaBuilding className="service-icon"/>
              BIM Modeling
            </div>

            <div className="service-card">
              <FaFan className="service-icon"/>
              HVAC Design
            </div>

            <div className="service-card">
              <FaProjectDiagram className="service-icon"/>
              Forward Engineering
            </div>

            <div className="service-card">
              <FaMapMarkedAlt className="service-icon"/>
              GIS & Lidar Projects
            </div>

          </div>
        </div>

        {/* STRENGTH SECTION */}
        <div className="strength-section">
          <h3 className="strength-subtitle">Our Strength</h3>
          <h2 className="strength-title">Expert Engineering Solutions</h2>
          <p className="strength-text">
            Combining modern engineering tools with experienced
            professionals to deliver efficient and high-quality
            engineering solutions.
          </p>
        </div>

      </section>

      {/* ================= MOMENTS (VIDEO ONLY) ================= */}
      <Moments images={momentImages} />

    </>
  );
};

export default ShapeSolutions;