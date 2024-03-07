

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../css/login_page_css.css';

// localStorage.setItem('page', 'register_page');

// const Registration = () => {
//     const [formData, setFormData] = useState({
//         Username: '',
//         Password: '',
//         AadharCard_No: '',
//         Email_ID: '',
//         Phone_Number: '',
//         Role_ID: '',
//         Address: '',
//         Pincode: '',
//     });

//     const [errors, setErrors] = useState({
//         Username: '',
//         Password: '',
//         AadharCard_No: '',
//         Email_ID: '',
//         Phone_Number: '',
//         Role_ID: '',
//         Address: '',
//         Pincode: '',
//     });

//     const [msg, setMsg] = useState('');
//     const [hoveredField, setHoveredField] = useState('');

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//         // Reset errors when the user types in a field
//         setErrors({
//             ...errors,
//             [name]: '',
//         });
//     };

//     const handleMouseEnter = (fieldName) => {
//         setHoveredField(fieldName);
//     };

//     const handleMouseLeave = () => {
//         setHoveredField('');
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate name, mobile number, email, and password...
//         const nameError = !formData.Username.trim() ? 'Name is required' : '';
//         const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.Password) ? 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';
//         const aadharNoError = !/^\d{12}$/.test(formData.AadharCard_No) ? 'Invalid aadhar number' : '';
//         const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email_ID) ? 'Invalid email address' : '';
//         const mobileError = !/^\d{10}$/.test(formData.Phone_Number) ? 'Invalid mobile number' : '';
//         const roleError = formData.Role_ID === '' ? 'Select a role' : '';
//         const addressError = !/^[a-zA-Z0-9\s\/,.\-]{5,200}$/.test(formData.Address) ? 'Invalid address. Address should be 5 to 200 characters long and contain only letters, numbers, and [/,.-].' : '';
//         const pincodeError = !/^[0-9]{6}$/.test(formData.Pincode) ? 'Invalid pincode' : '';

//         // Set errors
//         setErrors({
//             Username: nameError,
//             Password: passwordError,
//             AadharCard_No: aadharNoError,
//             Email_ID: emailError,
//             Phone_Number: mobileError,
//             Role_ID: roleError,
//             Address: addressError,
//             Pincode: pincodeError,
//         });

//         // Check if there are validation errors
//         if (nameError || mobileError || emailError || passwordError || addressError || aadharNoError || pincodeError || roleError) {
//             // If there are errors, do not proceed with the submission
//             return;
//         }

//         // If validation is successful, proceed with the fetch request
//         const reqData = {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 username: formData.Username,
//                 password: formData.Password,
//                 aadharcardno: formData.AadharCard_No,
//                 emailid: formData.Email_ID,
//                 phonenumber: formData.Phone_Number,
//                 roleid: formData.Role_ID,
//                 address: formData.Address,
//                 pincode: formData.Pincode,
//             }),
//         };

//         fetch('http://localhost:8080/register', reqData)
//             .then((res) => {
//                 if (res.ok) {
//                     alert('Registered Successfully...!');
//                     navigate('/login_page');
//                     return res.text();
//                 } else {
//                     alert('hi');
//                     if (res.status === 400) {
//                         alert('Duplicate entry for Email or Mobile Number');
//                     } else {
//                         alert('Registration failed. Please try again later.');
//                     }
//                 }
//             })
//             .then((str) => {
//                 setMsg(str);
//             })
//             .catch((error) => {
//                 console.error('Error during registration:', error);
//             });
//     };

//     return (
//         <div id='login_main_div'>
//             <div id='login_sub_div'>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             id="Username"
//                             name="Username"
//                             value={formData.Username}
//                             onChange={handleChange}
//                             placeholder='Username'
//                             className={`form-control ${errors.Username && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Username')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Username' && errors.Username && (
//                             <div className="invalid-feedback">
//                                 Error: {errors.Username}
//                             </div>
//                         )}
//                     </div>

//                     <div className="form-group">
//                         <input
//                             type="password"
//                             id="Password"
//                             name="Password"
//                             value={formData.Password}
//                             onChange={handleChange}
//                             placeholder='Password'
//                             className={`form-control ${errors.Password && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Password')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Password' && errors.Password && (
//                             <div className="invalid-feedback">
//                                 Error: {errors.Password}
//                             </div>
//                         )}
//                     </div>

