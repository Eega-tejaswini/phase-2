import React, { useEffect, useState } from "react";
import { addEmployee, updateEmployee } from "../services/employeeService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EmployeeForm = ({ refresh, employee }) => {
    const [initialValues, setInitialValues] = useState({
        id: "",
        name: "",
        address: "",
        dept: "",
        manager: ""
    });

    useEffect(() => {
        if (employee) {
            setInitialValues(employee); 
        }
    }, [employee]);

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        dept: Yup.string().required("Required"),
        manager: Yup.string().required("Required"),
    });

    const handleSubmit = async (values, { resetForm }) => {
        if (values.id) {
            await updateEmployee(values.id, values);
        } else {
            await addEmployee(values);
        }
        refresh();
        resetForm();
    };

    return (
        <div>
            <h3>{initialValues.id ? "Edit Employee" : "Add Employee"}</h3>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <label>Name</label>
                        <Field name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label>Address</label>
                        <Field name="address" className="form-control" />
                        <ErrorMessage name="address" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label>Department</label>
                        <Field name="dept" className="form-control" />
                        <ErrorMessage name="dept" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label>Manager</label>
                        <Field name="manager" className="form-control" />
                        <ErrorMessage name="manager" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {initialValues.id ? "Update Employee" : "Add Employee"}
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default EmployeeForm;
