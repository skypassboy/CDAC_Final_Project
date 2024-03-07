import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import UpdateProperty from './UpdateProperty';
import { Link } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';
// import UpdateProperty from './UpdateProperty';

const MyProperty = ({ userid }) => {
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate(); // Using the useNavigate hook to navigate

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('userdetails'));
                // alert(user.userid);
                const response = await fetch(`http://localhost:8080/property/user/${user.userid}`);
                if (!response.ok) {
                    
                    throw new Error('Failed to fetch properties');
                }
                const data = await response.json();
                console.log(data);
                setProperties(data);
            } catch (error) {
                
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, [userid]);

    const handleUpdateProperty = (propertyId) => {
        // alert(typeof(propertyId));
        localStorage.setItem("pid", propertyId);
        navigate(`/updateproperty/${propertyId}`); // Using navigate to go to the update property page
    };

    const handleRemoveProperty = async (propertyId) => {
        // Display a confirmation dialog
        const confirmDelete = window.confirm('Are you sure you want to delete this property?');

        // If the user confirms, proceed with the deletion
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:8080/deleteproperty/${propertyId}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Failed to remove property');
                }
                // Remove the property from the state
                setProperties(prevProperties => prevProperties.filter(property => property.propertyid !== propertyId));
            } catch (error) {
                alert("no properties...!");
                console.error('Error removing property:', error);
            }
        }
    };
    const goBack = () => {
        navigate("/LandingPage");
    }

    const handleViewRequests = (propertyId) => {
        localStorage.setItem("pid", propertyId);

        navigate(`/viewrequests/${propertyId}`);
    };
    return (
        <div>
            <LoginNavbar />
            <div className="container mt-5">
                <h2 className="mb-4">My Properties {userid}</h2>
                <button
                    className="btn btn-success"
                    onClick={() => goBack()}
                >
                    Back
                </button>
                <div className="list-group">
                    {properties.map(property => (
                        <div key={property.propertyid} className="list-group-item">
                            <div className="row">
                                <div className="col">
                                    <strong>Property ID:</strong> {property.propertyid}
                                </div>
                                <div className="col">
                                    <strong>Address:</strong> {property.address}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <strong>Property Area (sqft):</strong> {property.propertyareasqft}
                                </div>
                                <div className="col">
                                    <strong>BHK:</strong> {property.bhk}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <strong>Rent:</strong> {property.rent}
                                </div>
                                <div className="col">
                                    <strong>Deposit:</strong> {property.deposit}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <strong>Furnished:</strong>{property.furnished}
                                </div>
                                <div className="col">
                                    <strong>Parking:</strong> {property.parking ? 'Available' : 'Not Available'}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <strong>No. of Toilets:</strong> {property.nooftoilets}
                                </div>
                                <div className="col">
                                    <strong>Wifi:</strong> {property.wifi ? 'Available' : 'Not Available'}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <strong>Gas Connection:</strong> {property.gasconnection ? 'Available' : 'Not Available'}
                                </div>
                                <div className="col">
                                    <strong>Lift:</strong> {property.lift ? 'Available' : 'Not Available'}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <strong>Floor No.:</strong> {property.floorno}
                                </div>
                                <div className="col">
                                    <strong>Water Geyser:</strong> {property.watergeyser ? 'Available' : 'Not Available'}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <strong>Tenant Type:</strong> {property.tenanttype}
                                </div>
                                <div className="col">
                                    <strong>Pincode:</strong> {property.pincode.pincode}
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <button
                                        className="btn btn-primary me-2"
                                        onClick={() => handleUpdateProperty(property.propertyid)}
                                    >
                                        Update Property
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveProperty(property.propertyid)}
                                    >
                                        Remove Property
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleViewRequests(property.propertyid)}
                                    >
                                        View Requests
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyProperty