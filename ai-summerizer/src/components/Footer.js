import React from "react";
//import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

// Footer Component: This component represents the footer section of the website.
// It includes company information, social media icons, navigation links, contact details, and copyright information.
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        {/* Company Name */}
        <h1 style={{
            color: "#E56908",
            fontWeight: "bold",
        }}>Notiv AI.</h1>

        {/* Social Media Icons */}
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      {/* Navigation Links, Contact Details, and Legal Information */}
      <div className="footer-section-two">
        <div className="footer-section-columns">
          {/* Navigation Links */}
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          {/* Contact Details */}
          <span>123-456-7890</span>
          <span>hello@notivai.com</span>
          <span>press@notivai.com</span>
          <span>contact@notivai.com</span>
        </div>
        <div className="footer-section-columns">
          {/* Legal Information */}
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      {/* Copyright Information */}
      <footer className="footer-section-columns">
        <p>&copy; {new Date().getFullYear()} Notiv AI. COMP 313-005 Team-3 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
