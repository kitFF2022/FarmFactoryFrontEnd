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
import Unity_CheckLogin from './Component/Unity/Unity_CheckLogin';
import Service_CheckLogin from './Component/Server/Service_CheckLogin';

function App() {
  const [isLogin,setIsLogin] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('user_id') === null){
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLogin ?? :: ', isLogin)
    } else {
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
    // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
    }
  })
  
  return (
    <div>
     {/* {isLogin ? 
     <UnityPage isLogin={isLogin}/>
     :<Login/>} */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Resister" element={<Resister/>}/>
        <Route path="/ProfileEdit" element={<ProfileEdit/>}/>
        <Route path="/UserMenu" element={<UserMenu/>}/>
        <Route path="/TeamMenu" element={<TeamMenu/>}/>
        <Route path="/UserEdit" element={<UserEdit/>}/>
        <Route path="/TeamEdit" element={<TeamEdit/>}/>
        <Route path="/Unity_CheckLogin" element={<Unity_CheckLogin/>}/>
        <Route path="/Service_CheckLogin" element={<Service_CheckLogin/>}/>
        <Route path="/UnityPage" element={<UnityPage/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
