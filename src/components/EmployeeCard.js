// EmployeeCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.stopPropagation();
        alert(`Employee ${employee.firstName} deleted from state!`);
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        alert(`Edit functionality for ${employee.firstName} not implemented!`);
    };

    return (
        <div className="employee-card" onClick={() => navigate(`/employee/${employee.id}`)}>
            <img 
            src={employee.image} 
            alt={employee.firstName} 
            className="profile-image" />
            <h3>{employee.firstName} {employee.lastName}</h3>
            <p>Email: {employee.email}</p>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
        </div>
    );
};

export default EmployeeCard;
