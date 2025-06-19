'use client';
import { useState } from "react";
import './SignUp.css';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="signup-wrapper">
      <main className="signup-main">
        <div className="signup-card">
          <h1 className="signup-title">Create an Account</h1>
          <p className="signup-subtitle">
            Join Career Coaching and unlock your learning journey
          </p>

          <form className="signup-form">
            <div>
              <label className="signup-label">Full Name</label>
              <input
                type="text"
                required
                className="signup-input"
                placeholder="e.g. Aarav Sharma"
              />
            </div>

            <div>
              <label className="signup-label">Email</label>
              <input
                type="email"
                required
                className="signup-input"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="signup-label">Password</label>
              <div className="signup-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="signup-input signup-password-input"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="signup-toggle-password"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div>
              <label className="signup-label">Confirm Password</label>
              <div className="signup-password-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  className="signup-input signup-password-input"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="signup-toggle-password"
                >
                  {showConfirm ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button type="submit" className="signup-submit">
              Sign Up
            </button>
          </form>

          <p className="signup-footer-text">
            Already have an account?{" "}
            <a href="/MenuPage/SignIn" className="signup-signin-link">
              Sign in
            </a>
          </p>
        </div>
      </main>

      <footer className="signup-footer">
        © {new Date().getFullYear()} Career Coaching. All rights reserved.
      </footer>
    </div>
  );
}
