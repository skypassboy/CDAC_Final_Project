import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';

const UpdateProperty = ({ propertyId }) => {
    const navigate = useNavigate();

    const [property, setProperty] = useState({
        name: '',
        address: '',
        propertyareasqft: '',
        bhk: '',
        rent: '',
        deposit: '',
        furnished: false,
        parking: false,
        nooftoilets: '',
        wifi: false,
        gasconnection: false,
        lift: false,
        floorno: '',
        watergeyser: false,
        tenanttype: '',
        pincode: ''
    });

    useEffect(() => {
        let pid = localStorage.getItem("pid");
        // alert(pid)
        const fetchProperty = async () => {
            try {
                const response = await fetch(`http://localhost:8080/property/${pid}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch property');
                }
                const data = await response.json();
                setProperty(data);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProperty(prevProperty => ({
            ...prevProperty,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirmUpdate = window.confirm('Are you sure you want to update this property?');
        if (confirmUpdate) {
            try {
                let pid = localStorage.getItem("pid");
                const response = await fetch(`http://localhost:8080/updateproperty/${pid}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(property),
                });
                if (!response.ok) {
                    throw new Error('Failed to update property');
                }

                navigate('/MyProperty');

            } catch (error) {
                console.error('Error updating property:', error);
                // Optionally, handle error, e.g., show an error message
            }
        }
    };
    return (
        <div>
            <LoginNavbar />
            <div className="container mt-4">
                <h2 className="mb-4">Update Property</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={property.address}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Property Area (sqft):</label>
                        <input
                            type="text"
                            name="propertyareasqft"
                            value={property.propertyareasqft}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">BHK:</label>
                        <input
                            type="text"
                            name="bhk"
                            value={property.bhk}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Rent:</label>
                        <input
                            type="text"
                            name="rent"
                            value={property.rent}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deposit:</label>
                        <input
                            type="text"
                            name="deposit"
                            value={property.deposit}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            name="furnished"
                            checked={property.furnished}
                            onChange={handleInputChange}
                            className="form-check-input"
                            id="furnished"
                        />
                        <label className="form-check-label" htmlFor="furnished">Furnished:</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            name="parking"
                            checked={property.parking}
                            onChange={handleInputChange}
                            className="form-check-input"
                            id="parking"
                        />
                        <label className="form-check-label" htmlFor="parking">Parking:</label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">No. of Toilets:</label>
                        <input
                            type="text"
                            name="nooftoilets"
                            value={property.nooftoilets}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            name="wifi"
                            checked={property.wifi}
                            onChange={handleInputChange}
                            className="form-check-input"
                            id="wifi"
                        />
                        <label className="form-check-label" htmlFor="wifi">Wifi:</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            name="gasconnection"
                            checked={property.gasconnection}
                            onChange={handleInputChange}
                            className="form-check-input"
                            id="gasconnection"
                        />
                        <label className="form-check-label" htmlFor="gasconnection">Gas Connection:</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            name="lift"
                            checked={property.lift}
                            onChange={handleInputChange}
                            className="form-check-input"
                            id="lift"
                        />
                        <label className="form-check-label" htmlFor="lift">Lift:</label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Floor No.:</label>
                        <input
                            type="text"
                            name="floorno"
                            value={property.floorno}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            name="watergeyser"
                            checked={property.watergeyser}
                            onChange={handleInputChange}
                            className="form-check-input"
                            id="watergeyser"
                        />
                        <label className="form-check-label" htmlFor="watergeyser">Water Geyser:</label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tenant Type:</label>
                        <input
                            type="text"
                            name="tenanttype"
                            value={property.tenanttype}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Update Property</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProperty;