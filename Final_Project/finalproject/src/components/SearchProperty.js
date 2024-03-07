
// import React, { useState, useEffect } from 'react';

// const SearchProperty = () => {
//     const [properties, setProperties] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [bhkFilter, setBhkFilter] = useState('');
//     const [tenantTypeFilter, setTenantTypeFilter] = useState('');
//     const [rentFilter, setRentFilter] = useState('');

//     useEffect(() => {
//         handleSearch();
//     }, [searchTerm, bhkFilter, tenantTypeFilter, rentFilter]);

//     const filterProperties = (property) => {
//         const searchTermLower = searchTerm.toLowerCase();
//         const areaNameLower = property.pincode && property.pincode.areaname ? property.pincode.areaname.toLowerCase() : '';

//         return (
//             (searchTerm === '' || areaNameLower.includes(searchTermLower)) &&
//             (bhkFilter === '' || property.bhk.toString() === bhkFilter) &&
//             (tenantTypeFilter === '' || property.tenanttype === tenantTypeFilter) &&
//             (rentFilter === '' || property.rent <= parseInt(rentFilter, 10))
//         );
//     };

//     const handleSearch = () => {
//         // Fetch data based on the search criteria
//         fetch(`http://localhost:8080/properties`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setProperties(data.filter(filterProperties));
//             })
//             .catch((error) => console.error('Error fetching properties:', error));
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row mb-3">
//                 <div className="col-md-4">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search by area name, city name, or pincode..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//                 <div className="col-md-2">
//                     <button className="btn btn-primary" onClick={handleSearch}>
//                         Search
//                     </button>
//                 </div>
//                 <div className="col-md-2">
//                     <select
//                         className="form-select"
//                         value={bhkFilter}
//                         onChange={(e) => setBhkFilter(e.target.value)}
//                     >
//                         <option value="">BHK</option>
//                         <option value="1">1 BHK</option>
//                         <option value="2">2 BHK</option>
//                         <option value="3">3 BHK</option>
//                     </select>
//                 </div>
//                 <div className="col-md-2">
//                     <select
//                         className="form-select"
//                         value={tenantTypeFilter}
//                         onChange={(e) => setTenantTypeFilter(e.target.value)}
//                     >
//                         <option value="">Tenant Type</option>
//                         <option value="family">Family</option>
//                         <option value="boys">Boys</option>
//                         <option value="girls">Girls</option>
//                     </select>
//                 </div>
//                 <div className="col-md-2">
//                     <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Max Rent"
//                         value={rentFilter}
//                         onChange={(e) => setRentFilter(e.target.value)}
//                     />
//                 </div>
//             </div>

//             <div className="row">
//                 {properties.map((property) => (
//                     <div key={property.propertyid} className="col-md-4 mb-4">
//                         <div className="card">
//                             <img src={property.imageURL} className="card-img-top" alt={property.address} />
//                             <div className="card-body">
//                                 <h5 className="card-title">{property.address}</h5>
//                                 <p className="card-text">
//                                     <strong>BHK:</strong> {property.bhk} | <strong>Rent:</strong> ${property.rent} |{' '}
//                                     <strong>Furnished:</strong> {property.furnished ? 'Yes' : 'No'} |{' '}
//                                     <strong>Parking:</strong> {property.parking ? 'Yes' : 'No'} |{' '}
//                                     <strong>Tenant Type:</strong> {property.tenanttype}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SearchProperty;



// import React, { useState, useEffect } from 'react';

// const SearchProperty = () => {
//     const [properties, setProperties] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [bhkFilter, setBhkFilter] = useState('');
//     const [tenantTypeFilter, setTenantTypeFilter] = useState('');
//     const [rentRangeFilter, setRentRangeFilter] = useState('');

//     useEffect(() => {
//         if (searchTerm !== '' || bhkFilter !== '' || tenantTypeFilter !== '' || rentRangeFilter !== '') {
//             handleSearch();
//         } else {
//             // Clear properties if no filters are applied
//             setProperties([]);
//         }
//     }, [searchTerm, bhkFilter, tenantTypeFilter, rentRangeFilter]);

//     const filterProperties = (property) => {
//         const searchTermLower = searchTerm.toLowerCase();
//         const areaNameLower = property.pincode && property.pincode.areaname ? property.pincode.areaname.toLowerCase() : '';

//         const rent = property.rent;

//         return (
//             (searchTerm === '' || areaNameLower.includes(searchTermLower)) &&
//             (bhkFilter === '' || property.bhk.toString() === bhkFilter) &&
//             (tenantTypeFilter === '' || property.tenanttype === tenantTypeFilter) &&
//             (rentRangeFilter === '' || checkRentRange(rent, rentRangeFilter))
//         );
//     };

