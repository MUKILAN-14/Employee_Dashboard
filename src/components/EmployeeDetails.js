// EmployeeDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetails = ({ employees }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const employee = employees.find(emp => emp.id === parseInt(id));

    if (!employee) {
        return <p>Employee not found.</p>;
    }

    return (
        <div className="employee-details">
            <h2>{employee.firstName} {employee.lastName}</h2>
            <img src={employee.image} alt={employee.firstName} />
            <p>Email: {employee.email}</p>
            <p>Age: {employee.age}</p>
            <button onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
    );
};

export default EmployeeDetails;
