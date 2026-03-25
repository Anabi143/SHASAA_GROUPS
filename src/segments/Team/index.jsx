import "./Team.css";
import { teamMembers } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {

  const container = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom top",
      }
    })
    .fromTo(
      [
        "#team .section-header h3",
        "#team .section-header h2",
        "#team .team-card"
      ],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );

  }, { scope: container });

  /* Mouse spotlight effect */
  useEffect(() => {

    const cards = document.querySelectorAll("#team .team-card");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();

      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    cards.forEach(card => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };

  }, []);

  return (
    <section id="team" ref={container}>
      <div className="container">

        <div className="section-header">
          <h3>Our Team</h3>
          <h2>Meet Our Professionals</h2>
        </div>

        <div className="team-grid">

          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>

              <img src={member.image} alt={member.name} />

              {/* HOVER OVERLAY */}
              <div className="team-overlay">
                <h3>{member.name}</h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Team;