//     const checkRentRange = (rent, range) => {
//         const [min, max] = range.split('-').map(Number);

//         return rent >= min && rent <= max;
//     };

//     const handleSearch = () => {
//         // Fetch data based on the search criteria
//         fetch(`http://localhost:8080/properties`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setProperties(data.filter(filterProperties));
//             })
//             .catch((error) => console.error('Error fetching properties:', error));
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row mb-3">
//                 <div className="col-md-4">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search by area name, city name, or pincode..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//                 <div className="col-md-2">
//                     <button className="btn btn-primary" onClick={handleSearch}>
//                         Search
//                     </button>
//                 </div>
//                 <div className="col-md-2">
//                     <select
//                         className="form-select"
//                         value={bhkFilter}
//                         onChange={(e) => setBhkFilter(e.target.value)}
//                     >
//                         <option value="">BHK</option>
//                         <option value="1">1 BHK</option>
//                         <option value="2">2 BHK</option>
//                         <option value="3">3 BHK</option>
//                     </select>
//                 </div>
//                 <div className="col-md-2">
//                     <select
//                         className="form-select"
//                         value={tenantTypeFilter}
//                         onChange={(e) => setTenantTypeFilter(e.target.value)}
//                     >
//                         <option value="">Tenant Type</option>
//                         <option value="family">Family</option>
//                         <option value="boys">Boys</option>
//                         <option value="girls">Girls</option>
//                     </select>
//                 </div>
//                 <div className="col-md-2">
//                     <select
//                         className="form-select"
//                         value={rentRangeFilter}
//                         onChange={(e) => setRentRangeFilter(e.target.value)}
//                     >
//                         <option value="">Rent Range</option>
//                         <option value="1000-5000">$1000 - $5000</option>
//                         <option value="5000-10000">$5000 - $10000</option>
//                         <option value="10000-20000">$10000 - $20000</option>
//                         <option value="20000-30000">$20000 - $30000</option>
//                         <option value="30000-50000">$30000 - $50000</option>
//                     </select>
//                 </div>
//             </div>

//             <div className="row">
//                 {properties.map((property) => (
//                     <div key={property.propertyid} className="col-md-4 mb-4">
//                         <div className="card">
//                             <img src={property.imageURL} className="card-img-top" alt={property.address} />
//                             <div className="card-body">
//                                 <h5 className="card-title">{property.address}</h5>
//                                 <p className="card-text">
//                                     <strong>BHK:</strong> {property.bhk} | <strong>Rent:</strong> ${property.rent} |{' '}
//                                     <strong>Furnished:</strong> {property.furnished ? 'Yes' : 'No'} |{' '}
//                                     <strong>Parking:</strong> {property.parking ? 'Yes' : 'No'} |{' '}
//                                     <strong>Tenant Type:</strong> {property.tenanttype}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SearchProperty;



// import React, { useState, useEffect } from 'react';

// const SearchProperty = () => {
//     const [properties, setProperties] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [bhkFilter, setBhkFilter] = useState('');
//     const [tenantTypeFilter, setTenantTypeFilter] = useState('');
//     const [rentRangeFilter, setRentRangeFilter] = useState('');

//     useEffect(() => {
//         if (searchTerm !== '' || bhkFilter !== '' || tenantTypeFilter !== '' || rentRangeFilter !== '') {
//             handleSearch();
//         } else {
//             // Clear properties if no filters are applied
//             setProperties([]);
//         }
//     }, [searchTerm, bhkFilter, tenantTypeFilter, rentRangeFilter]);

//     const filterProperties = (property) => {
//         const searchTermLower = searchTerm.toLowerCase();
//         const areaNameLower = property.pincode && property.pincode.areaname ? property.pincode.areaname.toLowerCase() : '';

//         const rent = property.rent;

//         return (
//             (searchTerm === '' || areaNameLower.includes(searchTermLower)) &&
//             (bhkFilter === '' || property.bhk.toString() === bhkFilter) &&
//             (tenantTypeFilter === '' || property.tenanttype === tenantTypeFilter) &&
//             (rentRangeFilter === '' || checkRentRange(rent, rentRangeFilter))
//         );
//     };





//     const checkRentRange = (rent, range) => {
//         const [min, max] = range.split('-').map(Number);

//         return rent >= min && rent <= max;
//     };

