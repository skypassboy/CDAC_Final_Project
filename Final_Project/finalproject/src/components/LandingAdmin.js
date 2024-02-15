import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingAdmin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the user information from localStorage
        localStorage.removeItem('name');
        localStorage.removeItem('rlogin');
        // Redirect to the login page
        navigate('/login_page');
    };

    const handleRegister = () => {
        // Redirect to the registration page for admin
        navigate('/register_page_admin');
    };


    const handleShowAllUser=()=>{
        navigate('/showAllUsers')
    }
    return (
        <div>
            <div style={{ textAlign: 'right', padding: '10px' }}>
                Welcome, Admin
            </div>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleRegister}>Register as Admin</button>
            <button onClick={handleShowAllUser}>Show All User</button>
            {/* Rest of your LandingAdmin.js content */}
        </div>
    );
};

export default LandingAdmin;
