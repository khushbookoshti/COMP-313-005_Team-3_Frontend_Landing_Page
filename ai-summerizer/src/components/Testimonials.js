import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

// Testimonial Component: This component represents the testimonial section of the website.
// It showcases user testimonials regarding the AI Video Summarizer tool.
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      {/* Top Section */}
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          See what our users have to say about the AI Video Summarizer.
        </p>
      </div>
      {/* Bottom Section */}
      <div className="testimonial-section-bottom">
        {/* Profile Picture */}
        <img src={ProfilePic} alt="" />
        {/* Testimonial Text */}
        <p>
          The AI Video Summarizer has been a game-changer for me. As a student, I often need to watch long videos to find the major key points in order to pass my tests. 
          This tool makes the process so much easier. 
          The summaries are accurate and save me a lot of time. I highly recommend it!
        </p>
        {/* Star Ratings */}
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        {/* Testimonial Author */}
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
