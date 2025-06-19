import Image from "next/image";
import Header from "@/Components/header";
import './Home.css';

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero-section">
        <h1 className="hero-heading">
          Welcome to <span className="highlight">Career Coaching</span>
        </h1>
        <p className="hero-subtext">
          Guiding young minds from Class 8th to 12th — find the right path, master your subjects, and step boldly into your future.
        </p>
        <a href="/MenuPage/SignUp" className="cta-button">
          Get Started
        </a>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Class-Specific Coaching</h3>
            <p>Tailored lessons and practice materials for every class level — 8th to 12th.</p>
          </div>
          <div className="feature-card">
            <h3>Experienced Mentors</h3>
            <p>Learn from top educators with a proven track record in CBSE and state boards.</p>
          </div>
          <div className="feature-card">
            <h3>Career Guidance</h3>
            <p>Not just studies — we guide you towards the right stream, college, and career path.</p>
          </div>
        </div>
      </section>

      <section className="class-explore">
        <h2 className="section-title dark">Explore by Class</h2>
        <div className="class-grid">
          {["8th", "9th", "10th", "11th", "12th"].map(cls => (
            <a key={cls} href={`ClassPage/class${cls}`} className="class-card">
              Class {cls}
            </a>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Students Say</h2>
        <div className="testimonial-group">
          <div className="testimonial-card">
            <p>"Career Coaching helped me improve my confidence in Science & Maths. Loved the notes and videos!"</p>
            <span className="testimonial-author">— Aarav, Class 10th</span>
          </div>
          <div className="testimonial-card">
            <p>"I was confused between PCB and PCM. Their guidance made my career path so much clearer."</p>
            <span className="testimonial-author">— Meera, Class 11th</span>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <h2 className="section-title black">Ready to Begin?</h2>
        <p className="cta-subtext">Join thousands of students who’ve already found clarity and confidence.</p>
        <a href="/menu-page/sign-up" className="cta-dark-button">
          Sign Up Now
        </a>
      </section>
    </main>
  );
}
