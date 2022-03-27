import React from "react";
import { Link } from "react-router-dom";
import ytIcon from "../assets/imgs/icons/youtube.svg";
import fbIcon from "../assets/imgs/icons/facebook.svg";
import igIcon from "../assets/imgs/icons/instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <div>
      {" "}
      <footer class="footer">
        <div class="footer-logo">
          <img
            id="footer-log"
            src={require("../assets/imgs/logo_green.png")}
            alt=""
          />
          <div class="footer-socials">
            <p>Follow us on</p>
            <div class="icons-cont">
              <Link to="">
                <img src={ytIcon} alt="" />
              </Link>
              <Link to="">
                <img src={fbIcon} alt="" />
              </Link>
              <Link to="">
                <img src={igIcon} alt="" />
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- <div class="footer-item-container"> --> */}
        <div class="footer-item">
          <h1>Company</h1>
          <Link to="/about">About Us</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div class="footer-item">
          <h1>Products</h1>
          <Link to="/citybike">City Bike</Link>
          <Link to="/citysport">City Sport</Link>
        </div>
        <div class="footer-item">
          <h1>Services</h1>
          <Link to="/accessories">Accessories</Link>
          <Link to="/kits">Kits</Link>
        </div>
        <div class="footer-item">
          <h1>Support</h1>
          <Link to="">Manuals</Link>
          <Link to="">Shipping & Delivery</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Refund Policy</Link>
        </div>
        {/* <!-- </div> --> */}
      </footer>
    </div>
  );
}

export default Footer;
