import React from "react";
import './Signup.css'
import Header from "../Header/Header";


class Login extends React.Component {
    goToMain = () => {
    this.props.history.push('./');  //props 객체의 history (this.props.history) 에 접근해서
                                   //history의 push 메서드의 인자로 Routes.js 에서 설정한 경로('./main')를 넘겨주면, 해당 라우트로 이동
  }
    render() {
        return (
            <div className = "SignupPageWrap">
                <Header/>
                <div className = "SignupWrap">
                    <h2>회원 가입</h2>
                    <p className = "Sign_id">ID <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/></p>
                    <p className = "Sign_pw">PW <input type="text" placeholder="비밀번호"/></p>
                    <p><button className = "Signbutton" type="button" onClick={this.goToMain}>회원가입</button></p>
                </div>
            </div>
        );
    }
}

export default Login;