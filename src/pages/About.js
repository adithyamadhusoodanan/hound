import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./About.css";

function About() {
  // const [isActive, setActive] = useState(false);

  // const showFAQ = () => {
  //   setActive(!isActive);

  //   if isActive{

  //   }
  // };

  // function showFAQ() {
  //   var acc = document.getElementsByClassName("accordion");
  //   var i;
  //   console.log(acc, typeof acc, acc[1]);
  //   acc.map((k) => {
  //     this.classList.toggle("active");
  //     var panel = this.nextElementSibling;
  //     if (panel.style.maxHeight) {
  //       panel.style.maxHeight = null;
  //     } else {
  //       panel.style.maxHeight = panel.scrollHeight + "px";
  //     }
  //   });

  // for (i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function () {
  //   this.classList.toggle("active");
  //   var panel = this.nextElementSibling;
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;
  //   } else {
  //     panel.style.maxHeight = panel.scrollHeight + "px";
  //   }
  //   });
  // }
  // }

  return (
    <div>
      <div className="aboutLanding">
        <Navbar logoColor="green" />
        <div class="about-landing">
          <img src={require("../assets/imgs/about_bg2.png")} alt="" />
          <h1>
            Rewriting the future of
            <br />
            personal mobility
          </h1>
          <p>
            Hound is a team of passionate engineers, designers and riders,
            united by the vision to revolutionize the way humans move. We use
            technology, creativity and real human insights to redefine personal
            mobility. The result: fully-loaded e-bikes powered by Human Sense.
          </p>
        </div>
      </div>

      <div class="story-container">
        <div class="left-split">
          <img
            className="imageA"
            src={require("../assets/imgs/Rectangle 157.png")}
            alt=""
          />
          <img
            className="imageB"
            src={require("../assets/imgs/Rectangle 157 (2).png")}
            alt=""
          />
        </div>
        {/* <!-- <div class="right-split"> --> */}
        <div class="right-text-cont">
          <h1>
            Powered by
            <br />
            Human Sense
          </h1>
          <p>
            At Hound, we study how humans interact with e-bikes and use these
            insights to build better e-bikes. E-bikes that make urban mobility -
            smarter, simpler & stylish. We call this philosophy Human Sense.
            <br />
            <br />
            Humans Sense made us seek out real human insights to understand how
            human beings interface with bikes.
          </p>
        </div>
        {/* <!-- </div> --> */}
      </div>

      {/* <!-- Team Gallery --> */}

      <div class="team galleryContainer">
        <div class="galleryItem">
          <img src={require("../assets/imgs/teams/team1.png")} alt="" />
          <div class="gallery-item-text">
            <h1>Name 1</h1>
            <button class="btn gallery-btn">
              <Link to="#">Know More</Link>
            </button>
          </div>
        </div>
        <div class="galleryItem item1">
          <img src={require("../assets/imgs/teams/team2.png")} alt="" />
        </div>
        <div class="galleryItem item1">
          <img src={require("../assets/imgs/teams/team3.png")} alt="" />
        </div>
        <div class="galleryItem item1">
          <img src={require("../assets/imgs/teams/team4.png")} alt="" />
        </div>
        <div class="galleryItem item1">
          <img src={require("../assets/imgs/teams/team5.png")} alt="" />
        </div>
        <div class="galleryItem item1">
          <img src={require("../assets/imgs/teams/team6.png")} alt="" />
        </div>
      </div>

      <div class="about-faq-container">
        <div class="faq-left-split">
          <div class="faq-title">
            <h1>FAQs</h1>
          </div>
          <div class="faq-cont">
            <button class="accordion">ABOUT US</button>
            <div class="panel">
              <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">ABOUT ELECTRIC</button>
            <div class="panel">
              <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">ABOUT N1</button>
            <div class="panel">
              <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">ABOUT N2</button>
            <div class="panel">
              <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">ABOUT INDIEGOGO</button>
            <div class="panel">
              <p>Lorem ipsum...</p>
            </div>
          </div>
        </div>
        <div class="faq-right-split">
          <p>Wanna know more?</p>
          <button class="btn gallery-btn faq-btn">
            <a href="#"> Download PDF </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