//                     <div className="form-group">
//                         <input
//                             type="number"
//                             id="AadharCard_No"
//                             name="AadharCard_No"
//                             value={formData.AadharCard_No}
//                             onChange={handleChange}
//                             placeholder='AadharCard_No'
//                             className={`form-control ${errors.AadharCard_No && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('AadharCard_No')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'AadharCard_No' && errors.AadharCard_No && (
//                             <div className="invalid-feedback">
//                                 Error: {errors.AadharCard_No}
//                             </div>
//                         )}
//                     </div>

//                     <div className="form-group">
//                         <input
//                             type="email"
//                             id="Email_ID"
//                             name="Email_ID"
//                             value={formData.Email_ID}
//                             onChange={handleChange}
//                             placeholder='Email_ID'
//                             className={`form-control ${errors.Email_ID && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Email_ID')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Email_ID' && errors.Email_ID && (
//                             <div className="invalid-feedback">
//                                 Error: {errors.Email_ID}
//                             </div>
//                         )}
//                     </div>

//                     <div className="form-group">
//                         <input
//                             type="number"
//                             id="Phone_Number"
//                             name="Phone_Number"
//                             value={formData.Phone_Number}
//                             onChange={handleChange}
//                             placeholder='Phone_Number'
//                             className={`form-control ${errors.Phone_Number && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Phone_Number')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Phone_Number' && errors.Phone_Number && (
//                             <div className="invalid-feedback">
//                                 Error: {errors.Phone_Number}
//                             </div>
//                         )}
//                     </div>

//                     <div className="form-group">
//                         <select
//                             id="Role_ID"
//                             name="Role_ID"
//                             onChange={handleChange}
//                             value={formData.Role_ID}
//                             className={`form-control ${errors.Role_ID && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Role_ID')}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <option>Select Role</option>
//                             <option value="2">Owner</option>
//                             <option value="3">Tenant</option>
//                         </select>
//                         {hoveredField === 'Role_ID' && errors.Role_ID && (
//                             <div className="invalid-feedback">
//                                 Error: {errors.Role_ID}
//                             </div>
//                         )}
//                     </div>

//                     <div className="form-group">
//                         <input
//                             type="text"
//                             id="Address"
//                             name="Address"
//                             value={formData.Address}
//                             onChange={handleChange}
//                             placeholder='Address'
//                             className={`form-control ${errors.Address && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Address')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Address' && errors.Address && (
//                             <div className="invalid-feedback">
//                                 Error: {errors.Address}
//                             </div>
//                         )}
//                     </div>

//                     <div className="form-group">
//                         <input
//                             type="number"
//                             id="Pincode"
//                             name="Pincode"
//                             value={formData.Pincode}
//                             onChange={handleChange}
//                             placeholder='Pincode'
//                             className={`form-control ${errors.Pincode && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Pincode')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Pincode' && errors.Pincode && (
//                             <div className="invalid-feedback">
//                                 Error: {errors.Pincode}
//                             </div>
//                         )}
//                     </div>

//                     <div id='btndiv'>
//                         <button type="submit" className='btnbtn'>
//                             Register
//                         </button>
//                         {msg && <div>{msg}</div>}
//                         <button id="btn" className='btnbtn' onClick={() => navigate('/login_page')}>
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Registration;
// ******************************************************************************************************************************************

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../css/login_page_css.css';

// localStorage.setItem('page', 'register_page');

// const Registration = () => {
//     const [formData, setFormData] = useState({
//         Username: '',
//         Password: '',
//         AadharCard_No: '',
//         Email_ID: '',
//         Phone_Number: '',
//         Role_ID: '',
//         Address: '',
//         Pincode: '',
//     });

//     const [errors, setErrors] = useState({
//         Username: '',
//         Password: '',
//         AadharCard_No: '',
//         Email_ID: '',
//         Phone_Number: '',
//         Role_ID: '',
//         Address: '',
//         Pincode: '',
//     });

//     const [msg, setMsg] = useState('');
//     const [hoveredField, setHoveredField] = useState('');

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//         // Reset errors when the user types in a field
//         setErrors({
//             ...errors,
//             [name]: '',
//         });
//     };

//     const handleMouseEnter = (fieldName) => {
//         setHoveredField(fieldName);
//     };

