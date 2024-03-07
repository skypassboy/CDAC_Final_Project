import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginNavbar from './LoginNavbar';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  var userdetails = JSON.parse(localStorage.getItem("userdetails"));
  // Fetch user data (you can replace this with your actual API call)
  useEffect(() => {
    // Replace with your API endpoint
    fetch(`http://localhost:8080/getrestatus/${userdetails.userid}`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(users)
  return (
    <div>
      <LoginNavbar />
      <div className="container mt-4">
        <h2>Status Information</h2>
        <table className="table">
          <thead>
            <tr>
              <th>RequestId</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Rent</th>
              <th>Request Date</th>
              <th>Response Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (

              <tr key={user.property.userid.userid}>
                <td>{user.aid}</td>
                <td>{user.property.userid.username}</td>
                <td>{user.property.userid.emailid}</td>
                <td>{user.property.userid.phonenumber}</td>
                <td>{user.property.address}</td>
                <td>&#8377; {user.property.rent}</td>
                <td>{user.requestdate}</td>
                <td>{user.responsedate || 'N/A'}</td>
                <td>{user.status == 0 ? 'Pending' : user.status == 1 ? 'Confirmed' : 'Rejected'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );

};

export default UserTable;