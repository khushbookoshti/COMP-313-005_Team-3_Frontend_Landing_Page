import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/AILogo.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

// Home Page: This component represents the home page of the website.
// It showcases the AI Video Summarizer feature, providing users with a brief description and an option to get started.
const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />
      {/* Banner Section */}
      <div className="home-banner-container">
        {/* Banner Background Image */}
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        {/* Text Section */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            The AI Video Summarizer
          </h1>
          <p className="primary-text">
            Extract the essence of your videos. 
            Automatically generate concise and informative summaries from your video content using our advanced AI technology.
          </p>
          {/* Get Started Button */}
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        {/* Image Section */}
        <div className="home-image-section">
          <img
            src={BannerImage}
            alt=""
            style={{
              borderRadius: '50%', // Make the image circular
              width: '500px', // Adjust width as needed
              height: '500px', // Adjust height as needed 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
