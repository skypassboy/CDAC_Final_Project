import { useNavigate } from 'react-router-dom';
import '../css/property_css.css'
import React, { useState, useEffect } from 'react';
let arr = [
    {
        "img": "https://images.nobroker.in/images/8a9f97848bc14f2f018bc24d229407f3/8a9f97848bc14f2f018bc24d229407f3_516448_630976_large.jpg",
        "Rent": "₹80,000/M",
        "place": "Model Colony,Shivajinagar",
        "OwnerName": "Priya Sharma.",
        "ContactInfo": {
            "Phone": "9876543210",
            "Email": "priya.sharma@example.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9f97848bc14f2f018bc24d229407f3/8a9f97848bc14f2f018bc24d229407f3_394510_994912_large.jpg",
        "Rent": "₹90,000/M",
        "place": "Karve Nagar,Pune",
        "OwnerName": "Arjun Patel",
        "ContactInfo": {
            "Phone": "8765432109",
            "Email": "arjun.patel@example.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9fc7038c8673b2018c872150bc76ca/8a9fc7038c8673b2018c872150bc76ca_23054_54818_large.jpg",
        "Rent": "₹65,000/M",
        "place": "Shivajinagar,Pune",
        "OwnerName": "Aarav Desai",
        "ContactInfo": {
            "Phone": "9876543210",
            "Email": "aarav.desai@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9fab838c7c6ea1018c7c78a68f0336/8a9fab838c7c6ea1018c7c78a68f0336_567_293984_large.jpg",
        "Rent": "₹75,000/M",
        "place": "Model colony, Pune",
        "OwnerName": "Neha Singh",
        "ContactInfo": {
            "Phone": "8765432109",
            "Email": "neha.singh@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9f94838c8500d9018c8519534e0431/8a9f94838c8500d9018c8519534e0431_14438_884921_large.jpg",
        "Rent": "₹15,000/M",
        "place": "Gokhale Nagar,Pune",
        "OwnerName": "Pranjal Sharma",
        "ContactInfo": {
            "Phone": "7654321098",
            "Email": "pranjal.sharma@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9fc58281a542ac0181a5ba07d444ca/8a9fc58281a542ac0181a5ba07d444ca_27518_398621_large.jpg",
        "Rent": "₹40,000/M",
        "place": "Gaothan,Pune",
        "OwnerName": "Rajesh Gupta",
        "ContactInfo": {
            "Phone": "9876123450",
            "Email": "rajesh.gupta@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9f821975838138017583e7ae3f3a42/8a9f821975838138017583e7ae3f3a42_3516_834081_large.jpg",
        "Rent": "₹60,000/M",
        "place": "Shirole Road,Shivaji Nagar",
        "OwnerName": "Ananya Reddy",
        "ContactInfo": {
            "Phone": "7890123456",
            "Email": "ananya.reddy@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9fc382821168830182117731ac0650/8a9fc382821168830182117731ac0650_17922_666794_large.jpg",
        "Rent": "₹35,000/M",
        "place": "Koregaon Park,Pune",
        "OwnerName": "Aditya Menon",
        "ContactInfo": {
            "Phone": "8901234567",
            "Email": "aditya.menon@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9fe882848655550184866c5c870892/8a9fe882848655550184866c5c870892_15219_71520_large.jpg",
        "Rent": "₹60,000/M",
        "place": "Kothrud,Pune",
        "OwnerName": "Pooja Verma",
        "ContactInfo": {
            "Phone": "9012345678",
            "Email": "pooja.verma@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9f8f838c2998b2018c29ee0847491c/8a9f8f838c2998b2018c29ee0847491c_107666_368820_large.jpg",
        "Rent": "₹36,000/M",
        "place": "Aundh,Pune",
        "OwnerName": "Vikram Chatterjee",
        "ContactInfo": {
            "Phone": "7890123456",
            "Email": "vikram.chatterjee@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9f8f838c2998b2018c29ee0847491c/8a9f8f838c2998b2018c29ee0847491c_232146_105784_large.jpg",
        "Rent": "₹47,000/M",
        "place": "Hinjewadi,Pune",
        "OwnerName": "Ameya Joshi",
        "ContactInfo": {
            "Phone": "8901234567",
            "Email": "ameya.joshi@gmail.com"
        }
    },
    {
        "img": "https://images.nobroker.in/images/8a9fe882848655550184866c5c870892/8a9fe882848655550184866c5c870892_3851_930132_large.jpg",
        "Rent": "₹65,000/M",
        "place": "Viman Nagar,Pune",
        "OwnerName": "Shruti Deshmukh",
        "ContactInfo": {
            "Phone": "9876543210",
            "Email": "shruti.deshmukh@gmail.com"
        }
    }
]


const ShowProperty = () => {

    const navigate = useNavigate();
    const home = () => {
        navigate("/LandingPage")
    }

    const PropertyCard = (imgSrc, rent, place, ownerName, phone, email) => {
       
        return (


            <div id='main_property_div' class='grid-container'>

                <div id='sub_property_div' class='grid-item'>
                    <img src={imgSrc} alt="Property" className="card-image" />
                    <div className="card-details">
                        <h2>Rent: {rent}</h2>
                        <p>Place: {place}</p>
                        <p>OwnerName: {ownerName}</p>
                        <div className="contact-info">
                            <p>ContactInformation:</p>
                            <p>Phone: {phone}</p>
                            <p>Email: {email}</p>
                        </div>
                    </div>
                </div>

            </div>

        );
    };


    return (
        <div>
            <button id="homebtn" onClick={home}> Home</button>
            <div id='grid'>
                {
                    arr.map(data => {
                        return PropertyCard(data.img, data.Rent, data.place, data.OwnerName, data.ContactInfo.Phone, data.ContactInfo.Email);
                    })
                }
            </div>
        </div>
    )
}



const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:8080/properties`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setProperties(data))
        .catch((error) => console.error('Error fetching properties:', error));
    };

    fetchData();
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by areaname, cityname, or pincode..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {properties.map((property) => (
        <div key={property.propertyid} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h4>{property.address}</h4>
          <div>BHK: {property.bhk}</div>
          <div>Rent: {property.rent}</div>
          <div>Deposit: {property.deposit}</div>
          <div>Furnished: {property.furnished}</div>
          <div>Parking: {property.parking ? 'Yes' : 'No'}</div>
          <div>No. of Toilets: {property.nooftoilets}</div>
          <div>WiFi: {property.wifi ? 'Yes' : 'No'}</div>
          <div>Gas Connection: {property.gasconnection ? 'Yes' : 'No'}</div>
          <div>Lift: {property.lift ? 'Yes' : 'No'}</div>
          <div>Floor No: {property.floorno}</div>
          <div>Water Geyser: {property.watergeyser ? 'Yes' : 'No'}</div>
          <div>Tenant Type: {property.tenanttype}</div>
          <div>Pincode: {property.pincode ? property.pincode.pincode : 'N/A'}</div>
          <div>Area Name: {property.pincode ? property.pincode.areaname : 'N/A'}</div>
          <div>City Name: {property.pincode ? property.pincode.cityname : 'N/A'}</div>
        </div>
      ))}
    </div>
  );
};

export default ShowProperty;


 

