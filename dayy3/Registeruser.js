import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

// Validation Schema
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(10, "Min 10 characters needed")
    .max(20, "Max 20 characters allowed"),
  password: Yup.string()
    .required("Password is required")
    .min(10, "Min 10 characters needed"),
  gender: Yup.string().required("Gender is required"),
});

const RegisterUser = () => {
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
        validationSchema={UserSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => <RegisterForm />}
      </Formik>
    </div>
  );
};

export function RegisterForm() {
  return (
    <Form className="p-4 border rounded shadow bg-light">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <Field name="name" type="text" className="form-control border-black" />
        <ErrorMessage name="name" component="div" className="text-danger" />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <Field name="address" type="text" className="form-control border-black" />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <Field name="password" type="password" className="form-control border-black" />
        <ErrorMessage name="password" component="div" className="text-danger" />
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <Field name="dob" type="date" className="form-control border-black" />
      </div>

      <div className="mb-3">
        <label className="form-label">About Yourself</label>
        <Field name="about" as="textarea" className="form-control border-black" />
      </div>

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <div className="form-check">
          <Field
            name="gender"
            type="radio"
            value="male"
            className="form-check-input border-black"
          />
          <label className="form-check-label ms-2">Male</label>
        </div>
        <div className="form-check">
          <Field
            name="gender"
            type="radio"
            value="female"
            className="form-check-input border-black"
          />
          <label className="form-check-label ms-2">Female</label>
        </div>
        <ErrorMessage name="gender" component="div" className="text-danger" />
      </div>

      <div className="mb-3">
        <label className="form-label">Select Slot</label>
        <Field name="slot" as="select" className="form-select border-black">
          <option value="">Select a slot</option>
          <option value="11-1">11-1</option>
          <option value="1-4">1-4</option>
        </Field>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Register User
      </button>
    </Form>
  );
}

export default RegisterUser;
