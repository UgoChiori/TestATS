// // Job application form component with form validation

// import React from "react";
// import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
// import * as Yup from "yup";
// import "./form.css";

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   linkedIn: string;
//   github: string;
//   portfolio: string;
//   resume: string;
//   coverLetter: string;
//   jobTitle: string;

// }

// interface MyFormProps {
//   onClose: () => void;
// }

// const initialValues: FormValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   linkedIn: "",
//   github: "",
//   portfolio: "",
//   resume: "",
//   coverLetter: "",
//   jobTitle: "",

// };

// const validationSchema = Yup.object({
//   firstName: Yup.string().required("Required"),
//   lastName: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email format").required("Required"),
//   phone: Yup.string().required("Required"),
//   linkedIn: Yup.string().required("Required"),
//   github: Yup.string().required("Required"),
//   portfolio: Yup.string().required("Required"),
//   resume: Yup.string().required("Required"),
//   coverLetter: Yup.string().required("Required"),
//   jobTitle: Yup.string().required("Required"),

// });

// const onSubmit = (
//   values: FormValues,
//   onSubmitProps: FormikHelpers<FormValues>
// ) => {
//   console.log("Form data", values);
//   onSubmitProps.resetForm();
// };

// const MyForm: React.FC<MyFormProps> = ({ onClose }) => {
//   return (
//     <div className="form-container">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//         validateOnMount
//       >
//         {(formik) => {
//           console.log("Formik props", formik);
//           return (
//             <Form className="form-form">
//               <div>
//                 <label htmlFor="firstName">First Name</label>
//                 <Field type="text" id="firstName" name="firstName" className="input" />
//                 <ErrorMessage name="firstName" />
//               </div>
//               <div>
//                 <label htmlFor="lastName">Last Name</label>
//                 <Field type="text" id="lastName" name="lastName" className="input" />
//                 <ErrorMessage name="lastName" />
//               </div>
//               <div>
//                 <label htmlFor="email">Email</label>
//                 <Field type="email" id="email" name="email" className="input"/>
//                 <ErrorMessage name="email" />
//               </div>
//               <div>
//                 <label htmlFor="phone">Phone</label>
//                 <Field type="tel" id="phone" name="phone" className="input" />
//                 <ErrorMessage name="phone" />
//               </div>
//               <div>
//                 <label htmlFor="linkedIn">LinkedIn</label>
//                 <Field type="text" id="linkedIn" name="linkedIn" className="input"/>
//                 <ErrorMessage name="linkedIn" />
//               </div>
//               <div>
//                 <label htmlFor="github">GitHub</label>
//                 <Field type="text" id="github" name="github"className="input" />
//                 <ErrorMessage name="github" />
//               </div>
//               <div>
//                 <label htmlFor="portfolio">Portfolio</label>
//                 <Field type="text" id="portfolio" name="portfolio" className="input"/>
//                 <ErrorMessage name="portfolio" />
//               </div>

//               <div>
//                 <label htmlFor="resume">Resume</label>
//                 <Field type="file" id="resume" name="resume" className="input" />
//                 <ErrorMessage name="resume" />
//               </div>
//               <div>
//                 <label htmlFor="coverLetter">Cover Letter</label>
//                 <Field type="file" id="coverLetter" name="coverLetter" className="input" />
//                 <ErrorMessage name="coverLetter" />
//               </div>
//               <div>
//                 <label htmlFor="jobTitle">Job Title</label>
//                 <Field type="text" id="jobTitle" name="jobTitle" className="input"/>
//                 <ErrorMessage name="jobTitle" />
//               </div>

//               <button
//                 type="submit"
//                 onClick={() => {
//                   alert("Application submitted!");
//                 }}
//               >
//                 {" "}
//                 Submit{" "}
//               </button>
//               <button onClick={onClose}>Close</button>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// };

// export default MyForm;

// Job application form component with form validation(Typescript)

import React, { useState } from "react";
import "./form.css";

interface FormValues {
  jobTitle: string | number | readonly string[] | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  resume: string;
  coverLetter: string;
}

interface MyFormProps {
  onClose: () => void;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  linkedIn: "",
  github: "",
  portfolio: "",
  resume: "",
  coverLetter: "",
  jobTitle: undefined,
};

const MyForm: React.FC<MyFormProps> = ({ onClose }) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data", values);
    setValues(initialValues);
  };

  return (
    <div className="form-container">
      <form className="form-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={values.linkedIn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="github">GitHub</label>
          <input
            type="text"
            id="github"
            name="github"
            value={values.github}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="portfolio">Portfolio</label>
          <input
            type="text"
            id="portfolio"
            name="portfolio"
            value={values.portfolio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="resume">Resume</label>
          <input type="file" id="resume" name="resume" />
        </div>
        <div>
          <label htmlFor="coverLetter">Cover Letter</label>
          <input type="file" id="coverLetter" name="coverLetter" />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={values.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-buttons">
        <button type="submit" className="submit-button">
          {" "}
          Submit{" "}
        </button>
        <button onClick={onClose} className="close-button">
          Close
        </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
