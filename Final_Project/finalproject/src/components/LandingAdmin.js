

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LandingAdmin = ({ onShowAllUsersClick }) => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('name');
//         localStorage.removeItem('rlogin');
//         navigate('/login_page');
//     };

//     const handleRegister = () => {
//         navigate('/register_page_admin');
//     };

//     return (
//         <div className="container">
//             <div className="text-right p-3">
//                 Welcome, Admin
//             </div>
//             <div className="d-flex justify-content-between p-3">
//                 <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                 <button className="btn btn-info" onClick={() => onShowAllUsersClick()}>Show All User</button>
//             </div>
//             {/* Rest of your LandingAdmin.js content */}
//         </div>
//     );
// };

// const ShowAllUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedRole, setSelectedRole] = useState('all'); // 'all' by default

//     useEffect(() => {
//         const fetchAllUsers = async () => {
//             try {
//                 const response = await fetch('http://localhost:8080/getalluser');
//                 if (response.ok) {
//                     const data = await response.json();
//                     setUsers(data);
//                 } else {
//                     throw new Error(`Error fetching users: ${response.statusText}`);
//                 }
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAllUsers();
//     }, []);

//     const handleRoleFilter = (event) => {
//         setSelectedRole(event.target.value);
//     };

//     const filteredUsers =
//         selectedRole === 'all'
//             ? users
//             : users.filter((user) => user.roleid.roleid.toString() === selectedRole);

//     if (loading) {
//         return <div className="container text-center">Loading...</div>;
//     }

//     if (error) {
//         return <div className="container text-center">Error: {error}</div>;
//     }

//     return (
//         <div className="container mt-5">
//             <div className="row mb-3">
//                 <div className="col-md-6 offset-md-3">
//                     <div className="input-group mb-3">
//                         <label htmlFor="roleFilter" className="input-group-text">
//                             Filter by Role:
//                         </label>
//                         <select
//                             id="roleFilter"
//                             className="form-select"
//                             value={selectedRole}
//                             onChange={handleRoleFilter}
//                         >
//                             <option value="all">All Roles</option>
//                             <option value="1">Admins</option>
//                             <option value="2">Owners</option>
//                             <option value="3">Tenants</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-10 offset-md-1">
//                     <table className="table table-striped table-bordered">
//                         <thead className="table-dark">
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Username</th>
//                                 <th>Email</th>
//                                 <th>Password</th>
//                                 <th>Aadhar Card Number</th>
//                                 <th>Phone Number</th>
//                                 <th>Address</th>
//                                 <th>Pincode</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredUsers.map((user) => (
//                                 <tr key={user.userid}>
//                                     <td>{user.userid}</td>
//                                     <td>{user.username}</td>
//                                     <td>{user.emailid}</td>
//                                     <td>{user.password}</td>
//                                     <td>{user.aadharcardno}</td>
//                                     <td>{user.phonenumber}</td>
//                                     <td>
//                                         <div className="d-inline-block text-break" style={{ maxWidth: '200px' }}>
//                                             {user.address}
//                                         </div>
//                                     </td>
//                                     <td>{user.pincode}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const AdminDashboard = () => {
//     const [showAllUsers, setShowAllUsers] = useState(false);

//     const handleShowAllUsersClick = () => {
//         setShowAllUsers(!showAllUsers);
//     };

//     return (
//         <div>
//             <LandingAdmin onShowAllUsersClick={handleShowAllUsersClick} />
//             {showAllUsers && <ShowAllUsers />}
//         </div>
//     );
// };

// export default AdminDashboard;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onShowAllUsersClick, onLogoutClick }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">Admin Dashboard</span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button className="btn btn-info mx-2" onClick={() => onShowAllUsersClick()}>
                                Show All Users
                            </button>
                        </li>
                        <li className="nav-item">
                            <span className="text-light mx-2">Welcome, Admin</span>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger mx-2" onClick={() => onLogoutClick()}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// const ShowAllUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedRole, setSelectedRole] = useState('all'); // 'all' by default

//     useEffect(() => {
//         const fetchAllUsers = async () => {
//             try {
//                 // const response = await fetch('http://localhost:8080/getalluser');
//                 const response = await fetch('http://localhost:5136/Users')
//                 if (response.ok) {
//                     const data = await response.json();
//                     setUsers(data);
//                     console.log(data);
//                 } else {
//                     throw new Error(`Error fetching users: ${response.statusText}`);
//                 }
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAllUsers();
//     }, []);

