import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Moments.css";

gsap.registerPlugin(ScrollTrigger);

const Moments = ({ images = [] }) => {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    /* ---------------- GSAP ANIMATION ---------------- */
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".moment-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    /* ---------------- AUTO PLAY (MUTED) ---------------- */
    const handleScroll = () => {
      let activeVideo = null;

      videoRefs.current.forEach((video) => {
        if (!video) return;

        const rect = video.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 && rect.top <= window.innerHeight / 1.3;

        if (isVisible && !activeVideo) {
          activeVideo = video;
        }
      });

      videoRefs.current.forEach((video) => {
        if (!video) return;

        if (video === activeVideo) {
          video.muted = true; // 🔇 keep muted for autoplay
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    /* ---------------- FULLSCREEN SOUND CONTROL ---------------- */
    const handleFullscreenChange = () => {
      videoRefs.current.forEach((video) => {
        if (!video) return;

        if (document.fullscreenElement === video) {
          // 🔊 fullscreen → enable sound
          video.muted = false;
          video.volume = 1;
          video.play().catch(() => {});
        } else {
          // 🔇 exit fullscreen → mute again
          video.muted = true;
        }
      });
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <section id="moments"
    className="moments-section" ref={sectionRef}>
      <h2 className="moments-title">Our Moments</h2>

      <div className="moments-grid">
        {images?.map((item, index) => (
          <div className="moment-card" key={index}>

            {/* VIDEO */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="moment-media"
              src={item.src}
              muted
              loop
              playsInline
              controls   // ✅ default controls (includes fullscreen)
              preload="metadata"
            />

            {/* TEXT */}
            <div className="moment-text">

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Moments;