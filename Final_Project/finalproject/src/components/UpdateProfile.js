// import React, { useState, useEffect } from 'react';


// const userdetails = JSON.parse(localStorage.getItem("userdetails"));
// console.log(userdetails.userid);
// const UpdateUser = ({ userid }) => {
//     const [userData, setUserData] = useState({
//         username: userdetails.username,
//         password: userdetails.password,
//         aadharcardno: userdetails.aadharcardno,
//         emailid: userdetails.emailid,
//         phonenumber: userdetails.phonenumber,
//         address: userdetails.address,
//         pincode: userdetails.pincode,
//         roleid: userdetails.roleid.roleid,
//     });


//     const handleUpdateUser = async () => {
//         const userid = userdetails.userid;
//         try {
//             await fetch(`http://localhost:8080/updateuser/${userid}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(userData),
//             });

//             alert('Details updated successfully!');
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const handleChange = (e) => {
//         setUserData({
//             ...userData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     return (
//         <div>
//             <h2>Update User</h2>
//             <form>
//                 <label>
//                     Username:
//                     <input type="text" name="username" value={userData.username} onChange={handleChange} />
//                 </label>

//                 <label>
//                     Aadhar Card Number:
//                     <input type="text" name="aadharcardno" value={userData.aadharcardno} onChange={handleChange} readOnly />
//                 </label>
//                 <label>
//                     Email ID:
//                     <input type="email" name="emailid" value={userData.emailid} onChange={handleChange} readOnly />
//                 </label>
//                 <label>
//                     Phone Number:
//                     <input type="text" name="phonenumber" value={userData.phonenumber} onChange={handleChange} readOnly />
//                 </label>
//                 <label>
//                     Address:
//                     <textarea name="address" value={userData.address} onChange={handleChange} />
//                 </label>
//                 <label>
//                     Pincode:
//                     <input type="text" name="pincode" value={userData.pincode} onChange={handleChange} />
//                 </label>
//                 <button type="button" onClick={handleUpdateUser}>
//                     Update User
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default UpdateUser;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';

const UpdateUser = () => {
    const navigate = useNavigate();

    const userdetails = JSON.parse(localStorage.getItem("userdetails"));

    const [userData, setUserData] = useState({
        username: userdetails.username,
        password: userdetails.password,
        aadharcardno: userdetails.aadharcardno,
        emailid: userdetails.emailid,
        phonenumber: userdetails.phonenumber,
        address: userdetails.address,
        pincode: userdetails.pincode,
        roleid: userdetails.roleid.roleid,
    });

    const handleUpdateUser = async () => {
        const userid = userdetails.userid;
        try {
            await fetch(`http://localhost:8080/updateuser/${userid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            alert('Details updated successfully!');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleGoBack = () => {
        navigate('/LandingPage');
    };

    return (
        <div>
            <LoginNavbar/>
            <div className="container mt-5">
            <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                    <h2 className="card-title text-center mb-4">Update User</h2>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        value={userData.username}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="aadharcardno" className="form-label">Aadhar Card Number:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="aadharcardno"
                                        name="aadharcardno"
                                        value={userData.aadharcardno}
                                        readOnly
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="emailid" className="form-label">Email ID:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailid"
                                        name="emailid"
                                        value={userData.emailid}
                                        readOnly
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phonenumber" className="form-label">Phone Number:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phonenumber"
                                        name="phonenumber"
                                        value={userData.phonenumber}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address:</label>
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        value={userData.address}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="pincode" className="form-label">Pincode:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="pincode"
                                        name="pincode"
                                        value={userData.pincode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 d-flex justify-content-center">
                            <button type="button" className="btn btn-primary mx-2" onClick={handleUpdateUser}>
                                Update
                            </button>

                            <button type="button" className="btn btn-secondary mx-2" onClick={handleGoBack}>
                                Go Back
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateUser;
