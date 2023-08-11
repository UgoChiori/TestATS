// Job application form component with form validation

import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./form.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  resume: string;
  coverLetter: string;
  jobTitle: string;
  jobLocation: string;
  jobKeywords: string;
  jobDescription: string;
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
  jobTitle: "",
  jobLocation: "",
  jobKeywords: "",
  jobDescription: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
  linkedIn: Yup.string().required("Required"),
  github: Yup.string().required("Required"),
  portfolio: Yup.string().required("Required"),
  resume: Yup.string().required("Required"),
  coverLetter: Yup.string().required("Required"),
  jobTitle: Yup.string().required("Required"),
  jobLocation: Yup.string().required("Required"),
  jobKeywords: Yup.string().required("Required"),
  jobDescription: Yup.string().required("Required"),
});

const onSubmit = (
  values: FormValues,
  onSubmitProps: FormikHelpers<FormValues>
) => {
  console.log("Form data", values);
  onSubmitProps.resetForm();
};

const MyForm: React.FC<MyFormProps> = ({ onClose }) => {
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {(formik) => {
          console.log("Formik props", formik);
          return (
            <Form className="form-form">
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <Field type="tel" id="phone" name="phone" />
                <ErrorMessage name="phone" />
              </div>
              <div>
                <label htmlFor="linkedIn">LinkedIn</label>
                <Field type="text" id="linkedIn" name="linkedIn" />
                <ErrorMessage name="linkedIn" />
              </div>
              <div>
                <label htmlFor="github">GitHub</label>
                <Field type="text" id="github" name="github" />
                <ErrorMessage name="github" />
              </div>
              <div>
                <label htmlFor="portfolio">Portfolio</label>
                <Field type="text" id="portfolio" name="portfolio" />
                <ErrorMessage name="portfolio" />
              </div>

              <div>
                <label htmlFor="resume">Resume</label>
                <Field type="file" id="resume" name="resume" />
                <ErrorMessage name="resume" />
              </div>
              <div>
                <label htmlFor="coverLetter">Cover Letter</label>
                <Field type="file" id="coverLetter" name="coverLetter" />
                <ErrorMessage name="coverLetter" />
              </div>
              <div>
                <label htmlFor="jobTitle">Job Title</label>
                <Field type="text" id="jobTitle" name="jobTitle" />
                <ErrorMessage name="jobTitle" />
              </div>
              <div>
                <label htmlFor="jobLocation">Job Location</label>
                <Field type="text" id="jobLocation" name="jobLocation" />
                <ErrorMessage name="jobLocation" />
              </div>
              <div>
                <label htmlFor="jobKeywords">Job Keywords</label>
                <Field type="text" id="jobKeywords" name="jobKeywords" />
                <ErrorMessage name="jobKeywords" />
              </div>
              <div>
                <label htmlFor="jobDescription">Job Description</label>
                <Field
                  as="textarea"
                  id="jobDescription"
                  name="jobDescription"
                />
                <ErrorMessage name="jobDescription" />
              </div>
              <button
                type="submit"
                onClick={() => {
                  alert("Application submitted!");
                }}
              >
                {" "}
                Submit{" "}
              </button>
              <button onClick={onClose}>Close</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MyForm;