//     const handleMouseLeave = () => {
//         setHoveredField('');
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate name, mobile number, email, and password...
//         const nameError = !formData.Username.trim() ? 'Name is required' : '';
//         const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.Password) ? 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';
//         const aadharNoError = !/^\d{12}$/.test(formData.AadharCard_No) ? 'Invalid Aadhar number' : '';
//         const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email_ID) ? 'Invalid email address' : '';
//         const mobileError = !/^\d{10}$/.test(formData.Phone_Number) ? 'Invalid mobile number' : '';
//         const roleError = formData.Role_ID === '' ? 'Select a role' : '';
//         const addressError = !/^[a-zA-Z0-9\s\/,.\-]{5,200}$/.test(formData.Address) ? 'Invalid address. Address should be 5 to 200 characters long and contain only letters, numbers, and [/,.-].' : '';
//         const pincodeError = !/^[0-9]{6}$/.test(formData.Pincode) ? 'Invalid pincode' : '';

//         // Set errors
//         setErrors({
//             Username: nameError,
//             Password: passwordError,
//             AadharCard_No: aadharNoError,
//             Email_ID: emailError,
//             Phone_Number: mobileError,
//             Role_ID: roleError,
//             Address: addressError,
//             Pincode: pincodeError,
//         });

//         // Check if there are validation errors
//         if (nameError || mobileError || emailError || passwordError || addressError || aadharNoError || pincodeError || roleError) {
//             // If there are errors, do not proceed with the submission
//             return;
//         }

//         // If validation is successful, proceed with the fetch request
//         const reqData = {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 username: formData.Username,
//                 password: formData.Password,
//                 aadharcardno: formData.AadharCard_No,
//                 emailid: formData.Email_ID,
//                 phonenumber: formData.Phone_Number,
//                 roleid: formData.Role_ID,
//                 address: formData.Address,
//                 pincode: formData.Pincode,
//             }),
//         };

//         fetch('http://localhost:8080/register', reqData)
//             .then((res) => {
//                 if (res.ok) {
//                     alert('Registered Successfully...!');
//                     navigate('/login_page');
//                     return res.text();
//                 } else {
//                     if (res.status === 400) {
//                         alert('Duplicate entry for Email or Mobile Number');
//                     } else {
//                         alert('Registration failed. Please try again later.');
//                     }
//                 }
//             })
//             .then((str) => {
//                 setMsg(str);
//             })
//             .catch((error) => {
//                 console.error('Error during registration:', error);
//             });
//     };

//     return (
//         <div id='login_main_div'>
//             <div id='login_sub_div'>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             id="Username"
//                             name="Username"
//                             value={formData.Username}
//                             onChange={handleChange}
//                             placeholder='Username'
//                             className={`form-control ${errors.Username && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Username')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Username' && errors.Username && (
//                             <div className="invalid-feedback">
//                                 {errors.Username}
//                             </div>
//                         )}
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="password"
//                             id="Password"
//                             name="Password"
//                             value={formData.Password}
//                             onChange={handleChange}
//                             placeholder='Password'
//                             className={`form-control ${errors.Password && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Password')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Password' && errors.Password && (
//                             <div className="invalid-feedback">
//                                 {errors.Password}
//                             </div>
//                         )}
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="number"
//                             id="AadharCard_No"
//                             name="AadharCard_No"
//                             value={formData.AadharCard_No}
//                             onChange={handleChange}
//                             placeholder='AadharCard_No'
//                             className={`form-control ${errors.AadharCard_No && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('AadharCard_No')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'AadharCard_No' && errors.AadharCard_No && (
//                             <div className="invalid-feedback">
//                                 {errors.AadharCard_No}
//                             </div>
//                         )}
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="email"
//                             id="Email_ID"
//                             name="Email_ID"
//                             value={formData.Email_ID}
//                             onChange={handleChange}
//                             placeholder='Email_ID'
//                             className={`form-control ${errors.Email_ID && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Email_ID')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Email_ID' && errors.Email_ID && (
//                             <div className="invalid-feedback">
//                                 {errors.Email_ID}
//                             </div>
//                         )}
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="number"
//                             id="Phone_Number"
//                             name="Phone_Number"
//                             value={formData.Phone_Number}
//                             onChange={handleChange}
//                             placeholder='Phone_Number'
//                             className={`form-control ${errors.Phone_Number && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Phone_Number')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Phone_Number' && errors.Phone_Number && (
//                             <div className="invalid-feedback">
//                                 {errors.Phone_Number}
//                             </div>
//                         )}
//                     </div>

