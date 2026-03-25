import "./Vlog.css";
import { useEffect, useRef } from "react";


// ✅ IMPORT VIDEO FROM ASSETS
import promoVideo from "../../assets/services/shape.mp4";

const Vlog = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (!video) return;

      const rect = video.getBoundingClientRect();
      const isVisible =
        rect.top >= 0 && rect.top <= window.innerHeight / 1.3;

      if (isVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="moments-section">
      <div className="container">

        <div className="section-header">
          <h3>Our Vlog</h3>
          <h2>Watch Our Activities</h2>
        </div>

        <div className="vlog-video-wrapper">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            controls
          >
            <source src={promoVideo} type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
};

export default Vlog;