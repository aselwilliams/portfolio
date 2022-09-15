import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import minimalism from "../images/minimalism.jpg";
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

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
      <section class="contact-us">
        {/* <div class="contact-us-head"> */}

        {/* <p class="p-grey"><em>Lorem ipsum dolor sit consectetur adipisicing.</em></p> */}
        {/* </div> */}
        <div class="contact-us-img">
          {/* <img src={minimalism} alt='abstract' class/> */}
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div class="personal ">
            <div class="row">
              <input
                type="text"
                name="user-name"
                class="p-grey"
                placeholder="Your Name *"
                required
              />
            </div>
            <div class="row">
              <input
                type="email"
                name="user-email"
                class="p-grey"
                placeholder="Your Email *"
                required
              />
            </div>
            <div class="row">
              <input
                type="tel"
                name="user-subject"
                class="p-grey"
                placeholder="Subject"
                required
              />
            </div>
          </div>
          <div class="row message">
            <textarea
              name="user-message"
              id=""
              class="p-grey"
              cols="35"
              rows="10"
              required
            >
              Your Message *
            </textarea>
          </div>
          <div class="row">
            <button type="submit">SEND MESSAGE</button>
          </div>
          {done && "Thank you..."}
        </form>
      </section>

      <footer>
        <div class="copyright">
          {/* <div className='footer-bg'>
          <img src={minimalism} alt='abstract'/>
          </div> */}

          <div className="contact-info">
            <div className="row">
              <img src={phone} alt="phone" />
              <span>+1(469)2384222</span>
            </div>
            <div className="row">
              <img src={email} alt="email" />
              <span className='email' onClick={() => window.location = 'mailto:asellwilliams@gmail.com'}>asellwilliams@gmail.com</span>
            </div>
            <div className="row">
              <img src={address} alt="phone" />
              <span>3810 Tranquility Lane, Rowlett, TX 75089</span>
            </div>
          </div>
          <div className="social">
            <div class="copyright-text">
              <h4 class="yellow underline">My social profile</h4>
            </div>

            <div class="media">
              <a href="https://github.com/aselwilliams" target="_blank">
                <i class="fa-brands fa-square-github fa-3x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/asel-williams-987574246/"
                class="linkedin" target="_blank"
              >
                <i class="fab fa-linkedin fa-3x"></i>
              </a>
              <a href="https://drive.google.com/file/d/1pKHc4PIX0eVaF4NBN-9GrcUJ2GCjH58D/view" target="_blank">
                <i class="fa-sharp fa-solid fa-id-card fa-3x"></i>
              </a>
            </div>
          </div>

          {/* <ul>
                <li><a href="#" class="yellow underline">Privacy Policy</a></li>
                <li><a href="#" class="yellow underline">Terms of Use</a></li>
            </ul> */}
        </div>
      </footer>
    </div>
    // <div className='c'>
    //     <div className="c-bg"></div>
    //     <div className="c-wrapper">
    //         <div className="c-left">
    //             <h1 className="c-title">Contact Me</h1>
    //             <div className="c-info">
    //             <div className="c-info-item">
    //           <img src={Phone} alt="" className="c-icon" />
    //           +1 1234 556 75
    //         </div>
    //         <div className="c-info-item">
    //           <img className="c-icon" src={Email} alt="" />
    //           asellwilliams@gmail.com
    //         </div>
    //         <div className="c-info-item">
    //           <img className="c-icon" src={Address} alt="" />
    //           Rowlet, Texas
    //         </div>
    //             </div>
    //         </div>
    //         <div className="c-right">
    //         <p className="c-desc">
    //         <b>What’s your story?</b> Get in touch. Always available for
    //         freelancing if the right project comes along. me.
    //       </p>
    //       <form ref={formRef} onSubmit={handleSubmit}>
    //         <input  type="text" placeholder="Name" name="user_name" />
    //         <input  type="text" placeholder="Subject" name="user_subject" />
    //         <input  type="text" placeholder="Email" name="user_email" />
    //         <textarea  rows="5" placeholder="Message" name="message" />
    //         <button>Submit</button>
    //         {/* {done && "Thank you..."} */}
    //       </form>
    //         </div>
    //     </div>
    // </div>
  );
}

export default Contact;
