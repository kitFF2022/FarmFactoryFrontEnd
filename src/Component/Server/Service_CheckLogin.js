//유니티 화면
import React from "react";
import './ProfileEdit.css'
import Login from "../Login/Login";
import { useEffect, useState } from 'react';
import ProfileEdit from "./ProfileEdit";
// import isLogin from "../Header/MenuBar/MenuBar";
// import { Route, Routes } from 'react-router-dom';

//로그인 여부 확인
function CheckLogin() {
    const [isLogin,setIsLogin] = useState()
  
    useEffect(() => {
      if(sessionStorage.getItem('user_id') == null || isLogin===false){
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
        console.log('isLogin ?? :: ', isLogin)
      } 
      else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
        setIsLogin(true)
        console.log('isLogin ?? :: ', isLogin)

      }
    })
    return (
            
      <div className = "CheckLoginWrap">
        체크중...
        {isLogin ? 
        <ProfileEdit isLogin={isLogin}/>
         :<Login/>}
      </div>
  );
}
export default CheckLogin;