//     const handleRoleFilter = (event) => {
//         setSelectedRole(event.target.value);
//     };

//     const filteredUsers =
//         selectedRole === 'all'
//             ? users
//             : users.filter((user) => user.roleid.toString() === selectedRole);

//     if (loading) {
//         return <div className="container text-center">Loading...</div>;
//     }

//     if (error) {
//         return <div className="container text-center">Error: {error}</div>;
//     }

//     return (
//         <div className="container mt-5">
//             <div className="row mb-3">
//                 <div className="col-md-6 offset-md-3">
//                     <div className="input-group mb-3">
//                         <label htmlFor="roleFilter" className="input-group-text">
//                             Filter by Role:
//                         </label>
//                         <select
//                             id="roleFilter"
//                             className="form-select"
//                             value={selectedRole}
//                             onChange={handleRoleFilter}
//                         >
//                             <option value="all">All Roles</option>
//                             <option value="1">Admins</option>
//                             <option value="2">Owners</option>
//                             <option value="3">Tenants</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-10 offset-md-1">
//                     <table className="table table-striped table-bordered">
//                         <thead className="table-dark">
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Username</th>
//                                 <th>Email</th>
//                                 <th>Password</th>
//                                 <th>Aadhar Card Number</th>
//                                 <th>Phone Number</th>
//                                 <th>Address</th>
//                                 <th>Pincode</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredUsers.map((user) => (
//                                 <tr key={user.userid}>
//                                     <td>{user.userid}</td>
//                                     <td>{user.username}</td>
//                                     <td>{user.emailid}</td>
//                                     <td>{user.password}</td>
//                                     <td>{user.aadharcardno}</td>
//                                     <td>{user.phonenumber}</td>
//                                     <td>
//                                         <div className="d-inline-block text-break" style={{ maxWidth: '200px' }}>
//                                             {user.address}
//                                         </div>
//                                     </td>
//                                     <td>{user.pincode}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };


const ShowAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRole, setSelectedRole] = useState('all'); // 'all' by default
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                // const response = await fetch('http://localhost:8080/getalluser');
                const response = await fetch('http://localhost:5094/Users')
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                    console.log(data);
                } else {
                    throw new Error(`Error fetching users: ${response.statusText}`);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAllUsers();
    }, []);

    const handleRoleFilter = (event) => {
        setSelectedRole(event.target.value);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers =
        selectedRole === 'all'
            ? users.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase()))
            : users.filter(
                  (user) =>
                      user.roleid.toString() === selectedRole &&
                      user.username.toLowerCase().includes(searchTerm.toLowerCase())
              );

    if (loading) {
        return <div className="container text-center">Loading...</div>;
    }

    if (error) {
        return <div className="container text-center">Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col-md-6 offset-md-3">
                    <div className="input-group mb-3">
                        <label htmlFor="roleFilter" className="input-group-text">
                            Filter by Role:
                        </label>
                        <select
                            id="roleFilter"
                            className="form-select"
                            value={selectedRole}
                            onChange={handleRoleFilter}
                        >
                            <option value="all">All Roles</option>
                            <option value="1">Admins</option>
                            <option value="2">Owners</option>
                            <option value="3">Tenants</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Name"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Aadhar Card Number</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Pincode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.userid}>
                                    <td>{user.userid}</td>
                                    <td>{user.username}</td>
                                    <td>{user.emailid}</td>
                                    <td>{user.password}</td>
                                    <td>{user.aadharcardno}</td>
                                    <td>{user.phonenumber}</td>
                                    <td>
                                        <div className="d-inline-block text-break" style={{ maxWidth: '200px' }}>
                                            {user.address}
                                        </div>
                                    </td>
                                    <td>{user.pincode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};





const AdminDashboard = () => {
    const [showAllUsers, setShowAllUsers] = useState(false);
    const navigate = useNavigate();

    const handleShowAllUsersClick = () => {
        setShowAllUsers(!showAllUsers);
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('rlogin');
        navigate('/login_page');
    };

    return (
        <div>
            <Navbar
                onShowAllUsersClick={handleShowAllUsersClick}
                onLogoutClick={handleLogoutClick}
            />
            {showAllUsers && <ShowAllUsers />}
        </div>
    );
};

export default AdminDashboard;
