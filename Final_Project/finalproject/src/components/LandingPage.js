

// ********************************************************************************************working code
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// localStorage.setItem("page", "/login_page");

// const LandingPage = () => {
//     const navigate = useNavigate();
//     const [isLoggedIn, setLoggedIn] = useState(false);

//     useEffect(() => {
//         const isUserLoggedIn = localStorage.getItem('rlogin') === 'true';
//         setLoggedIn(isUserLoggedIn);
//     }, []);

//     const handleLogin = () => {
//         localStorage.setItem('rlogin', 'true');
//         setLoggedIn(true);
//         localStorage.setItem("page", "/login_page");
//         navigate('/login_page');
//     };

//     const handleLogout = () => {
//         localStorage.setItem('rlogin', 'false');
//         localStorage.setItem("name", "");
//         setLoggedIn(false);
//         navigate('/LandingPage');
//     };

//     const showProperty = () => {
//         if (isLoggedIn) {
//             navigate("/ShowProperty");
//         } else {
//             document.getElementById("prop").innerText = "Login first..!";
//         }
//     };

//     const name = localStorage.getItem("name");

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container">
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <button className="btn btn-outline-light mr-2" onClick={showProperty}>Show Property</button>
//                             <span id='prop' className="text-light"></span>
//                         </li>
//                         <li className="nav-item">
//                             {isLoggedIn ? (
//                                 <span className="nav-link text-light">Welcome {name}</span>
//                             ) : (
//                                 <span className="nav-link"></span>
//                             )}
//                         </li>
//                     </ul>
//                     <ul className="navbar-nav ml-auto">
//                         <li className="nav-item">
//                             {isLoggedIn ? (
//                                 <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                             ) : (
//                                 <button className="btn btn-outline-light" onClick={handleLogin}>Login</button>
//                             )}
//                         </li>
//                         <li className="nav-item" style={{ marginLeft: '10px' }}>
//                             {isLoggedIn ? (
//                                 <button style={{ display: 'none' }} onClick={() => navigate('/Register_page')} className="btn btn-outline-light">Register</button>
//                             ) : (
//                                 <button onClick={() => navigate('/Register_page')} className="btn btn-outline-light">Register</button>
//                             )}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default LandingPage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import SearchProperty from './SearchProperty';

localStorage.setItem("page", "/login_page");

const LandingPage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('rlogin') === 'true';
        setLoggedIn(isUserLoggedIn);

        const storedName = localStorage.getItem("name");
        setName(storedName || "");
    }, []);

    const handleLogin = () => {
        localStorage.setItem('rlogin', 'true');
        setLoggedIn(true);
        localStorage.setItem("page", "/login_page");
        navigate('/login_page');
    };

    const handleLogout = () => {
        localStorage.setItem('rlogin', 'false');
        localStorage.setItem("name", "");
        setLoggedIn(false);
        setName("");
        navigate('/LandingPage');
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: "60px" }}>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">

                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                                            Welcome {name}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => navigate('/UpdateProfile')}>Update Profile</Dropdown.Item>
                                            <Dropdown.Item onClick={() => navigate('/addproperty')}>Upload Property</Dropdown.Item>
                                            <Dropdown.Item onClick={() => navigate('/myproperty')}>My Properties</Dropdown.Item>
                                            <Dropdown.Item onClick={() => navigate('/usertable')}>Raised Requests</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <button className="btn btn-outline-light" onClick={handleLogin}>Login</button>
                                    </li>
                                    <li className="nav-item" style={{ marginLeft: '10px' }}>
                                        <button onClick={() => navigate('/Register_page')} className="btn btn-outline-light">Register</button>
                                    </li>
                                </>
                            )}
                            <li className="nav-item">
                                {isLoggedIn && (
                                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div style={{ color: 'white', fontWeight: 'bold', fontFamily: 'inherit' }}>
                        Bhaarat Rent
                    </div>

                </div>
            </nav>
            {<SearchProperty />}
        </div>
    );
};

export default LandingPage;



