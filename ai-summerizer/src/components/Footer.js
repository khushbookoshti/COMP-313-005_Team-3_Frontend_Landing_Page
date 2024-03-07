import React from "react";
//import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        
        <h1 style={{
            color: "#E56908",
            fontWeight: "bold",
        }}>Notiv AI.</h1>

  
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          {/* <span>Qualtiy</span> */}
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>123-456-7890</span>
          <span>hello@notivai.com</span>
          <span>press@notivai.com</span>
          <span>contact@notivai.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <footer className="footer-section-columns">
        <p>&copy; {new Date().getFullYear()} Notiv AI. COMP 313-005 Team-3 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