//     const handleSearch = () => {
//         // Fetch data based on the search criteria
//         fetch(`http://localhost:8080/properties`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setProperties(data.filter(filterProperties));
//             })
//             .catch((error) => console.error('Error fetching properties:', error));
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row mb-3">
//                 <div className="col-md-4">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search by area name, city name, or pincode..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//                 <div className="col-md-2">
//                     <button className="btn btn-primary" onClick={handleSearch}>
//                         Search
//                     </button>
//                 </div>
//                 <div className="col-md-2">
//                     <select
//                         className="form-select"
//                         value={bhkFilter}
//                         onChange={(e) => setBhkFilter(e.target.value)}
//                     >
//                         <option value="">BHK</option>
//                         <option value="1">1 BHK</option>
//                         <option value="2">2 BHK</option>
//                         <option value="3">3 BHK</option>
//                     </select>
//                 </div>
//                 <div className="col-md-2">
//                     <select
//                         className="form-select"
//                         value={tenantTypeFilter}
//                         onChange={(e) => setTenantTypeFilter(e.target.value)}
//                     >
//                         <option value="">Tenant Type</option>
//                         <option value="family">Family</option>
//                         <option value="boys">Boys</option>
//                         <option value="girls">Girls</option>
//                     </select>
//                 </div>
//                 <div className="col-md-2">
//                     <select
//                         className="form-select"
//                         value={rentRangeFilter}
//                         onChange={(e) => setRentRangeFilter(e.target.value)}
//                     >
//                         <option value="">Rent Range</option>
//                         <option value="1000-5000">₹1000 - ₹5000</option>
//                         <option value="5000-10000">₹5000 - ₹10000</option>
//                         <option value="10000-20000">₹10000 - ₹20000</option>
//                         <option value="20000-30000">₹20000 - ₹30000</option>
//                         <option value="30000-50000">₹30000 - ₹50000</option>
//                     </select>
//                 </div>
//             </div>

//             <div className="row">
//                 {properties.map((property) => (
//                     <div key={property.propertyid} className="col-md-4 mb-4">
//                         <div className="card">
//                             <img src={property.imageURL} className="card-img-top" alt={property.address} />
//                             <div className="card-body">
//                                 <h5 className="card-title">{property.address}</h5>
//                                 <p className="card-text">
//                                     <strong>Area:</strong> {property.propertyareasqft} sqft | <strong>BHK:</strong> {property.bhk} |{' '}
//                                     <strong>Rent:</strong> ₹{property.rent} | <strong>Deposit:</strong> ₹{property.deposit} |{' '}
//                                     <strong>Furnished:</strong> {property.furnished ? 'Yes' : 'No'} |{' '}
//                                     <strong>Parking:</strong> {property.parking ? 'Yes' : 'No'} |{' '}
//                                     <strong>No. of Toilets:</strong> {property.nooftoilets} |{' '}
//                                     <strong>WiFi:</strong> {property.wifi ? 'Yes' : 'No'} |{' '}
//                                     <strong>Gas Connection:</strong> {property.gasconnection ? 'Yes' : 'No'} |{' '}
//                                     <strong>Lift:</strong> {property.lift ? 'Yes' : 'No'} |{' '}
//                                     <strong>Floor No:</strong> {property.floorno} |{' '}
//                                     <strong>Water Geyser:</strong> {property.watergeyser ? 'Yes' : 'No'} |{' '}
//                                     <strong>Tenant Type:</strong> {property.tenanttype} |{' '}
//                                     <strong>City:</strong> {property.pincode.city1.cityname} |{' '}
//                                     <strong>Area Name:</strong> {property.pincode && property.pincode.areaname} |{' '}
//                                     <strong>Pincode:</strong> {property.pincode && property.pincode.pincode}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SearchProperty;

