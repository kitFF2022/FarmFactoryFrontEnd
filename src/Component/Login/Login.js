import React from "react";
import './Login.css'
import Header from "../Header/Header";
import Tosignup from "./Tosignup";
import axios from "axios";

function onLoggin() {
    var Emailaddr = document.getElementById('login_email').value;
    var Password = document.getElementById('login_pw').value;
    var access_token
    axios({
        method: 'post',
        url: 'http://mmyu.direct.quickconnect.to:8880/user/signin',
        data: {
            Emailaddr: Emailaddr,
            Password: Password,
            access_token: access_token
        }
    })

        .then(function (response) {
            console.log("토큰");
            console.log(response.data);
            sessionStorage.setItem('user_id', Emailaddr)
            sessionStorage.setItem('user_pw', Password)
            sessionStorage.setItem('user_token', response.data.access_token)
            window.location.href = "/";
        })
        .catch(function (error) {
            // 오류발생시 실행
            console.log(error);
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
//엔터키 입력시
const enterkey = e => {
    if (e.key === 'Enter') {
        onLoggin();
    }
}

class Login extends React.Component {
    render() {
        return (
            <div className="LoginPageWrap">
                <Header />
                <div className="LoginWrap">
                    <img className="Loginlogo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                    <p className="id">
                        <input type="text" id="login_email"
                            placeholder="이메일 입력" onKeyUp={enterkey} /></p>
                    <p className="pw">
                        <input type='password' id="login_pw"
                            placeholder="비밀번호" onKeyUp={enterkey} /></p>
                    <button className="Loginbutton" type=""
                        onClick={onLoggin}>로그인 하기</button>
                </div>
                <Tosignup />
            </div>
        );
    }
}

export default Login;