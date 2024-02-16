

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import p1Image from '../images/p1.avif';
// import '../css/landing_page_css.css';
// import '../css/login_page_css.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = () => {
//     const [formData, setFormData] = useState({ emailid: '', password: '' });
//     const [errors, setErrors] = useState({});
//     const [serverError, setServerError] = useState('');
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const [LoginStatus, setLoginStatus] = useState('');
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleReset = () => {
//         setFormData({ emailid: '', password: '' });
//         setErrors({});
//         setServerError('');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newErrors = {};
//         if (!formData.emailid) {
//             newErrors.emailid = 'Email is required';
//         } else {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(formData.emailid)) {
//                 newErrors.emailid = 'Invalid email format';
//             }
//         }

//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         } else {
//             const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//             if (!passwordRegex.test(formData.password)) {
//                 newErrors.password = 'Password must have at least one uppercase, one lowercase, one special character, one number, and a minimum of 8 characters';
//             }
//         }

//         setErrors(newErrors);

//         if (Object.keys(newErrors).length === 0) {
//             try {
//                 const response = await fetch('http://localhost:8080/login', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(formData),
//                 });

//                 if (!response.ok) {
//                     throw new Error(`Login failed: ${response.statusText}`);
//                 }

//                 const data = await response.json();

//                 if (data.roleid.roleid === 1) {
//                     setLoginStatus(true);
//                     setLoggedInUser(data.username);
//                     localStorage.setItem("name", data.username);
//                     setServerError('');
//                     navigate("/LandingAdmin");
//                 } else {
//                     setLoginStatus(true);
//                     setLoggedInUser(data.username);
//                     localStorage.setItem("name", data.username);
//                     setServerError('');
//                 }
//             } catch (error) {
//                 console.error('Login failed:', error.message);
//                 setLoginStatus(false);
//                 setServerError('Login failed. Please check your credentials.');
//                 setLoggedInUser('');
//                 localStorage.setItem("name", "");
//             }
//         }
//     };

//     return (
//         <div className="container my-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6 col-lg-5">
//                     <div className="card shadow-lg p-4">
//                         <h2 className="text-center mb-4" style={{ color: "#808080", fontFamily: "cursive" }}>Login</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-3">
//                                 <input
//                                     type="email"
//                                     className={`form-control ${errors.emailid ? 'is-invalid' : ''}`}
//                                     name="emailid"
//                                     value={formData.emailid}
//                                     onChange={handleInputChange}
//                                     placeholder='Email'
//                                 />
//                                 {errors.emailid && <div className="invalid-feedback">{errors.emailid}</div>}
//                             </div>
//                             <div className="mb-3">
//                                 <input
//                                     type="password"
//                                     className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     placeholder='Password'
//                                 />
//                                 {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                             </div>
//                             <div className='d-flex justify-content-between align-items-center'>
//                                 <div>
//                                     <button type="submit" className='btn btn-secondary'>Login</button>
//                                     <button type="button" className='btn btn-secondary ms-2' onClick={handleReset}>Reset</button>
//                                     {serverError && <div className="mt-2 text-danger">{serverError}</div>}
//                                 </div>
//                                 {loggedInUser && <div className="mt-2 text-success">Logged in as: {loggedInUser}</div>}
//                                 <button
//                                     onClick={() => navigate('/Register_page')}
//                                     className="btn btn-info"
//                                 >
//                                     Register
//                                 </button>
//                                 {LoginStatus && navigate('/LandingPage')}
//                                 {localStorage.setItem('rlogin', LoginStatus)}
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export { Login };



// ***********************************************************************************************************if not return to this
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = () => {
//     const [formData, setFormData] = useState({ emailid: '', password: '' });
//     const [errors, setErrors] = useState({});
//     const [serverError, setServerError] = useState('');
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const [LoginStatus, setLoginStatus] = useState('');
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleReset = () => {
//         setFormData({ emailid: '', password: '' });
//         setErrors({});
//         setServerError('');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newErrors = {};
//         if (!formData.emailid) {
//             newErrors.emailid = 'Email is required';
//         } else {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(formData.emailid)) {
//                 newErrors.emailid = 'Invalid email format';
//             }
//         }

//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         } else {
//             const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//             if (!passwordRegex.test(formData.password)) {
//                 newErrors.password = 'Password must have at least one uppercase, one lowercase, one special character, one number, and a minimum of 8 characters';
//             }
//         }

//         setErrors(newErrors);

//         if (Object.keys(newErrors).length === 0) {
//             try {
//                 const response = await fetch('http://localhost:8080/login', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(formData),
//                 });

//                 if (!response.ok) {
//                     throw new Error(`Login failed: ${response.statusText}`);
//                 }

//                 const data = await response.json();

//                 if (data.roleid.roleid === 1) {
//                     setLoginStatus(true);
//                     setLoggedInUser(data.username);
//                     localStorage.setItem("name", data.username);
//                     setServerError('');
//                     navigate("/LandingAdmin");
//                 } else {
//                     setLoginStatus(true);
//                     setLoggedInUser(data.username);
//                     localStorage.setItem("name", data.username);
//                     setServerError('');
//                 }
//             } catch (error) {
//                 console.error('Login failed:', error.message);
//                 setLoginStatus(false);
//                 setServerError('Login failed. Please check your credentials.');
//                 setLoggedInUser('');
//                 localStorage.setItem("name", "");
//             }
//         }
//     };

//     return (
//         <div className="container my-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6 col-lg-5">
//                     <div className="card shadow-lg p-4">
//                         <h2 className="text-center mb-4" style={{ color: "#808080", fontFamily: "cursive" }}>Login</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-3">
//                                 <input
//                                     type="email"
//                                     className={`form-control ${errors.emailid ? 'is-invalid' : ''}`}
//                                     name="emailid"
//                                     value={formData.emailid}
//                                     onChange={handleInputChange}
//                                     placeholder='Email'
//                                 />
//                                 {errors.emailid && <div className="invalid-feedback">{errors.emailid}</div>}
//                             </div>
//                             <div className="mb-3">
//                                 <input
//                                     type="password"
//                                     className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     placeholder='Password'
//                                 />
//                                 {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                             </div>
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <div>
//                                     <button type="submit" className='btn btn-secondary'>Login</button>
//                                     <button type="button" className='btn btn-secondary ms-2' onClick={handleReset}>Reset</button>
//                                     {serverError && <div className="mt-2 text-danger">{serverError}</div>}
//                                 </div>
//                                 <div className="d-flex align-items-center">
//                                     {loggedInUser && <div className="mt-2 text-success me-3">Logged in as: {loggedInUser}</div>}
//                                     <span className="me-3">
//                                         Don't have an account? <a href="/Register_page" className="text-info">Register</a>
//                                     </span>
//                                     {LoginStatus && navigate('/LandingPage')}
//                                     {localStorage.setItem('rlogin', LoginStatus)}
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export { Login };


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [formData, setFormData] = useState({ emailid: '', password: '' });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState('');
    const [LoginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleReset = () => {
        setFormData({ emailid: '', password: '' });
        setErrors({});
        setServerError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.emailid) {
            newErrors.emailid = 'Email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.emailid)) {
                newErrors.emailid = 'Invalid email format';
            }
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(formData.password)) {
                newErrors.password = 'Password must have at least one uppercase, one lowercase, one special character, one number, and a minimum of 8 characters';
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:8080/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`Login failed: ${response.statusText}`);
                }

                const data = await response.json();

                if (data.roleid.roleid === 1) {
                    localStorage.setItem("userdetails",JSON.stringify(data));
                    console.log(data);
                    setLoginStatus(true);
                    setLoggedInUser(data.username);
                    localStorage.setItem("name", data.username);
                    setServerError('');
                    navigate("/LandingAdmin");
                } else {
                    localStorage.setItem("userdetails",JSON.stringify(data));
                    setLoginStatus(true);
                    setLoggedInUser(data.username);
                    localStorage.setItem("name", data.username);
                    setServerError('');
                }
            } catch (error) {
                console.error('Login failed:', error.message);
                setLoginStatus(false);
                setServerError('Login failed. Please check your credentials.');
                setLoggedInUser('');
                localStorage.setItem("name", "");
            }
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-lg p-4">
                        <h2 className="text-center mb-4" style={{ color: "#808080", fontFamily: "cursive" }}>Login</h2>
                        {serverError && <div className="alert alert-danger mb-3" role="alert">{serverError}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className={`form-control ${errors.emailid ? 'is-invalid' : ''}`}
                                    name="emailid"
                                    value={formData.emailid}
                                    onChange={handleInputChange}
                                    placeholder='Email'
                                />
                                {errors.emailid && <div className="invalid-feedback">{errors.emailid}</div>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder='Password'
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className='btn btn-secondary'>Login</button>
                                <button type="button" className='btn btn-secondary' onClick={handleReset}>Reset</button>
                            </div>
                            <div className="mt-3 text-center">
                                <a href="/forgot-password" className="text-info">Forgot Password?</a>
                            </div>
                            <div className="mt-3 text-center">
                                Don't have an account? <a href="/Register_page" className="text-info">Register</a>
                            </div>
                            <div className="d-flex align-items-center">
                                {loggedInUser && <div className="mt-2 text-success me-3">Logged in as: {loggedInUser}</div>}

                                {LoginStatus && navigate('/LandingPage')}
                                {localStorage.setItem('rlogin', LoginStatus)}
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export { Login };
