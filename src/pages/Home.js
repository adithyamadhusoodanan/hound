import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires Link loader
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="homeLanding">
        <Navbar logoColor="black" />
        <div className="carousel-landing">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={require("../assets/imgs/bg1.png")} alt="" />
            </div>
            <div>
              <img src={require("../assets/imgs/bg2.jpg")} alt="" />
            </div>
          </Carousel>
        </div>
        <div class="sideline">
          <p>Powered by Human Sense</p>
        </div>
        <div class="messageBox">
          <div class="messageBoxContainer" id="msg1">
            <p>
              Be Link part of the future of urban mobility. Get your hands on
              Link feature-loaded Hound e-bike. Join the revolution.
            </p>
            <button class="btn">
              <Link to="#"> Find us on Indiegogo </Link>
            </button>
          </div>
        </div>
      </div>

      <div class="bikesMain">
        <div class="bikesTitle">
          <h1>
            Powered by <br />
            Human Sense
          </h1>
        </div>
        <div class="videoContainer">
          <img src={require("../assets/vids/vidpreview.JPG")} alt="" />
        </div>
        <div class="bikeSplitContainer">
          <div class="bikeCard" id="citybike">
            <div class="cardImg">
              <Link to="">
                <img src={require("../assets/imgs/rb_bg.png")} alt="" />
              </Link>
            </div>
            <div class="cardContent">
              <h1>N1</h1>
              <p>
                Hound N1 is an extremely lightweight race-inspired e-bike. Built
                over an aerodynamically superior aerospace-aluminum frame, it’s
                packed with high-performance parts powered by Link rear hub
                motor drive with Link single-speed carbon belt drive system. The
                perfect ride for speed lovers.
              </p>
              <button class="btn bikes-btn">
                <Link to="#"> know more </Link>
              </button>
            </div>
          </div>
          <div class="bikeCard" id="citybike">
            <div class="cardImg">
              <Link to="">
                <img src={require("../assets/imgs/cb_bg.png")} alt="" />
              </Link>
            </div>
            <div class="cardContent">
              <h1>N2</h1>
              <p>
                Hound N2 is Link lightweight e-bike that’s effortlessly
                maneuverable through the city. Its ergonomic designed seat and
                handle-bar offers comfort for the long haul. The aluminium alloy
                frame and high-torque rear hub motor with Link single-speed
                carbon belt drive system make it perfect for everyday urban
                commute.
              </p>
              <button class="btn bikes-btn">
                <Link to="#"> know more </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- indicator --> */}
      <div class="indicator">
        <div class="indicator-img">
          <Link to="">
            <img
              src={require("../assets/imgs/Indicator both sides 3 2.png")}
              alt=""
            />
          </Link>
        </div>
        <div class="indicator-content">
          <h1>Navigate with ease</h1>
          <h2>Built-in turn indicators</h2>
          <div id="indicator-text">
            The high density of traffic leaves no room for hand signals. So it
            only made Human Sense to design built-in turn indicators to make
            city navigation easier and safer.
          </div>
          <div class="indicator-button btn">
            <button>
              <Link to="#"> know more </Link>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Image Gallery --> */}

      <div class="galleryContainer">
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_01.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_02.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_03.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_04.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_05.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_06.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_07.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_08.jpg")} alt="" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
