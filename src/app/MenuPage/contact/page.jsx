import React from 'react';
import Header from '@/Components/header';
import './contact.css'; // Link to the CSS file

export default function Contact() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="contact-hero">
        <h1 className="hero-title">Contact Us</h1>
        <p className="hero-description">
          Have questions, feedback, or need guidance? We're here for you — every step of the way.
        </p>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Column */}
          <div className="contact-form">
            <h2 className="form-title">Send Us a Message</h2>
            <form className="form-fields">
              <input type="text" placeholder="Your Name" className="input-field" />
              <input type="email" placeholder="Your Email" className="input-field" />
              <textarea rows="5" placeholder="Your Message" className="input-field" />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>

          {/* Right Column */}
          <div className="contact-info">
            <h2 className="info-title">Get in Touch</h2>
            <p className="info-description">Have questions about our programs or your career path?</p>
            <ul className="info-list">
              <li><strong>Email:</strong> bkushwah4321@gmail.com</li>
              <li><strong>Phone:</strong> +91 9285022678</li>
              <li><strong>Address:</strong> Career Coaching, Lasudliya Ramnath, Kurawar, Madhya Pradesh, India</li>
            </ul>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.3504119065271!2d77.02921900637494!3d23.52198693449231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c83005b171031%3A0x5ef27548138c5755!2sCareer%20Coaching!5e0!3m2!1sen!2sin!4v1748847602648!5m2!1sen!2sin" 
                
                width="100%"
                height="200"
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        © {new Date().getFullYear()} Career Coaching. All rights reserved.
      </footer>
    </div>
  );
}
