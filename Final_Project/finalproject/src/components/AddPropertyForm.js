
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';
let userdetails = JSON.parse(localStorage.getItem("userdetails"));


const AddPropertyForm = () => {


    const initialState = {
        userid: userdetails.userid,
        address: '',
        propertyareasqft: '',
        bhk: '',
        rent: '',
        deposit: '',
        furnished: '',
        parking: false,
        nooftoilets: '',
        wifi: false,
        gasconnection: false,
        lift: false,
        floorno: '',
        watergeyser: false,
        tenanttype: '',
        pincode: '',
        areaname: '',
        cityid: ''
    };
    
    const [citiesData, setCitiesData] = useState([]);
    const [areasData, setAreasData] = useState([]);
    const [pincodeData, setPincodeData] = useState('');
    const [propertyDetails, setPropertyDetails] = useState(initialState);
    const navigate = useNavigate();
   
    const fetchData = () => {
        fetch('http://localhost:8080/getallcities')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCitiesData(data);
            })
            .catch(error => {
                console.error('Error fetching city data:', error);
            });
    };

    const fetchAreasData = (cityId) => {
        // alert(cityId);
        fetch(`http://localhost:8080/getareabycityid/${cityId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // alert(JSON.stringify(data));
                setAreasData(data);
            })
            .catch(error => {
                console.error('Error fetching area data:', error);
            });
    };

    const fetchPincode = (areaname, cityid) => {
        fetch(`http://localhost:8080/pincode?areaname=${areaname}&cityid=${cityid}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPincodeData(data.pincode);
                // Assuming the API response has a 'pincode' property

                console.log(propertyDetails.pincode)
            })
            .catch(error => {
                console.error('Error fetching pincode data:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPropertyDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cityid') {
            fetchAreasData(value);
        }

        if (name === 'areaname') {
            const selectedArea = areasData.find(area => area.areaname === value);
            if (selectedArea) {
                fetchPincode(selectedArea.areaname, selectedArea.city1.cityid);
            }
        }

        setPropertyDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setPropertyDetails(prevState => ({ ...prevState, [name]: checked }));
    };
    const goBack = () => {
        navigate('/LandingPage');
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Auto-generate pincode using the API
        console.log("handle submit:-", propertyDetails);
        let obj = {
            "userid": {
                "userid": userdetails.userid
            },
            "address": propertyDetails.address,
            "propertyareasqft": propertyDetails.propertyareasqft,
            "bhk": propertyDetails.bhk,
            "rent": propertyDetails.rent,
            "deposit": propertyDetails.deposit,
            "furnished": propertyDetails.furnished,
            "parking": propertyDetails.parking,
            "nooftoilets": propertyDetails.nooftoilets,
            "wifi": propertyDetails.wifi,
            "gasconnection": propertyDetails.gasconnection,
            "lift": propertyDetails.lift,
            "floorno": propertyDetails.floorno,
            "watergeyser": propertyDetails.watergeyser,
            "tenanttype": propertyDetails.tenanttype,
            "pincode": {
                "pincode": pincodeData,
                "areaname": propertyDetails.areaname,
                "city1": {
                    "cityid": propertyDetails.cityid
                }
            }
        }
        console.log(obj)
        // Send the property details to the API
        return fetch('http://localhost:8080/addproperty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
            .then((response) => {
                if (response.ok) {
                    // Clear the form after successful submission
                    setPropertyDetails(initialState);
                    console.log(obj);
                    alert("Property added successfully...!")
                } else {
                    console.error('Error submitting property details:', response.statusText);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <LoginNavbar/>
            <div className="container">
            <h2>Add Property</h2>
            <form onSubmit={handleSubmit}>
               
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={propertyDetails.address}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyareasqft" className="form-label">
                        Property Size (sqft)
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="propertyareasqft"
                        name="propertyareasqft"
                        value={propertyDetails.propertyareasqft}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="bhk" className="form-label">
                        Number of Bedrooms (BHK)
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="bhk"
                        name="bhk"
                        value={propertyDetails.bhk}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="rent" className="form-label">
                        Rent
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="rent"
                        name="rent"
                        value={propertyDetails.rent}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="deposit" className="form-label">
                        Deposit
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="deposit"
                        name="deposit"
                        value={propertyDetails.deposit}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="furnished" className="form-label">
                        Furnished
                    </label>
                    <select
                        className="form-select"
                        id="furnished"
                        name="furnished"
                        value={propertyDetails.furnished}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select</option>
                        <option value="Non Furnished">Non Furnished</option>
                        <option value="Semi Furnished">Semi Furnished</option>
                        <option value="Fully Furnished">Fully Furnished</option>
                    </select>
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="parking"
                        name="parking"
                        checked={propertyDetails.parking}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="parking">
                        Parking
                    </label>
                </div>

                <div className="mb-3">
                    <label htmlFor="nooftoilets" className="form-label">
                        Number of Toilets
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="nooftoilets"
                        name="nooftoilets"
                        value={propertyDetails.nooftoilets}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="wifi"
                        name="wifi"
                        checked={propertyDetails.wifi}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="wifi">
                        WiFi
                    </label>
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="gasconnection"
                        name="gasconnection"
                        checked={propertyDetails.gasconnection}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="gasconnection">
                        Gas Connection
                    </label>
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="lift"
                        name="lift"
                        checked={propertyDetails.lift}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="lift">
                        Lift
                    </label>
                </div>

                <div className="mb-3">
                    <label htmlFor="floorno" className="form-label">
                        Floor Number
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="floorno"
                        name="floorno"
                        value={propertyDetails.floorno}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="watergeyser"
                        name="watergeyser"
                        checked={propertyDetails.watergeyser}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="watergeyser">
                        Water Geyser
                    </label>
                </div>

                <div className="mb-3">
                    <label htmlFor="tenanttype" className="form-label">
                        Tenant Type
                    </label>
                    <select
                        className="form-select"
                        id="tenanttype"
                        name="tenanttype"
                        value={propertyDetails.tenanttype}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select</option>
                        <option value="For Boys">For Boys</option>
                        <option value="For Girls">For Girls</option>
                        <option value="For Family">For Family</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="City" className="form-label">
                        Select City
                    </label>
                    <select
                        className="form-select"
                        id="cityid"
                        name="cityid"
                        value={propertyDetails.cityid}
                        onChange={handleSelectChange}

                    >
                        <option value="">Select</option>
                        {citiesData.map((city) => (
                            <option key={city.cityid} value={city.cityid}>
                                {city.cityname}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Area" className="form-label">
                        Select Area
                    </label>
                    <select
                        className="form-select"
                        id="areaname"
                        name="areaname"
                        value={propertyDetails.areaname}  // assuming you have a propertyDetails state
                        onChange={handleSelectChange}
                    >
                        <option value="">Select</option>
                        {areasData.map((area) => (
                            <option key={area.areaname} value={area.areaname}>
                                {area.areaname}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">
                        Pincode
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        value={pincodeData}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <button type="button" className="btn btn-secondary" onClick={goBack}>
                    Go Back
                </button>
            </form>
            {/* <p>{JSON.stringify(propertyDetails)}</p> */}

        </div>
        </div>
    );
};

export default AddPropertyForm;
