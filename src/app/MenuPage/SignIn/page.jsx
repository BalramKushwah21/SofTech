'use client';
import { useState } from "react";
import './SignIn.css';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signin-wrapper">
      <main className="signin-main">
        <div className="signin-card">
          <h1 className="signin-title">Welcome Back 👋</h1>
          <p className="signin-subtitle">Sign in to access your dashboard</p>

          <form className="signin-form">
            <div>
              <label className="signin-label">Email</label>
              <input
                type="email"
                required
                className="signin-input"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="signin-label">Password</label>
              <div className="signin-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="signin-input signin-password-input"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="signin-toggle-password"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className="signin-utility">
              <label className="signin-checkbox-label">
                <input type="checkbox" className="signin-checkbox" />
                Remember me
              </label>
              <a href="#" className="signin-forgot">Forgot password?</a>
            </div>

            <button type="submit" className="signin-submit">
              Sign In
            </button>
          </form>

          <p className="signin-footer-text">
            Don’t have an account?{" "}
            <a href="/MenuPage/SignUp" className="signin-signup-link">
              Sign up
            </a>
          </p>
        </div>
      </main>

      <footer className="signin-footer">
        © {new Date().getFullYear()} Career Coaching. All rights reserved.
      </footer>
    </div>
  );
}
