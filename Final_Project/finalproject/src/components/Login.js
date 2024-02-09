import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () =>
{
    const [formData , setFormData] = useState({Email_ID_ID: '',Password: ''});
    const [errors , setErrors] = useState({});
    const [serverError , setServerError] = useState();
    const [loggedInUser , setloggedInUser] = useState('');
    const [loginStatus , setLoginStatus] = useState('');
    // const [loginText, setLoginText] = useState("");
    // const navigate = useNavigate(); 

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});    
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if(!formData.Email_ID){
            newErrors.Email_ID = 'email is required' ;
        }
        if(!formData.Password){
            newErrors.Password = 'password is required';
        }

        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0){
            fetch('http://localhost:9000/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
                else{
                    throw new Error(`Login failed: ${response.statusText}`);
                }
            })
            .then((data)=>{
                console.log(data.user.Username);
                setLoginStatus(true);
                console.log(loginStatus + "");
                setloggedInUser(data.user.Username);
                localStorage.setItem("Username", data.user.Username);
                setServerError('');
            })
            .catch((error)=>{
                console.error('Login failed:',error.message);
                setLoginStatus(false);
                setServerError('Login failed . Please check your credentials');
                setloggedInUser('');
                localStorage.setItem("Username","");
            });
        }

    };

    return (
        <div id='login_main_div'>

        <div className="container mt-5" id="login_sub_div">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">

                    <input
                        type="email"
                        className={errors.Email_ID ? 'is-invalid' : ''}
                        name="Email_ID"
                        value={formData.Email_ID}
                        onChange={handleInputChange}
                        placeholder='Enter email address'
                        class='input_feilds'
                    />
                    {errors.Email_ID && <div className="invalid-feedback">{errors.Email_ID}</div>}
                </div>
                <div className="mb-3">
                    {/* <label>Password:</label> */}
                    <input
                        type="password"
                        className={errors.Password ? 'is-invalid' : ''}
                        name="Password"
                        value={formData.Password}
                        onChange={handleInputChange}
                        placeholder='Password'
                        class='input_feilds'
                    />
                    {errors.Password && <div className="invalid-feedback">{errors.Password}</div>}
                </div>
                <div id='btndiv'>
                    <button type="submit" class='btnbtn'>Login</button>
                    {serverError && <div className="mt-3" style={{ color: 'red' }}>{serverError}</div>}
                    {loggedInUser && <div className="mt-3">Logged in as: {loggedInUser}</div>}
                    <button id='btn' onClick={() => {
                        // navigate('/Register_page');
                    }} class="btnbtn">Register</button>
                    {/* {LoginStatus ? navigate("/LandingPage") : console.log("failed...!")} */}
                    {/* {localStorage.setItem("rlogin", LoginStatus)} */}
                </div>

                {/* <p>{LoginStatus + ""}</p> */}

            </form>
        </div>
    </div>
    ); 
};

export { Login };