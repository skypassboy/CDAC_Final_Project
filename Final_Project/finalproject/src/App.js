import React, { useState, useEffect } from 'react';
import Registration from './components/Registration';
import { Link, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Login } from './components/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register_page" element={<Registration />} />
        <Route path="/login_page" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
