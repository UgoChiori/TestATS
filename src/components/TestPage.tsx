import React, {useState} from "react";
// import MyForm from './Form';
import Modal from "react-modal";
import MyForm from "./Form";

//Sample mock data for job listings

Modal.setAppElement("#root")

interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  keywords: string[];
  description: string;
}

const mockJobListings: JobListing[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Remote",
    keywords: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "META",
    location: "New York",
    keywords: [
      "React",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Web Development",
      "UI/UX",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Data Science Inc.",
    location: "Washington, D.C.",
    keywords: ["Python", "R", "SQL", "Machine Learning", "Data Analysis"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Amazon",
    location: "Seattle",
    keywords: ["AWS", "Python", "Docker", "Kubernetes", "CI/CD"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
  },
];

const TestPage: React.FC = () => {
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
      <ul>
        {mockJobListings.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <h3>{job.location}</h3>
            <p>{job.description}</p>
            {/* button to navigate to Form */}
            <button onClick={() => handleApplyClick(job.id)}>Apply</button>
          </li>
        ))}
      </ul>
        <Modal 
        isOpen={selectedJobId !== null}
        onRequestClose={handleCloseForm}
        contentLabel = "Job Application Form"
        >
            {selectedJobId !== null && <MyForm onClose={handleCloseForm} />}
        </Modal>
    </div>
  );
};

export default TestPage;
