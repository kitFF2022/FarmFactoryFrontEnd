import React from "react";
import './Login.css'
import Header from "../Header/Header";
import Tosignup from "./Tosignup";
// import { withRouter } from 'react-router-dom';


class Login extends React.Component {
    goToMain = () => {
    this.props.history.push('./');  //props 객체의 history (this.props.history) 에 접근해서
                                   //history의 push 메서드의 인자로 Routes.js 에서 설정한 경로('./main')를 넘겨주면, 해당 라우트로 이동
  }
    render() {
        return (
            <div className = "LoginPageWrap">
                <Header/>
                <div className = "LoginWrap">
                <img className="Loginlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'}></img>
                {/* <h1 className = "Logintitle">로그인 페이지</h1> */}
                <p className = "id"><input type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/></p>
                <p className = "pw"><input type="text" placeholder="비밀번호"/></p>
                <p><button className = "Loginbutton" type="button" onClick={this.goToMain}>로그인 하기</button></p> 
                </div>
                <Tosignup/>
            </div>
        );
    }
}

export default Login;