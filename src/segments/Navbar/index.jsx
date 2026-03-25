import SHASAALogo from "../../components/SHASAALogo";
import { navRoutes } from "../../data";
import Socials from "../../components/Socials";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "../../components/Sidebar";
import "./Navbar.css";

import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { useEffect, useState, useRef } from "react";
import { convertHexToRgba } from "../../util";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const scrollListener = useRef(null);

  /* Scroll Detection */
  const handleScroll = () => {
    if (!scrollListener.current) {
      scrollListener.current = requestAnimationFrame(() => {
        setDrop(window.scrollY > 200);
        scrollListener.current = null;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollListener.current) cancelAnimationFrame(scrollListener.current);
    };
  }, []);

  /* GSAP Navbar Animation */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      "#navbar .logo",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        "#navbar .route-wrapper .route",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        "#navbar .socials",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      );

    return () => tl.kill();
  }, []);

  /* Navbar Background */
  const getNavbarBg = () =>
    drop
      ? convertHexToRgba(
          getComputedStyle(document.documentElement).getPropertyValue("--bg-base"),
          0.85
        )
      : "transparent";

  /* Handle Navigation (important fix) */
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        id="navbar"
        className={drop ? "blur drop" : ""}
        style={{ background: getNavbarBg() }}
      >
        {/* Logo */}
        <SHASAALogo
          className="logo"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              scroll.scrollToTop();
            }
          }}
        />

        {/* Routes */}
        <div className="route-wrapper">
          {navRoutes.map((route) => (
            <ScrollLink
              key={route.id}
              to={route.id}
              className="route"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNavClick(route.id)}
            >
              {route.name}
            </ScrollLink>
          ))}
        </div>

        {/* Social Icons */}
        <Socials className="socials" />

        {/* Mobile Menu */}
        <button
          className="menu"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <CgMenuRight />
        </button>
      </nav>
    </>
  );
};

export default Navbar;