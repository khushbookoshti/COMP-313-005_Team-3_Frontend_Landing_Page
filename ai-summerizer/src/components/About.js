import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/AI.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" 
        style={{
            borderRadius: '50%', // This will make the image circular
            width: '500px', // Adjust width as needed
            height: '500px', // Adjust height as needed 
        }}
        />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        AI Video Summarizer
        </h1>
        <p className="primary-text" style={{
            }}>
          Summarize video content with AI-powered tools.
        </p>
        <p className="primary-text">
        Save time by quickly accessing key points in videos.
        </p>
        <p className="primary-text">
        Improve learning experiences with concise video summaries.   
        </p>
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
