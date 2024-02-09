import React, { useState, useEffect } from 'react';
import Registration from './components/Registration';
import { Link, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register_page" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
