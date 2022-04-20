import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Resister from './Component/Resister/Resister';
import Login from './Component/Login/Login';
import Home from './Component/Home';
import Profile_edit from './Component/Server/Profile_edit';
import User_edit from './Component/Server/User_edit';
import Team_edit from './Component/Server/Team_edit';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Resister" element={<Resister/>}/>
        <Route path="/Profile_edit" element={<Profile_edit/>}/>
        <Route path="/User_edit" element={<User_edit/>}/>
        <Route path="/Team_edit" element={<Team_edit/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
