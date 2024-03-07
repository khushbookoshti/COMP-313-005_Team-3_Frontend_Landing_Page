import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/AILogo.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" 
          />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          The AI Video Summarizer
          </h1>
          <p className="primary-text">
          Extract the essence of your videos. 
          Automatically generate concise and informative summaries from your video content using our advanced AI technology.
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" 
          style={{
          borderRadius: '50%', // This will make the image circular
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
