import React, { useState } from "react";
import Modal from "react-modal";
import MyForm from "../components/Form";
import "./jobs.css";
import mockJobListings from "../components/JobData";

// Mock data for job listings

Modal.setAppElement("#root");

const JobListings: React.FC = () => {
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const handleApplyClick = (jobId: number) => {
    setSelectedJobId(jobId);
  };

  const handleCloseForm = () => {
    setSelectedJobId(null);
  };

  return (
    <div>
      <h1>Job Listings</h1>
      <div className="job-posting-container">
        {mockJobListings.map((jobListing) => (
          <div className="job-box" key={jobListing.id}>
            <h2>{jobListing.title}</h2>
            <h3>{jobListing.company}</h3>
            <h3>{jobListing.location}</h3>
            <p>{jobListing.description}</p>
            <button onClick={() => handleApplyClick(jobListing.id)}>
              Apply
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedJobId !== null}
        onRequestClose={handleCloseForm}
        contentLabel="Job Application Form"
      >
        {selectedJobId !== null && <MyForm onClose={handleCloseForm} />}
      </Modal>
    </div>
  );
};

export default JobListings;
