import React from "react";
import './Login.css'
import Header from "../Header/Header";
import Tosignup from "./Tosignup";
import axios from "axios";
function onLoggin () {
    var Emailaddr = document.getElementById('email').value;
    var Password = document.getElementById('pw').value;
    // console.log("응ㅇㅇㅇㅇㅇ")
    console.log(Emailaddr)
    console.log(Password)
}
// const axios = require('axios');
// const onLoggin = function () {
//     const email = document.getElementById('email');
//     const Password = document.getElementById('pw');
//     // console.log(email)
//     // console.log(Password)
//     try{
//         let res = axios({
//             method:'POST',
//             url:'http://mmyu.iptime.org:8000/user/signin',
//             data:{
//                 // name : Name.value,
//                 // nickname : Nickname.value,
//                 email : email.value,
//                 password : Password.value,
//             },
//         });
//         console.log(res);
//         document.write(JSON.stringify(res));
//     } catch (err) {
//         console.log(err);
//         // throw new Error(err);
//     }
// }

// axios('http://mmyu.iptime.org:8000/user/signin');
// axios.post("http://mmyu.iptime.org:8000/user/signin", {
//     Emailaddr: "canan8181@gmail.com",
//     Password: "SuperPowerfulPW"
//     })
//     .then(function (response) {
//     // response
//     // console.log(response.Name)
//     // console.log(response.Nickname)
//     console.log(response.Emailaddr)
//     console.log(response.Password)
//     }).catch(function (error) {
//     // 오류발생시 실행
//     console.log("응애 오류")
//     })

    

class Login extends React.Component {
    // goToMain = () => {
    // this.props.history.push('./');  //props 객체의 history (this.props.history) 에 접근해서
                                   //history의 push 메서드의 인자로 Routes.js 에서 설정한 경로('./main')를 넘겨주면, 해당 라우트로 이동
//   }
    render() {
        return (
            <div className = "LoginPageWrap">
                <Header/>
                <div className = "LoginWrap">
                <img className="Loginlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                {/* <h1 className = "Logintitle">로그인 페이지</h1> */}
                <p className = "id">
                    <input type="text" id = "email" value="canan8181@gmail.com"
                    // _onChange={(e) => {setId(e.target.value);}} 
                    placeholder="전화번호, 사용자 이름 또는 이메일"/></p>
                <p className = "pw">
                    <input type="text" id = "pw" value="SuperPowerfulPW"
                    // _onChange={(e) => {setPwd(e.target.value);}} 
                    placeholder="비밀번호"/></p>
                <button className = "Loginbutton" type="button" 
                onClick={onLoggin}>로그인 하기</button> 
                </div>
                <Tosignup/>
            </div>
        );
    }
}

export default Login;