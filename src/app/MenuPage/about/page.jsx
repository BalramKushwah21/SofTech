import React from 'react';
import Header from '@/Components/header';
import './about.css';

export default function About() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">
          About <span className="highlight">Career Coaching</span>
        </h1>
        <p className="about-subtitle">
          We believe that every student holds a spark — a spark that needs the right guidance, mentorship, and direction to become a blazing fire of potential.
        </p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2 className="section-heading">Our Story</h2>
        <div className="section-content">
          <p>
            Born from the dream of passionate educators, Career Coaching began with a simple mission:
            to help students not only <strong>learn</strong> but also <strong>understand</strong> — to navigate their school years
            with confidence and clarity.
          </p>
          <p>
            We've seen firsthand the confusion, the fear of choosing the wrong path, and the pressure
            of board exams. And so, we created a space where students from <strong>Class 8th to 12th</strong> can find
            trusted support — be it academic coaching, stream selection, or career advice.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-values">
        <h2 className="section-heading">Our Mission & Values</h2>
        <div className="card-grid">
          <div className="card">
            <h3 className="card-title">📚 Education First</h3>
            <p>We prioritize clarity, depth, and understanding over rote learning and shortcuts.</p>
          </div>
          <div className="card">
            <h3 className="card-title">💡 Guidance with Heart</h3>
            <p>Every student matters. Our mentors bring not just knowledge, but compassion and care.</p>
          </div>
          <div className="card">
            <h3 className="card-title">🛤️ Future Ready</h3>
            <p>We help students prepare for the world ahead — whether it’s JEE, NEET, CUET, or beyond.</p>
          </div>
        </div>
      </section>

      {/* Meet the Mentors */}
      <section className="about-mentors">
        <h2 className="section-heading">Meet the Mentors</h2>
        <p className="section-subtext">
          Our mentors are experienced educators, subject matter experts, and above all — compassionate guides who believe in shaping lives.
        </p>
        <div className="card-grid mentors">
          <div className="mentor-card">
            <h3 className="card-title">Mr. Deepak Solanki</h3>
            <p>Physics Mentor | 5+ Years of Experience</p>
          </div>
          <div className="mentor-card">
            <h3 className="card-title">Mr. Balram Kushwah</h3>
            <p>Career Counselor | Ex-CBSE Board Panelist</p>
          </div>
          <div className="mentor-card">
            <h3 className="card-title">Mr. Manoj Dewda</h3>
            <p>Mathematics Mentor | IIT Alumni</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2 className="cta-title">Let’s Build Your Future</h2>
        <p className="cta-subtext">Join a community that believes in you. Because your journey matters.</p>
        <a href="/menu-page/sign-up" className="cta-button">
          Sign Up Today
        </a>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        © {new Date().getFullYear()} Career Coaching. All rights reserved.
      </footer>
    </div>
  );
}
