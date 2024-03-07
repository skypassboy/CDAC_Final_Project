
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ViewRequest = () => {
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const pid = localStorage.getItem("pid");
                const response = await fetch(`http://localhost:8080/getrecord/${pid}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch requests');
                }
                const data = await response.json();

                setRequests(data);

                console.log(data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        fetchRequests();
    }, []);

    const goBack = () => {
        navigate("/myproperty");
    }


    const handleConfirmRequest = async (aid, status) => {
        try {
            const response = await fetch(`http://localhost:8080/confirm/${aid}/${status}`, {
                method: 'PUT',
                body: JSON.stringify({ status }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to ${status === 1 ? 'accept' : 'reject'} request`);
            }

            const pid = localStorage.getItem("pid");
            const updatedResponse = await fetch(`http://localhost:8080/getrecord/${pid}`);
            if (!updatedResponse.ok) {
                throw new Error('Failed to fetch updated requests');
            }
            const updatedData = await updatedResponse.json();
            setRequests(updatedData);

            // If the status is "Accepted" (status: 1), reject all other requests
            if (status === 1) {
                await Promise.all(
                    requests
                        .filter(request => request.aid !== aid)
                        .map(request => {
                            return fetch(`http://localhost:8080/confirm/${request.aid}/${2}`, {
                                method: 'PUT',
                                body: JSON.stringify({ status: 2 }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                        })
                );
                setRequests([]);
            }
        } catch (error) {
            console.error(`Error ${status === 1 ? 'accepting' : 'rejecting'} request:`, error);
        }


    };

    return (
        
        <div>
            <h1>List of Requests</h1>
            <button
                className="btn btn-success"
                onClick={() => goBack()}
            >
                Back
            </button>
            <table className="table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Mobile No</th>
                        <th>Email ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map(request => (
                        // Check if the status is 0 before rendering the row
                        request.status === 0 && (
                            <tr key={request.id}>
                                <td>{request.user.userid}</td>
                                <td>{request.user.username}</td>
                                <td>{request.user.phonenumber}</td>
                                <td>{request.user.emailid}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleConfirmRequest(request.aid, 1)}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="btn btn-danger ms-2"
                                        onClick={() => handleConfirmRequest(request.aid, 2)}
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default ViewRequest;


