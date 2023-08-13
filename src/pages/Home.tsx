import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1 className="header-title">Welcome to ATS</h1>
        <p className="header-description">
          Keep track of your job applications and streamline your hiring process.
        </p>
      </header>

      <section className="features">
        <h2>Why Choose ATS?</h2>
        <p className="feature-description">
          ATS helps you manage job applications efficiently, allowing you to focus on interviews and landing your dream job.
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul className="feature-list">
          <li>View job listings</li>
          <li>Apply to job listings</li>
          <li>Track job applications</li>
          <li>Monitor application status</li>
        </ul>
      </section>

      <section className="benefits">
        <div className="benefit">
          <h2>Save Time</h2>
          <p>Streamline your job application process and save valuable time.</p>
        </div>
        <div className="benefit">
          <h2>Stay Organized</h2>
          <p>Organize your job applications and stay on top of your progress.</p>
        </div>
        <div className="benefit">
          <h2>Get Hired</h2>
          <p>Enhance your chances of getting hired with better application management.</p>
        </div>
      </section>

      <section className="get-started">
        <h2>Get Started Today</h2>
        <p>Sign up for an account to get started on your job search journey.</p>
        <div className="get-started-buttons">
          <button className="sign-up-button">Sign Up</button>
          <button className="sign-in-button">Sign In</button>
        </div>
      </section>

      <section className="contact">
        <h2>Have Questions?</h2>
        <p>Check out our FAQ page for answers to common inquiries.</p>
        <button className="faq-button">FAQ</button>
      </section>

      <section className="contact">
        <h2>Need Help?</h2>
        <p>Contact our support team for assistance.</p>
        <button className="contact-button">Contact Us</button>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-media-links">
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
        </div>
      </section>

      <footer>
        <h3>Legal</h3>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Do Not Sell My Personal Information</a>
          <a href="#">Accessibility</a>
          <a href="#">Sitemap</a>
          <a href="#">© 2021 BAVARDE</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;