import React from "react";
import './Tosignup.css'


class Login extends React.Component {
    goToMain = () => {
    this.props.history.push('./');  //props 객체의 history (this.props.history) 에 접근해서
                                   //history의 push 메서드의 인자로 Routes.js 에서 설정한 경로('./main')를 넘겨주면, 해당 라우트로 이동
  }
    render() {
        return (
            <div className = "TosignupPageWrap">
                <div className = "TosignupWrap">
                <p>계정이 없으신가요? | <a href="./Resister">가입하기</a></p>
                </div>
            </div>
        );
    }
}

export default Login;