import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Resister from './Component/Resister/Resister';
import Login from './Component/Login/Login';
import Home from './Component/Home';
import ProfileEdit from './Component/Server/ProfileEdit';
import UserMenu from './Component/Server/Menu/UserMenu';
import TeamMenu from './Component/Server/Menu/TeamMenu';
import UserEdit from './Component/Server/Menu/Edit/UserEdit';
import TeamAdd from './Component/Server/Menu/Edit/TeamAdd';
import TeamInvite from './Component/Server/Menu/Edit/TeamInvite';
import TeamDelete from './Component/Server/Menu/Edit/TeamDelete';
import TeamDrop from './Component/Server/Menu/Edit/TeamDrop';
import TeamEdit from './Component/Server/Menu/Edit/TeamEdit';
import UnityPage from './Component/Unity/UnityPage';
import TestUnityPage from './Component/Unity/TestUnityPage';
import Unitychecklogin from './Component/Unity/Unitychecklogin';
import Servicechecklogin from './Component/Server/Servicechecklogin';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Resister" element={<Resister />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
        <Route path="/UserMenu" element={<UserMenu />} />
        <Route path="/TeamMenu" element={<TeamMenu />} />
        <Route path="/UserEdit" element={<UserEdit />} />
        <Route path="/TeamAdd" element={<TeamAdd />} />
        <Route path="/TeamDelete" element={<TeamDelete />} />
        <Route path="/TeamDrop" element={<TeamDrop />} />
        <Route path="/TeamEdit" element={<TeamEdit />} />
        <Route path="/TeamInvite" element={<TeamInvite />} />
        <Route path="/Unitychecklogin" element={<Unitychecklogin />} />
        <Route path="/Servicechecklogin" element={<Servicechecklogin />} />
        <Route path="/UnityPage" element={<UnityPage />} />
        <Route path="/TestUnityPage" element={<TestUnityPage />} />
      </Routes>

    </div>

  );
}

export default App;