//                     <div className="mb-3">
//                         <select
//                             id="Role_ID"
//                             name="Role_ID"
//                             onChange={handleChange}
//                             value={formData.Role_ID}
//                             className={`form-control ${errors.Role_ID && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Role_ID')}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <option>Select Role</option>
//                             <option value="2">Owner</option>
//                             <option value="3">Tenant</option>
//                         </select>
//                         {hoveredField === 'Role_ID' && errors.Role_ID && (
//                             <div className="invalid-feedback">
//                                 {errors.Role_ID}
//                             </div>
//                         )}
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             id="Address"
//                             name="Address"
//                             value={formData.Address}
//                             onChange={handleChange}
//                             placeholder='Address'
//                             className={`form-control ${errors.Address && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Address')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Address' && errors.Address && (
//                             <div className="invalid-feedback">
//                                 {errors.Address}
//                             </div>
//                         )}
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="number"
//                             id="Pincode"
//                             name="Pincode"
//                             value={formData.Pincode}
//                             onChange={handleChange}
//                             placeholder='Pincode'
//                             className={`form-control ${errors.Pincode && 'is-invalid'}`}
//                             onMouseEnter={() => handleMouseEnter('Pincode')}
//                             onMouseLeave={handleMouseLeave}
//                         />
//                         {hoveredField === 'Pincode' && errors.Pincode && (
//                             <div className="invalid-feedback">
//                                 {errors.Pincode}
//                             </div>
//                         )}
//                     </div>

//                     <div id='btndiv'>
//                         <button type="submit" className='btnbtn'>
//                             Register
//                         </button>
//                         {msg && <div className="alert alert-info mt-3">{msg}</div>}
//                         <button id="btn" className='btnbtn' onClick={() => navigate('/login_page')}>
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Registration;

//very very very imp....!

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login_page_css.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginNavbar from './LoginNavbar';

localStorage.setItem('page', 'register_page');

