import React from "react";

// Contact Page: This component represents the contact page of the website.
// It provides users with a form to submit their queries via email.
const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      {/* Main Heading */}
      <h1 className="primary-heading">Have Question In Mind?</h1>
      {/* Sub Heading */}
      <h1 className="primary-heading">Let Us Help You</h1>
      {/* Description */}
      <p className="primary-text"> Reach out to us through your e-mail.</p>
      {/* Contact Form */}
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
