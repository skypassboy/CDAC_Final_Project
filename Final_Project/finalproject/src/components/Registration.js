import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { Username, value } = e.target;
        setFormData({
            ...formData,
            [Username]: value,
        });
        // Reset errors when the user types in a field
        setErrors({
            ...errors,
            [Username]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate name, mobile number, email, and password...
        const nameError = !formData.Username.trim() ? 'Name is required' : '';
        const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.Password) ?'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';
        const aadharNoError = !/^\d{12}$/.test(formData.AadharCard_No) ? 'Invalid aadhar number' : '';
        const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email_ID) ? 'Invalid email address' : '';
        const mobileError = !/^\d{10}$/.test(formData.Phone_Number) ? 'Invalid mobile number' : '';
        const addressError = !/^[a-zA-Z0-9\s\/,.\-]{20,200}$/.test(formData.Address) ? 'Invalid address. Address should be 20 to 200 characters long and contain only letters, numbers, and [/,.-].' : '';
        const pincodeError = !/^[0-9]{6}/.test(formData.Pincode) ? 'Invalid pincode': '';
        // Set errors
        setErrors({
            Username: nameError,
            Password: passwordError,
            AadharCard_No:aadharNoError,
            Email_ID: emailError,
            Phone_Number: mobileError,
            Address:addressError,
            Pincode:pincodeError,
        });

        // Check if there are validation errors
        if (nameError || mobileError || emailError || passwordError||addressError||aadharNoError||pincodeError) {
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
                Username: formData.Username,
                Password: formData.Password,
                AadharCard_No: formData.AadharCard_No,
                Email_ID: formData.Email_ID,
                Phone_Number: formData.Phone_Number,
                Role_ID:formData.Role_ID,
                Address:formData.Address,
                Pincode:formData.Pincode,
            }),
        };
       

        fetch('http://localhost:8080/register', reqData)
            .then((res) => {
                if (res.ok) {
                    alert("Registered Successfully...!");
                    navigate('/LandingPage');
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
                        {/* <label htmlFor="Username">Username:</label> */}
                        <input
                            type="text"
                            id="Username"
                            name="Username"
                            value={formData.Username}
                            onChange={handleChange}
                            placeholder='Username'
                            class="input_feilds"

                        />
                        <span style={{ color: 'red' }}>{errors.Username}</span>
                    </div>

                    <div style={{ paddingBottom: '15px' }}>
                        {/* <label htmlFor="Password">Password:</label> */}
                        <input
                            type="password"
                            id="Password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                            placeholder='Password'
                            class="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Password}</span>
                    </div>

                    <div>
                        {/* <label htmlFor="AadharCard_No">AadharCard_No:</label> */}
                        <input
                            type="text"
                            id="AadharCard_No"
                            name="AadharCard_No"
                            value={formData.AadharCard_No}
                            onChange={handleChange}
                            placeholder='AadharCard_No'
                            class="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.AadharCard_No}</span>
                    </div>

                    <div style={{ paddingBottom: '15px' }}>
                        {/* <label htmlFor="Email_ID">Email_ID:</label> */}
                        <input
                            type="email"
                            id="Email_ID"
                            name="Email_ID"
                            value={formData.Email_ID}
                            onChange={handleChange}
                            placeholder='Email_ID'
                            class="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Email_ID}</span>
                    </div>

                    
                    <div>
                        {/* <label htmlFor="Phone_Number">Phone_Number:</label> */}
                        <input
                            type="number"
                            id="Phone_Number"
                            name="Phone_Number"
                            value={formData.Phone_Number}
                            onChange={handleChange}
                            placeholder='Phone_Number'
                            class="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Phone_Number}</span>
                    </div>

                    <div>
                        {/* <label htmlFor="Role_ID">Role_ID:</label> */}
                        <select id="Role_ID" onChange={handleChange} value={formData.Role_ID}>
                        <option>Select Role</option>
                        <option value="1">Admin</option>
                        <option value="2">Owner</option>
                        <option value="3">Tenant</option>
                        </select>
                        
                    </div>



                    <div>
                        {/* <label htmlFor="Address">Address:</label> */}
                        <input
                            type="text"
                            id="Address"
                            name="Address"
                            value={formData.Address}
                            onChange={handleChange}
                            placeholder='Address'
                            class="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Address}</span>
                    </div>


                    <div>
                        {/* <label htmlFor="Pincode">Pincode:</label> */}
                        <input
                            type="number"
                            id="Pincode"
                            name="Pincode"
                            value={formData.Pincode}
                            onChange={handleChange}
                            placeholder='Pincode'
                            class="input_feilds"
                        />
                        <span style={{ color: 'red' }}>{errors.Pincode}</span>
                    </div>
                    

                    <div id='btndiv'>
                        <button type="submit" class='btnbtn'>Register</button>

                        {/* Display success or error message */}
                        {msg && <div>{msg}</div>}

                        <button id="btn" class='btnbtn' onClick={() => {
                            navigate('/login_page');
                        }}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
