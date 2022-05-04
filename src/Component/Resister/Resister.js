import React from "react";
import './Resister.css'
import Header from "../Header/Header";
// import Tosignup from "./Tosignup";
import axios from "axios";
// import { Link } from "react-router-dom";


function onLoggin () {
    var get_resister_name = document.getElementById('resister_name').value;
    var Nickname = document.getElementById('resister_id').value;
    var get_resister_email = document.getElementById('resister_email').value;
    var get_resister_pw = document.getElementById('resister_pw').value;
    
    console.log(get_resister_name)
    console.log(Nickname)
    console.log(get_resister_email)
    console.log(get_resister_pw)

    axios.post("http://localhost:8000/user/signup", {
        Name : get_resister_name,
        Nickname : Nickname,
        Emailaddr: get_resister_email,
        Password: get_resister_pw
    })
    .then(function (response) {
    // response
        console.log("데이터 전송 성공함")
        window.location.href = "/";
    }).catch(function (error) {
    // 오류발생시 실행
        alert(error.message);
        if(error.message ==='Network Error'){
            alert('No server response');
            
        }
        if(error.message ==='Request failed with status code 404'){
            alert('404 error');
            
        }
    });
}



class Resister extends React.Component {
    render() {
        return (
            <div className = "ResisterPageWrap">
                <Header/>
                <div className = "ResisterWrap">
                <img className="Resisterlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                <p className = "id">
                    <input type="text" id = "resister_name" value="이동익"
                    placeholder="사용자 이름"/></p>
                <p className = "nickname">
                    <input type="text" id = "resister_id" value="ldi2676"
                    placeholder="전화번호"/></p>
                <p className = "email">
                    <input type="text" id = "resister_email" value="jw2676@naver.com"
                    placeholder="이메일"/></p>
                <p className = "pw">
                    <input type="text" id = "resister_pw" value="1234"
                    placeholder="비밀번호"/></p>
                <p><button className = "Resisterbutton" type="button" onClick={onLoggin}>회원가입 하기</button></p> 
                </div>
            </div>
        );
    }
}

export default Resister;