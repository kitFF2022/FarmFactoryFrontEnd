import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import Resister from './Component/Resister/Resister';
import Login from './Component/Login/Login';
import Home from './Component/Home';
import ProfileEdit from './Component/Server/ProfileEdit';
import UserEdit from './Component/Server/UserEdit';
import TeamEdit from './Component/Server/TeamEdit';
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
      {isLogin ?<Home/> : <Login/>}
      <Routes>
        {/* <Route path="/" element={<Home/>} isLogin={isLogin}/>: */}
        {/* <Route path="/Login" element={<Login/>}/> */}
        <Route path="/Resister" element={<Resister/>}/>
        <Route path="/ProfileEdit" element={<ProfileEdit/>}/>
        <Route path="/UserEdit" element={<UserEdit/>}/>
        <Route path="/TeamEdit" element={<TeamEdit/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
