import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Resister from './Component/Resister/Resister';
import Login from './Component/Login/Login';
import Home from './Component/Home';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Resister" element={<Resister />} />
      </Routes>
    </div>
    
  );
}

export default App;