// ************************main code


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchProperty = () => {
    const [properties, setProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [bhkFilter, setBhkFilter] = useState('');
    const [tenantTypeFilter, setTenantTypeFilter] = useState('');
    const [rentRangeFilter, setRentRangeFilter] = useState('');
    const navigate = useNavigate();




    const [isLoggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('rlogin') === 'true';
        setLoggedIn(isUserLoggedIn);

    }, []);


    useEffect(() => {
        if (searchTerm !== '' || bhkFilter !== '' || tenantTypeFilter !== '' || rentRangeFilter !== '') {
            handleSearch();
        } else {
            // Clear properties if no filters are applied
            setProperties([]);
        }
    }, [searchTerm, bhkFilter, tenantTypeFilter, rentRangeFilter]);

    const filterProperties = (property) => {
        const searchTermLower = searchTerm.toLowerCase();
        const areaNameLower = property.pincode && property.pincode.areaname ? property.pincode.areaname.toLowerCase() : '';

        const rent = property.rent;

        return (
            (searchTerm === '' || areaNameLower.includes(searchTermLower)) &&
            (bhkFilter === '' || property.bhk.toString() === bhkFilter) &&
            (tenantTypeFilter === '' || property.tenanttype === tenantTypeFilter) &&
            (rentRangeFilter === '' || checkRentRange(rent, rentRangeFilter))
        );
    };

    const checkRentRange = (rent, range) => {
        const [min, max] = range.split('-').map(Number);

        return rent >= min && rent <= max;
    };
    // const goBack = () => {
    //     navigate('/');
    // };


    const getdata = (propertyId) => {
        // Fetch additional data based on the property ID
        alert(propertyId);
        fetch(`http://localhost:8080/property/${propertyId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((additionalData) => {
                // Handle the additional data as needed
                console.log('Additional Data:', additionalData);
                const userdetails = JSON.parse(localStorage.getItem("userdetails"));

                raiseRequest(userdetails.userid, additionalData.propertyid);
                // raiseRequest(additionalData.userid.userid, additionalData.propertyid);

            })
            .catch((error) => console.error('Error fetching additional data:', error));




    };


    const raiseRequest = (userid, propertyid) => {
        const requestData = {
            custid: userid,
            propertyid: propertyid
        };

        fetch('http://localhost:8080/addrequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Handle the response data as needed
                alert('Request raised successfully:', data);
            })
            .catch(error => console.error('Error raising request:', error));
    };

    // http://localhost:8080/getrecord/${pid}

    const handleSearch = () => {
        // Fetch data based on the search criteria
        fetch(`http://localhost:8080/properties`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data) {
                    setProperties(data.filter(filterProperties));
                } else {
                    // If data is null or undefined, set properties to an empty array
                    setProperties([]);
                }
            })
            .catch((error) => console.error('Error fetching properties:', error));
    };

    return (
        <div className="container mt-4">
            <div className="row mb-3">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by area name, city name, or pincode..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* <div className="col-md-2">
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Search
                    </button>
                </div> */}
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={bhkFilter}
                        onChange={(e) => setBhkFilter(e.target.value)}
                    >
                        <option value="">BHK</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={tenantTypeFilter}
                        onChange={(e) => setTenantTypeFilter(e.target.value)}
                    >
                        <option value="">Tenant Type</option>
                        <option value="Family">Family</option>
                        <option value="For Boys">Boys</option>
                        <option value="For Girls">Girls</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={rentRangeFilter}
                        onChange={(e) => setRentRangeFilter(e.target.value)}
                    >
                        <option value="">Rent Range</option>
                        <option value="1000-5000">₹1000 - ₹5000</option>
                        <option value="5000-10000">₹5000 - ₹10000</option>
                        <option value="10000-20000">₹10000 - ₹20000</option>
                        <option value="20000-30000">₹20000 - ₹30000</option>
                        <option value="30000-50000">₹30000 - ₹50000</option>
                    </select>
                </div>
            </div>

            <div className="row">
                {properties.map((property) => (

                    <div key={property.propertyid} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={property.imageURL} className="card-img-top" alt={property.address} />
                            <div className="card-body">
                                <h5 className="card-title">{property.address}</h5>
                                <p className="card-text">
                                    <strong>Area:</strong> {property.propertyareasqft} sqft | <strong>BHK:</strong> {property.bhk} |{' '}
                                    <strong>Rent:</strong> ₹{property.rent} | <strong>Deposit:</strong> ₹{property.deposit} |{' '}
                                    <strong>Furnished:</strong> {property.furnished ? 'Yes' : 'No'} |{' '}
                                    <strong>Parking:</strong> {property.parking ? 'Yes' : 'No'} |{' '}
                                    <strong>No. of Toilets:</strong> {property.nooftoilets} |{' '}
                                    <strong>WiFi:</strong> {property.wifi ? 'Yes' : 'No'} |{' '}
                                    <strong>Gas Connection:</strong> {property.gasconnection ? 'Yes' : 'No'} |{' '}
                                    <strong>Lift:</strong> {property.lift ? 'Yes' : 'No'} |{' '}
                                    <strong>Floor No:</strong> {property.floorno} |{' '}
                                    <strong>Water Geyser:</strong> {property.watergeyser ? 'Yes' : 'No'} |{' '}
                                    <strong>Tenant Type:</strong> {property.tenanttype} |{' '}
                                    <strong>City:</strong> {property.pincode.city1.cityname} |{' '}
                                    <strong>Area Name:</strong> {property.pincode && property.pincode.areaname} |{' '}
                                    <strong>Pincode:</strong> {property.pincode && property.pincode.pincode}
                                </p>
                            </div>

                            {
                                isLoggedIn ? (
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => getdata(property.propertyid)}
                                    >
                                        Raise Request
                                    </button>
                                ) : null
                            }
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default SearchProperty;