const Registration = () => {
    const [formData, setFormData] = useState({
        Username: '',
        Password: '',
        AadharCard_No: '',
        Email_ID: '',
        Phone_Number: '',
        Role_ID: '',
        Address: '',
        Pincode: '',
    });

    const [errors, setErrors] = useState({
        Username: '',
        Password: '',
        AadharCard_No: '',
        Email_ID: '',
        Phone_Number: '',
        Role_ID: '',
        Address: '',
        Pincode: '',
    });


    const handleReset = () => {
        setFormData({
            Username: '',
            Password: '',
            AadharCard_No: '',
            Email_ID: '',
            Phone_Number: '',
            Role_ID: '',
            Address: '',
            Pincode: '',
        })
    }

    const [msg, setMsg] = useState('');
    const [hoveredField, setHoveredField] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Reset errors when the user types in a field
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleMouseEnter = (fieldName) => {
        setHoveredField(fieldName);
    };

    const handleMouseLeave = () => {
        setHoveredField('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate name, mobile number, email, and password...
        const nameError = !formData.Username.trim() ? 'Name is required' : '';
        const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.Password) ? 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';
        const aadharNoError = !/^\d{12}$/.test(formData.AadharCard_No) ? 'Invalid Aadhar number' : '';
        const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email_ID) ? 'Invalid email address' : '';
        const mobileError = !/^\d{10}$/.test(formData.Phone_Number) ? 'Invalid mobile number' : '';
        const roleError = formData.Role_ID === '' ? 'Select a role' : '';
        const addressError = !/^[a-zA-Z0-9\s\/,.\-]{5,200}$/.test(formData.Address) ? 'Invalid address. Address should be 5 to 200 characters long and contain only letters, numbers, and [/,.-].' : '';
        const pincodeError = !/^[0-9]{6}$/.test(formData.Pincode) ? 'Invalid pincode' : '';

        // Set errors
        setErrors({
            Username: nameError,
            Password: passwordError,
            AadharCard_No: aadharNoError,
            Email_ID: emailError,
            Phone_Number: mobileError,
            Role_ID: roleError,
            Address: addressError,
            Pincode: pincodeError,
        });

        // Check if there are validation errors
        if (nameError || mobileError || emailError || passwordError || addressError || aadharNoError || pincodeError || roleError) {
            // If there are errors, do not proceed with the submission
            return;
        }

        // If validation is successful, proceed with the fetch request
        const reqData = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.Username,
                password: formData.Password,
                aadharcardno: formData.AadharCard_No,
                emailid: formData.Email_ID,
                phonenumber: formData.Phone_Number,
                roleid: formData.Role_ID,
                address: formData.Address,
                pincode: formData.Pincode,
            }),
        };

        fetch('http://localhost:8080/register', reqData)
            .then((res) => {
                if (res.ok) {
                    alert('Registered Successfully...!');
                    navigate('/login_page');
                    return res.text();
                } else {
                    if (res.status === 400) {
                        alert('Duplicate entry for Email or Mobile Number');
                    } else {
                        alert('Registration failed. Please try again later.');
                    }
                }
            })
            .then((str) => {
                setMsg(str);
            })
            .catch((error) => {
                console.error('Error during registration:', error);
            });
    };

    return (
      <div>
        <LoginNavbar/>
          <div className='container my-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6 col-lg-5'>
                    <div className='card shadow-lg p-4'>
                        <h2 className='text-center mb-4' style={{ color: '#808080', fontFamily: 'cursive' }}>Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    id='Username'
                                    name='Username'
                                    value={formData.Username}
                                    onChange={handleChange}
                                    placeholder='Username'
                                    className={`form-control ${errors.Username && 'is-invalid'}`}
                                    onMouseEnter={() => handleMouseEnter('Username')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                {hoveredField === 'Username' && errors.Username && (
                                    <div className='invalid-feedback'>{errors.Username}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <input
                                    type='password'
                                    id='Password'
                                    name='Password'
                                    value={formData.Password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                    className={`form-control ${errors.Password && 'is-invalid'}`}
                                    onMouseEnter={() => handleMouseEnter('Password')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                {hoveredField === 'Password' && errors.Password && (
                                    <div className='invalid-feedback'>{errors.Password}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <input
                                    type='number'
                                    id='AadharCard_No'
                                    name='AadharCard_No'
                                    value={formData.AadharCard_No}
                                    onChange={handleChange}
                                    placeholder='AadharCard_No'
                                    className={`form-control ${errors.AadharCard_No && 'is-invalid'}`}
                                    onMouseEnter={() => handleMouseEnter('AadharCard_No')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                {hoveredField === 'AadharCard_No' && errors.AadharCard_No && (
                                    <div className='invalid-feedback'>{errors.AadharCard_No}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <input
                                    type='email'
                                    id='Email_ID'
                                    name='Email_ID'
                                    value={formData.Email_ID}
                                    onChange={handleChange}
                                    placeholder='Email_ID'
                                    className={`form-control ${errors.Email_ID && 'is-invalid'}`}
                                    onMouseEnter={() => handleMouseEnter('Email_ID')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                {hoveredField === 'Email_ID' && errors.Email_ID && (
                                    <div className='invalid-feedback'>{errors.Email_ID}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <input
                                    type='number'
                                    id='Phone_Number'
                                    name='Phone_Number'
                                    value={formData.Phone_Number}
                                    onChange={handleChange}
                                    placeholder='Phone_Number'
                                    className={`form-control ${errors.Phone_Number && 'is-invalid'}`}
                                    onMouseEnter={() => handleMouseEnter('Phone_Number')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                {hoveredField === 'Phone_Number' && errors.Phone_Number && (
                                    <div className='invalid-feedback'>{errors.Phone_Number}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <select
                                    id='Role_ID'
                                    name='Role_ID'
                                    onChange={handleChange}
                                    value={formData.Role_ID}
                                    className={`form-control ${errors.Role_ID && 'is-invalid'}`}
                                    onMouseEnter={() => handleMouseEnter('Role_ID')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <option>Select Role</option>
                                    <option value='2'>Owner</option>
                                    <option value='3'>Tenant</option>
                                </select>
                                {hoveredField === 'Role_ID' && errors.Role_ID && (
                                    <div className='invalid-feedback'>{errors.Role_ID}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <input
                                    type='text'
                                    id='Address'
                                    name='Address'
                                    value={formData.Address}
                                    onChange={handleChange}
                                    placeholder='Address'
                                    className={`form-control ${errors.Address && 'is-invalid'}`}
                                    onMouseEnter={() => handleMouseEnter('Address')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                {hoveredField === 'Address' && errors.Address && (
                                    <div className='invalid-feedback'>{errors.Address}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <input
                                    type='number'
                                    id='Pincode'
                                    name='Pincode'
                                    value={formData.Pincode}
                                    onChange={handleChange}
                                    placeholder='Pincode'
                                    className={`form-control ${errors.Pincode && 'is-invalid'}`}
                                    onMouseEnter={() => handleMouseEnter('Pincode')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                {hoveredField === 'Pincode' && errors.Pincode && (
                                    <div className='invalid-feedback'>{errors.Pincode}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <button type='submit' className='btn btn-primary w-100'>
                                    Register
                                </button>
                                {msg && <div className='alert alert-info mt-3'>{msg}</div>}
                                <button
                                    id='btn'
                                    className='btn btn-secondary w-100 mt-2'
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Registration;


