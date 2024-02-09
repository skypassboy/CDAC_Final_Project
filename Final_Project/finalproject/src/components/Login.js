import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import p1Image from '../images/p1.avif';
import '../css/login_page_css.css'

// localStorage.setItem("page","/login_page");

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState("");
    const [LoginStatus, setLoginStatus] = useState(false);
    const [loginText, setLoginText] = useState("");
    const navigate = useNavigate();


    // useEffect(() => {
    //     // Check LoginStatus changes and perform actions accordingly
    //     if (LoginStatus) {
    //         setLoggedInUser(formData.Name); // Change this to the appropriate user property
    //         setServerError('');
    //     } else {
    //         setLoggedInUser('');
    //     }
    // }, [LoginStatus, formData.Name]);

    // useEffect(() => {
    //     // Update the document title using the browser API

    //     navigate("/login_page")
    //   },[]);


    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(`Login failed: ${response.statusText}`);
                    }
                })
                .then((data) => {
                    console.log(data.user.Name);
                    setLoginStatus(true);
                    console.log(LoginStatus + "")
                    setLoggedInUser(data.user.Name); // Assuming your user property is "Name"
                    localStorage.setItem("name", data.user.Name);
                    setServerError('');
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
    // style={{ backgroundImage: `url(${p1Image})`}}
    return (
        <div id='login_main_div'>

            <div className="container mt-5" id="login_sub_div">
                <h2 style={{color:"#915a4b",fontFamily:"cursive",paddingBottom:"20px"}}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">

                        <input
                            type="email"
                            className={errors.email ? 'is-invalid' : ''}
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email'
                            class='input_feilds'
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        {/* <label>Password:</label> */}
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

                    {/* <p>{LoginStatus + ""}</p> */}

                </form>
            </div>
        </div>
    );
};

export { Login };

