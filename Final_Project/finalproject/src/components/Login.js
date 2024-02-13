
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import p1Image from '../images/p1.avif';
import '../css/login_page_css.css'


const Login = () => {
    const [formData, setFormData] = useState({ emailid: '', password: '' });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState("");
    const [LoginStatus, setLoginStatus] = useState(false);
    const [loginText, setLoginText] = useState("");
    const navigate = useNavigate();



    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.emailid) {
            newErrors.emailid = 'emailid is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);


        const reqdata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }

        console.log(reqdata);

        if (Object.keys(newErrors).length === 0) {
            fetch('http://localhost:8080/login', reqdata)
                .then((response) => {
                    console.log(response);
                    if (response.ok) {
                        alert("hello");
                        return response.json();
                    } else {
                        throw new Error(`Login failed: ${response.statusText}`);
                    }
                })
                .then((data) => {
                    console.log(data.roleid.roleid);
                    console.log(data);
                    if (data.roleid.roleid == 1) {
                        // Redirect to landingAdmin.js
                        alert("in roleid")
                        console.log(data.username);
                        setLoginStatus(true);
                        console.log(LoginStatus + "")
                        setLoggedInUser(data.username);
                        localStorage.setItem("name", data.username);
                        setServerError('');
                        navigate("/LandingAdmin");
                    } else {
                        console.log(data.username);
                        setLoginStatus(true);
                        console.log(LoginStatus + "")
                        setLoggedInUser(data.username);
                        localStorage.setItem("name", data.username);
                        setServerError('');
                    }


                })
                .catch((error) => {
                    console.error('Login failed:', error.message);
                    setLoginStatus(false);
                    setServerError('Login failed. Please check your credentials.');
                    setLoggedInUser('');
                    localStorage.setItem("name", "");
                });
        }
    };

    return (
        <div id='login_main_div'>

            <div className="container mt-5" id="login_sub_div">
                <h2 style={{ color: "#915a4b", fontFamily: "cursive", paddingBottom: "20px" }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">

                        <input
                            type="email"
                            className={errors.emailid ? 'is-invalid' : ''}
                            name="emailid"
                            value={formData.emailid}
                            onChange={handleInputChange}
                            placeholder='emailid'
                            class='input_feilds'
                        />
                        {errors.emailid && <div className="invalid-feedback">{errors.emailid}</div>}
                    </div>
                    <div className="mb-3">

                        <input
                            type="password"
                            className={errors.password ? 'is-invalid' : ''}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder='Password'
                            class='input_feilds'
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <div id='btndiv'>
                        <button type="submit" class='btnbtn'>Login</button>
                        {serverError && <div className="mt-3" style={{ color: 'red' }}>{serverError}</div>}
                        {loggedInUser && <div className="mt-3">Logged in as: {loggedInUser}</div>}
                        <button id='btn' onClick={() => {
                            navigate('/Register_page');
                        }} class="btnbtn">Register</button>
                        {LoginStatus ? navigate("/LandingPage") : console.log("failed...!")}
                        {localStorage.setItem("rlogin", LoginStatus)}
                    </div>



                </form>
            </div>
        </div>
    );
};

export { Login };




