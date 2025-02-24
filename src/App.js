// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeCard from './components/EmployeeCard';
import EmployeeDetails from './components/EmployeeDetails';
import SearchBar from './components/SearchBar';
import './index.css';

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
        // Fetching employee data using fetch
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setEmployees(data.users);
                setFilteredEmployees(data.users);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearch = (id) => {
        if (!id) {
            setFilteredEmployees(employees);
            return;
        }
        const result = employees.filter(emp => emp.id === parseInt(id));
        setFilteredEmployees(result);
    };

    return (
        <Router>
            <div className="app">
                <h1>Employee Dashboard</h1>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <SearchBar onSearch={handleSearch} />
                                <div className="employee-list">
                                    {filteredEmployees.map(emp => (
                                        <EmployeeCard key={emp.id} employee={emp} />
                                    ))}
                                </div>
                            </>
                        }
                    />
                    <Route path="/employee/:id" element={<EmployeeDetails employees={employees} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
