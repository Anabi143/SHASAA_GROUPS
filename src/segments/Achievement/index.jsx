import { useRef, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./Achievement.css";

const Achievement = () => {

  const container = useRef(null);

  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [projects, setProjects] = useState(0);

  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        once: true,
        onEnter: () => {

          setTimeout(() => {
            setClients(200);
            setSatisfaction(98);
            setProjects(500);
          }, 500);

        }
      }
    })
    .fromTo(
      "#achievement .achievement",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );

  }, { scope: container });


  return (
    <section id="achievement" ref={container}>
      <div className="container">

        <div className="achievement">
          <p className="sub-title">Trusted By</p>
          <Odometer value={clients} className="title" />
          <p className="sub-title">Clients</p>
          <p className="description">
            Building lasting partnerships through reliable IT services.
          </p>
        </div>

        <div className="achievement">
          <p className="sub-title">Client</p>
          <Odometer value={satisfaction} className="title" />
          <p className="sub-title">Satisfaction</p>
          <p className="description">
            Delivering IT solutions that boost productivity.
          </p>
        </div>

        <div className="achievement">
          <p className="sub-title">Projects</p>
          <Odometer value={projects} className="title" />
          <p className="sub-title">Delivered</p>
          <p className="description">
            Delivered robust IT systems for businesses worldwide.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievement;