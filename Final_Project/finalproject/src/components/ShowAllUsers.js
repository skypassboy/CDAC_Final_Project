import React, { useState, useEffect } from 'react';

const ShowAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRole, setSelectedRole] = useState('all'); // 'all' by default

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/getalluser');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
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

  const filteredUsers = selectedRole === 'all' ? users : users.filter(user => user.roleid.roleid.toString() === selectedRole);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>All Users</h2>
      <button onClick={() => window.history.back()}>Go Back</button>
      
      <label htmlFor="roleFilter">Filter by Role:</label>
      <select id="roleFilter" value={selectedRole} onChange={handleRoleFilter}>
        <option value="all">All Roles</option>
        <option value="1">Admins</option>
        <option value="2">Owners</option>
        <option value="3">Tenants</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Aadhar Card Number</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Pincode</th>
            {/* Add more columns as needed */}
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
              <td>{user.address}</td>
              <td>{user.pincode}</td>
              {/* Add more cells for additional user details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllUsers;