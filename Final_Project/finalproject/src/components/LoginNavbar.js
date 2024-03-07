import React from 'react';
import { useNavigate } from 'react-router-dom';


const navBarButton = {
    marginLeft: "50px",
};

const LoginNavbar = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/LandingPage'); // Update the path to the LandingPage route
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '60px' }}>
            <li className="nav-item" style={navBarButton}>
                <button onClick={() => navigate('/LandingPage')} className="btn btn-outline-light">Back</button>
            </li>
            <div style={{ color: 'white', fontWeight: 'bold', fontFamily: 'inherit', marginLeft: "1188px" }}>
                Bhaarat Rent
            </div>
        </nav>
    );
};

export default LoginNavbar;
