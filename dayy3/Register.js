import React from "react";
import { Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Register Form</h1>
      <Formik
        initialValues={{
          name: "",
          address: "",
          gender: "",
          email: "",
          password: "",
          slot: "",
          dob: "",
          about: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form className="p-4 border rounded shadow bg-light">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <Field name="name" type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <Field name="address" type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <Field name="password" type="password" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <Field name="dob" type="date" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">About Yourself</label>
              <Field name="about" as="textarea" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div>
                <Field name="gender" type="radio" value="male" className="form-check-input" />
                <label className="form-check-label ms-2">Male</label>
              </div>
              <div>
                <Field name="gender" type="radio" value="female" className="form-check-input" />
                <label className="form-check-label ms-2">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Select Slot</label>
              <Field name="slot" as="select" className="form-select">
                <option value="">Select a slot</option>
                <option value="11-1">11-1</option>
                <option value="1-4">1-4</option>
              </Field>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
