import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contactLanding">
        <Navbar />
        <div class="contact-landing">
          <img src={require("../assets/imgs/contact_bg.png")} alt="" />
          <h1>
            Want to know more about
            <br />
            Hound e-bikes?
          </h1>
          <br />
          <br />

          <h2>Let’s talk.</h2>
        </div>
      </div>

      <div class="contact-container">
        <div class="contact-left-cont">
          <div id="our_offices">
            <h1>Our Offices</h1>
            <p>
              Hound Mobility Ltd. <br />
              77 Holyhead Road,Birmingham, <br />
              England - B210LG
            </p>
          </div>
          <div id="our_phone">
            <h1>Phone No.</h1>
            <p>+91 12345 12345</p>
          </div>
          <div id="our_email">
            <h1>Email</h1>
            <p>wecare@houndmobility.com</p>
          </div>
        </div>
        <div class="contact-right-cont">
          <div class="form-containter">
            <h3>Reach out to us</h3>
            <div class="message_box"></div>
            <form name="contactForm" method="post" action="">
              <div id="contact_name">
                <div id="firstN">
                  <label for="first_name">
                    First Name <span></span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="firstname"
                    required
                  />
                </div>
                <div>
                  <label for="second_name">
                    Last Name <span></span>{" "}
                  </label>
                  <input
                    type="text"
                    id="second_name"
                    name="secondname"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="email">
                  Business Email <span></span>
                </label>
                <input type="email" id="email" name="email" required />
              </div>

              <label for="country">
                Country/Region <span></span>
              </label>
              <input type="text" id="country" name="country" required />

              <label for="company">
                Company <span></span>
              </label>
              <input type="text" id="company" name="company" required />

              <label for="job_title">
                Message<span></span>
              </label>
              {/* <!-- <input type="text" id="job_title" name="job_title" required /> --> */}
              {/* <!-- <br> --> */}
              <textarea row="5" name="description">
                {" "}
              </textarea>

              <br />

              <label for="number">
                Phone Number <span></span>
              </label>
              <input type="tel" id="number" name="number" required />

              <button type="submit" class="btn contact-btn">
                <p>Enter</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
