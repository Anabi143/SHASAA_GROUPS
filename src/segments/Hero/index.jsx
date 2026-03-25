import { convertHexToRgba } from "../../util";
import { Link } from "react-scroll";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import heroImage from "../../assets/hero.png";
import BoxAnimation from "../../assets/BoxAnimation";
import gsap from "gsap";
import { useEffect } from "react";

import "./Hero.css";

const Hero = () => {
    useEffect(()=>{
        gsap.timeline({delay:0.5})
        .fromTo("#hero .hero-subtitle", {x:-20, opacity:0},{x:0, opacity:1})
        .fromTo("#hero .hero-title", {y:20, opacity:0},{y:0, opacity:1})
        .fromTo("#hero .hero-image", {y:-20, opacity:0},{y:0, opacity:1})
        .fromTo("#hero .hero-description", {y:20, opacity:0},{y:0, opacity:1})
        .fromTo("#hero .buttons-wrapper", {y:20, opacity:0},{x:0, opacity:1})
    })
  return (
    <section id="hero">
        <BoxAnimation/>
        <div className="container">
            <div>
                <h4 className="text-primary hero-subtitle"
                 style={{background: 
                 convertHexToRgba
                 ("--primary", 0.2)}}>Digital Innovation And Expansion
                </h4>
                <h1 className="hero-title">
                    Empowering Skills Creating Careers Delivering Engineering & Digital Solutions
                </h1>
                <p className="hero-description">
SHASAA GROUPS is a multi-division organization dedicated to skill development, 
recruitment solutions, engineering services, overseas opportunities, and digital innovation.
 We empower individuals and organizations through knowledge, technology, and strategic partnerships.
                </p>
                <div className="buttons-wrapper">
                    <Link to="service" smooth={true} className="btn primary">Explore Our Divisions <FaArrowTrendUp/></Link>
                    <Link to="contact" smooth={true} className="btn">Start Your Career Journey <FaProjectDiagram/></Link>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="" />
            </div>
        </div>
    </section>
    
  )
}

export default Hero