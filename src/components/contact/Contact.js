import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";

function Contact() {
  const formRef = useRef();
  const [done] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sovq3qk",
        "template_hhr75cl",
        formRef.current,
        "uPnmQwpK5dNLijMcd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact-me">
      <h1 className="teamwork">"Teamwork makes the dream work"</h1>
      <section className="contact-us">
        <div className="contact-us-img"></div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="personal ">
            <div className="row">
              <input
                type="text"
                name="user-name"
                className="p-grey"
                placeholder="Your Name *"
                required
              />
            </div>
            <div className="row">
              <input
                type="email"
                name="user-email"
                className="p-grey"
                placeholder="Your Email *"
                required
              />
            </div>
            <div className="row">
              <input
                type="tel"
                name="user-subject"
                className="p-grey"
                placeholder="Subject"
                required
              />
            </div>
          </div>
          <div className="row message">
            <textarea
              name="user-message"
              id=""
              className="p-grey"
              cols="35"
              rows="10"
              required
            >
              Your Message *
            </textarea>
          </div>
          <div className="row">
            <button type="submit">SEND MESSAGE</button>
          </div>
          {done && "Thank you..."}
        </form>
      </section>

      <footer>
        <div className="copyright">
          <div className="contact-info">
            <div className="row">
              <img src={phone} alt="phone" />
              <span>+1(469)2384222</span>
            </div>
            <div className="row">
              <img src={email} alt="email" />
              <span
                className="email"
                onClick={() =>
                  (window.location = "mailto:asellwilliams@gmail.com")
                }
              >
                asellwilliams@gmail.com
              </span>
            </div>
            <div className="row">
              <img src={address} alt="phone" />
              <span>3810 Tranquility Lane, Rowlett, TX 75089</span>
            </div>
          </div>
          <div className="social">
            <div className="copyright-text">
              <h4 className="yellow underline">My social profile</h4>
            </div>

            <div className="media">
              <a
                href="https://github.com/aselwilliams"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-square-github fa-3x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/asel-williams-987574246/"
                className="linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/1GW2dOjE8Rblx_SxQ4zWoHcl-LAjBRdw9/view"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-sharp fa-solid fa-id-card fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
