import React from "react";
import './Resister.css'
import Header from "../Header/Header";
// import Tosignup from "./Tosignup";
import axios from "axios";
// import { Link } from "react-router-dom";
const api = "http://mmyu.direct.quickconnect.to:8880"

function toSignup() {
    var get_resister_name = document.getElementById('resister_name').value;
    var Nickname = document.getElementById('resister_id').value;
    var get_resister_email = document.getElementById('resister_email').value;
    var get_resister_pw = document.getElementById('resister_pw').value;

    console.log(get_resister_name)
    console.log(Nickname)
    console.log(get_resister_email)
    console.log(get_resister_pw)

    axios.post(api + "/user/signup", {
        Name: get_resister_name,
        Nickname: Nickname,
        Emailaddr: get_resister_email,
        Password: get_resister_pw
    })
        .then(function (response) {
            // response
            console.log("데이터 전송 성공함")
            window.location.href = "/";
        }).catch(function (error) {
            // 오류발생시 실행
            console.log(error.message);
            if (error.message === 'Network Error') {
                alert('422 No server response 서버가 동작하지 않습니다');
            }
            if (error.message === 'Request failed with status code 404') {
                alert('404 error 존재하지 않는 페이지 입니다');
            }
            if (error.message === 'Request failed with status code 409') {
                alert('409 error 데이터가 충돌했습니다');
            }
            if (error.message === 'Request failed with status code 403') {
                alert('403 error 잘못된 데이터 입니다');
            }
            if (error.message === 'Request failed with status code 500') {
                alert('500 error 서버문제 입니다');
            }
            else {
                alert(error.message);
            }
        });
}

const enterkey = e => {
    if (e.key === 'Enter') {
        toSignup();
    }
}

class Resister extends React.Component {
    render() {
        return (
            <div className="ResisterPageWrap">
                <Header />
                <div className="ResisterWrap">
                    <img className="Resisterlogo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                    <p className="id">
                        <input type="text" id="resister_name"
                            placeholder="사용자 이름" onKeyUp={enterkey} /></p>
                    <p className="nickname">
                        <input type="text" id="resister_id"
                            placeholder="닉네임" onKeyUp={enterkey} /></p>
                    <p className="email">
                        <input type="text" id="resister_email"
                            placeholder="이메일" onKeyUp={enterkey} /></p>
                    <p className="pw">
                        <input type="text" id="resister_pw"
                            placeholder="비밀번호" onKeyUp={enterkey} /></p>
                    <p><button className="Resisterbutton" type="button" onClick={toSignup}>회원가입 하기</button></p>
                </div>
            </div>
        );
    }
}

export default Resister;