import React, { useState } from 'react';

const AddPropertyForm = () => {
    const [propertyData, setPropertyData] = useState({
        userid: '',
        address: '',
        propertyareasqft: '',
        bhk: '',
        rent: '',
        deposit: '',
        furnished: '',
        parking: '',
        nooftoilets: '',
        wifi: '',
        gasconnection: '',
        lift: '',
        floorno: '',
        watergeyser: '',
        tenanttype: '',
        pincode: '',
        cityid: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPropertyData({ ...propertyData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8090/addproperty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(propertyData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Reset form after successful submission
            setPropertyData({
                userid: '',
                address: '',
                propertyareasqft: '',
                bhk: '',
                rent: '',
                deposit: '',
                furnished: '',
                parking: '',
                nooftoilets: '',
                wifi: '',
                gasconnection: '',
                lift: '',
                floorno: '',
                watergeyser: '',
                tenanttype: '',
                pincode: '',
                cityid: ''
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">User ID:</label>
                            <input type="text" className="form-control" name="userid" value={propertyData.userid} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address:</label>
                            <input type="text" className="form-control" name="address" value={propertyData.address} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Property Area (sqft):</label>
                            <input type="text" className="form-control" name="propertyareasqft" value={propertyData.propertyareasqft} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">BHK:</label>
                            <select className="form-select" name="bhk" value={propertyData.bhk} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="2">2 BHK</option>
                                <option value="3">3 BHK</option>
                                <option value="4">4 BHK</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rent:</label>
                            <input type="text" className="form-control" name="rent" value={propertyData.rent} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Deposit:</label>
                            <input type="text" className="form-control" name="deposit" value={propertyData.deposit} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Furnished:</label>
                            <select className="form-select" name="furnished" value={propertyData.furnished} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="semifurnished">Semi-Furnished</option>
                                <option value="furnished">Furnished</option>
                                <option value="notfurnished">Not Furnished</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Parking:</label>
                            <select className="form-select" name="parking" value={propertyData.parking} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">No. of Toilets:</label>
                            <select className="form-select" name="nooftoilets" value={propertyData.nooftoilets} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">WiFi:</label>
                            <select className="form-select" name="wifi" value={propertyData.wifi} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gas Connection:</label>
                            <select className="form-select" name="gasconnection" value={propertyData.gasconnection} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Lift:</label>
                            <select className="form-select" name="lift" value={propertyData.lift} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Floor No.:</label>
                            <input type="text" className="form-control" name="floorno" value={propertyData.floorno} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Water Geyser:</label>
                            <select className="form-select" name="watergeyser" value={propertyData.watergeyser} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tenant Type:</label>
                            <select className="form-select" name="tenanttype" value={propertyData.tenanttype} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Boys">For Boys</option>
                                <option value="Girls">For Girls</option>
                                <option value="Family">For Family</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pincode:</label>
                            <input type="text" className="form-control" name="pincode" value={propertyData.pincode} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City ID:</label>
                            <input type="text" className="form-control" name="cityid" value={propertyData.cityid} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Property</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPropertyForm;
