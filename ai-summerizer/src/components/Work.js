import React from "react";
import VideoIcon from "../Assets/videoicon.png";
import WrapText from "../Assets/wraptext.png";
import Summary from "../Assets/summary.png";

// Work Component: This component represents the work section of the website.
// It showcases how the AI Video Summarizer works by highlighting its key features.
const Work = () => {
  // Data for work section information
  const workInfoData = [
    {
      image: VideoIcon,
      title: "AI-powered video analysis",
      text: "Let our advanced algorithms analyze your video content to identify key moments.",
    },
    {
      image: WrapText,
      title: "Automated video summarization",
      text: "Our system automatically generates a concise transcript of your video. ",
    },
    {
      image: Summary,
      title: "Rapid review Summary",
      text: "Users can quickly scan through the content to get an overview summary of the video's highlights.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      {/* Top Section */}
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          The AI Video Summarizer comes with powerful features to help you extract the essence of your videos.
        </p>
      </div>
      {/* Bottom Section */}
      <div className="work-section-bottom">
        {/* Mapping through work information data */}
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            {/* Image Container */}
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            {/* Title */}
            <h2>{data.title}</h2>
            {/* Text */}
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
