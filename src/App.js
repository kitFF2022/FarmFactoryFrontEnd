import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Resister from './Component/Resister/Resister';
import Login from './Component/Login/Login';
import Home from './Component/Home';
import ProfileEdit from './Component/Server/ProfileEdit';
import UserEdit from './Component/Server/UserEdit';
import TeamEdit from './Component/Server/TeamEdit';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Resister" element={<Resister/>}/>
        <Route path="/ProfileEdit" element={<ProfileEdit/>}/>
        <Route path="/UserEdit" element={<UserEdit/>}/>
        <Route path="/TeamEdit" element={<TeamEdit/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
