// import React, { useState, useEffect } from 'react';
// import Registration from './components/Registration';
// import { Link, Routes, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/register_page" element={<Registration />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
// import Login from './Compoents/Login';
import Registration from './components/Registration';
import ShowProperty from './components/ShowProperty';
import { Login } from './components/Login'
import { Link, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useNavigate, useLocation } from 'react-router-dom';


function App() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const rl = localStorage.getItem("rlogin");
  console.log(location.pathname + "")

  if (location.pathname == "/") {
    location.pathname = "/LandingPage"
  }

  localStorage.setItem("page", location.pathname);


  const getpage = localStorage.getItem("page");


  useEffect(() => {
    // Update the document title using the browser API

    navigate(getpage);
  }, []);
  return (
    <div className="App">



      <Routes>
        <Route path='/ShowProperty' element={<ShowProperty />} />
        <Route path='/LandingPage' element={<LandingPage />} />
        <Route path="/login_page" element={<Login />} />
        <Route path="/register_page" element={<Registration />} />
      </Routes>


    </div>
  );
}

export default App;
