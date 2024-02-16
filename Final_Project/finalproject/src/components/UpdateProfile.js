import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const [formData, setFormData] = useState({
        Username: '',
        Email_ID: '',
        Phone_Number: '',
        Address: '',
        Pincode: '',
    });

    const [errors, setErrors] = useState({
        Username: '',
        Email_ID: '',
        Phone_Number: '',
        Address: '',
        Pincode: '',
    });

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    // Fetch user data from the server to populate the form
    useEffect(() => {
        // Fetch user data using an API endpoint
        fetchUserData(); // You need to implement this function
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:8080/userData');
            if (response.ok) {
                const userData = await response.json();
                setFormData({
                    Username: userData.Username,
                    Email_ID: userData.Email_ID,
                    Phone_Number: userData.Phone_Number,
                    Address: userData.Address,
                    Pincode: userData.Pincode,
                });
            } else {
                console.error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

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
        const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email_ID) ? 'Invalid email address' : '';
        const mobileError = !/^\d{10}$/.test(formData.Phone_Number) ? 'Invalid mobile number' : '';
        const addressError = !/^[a-zA-Z0-9\s\/,.\-]{20,200}$/.test(formData.Address) ? 'Invalid address. Address should be 20 to 200 characters long and contain only letters, numbers, and [/,.-].' : '';
        const pincodeError = !/^[0-9]{6}$/.test(formData.Pincode) ? 'Invalid pincode' : '';
    
        // Set errors
        setErrors({
            Username: nameError,
            Email_ID: emailError,
            Phone_Number: mobileError,
            Address: addressError,
            Pincode: pincodeError,
        });
    
        // Check if there are validation errors
        if (nameError || emailError || mobileError || addressError || pincodeError) {
            // If there are errors, do not proceed with the submission
            return;
        }
    
        // If validation is successful, proceed with the fetch request to update user data
        const reqData = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                Username: formData.Username,
                Email_ID: formData.Email_ID,
                Phone_Number: formData.Phone_Number,
                Address: formData.Address,
                Pincode: formData.Pincode,
            }),
        };
    
        fetch('http://localhost:8080/updateProfile', reqData)
            .then((res) => {
                if (res.ok) {
                    alert("Profile Updated Successfully...!");
                    navigate('/UserProfile');
                    return res.text();
                } else {
                    alert("Profile Update failed. Please try again later.");
                }
            })
            .then((str) => {
                setMsg(str);
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
            });
    };
    
    return (
        <div>
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields similar to Registration component */}
                {/* Remember to handle errors and display appropriate messages */}
                <button type="submit">Update Profile</button>
                {msg && <div>{msg}</div>}
            </form>
        </div>
    );
};

export default UpdateProfile;
