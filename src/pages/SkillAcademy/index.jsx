import logo from "../../assets/services/img1.jpeg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import BoxAnimation from "../../assets/BoxAnimation";
import { FaLaptopCode, FaChartBar, FaLanguage, FaUserTie } from "react-icons/fa";

import Moments from "../../components/Moments";

import moment1 from "../../assets/services/moment1.png";
import moment2 from "../../assets/services/moment2.png";
import moment3 from "../../assets/services/moment3.jpeg";
import moment4 from "../../assets/services/moment4.png";
import promoVideo from "../../assets/services/skill.mp4";

import "./SkillAcademy.css";


gsap.registerPlugin(ScrollTrigger);

const SkillAcademy = () => {

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
    const approachData = [
  {
    image: moment1,
    title: "Practical Training",
    description: "Hands-on learning with real-world projects."
  },
  {
    image: moment2,
    title: "Expert Trainers",
    description: "Learn from experienced industry professionals."
  },
  {
    image: moment3,
    title: "Internship Opportunities",
    description: "Gain real experience through internships."
  },
  {
    image: moment4,
    title: "Career Support",
    description: "Guidance for placement and career growth."
  }
];
  

  useEffect(() => {

    /* ---------- HERO SECTION ANIMATION ---------- */

    gsap.timeline({ delay: 0.5 })
      .fromTo("#skill-academy .academy-subtitle",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo("#skill-academy .academy-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo("#skill-academy .academy-description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo("#skill-academy .program-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 }
      );


    /* ---------- APPROACH SECTION SCROLL ANIMATION ---------- */

    gsap.timeline({
      scrollTrigger: {
        trigger: ".approach-section",
        start: "top 80%",
      }
    })

      .fromTo(".approach-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(".approach-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      .fromTo(".approach-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 }
      );

  }, []);

  return (
        <>
      {/* ================= HERO SECTION ================= */}

    <section id="skill-academy" ref={container}>

      <BoxAnimation />

      <div className="container">

        {/* LEFT CONTENT */}

        <div className="academy-content">
          <img src={logo} alt="SHASAA GROUP" className="service-page-logo" />



          <span className="academy-subtitle">
            SHASAA GROUPS
          </span>

          <h1 className="academy-title">
             SKILL Academy
          </h1>

          <h3 className="shape-usage">
            SHASAA Knowledge & Integrated Learning Lab 
          </h3>

          <p className="academy-description">
            SKILL Academy is the skill development and training division of
            SHASAA GROUP, empowering students and professionals with
            practical knowledge, industry-relevant skills, and
            career-oriented training.
          </p>

          <p className="academy-description">
            Our programs bridge the gap between education and industry
            through hands-on training, expert mentorship, and real-world
            projects.
          </p>

        </div>


        {/* RIGHT PROGRAMS */}

        <div className="program-grid">

          <a
            href="https://forms.gle/NRWka9LqzU9ZcW4EA"
            target="_blank"
            rel="noopener noreferrer"
            className="program-card"
          >
            <FaLanguage className="program-icon" />
            Spoken English & Communication
          </a>

          <a
            href="https://forms.gle/NRWka9LqzU9ZcW4EA"
            target="_blank"
            rel="noopener noreferrer"
            className="program-card"
          >
            <FaUserTie className="program-icon" />
            Personality Development
          </a>

          <a
            href="https://forms.gle/NRWka9LqzU9ZcW4EA"
            target="_blank"
            rel="noopener noreferrer"
            className="program-card"
          >
            <FaLaptopCode className="program-icon" />
            Full Stack Development
          </a>

          <a
            href="https://forms.gle/NRWka9LqzU9ZcW4EA"
            target="_blank"
            rel="noopener noreferrer"
            className="program-card"
          >
            <FaLaptopCode className="program-icon" />
            Python Programming
          </a>

          <a
            href="https://forms.gle/NRWka9LqzU9ZcW4EA"
            target="_blank"
            rel="noopener noreferrer"
            className="program-card"
          >
            <FaChartBar className="program-icon" />
            Data Analytics (Tableau)
          </a>

          <a
            href="https://forms.gle/NRWka9LqzU9ZcW4EA"
            target="_blank"
            rel="noopener noreferrer"
            className="program-card"
          >
            <FaChartBar className="program-icon" />
            Tally Prime & Accounting
          </a>

        </div>

      </div>


      {/* ---------- OUR APPROACH SECTION ---------- */}

      <div className="approach-section">

        <h3 className="approach-subtitle">
          Our Approach
        </h3>

        <h2 className="approach-title">
          Learning With Industry Experience
        </h2>

<div className="approach-grid">
  {approachData.map((item, index) => (
    <div className="approach-card" key={index}>

      <img src={item.image} alt={item.title} />

      <div className="approach-overlay">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>

    </div>
  ))}
</div>

      </div>

    </section>

          {/* ================= MOMENTS SECTION ================= */}

      <Moments images={momentImages} />

    </>

  );
};

export default SkillAcademy;