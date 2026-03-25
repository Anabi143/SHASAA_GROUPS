import "./Footer.css";
import SHASAALogo from "../../components/SHASAALogo";
import Socials from "../../components/Socials";
import { footer, contactInfo } from "../../data";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

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
        ".newsletter h2",
        ".newsletter p",
        ".newsletter .subscribe",
        ".box-wrapper .box",
      ],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );

  }, { scope: container });

  return (
    <footer ref={container}>

      <div className="container">

        {/* NEWSLETTER */}
<section className="newsletter">
  <h2>NEWSLETTER</h2>

  <p>
    Keep up with our latest news and events. Subscribe to our newsletter
  </p>

  <form
    action="https://formsubmit.co/shasaagroupstrichy@gmail.com"
    method="POST"
    className="subscribe"
  >
    <input
      type="email"
      name="email"
      placeholder="Enter your email address"
      autoComplete="email"
      required
    />

    {/* Hidden Config */}
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_subject" value="New Newsletter Subscription" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />

    {/* Optional redirect after submit */}
    <input type="hidden" name="_next" value="http://localhost:5173/" />

    <button type="submit">Join</button>
  </form>
</section>

        {/* FOOTER BOXES */}
        <section className="box-wrapper">

          {/* LOGO */}
          <div className="box">
            <SHASAALogo />
            <p>
              Innovating IT solutions for business transformation.
            </p>
            <Socials />
          </div>

          {/* ROUTES */}
          {footer.map((list, index) => (
            <div className="box" key={index}>
              <h3 className="title">{list.title}</h3>

              <div className="routes">
                {list.subRoutes.map((route, index) => {
              const isSection = !route.id.startsWith("/");

              return (
                <Link
                  to={isSection ? `/#${route.id}` : route.id}
                  className="route"
                  key={index}
                >
                  {route.title}
                </Link>
              );
            })}
              </div>

            </div>
          ))}

          {/* CONTACT */}
          <div className="box">
            <h3 className="title">Contact Details</h3>

            {contactInfo.map((info, index) => (
              <div className="route contact" key={index}>

                <div className="icon">
                  <info.icon />
                </div>

                <p>{info.value}</p>

              </div>
            ))}
          </div>

        </section>

      </div>

      {/* COPYRIGHT */}

      <div className="footer-bottom">
        <p className="copyright">
          © 2022 SHASAA Groups. All Rights Reserved.
        </p>

        <div className="footer-links">
  <Link to="/privacy-policy">Privacy Policy</Link>
  <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;