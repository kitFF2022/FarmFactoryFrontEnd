//유니티 화면
import React from "react";
import './UnityPage.css'
// import UnityPage from "./UnityPage";
// import Login from "../Login/Login";
import { useEffect, useState } from 'react';
// import isLogin from "../Header/MenuBar/MenuBar";
// import { Link } from "react-router-dom";

function isLogin() {
    const [isLogin,setIsLogin] = useState(false)
  
    useEffect(() => {
      if(sessionStorage.getItem('user_id') == null || isLogin===false){
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
        console.log('isLogin ?? :: ', isLogin)
        window.location.href = "/Login";
        window.location.reload();
      } 
      else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
        setIsLogin(true)
        console.log('isLogin ?? :: ', isLogin)
        window.location.href = "/UnityPage";
      }
    })
}



class CheckLogin extends React.Component {
    render() {
        
        return (
            
            <div className = "CheckLoginWrap">
              체크중...
                {()=>isLogin()}
            </div>
        );
    }
}

export default CheckLogin;