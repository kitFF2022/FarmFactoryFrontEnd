import React from "react";
import './Resister.css'
import Header from "../Header/Header";
// import Tosignup from "./Tosignup";
import axios from "axios";
import { Link } from "react-router-dom";


function onLoggin () {
    var get_resister_name = document.getElementById('resister_name').value;
    var Nickname = document.getElementById('resister_id').value;
    var get_resister_email = document.getElementById('resister_email').value;
    var get_resister_pw = document.getElementById('resister_pw').value;
    
    console.log(get_resister_name)
    console.log(Nickname)
    console.log(get_resister_email)
    console.log(get_resister_pw)

    axios.post("http://mmyu.iptime.org:8000/user/signup", {
        Name : get_resister_name,
        Nickname : Nickname,
        Emailaddr: get_resister_email,
        Password: get_resister_pw
    })
    .then(function (response) {
    // response
        console.log("데이터 전송 성공함")
    }).catch(function (error) {
    // 오류발생시 실행
        console.log(error);
        // if(!error?.response){
        //     console.log('No server response');
        // }else if (error.response?.status ===400) {
        //     console.log('Missing Username or Password');
        // }
        // else if (error.response?.status ===401) {
        //     console.log('Unauthorized');
        // }
        // else {
        //     console.log('Login Failed');
        // }
    });
    return(<Link to="/Login"></Link>);
}
// const axios = require('axios');
// const onLoggin = function () {
//     const email = document.getElementById('email');
//     const Password = document.getElementById('pw');

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

// // axios('http://mmyu.iptime.org:8000/user/signin');


class Resister extends React.Component {
    // goToMain = () => {
    // this.props.history.push('./');  //props 객체의 history (this.props.history) 에 접근해서
                                   //history의 push 메서드의 인자로 Routes.js 에서 설정한 경로('./main')를 넘겨주면, 해당 라우트로 이동
//   }
    render() {
        return (
            <div className = "ResisterPageWrap">
                <Header/>
                <div className = "ResisterWrap">
                <img className="Resisterlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                {/* <h1 className = "Resistertitle">로그인 페이지</h1> */}
                <p className = "id">
                    <input type="text" id = "resister_name" value="이동익"
                    // _onChange={(e) => {setId(e.target.value);}} 
                    placeholder="사용자 이름"/></p>
                <p className = "id">
                    <input type="text" id = "resister_id" value="ldi2676"
                    // _onChange={(e) => {setId(e.target.value);}} 
                    placeholder="전화번호"/></p>
                <p className = "id">
                    <input type="text" id = "resister_email" value="jw2676@naver.com"
                    // _onChange={(e) => {setId(e.target.value);}} 
                    placeholder="이메일"/></p>
                <p className = "pw">
                    <input type="text" id = "resister_pw" value="1234"
                    // _onChange={(e) => {setPwd(e.target.value);}} 
                    placeholder="비밀번호"/></p>
                <p><button className = "Resisterbutton" type="button" onClick={onLoggin}>회원가입 하기</button></p> 
                </div>
                {/*  */}
            </div>
        );
    }
}

export default Resister;