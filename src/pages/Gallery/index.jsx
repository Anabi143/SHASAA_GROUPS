import "./Gallery.css";
import Navbar from "../../segments/Navbar";
import Footer from "../../segments/Footer";

import img1 from "../../assets/gallery/img1.png";
import img2 from "../../assets/gallery/img2.png";
import img3 from "../../assets/gallery/img3.png";
import img4 from "../../assets/gallery/img4.jpeg";
import img5 from "../../assets/gallery/img5.jpeg";
import img6 from "../../assets/gallery/img6.jpeg";
import img7 from "../../assets/gallery/img7.jpeg";
import img8 from "../../assets/gallery/img8.jpeg";
import img9 from "../../assets/gallery/img9.jpeg";

import { useEffect } from "react";
import gsap from "gsap";

const galleryImages = [
  {
    image: img1,

  },
  {
    image: img2,

  },
  {
    image: img3,

  },
  {
    image: img4,
  },
  {
    image: img5,
  },
    {
    image: img6,
  },
    {
    image: img7,
  },
  {
    image: img8,
  },
    {
    image: img9,
  },
];

const Gallery = () => {

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Header Animation
    tl.fromTo(
      ".section-header h3",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
    .fromTo(
      ".section-header h2",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    )

    // Cards Animation
    .fromTo(
      ".gallery-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2
      },
      "-=0.2"
    )

    // Highlight Section
    .fromTo(
      ".gallery-highlight h2",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
    .fromTo(
      ".gallery-highlight p",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(
      ".highlight-btn",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4 }
    );

  }, []);

  return (
    <>
      <Navbar />

      <section id="gallery">
        <div className="container">

          <div className="section-header">
            <h3>Our Gallery</h3>
            <h2>Moments from SHASAA GROUP</h2>
          </div>

          <div className="gallery-grid">

            {galleryImages.map((item, index) => (
              <div className="gallery-card" key={index}>

                <img src={item.image} alt={item.title} />

                <div className="gallery-content">

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="gallery-highlight">
        <div className="container">

          <h2>Be Part of Our Journey</h2>

          <p>
            SHASAA GROUP continues to create opportunities through
            training programs, industry workshops, and career events.
            Join us and be part of our growing community.
          </p>

          <a href="/" className="highlight-btn">
            Explore Our Programs
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;