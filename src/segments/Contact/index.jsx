import { contactInfo } from "../../data";
import { cssPerfectShape } from "../../util";
import Socials from "../../components/Socials";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
import "./Contact.css";

const Contact = () => {
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
          "#contact .contact-info-wrapper .contact-info",

        ],
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.5 }
      )
      .fromTo(
        [
          "#contact .socials .icon",

        ],
        { y: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.5 }
      )
      .fromTo(
        [
          "#contact form h2", "#contact form .description", "#contact form .control",
          "#contact form .btn"

        ],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.5 }
      );
  }, { scope: container });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      message: formData.get("message")
    };

    console.log(data);

    alert("Message Sent Successfully!");
    e.target.reset();
  };

  return (
    <section className="contact" id="contact" ref={container}>
      <div className="container">

        {/* Contact Info */}
        <div className="contact-info-wrapper">
          {contactInfo.map((info, index) => (
            <div className="contact-info" key={index}>

              <div
                className="icon"
                style={{ ...cssPerfectShape(70, 70) }}
              >
                <info.icon />
              </div>

              <div className="info">
                <h3>{info.title}</h3>
                <p className="description">{info.description}</p>
                <h4 className="value">{info.value}</h4>
              </div>

            </div>
          ))}

          <Socials />
        </div>

        {/* Contact Form */}
        <form action="https://formsubmit.co/shasaagroupstrichy@gmail.com" method="POST" >


        <div className="top">
          <h2>Get in Touch</h2>
          <p className="description">
            Have a project in mind or need expert advice? We're here to help!
            Reach out to our team for personalized consultations, inquiries,
            or to start your next big project today.
          </p>
        </div>

        <div className="middle">

          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            className="control"
            autoComplete="name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="control"
            autoComplete="email"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            className="control"
            autoComplete="tel"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="control"
            autoComplete="off"
            required
          ></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Contact Message from Website" />


        </div>

        <div className="bottom">
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </div>

      </form>

    </div>
    </section >
  );
};

export default Contact;