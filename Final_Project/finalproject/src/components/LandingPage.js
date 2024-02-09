import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/landing_page_css.css';
import '../css/login_page_css.css'
localStorage.setItem("page", "/login_page");

const LandingPage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check local storage on component mount to set initial login state
        const isUserLoggedIn = localStorage.getItem('rlogin') === 'true';
        setLoggedIn(isUserLoggedIn);
    }, []);

    const handleLogin = () => {
        // Update local storage and set login state to true
        localStorage.setItem('rlogin', 'true');
        setLoggedIn(true);
        // You may want to redirect the user after successful login
        localStorage.setItem("page", "/login_page");
        navigate('/login_page');
    };

    const handleLogout = () => {
        // Update local storage and set login state to false
        localStorage.setItem('rlogin', 'false');
        localStorage.setItem("name", "");
        setLoggedIn(false);
        // You may want to redirect the user after successful logout
        navigate('/LandingPage');
    };

    const showProperty = () => {
        if (isLoggedIn) {
            navigate("/ShowProperty")
        }
        else {
            document.getElementById("prop").innerText = "Login first..!"
        }
    }

    const name = localStorage.getItem("name");

    return (
        <div id='login_main_div'>
            <div id='landingsubdiv'>


                <div>

                    <button class='btnbtn1' onClick={showProperty}>Show Property</button>
                    <span id='prop'></span>
                </div>
                <div>
                    {isLoggedIn ? (<span class='loginname'>{"Welcome " + name}</span>) : (<span class='loginname'></span>)}

                    {isLoggedIn ? (
                        <button class='btnbtn1' onClick={handleLogout}>Logout</button>
                    ) : (
                        <button class='btnbtn1' onClick={handleLogin}>Login</button>
                    )}
                </div>


            </div>
        </div>
    );
};

export default LandingPage;