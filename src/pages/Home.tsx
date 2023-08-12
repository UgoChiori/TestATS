import React from "react";
import "./home.css"

// type Props = {}

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        ATS is a job application tracking system that allows you to keep track
        of your job applications.
      </p>

      <h2>Features</h2>
      <ul>
        <li>View job listings</li>
        <li>Apply to job listings</li>
        <li>View job applications</li>
        <li>View job application status</li>
      </ul>

      <h2>Reduce Hiring Time</h2>
      <p>
        ATS allows you to keep track of your job applications so you can spend
        less time applying to jobs and more time interviewing.
      </p>

      <h2>Get Organized</h2>
        <p> ATS allows you to keep track of your job applications so you can spend less time applying to jobs and more time interviewing.</p>

        <h2>Stay Motivated</h2>
        <p>ATS allows you to keep track of your job applications so you can spend less time applying to jobs and more time interviewing.</p>

        <h2>Get Hired</h2>
        <p>ATS allows you to keep track of your job applications so you can spend less time applying to jobs and more time interviewing.</p>


        <h2>How It Works</h2>
        <p>Register</p>
        <p>Sign In</p>
        <p>View Job Listings</p>
        <p>Apply to Job Listings</p>
        <p>View Job Applications</p>
        <p>View Job Application Status</p>

      <h2>Get Started</h2>
      <p>Sign up for an account to get started.</p>
      <button>Sign Up</button>
      <p>Already have an account? Sign in.</p>
      <button>Sign In</button>

      <h2>Questions?</h2>
      <p>Check out our FAQ page.</p>
      <button>FAQ</button>

      <h2>Need Help?</h2>
      <p>Contact us.</p>
      <button>Contact Us</button>

      <h2>Follow Us</h2>
      <div className="social-media">
      <a href="#">Twitter</a>
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      </div>


      <h3>Legal</h3>
     <div className="footer-links">
      <a href="#">Terms of Service</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookie Policy</a>
      <a href="#">Do Not Sell My Personal Information</a>
      <a href="#">Accessibility</a>
      <a href="#">Sitemap</a>
      <a href="#">© 2021 ATS</a>
     </div>
    </div>
  );
};

export default Home;
