import React from "react";
import "./employers.css";

const Employers: React.FC = () => {
  return (
    <div>
      <h1>Let us help you find the best talent for your company!</h1>

      <h2>Features</h2>
      <h3>
        Step by step instructions to help you find the best talent for your
        organization.
      </h3>

      <div className="box-container">
        <div className="box">
          <h2>Sign Up</h2>
          <p>Sign up for an account to get started.</p>
          <p>Create your company account and start posting jobs.</p>
          <button>Sign Up</button>
        </div>

        <div className="box">
          <h2>Create Job Postings</h2>
          <p>
            Post your job listings. Add your job details and you are ready to
            post.
          </p>
        </div>
        <div className="box">
          <h2>Post Job</h2>
          <p>
            Submit your job listings, and we will post them for you, and connect
            you with the best talent.
          </p>
        </div>
      </div>
      <a href="#">View Plans</a>
      <footer>
        <p>Questions?</p>
        <button>FAQ</button>
        <p>Need Help?</p>
        <button>Contact Us</button>

      </footer>
    </div>
  );
};

export default Employers;
