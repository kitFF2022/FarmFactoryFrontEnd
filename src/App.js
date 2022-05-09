import { Route, Routes } from 'react-router-dom';
import './App.css';
import React,{useEffect,useState} from 'react';
import Resister from './Component/Resister/Resister';
import Login from './Component/Login/Login';
import Home from './Component/Home';
import ProfileEdit from './Component/Server/ProfileEdit';
import UserMenu from './Component/Server/Menu/UserMenu';
import TeamMenu from './Component/Server/Menu/TeamMenu';
import UserEdit from './Component/Server/Menu/Edit/UserEdit';
import TeamEdit from './Component/Server/Menu/Edit/TeamEdit';
import UnityPage from './Component/Unity/UnityPage';
import Unitychecklogin from './Component/Unity/Unitychecklogin';
import Servicechecklogin from './Component/Server/Servicechecklogin';

function App() {
  const [isLogin,setIsLogin] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('user_id') === null){
      console.log('isLogin ?? :: ', isLogin)
    } else {
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
    }
  })
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Resister" element={<Resister/>}/>
        <Route path="/ProfileEdit" element={<ProfileEdit/>}/>
        <Route path="/UserMenu" element={<UserMenu/>}/>
        <Route path="/TeamMenu" element={<TeamMenu/>}/>
        <Route path="/UserEdit" element={<UserEdit/>}/>
        <Route path="/TeamEdit" element={<TeamEdit/>}/>
        <Route path="/Unitychecklogin" element={<Unitychecklogin />}/>
        <Route path="/Servicechecklogin" element={<Servicechecklogin/>}/>
        <Route path="/UnityPage" element={<UnityPage/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
