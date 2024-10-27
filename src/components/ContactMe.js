import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mzborobd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            email: "",
            message: "",
          });
        }, 3000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="rectangle3">
        <div className="title3">Contact Me</div>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="submit">
            <div className="submit-btn" type="submit">
              SUBMIT
            </div>
          </button>
        </form>
        {submitted && (
          <div className="submission-message">Message submitted!</div>
        )}
      </div>
    </section>
  );
};

export default ContactMe;
