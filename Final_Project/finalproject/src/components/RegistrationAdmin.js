

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../css/login_page_css.css";
localStorage.setItem("page", "register_page_admin");
const RegistrationAdmin = () => {
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

    const [msg, setMsg] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate name, mobile number, email, and password...
        const nameError = !formData.Username.trim() ? 'Name is required' : '';
        const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.Password) ? 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';
        const aadharNoError = !/^\d{12}$/.test(formData.AadharCard_No) ? 'Invalid aadhar number' : '';
        const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email_ID) ? 'Invalid email address' : '';
        const mobileError = !/^\d{10}$/.test(formData.Phone_Number) ? 'Invalid mobile number' : '';
        const addressError = !/^[a-zA-Z0-9\s\/,.\-]{5,200}$/.test(formData.Address) ? 'Invalid address. Address should be 5 to 200 characters long and contain only letters, numbers, and [/,.-].' : '';
        const pincodeError = !/^[0-9]{6}/.test(formData.Pincode) ? 'Invalid pincode' : '';

        console.log(formData.Username);
        console.log(formData.Password);
        console.log(formData.AadharCard_No);
        console.log(formData.Email_ID);
        console.log(formData.Phone_Number);
        console.log(formData.Role_ID);
        console.log(formData.Address);
        console.log(formData.Pincode);
        // Set errors
        setErrors({
            Username: nameError,
            Password: passwordError,
            AadharCard_No: aadharNoError,
            Email_ID: emailError,
            Phone_Number: mobileError,
            Address: addressError,
            Pincode: pincodeError,
        });

        // Check if there are validation errors
        if (nameError || mobileError || emailError || passwordError || addressError || aadharNoError || pincodeError) {
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
        console.log(reqData);
        fetch('http://localhost:8080/register', reqData)
            .then((res) => {
                if (res.ok) {
                    alert("Registered Successfully...!");
                    navigate('/login_page');
                    return res.text();
                } else {
                    alert("hi");
                    if (res.status == 400) {
                        alert("Duplicate entry for Email or Mobile Number");
                    } else {
                        alert("Registration failed. Please try again later.");
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
        <div id='login_main_div'>
            <div id='login_sub_div'>
                <form onSubmit={handleSubmit}>
                    <div style={{ paddingBottom: '15px' }}>
                        <input
                            type="text"
                            id="Username"
                            name="Username"
                            value={formData.Username}
                            onChange={handleChange}
                            placeholder='Username'
                            className="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Username}</span>
                    </div>

                    <div style={{ paddingBottom: '15px' }}>
                        <input
                            type="password"
                            id="Password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                            placeholder='Password'
                            className="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Password}</span>
                    </div>

                    <div>
                        <input
                            type="number"
                            id="AadharCard_No"
                            name="AadharCard_No"
                            value={formData.AadharCard_No}
                            onChange={handleChange}
                            placeholder='AadharCard_No'
                            className="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.AadharCard_No}</span>
                    </div>

                    <div style={{ paddingBottom: '15px' }}>
                        <input
                            type="email"
                            id="Email_ID"
                            name="Email_ID"
                            value={formData.Email_ID}
                            onChange={handleChange}
                            placeholder='Email_ID'
                            className="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Email_ID}</span>
                    </div>

                    <div>
                        <input
                            type="number"
                            id="Phone_Number"
                            name="Phone_Number"
                            value={formData.Phone_Number}
                            onChange={handleChange}
                            placeholder='Phone_Number'
                            className="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Phone_Number}</span>
                    </div>

                    <div>
                        <select id="Role_ID" name="Role_ID" onChange={handleChange} value={formData.Role_ID}>
                            <option>Select Role</option>
                            <option value="1">Admin</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type="text"
                            id="Address"
                            name="Address"
                            value={formData.Address}
                            onChange={handleChange}
                            placeholder='Address'
                            className="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Address}</span>
                    </div>

                    <div>
                        <input
                            type="number"
                            id="Pincode"
                            name="Pincode"
                            value={formData.Pincode}
                            onChange={handleChange}
                            placeholder='Pincode'
                            className="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Pincode}</span>
                    </div>

                    <div id='btndiv'>
                        <button type="submit" className='btnbtn'>Register</button>
                        {msg && <div>{msg}</div>}
                        <button id="btn" className='btnbtn' onClick={() => navigate('/login_page')}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationAdmin;
