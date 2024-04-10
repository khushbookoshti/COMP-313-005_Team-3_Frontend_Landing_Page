import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/AI.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

// About Component
const About = () => {
  return (
    <div className="about-section-container">
      {/* Background Image Container */}
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      {/* Section Image Container */}
      <div className="about-section-image-container">
        <img
          src={AboutBackgroundImage}
          alt=""
          style={{
            borderRadius: '50%', // Make the image circular
            width: '500px', // Adjust width as needed
            height: '500px', // Adjust height as needed 
          }}
        />
      </div>
      {/* Text Container */}
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          AI Video Summarizer
        </h1>
        <p className="primary-text">
          Summarize video content with AI-powered tools.
        </p>
        <p className="primary-text">
          Save time by quickly accessing key points in videos.
        </p>
        <p className="primary-text">
          Improve learning experiences with concise video summaries.
        </p>
        {/* Buttons Container */}
        <div className="about-buttons-container">
          <button className="secondary-button">Pricing</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
