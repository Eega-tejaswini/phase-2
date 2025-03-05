import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";

const EmployeeList = ({ refresh, onEdit }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, [refresh]);

    const loadEmployees = async () => {
        const { data } = await getEmployees();
        setEmployees(data);
    };

    return (
        <div>
            <h3>Employee List</h3>
            <ul className="list-group">
                {employees.map((emp) => (
                    <li key={emp.id} className="list-group-item d-flex justify-content-between">
                        {emp.name} - {emp.dept} - {emp.manager}
                        <div>
                            <button 
                                className="btn btn-warning btn-sm me-2" 
                                onClick={() => {
                                    console.log("Edit button clicked:", emp); 
                                    onEdit(emp); 
                                }}
                            >
                                Edit
                            </button>
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => deleteEmployee(emp.id).then(loadEmployees)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
