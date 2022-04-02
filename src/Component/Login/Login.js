import React from "react";
import './Login.css'
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
    goToMain = () => {
    this.props.history.push('Home');  //props 객체의 history (this.props.history) 에 접근해서
                                   //history의 push 메서드의 인자로 Routes.js 에서 설정한 경로('./main')를 넘겨주면, 해당 라우트로 이동
  }
    render() {
        return (
            <div className = "login">
                <h1 className = "title">로그인 페이지</h1>
                <p className = "id">ID: <input type="text" /></p>
                <p className = "pw">PW: <input type="text" /></p>
                <p className = "button"><button type="button" onClick={this.goToMain}>로그인 하기</button></p> 
            </div>
        );
    }
}

export default Login;