//유니티 화면
import React from "react";
import './UnityPage.css'
import Header from "../Header/Header";
// import Login from "../Login/Login";
// import { useEffect, useState } from 'react';
// import isLogin from "../Header/MenuBar/MenuBar";
// import { Link } from "react-router-dom";





class UnityPage extends React.Component {
    
    render() {
        // function isLogin() {
        //     const [isLogin,setIsLogin] = useState(false)
          
        //     useEffect(() => {
        //       if(sessionStorage.getItem('user_id') === null){
        //       // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
        //         console.log('isLogin ?? :: ', isLogin)
        //       } else {
        //       // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
        //       // 로그인 상태 변경
        //         setIsLogin(true)
        //         console.log('isLogin ?? :: ', isLogin)
        //       }
        //     })
        // }
        return (
            
            <div className = "UnityPageWrap">
                {/* {isLogin ? <UnityPage/> : <Login/>} */}
                <Header/>
                <div className = "UnityWrap">
                    유니티가 들어갈 부분
                </div>
                
            </div>
        );
    }
}

export default UnityPage;