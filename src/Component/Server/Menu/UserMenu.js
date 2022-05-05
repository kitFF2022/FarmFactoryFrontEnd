import React from "react";
import './TeamEdit.css'
import Header from "../../Header/Header";
// import Tosignup from "./Tosignup";
// import { Link } from "react-router-dom";
import axios from "axios";
//유저 정보 수정
function User_Data_Edit(){
    window.location.href = "/UserEdit";
}
//계정 삭제
function Sign_Delete() {
    if (window.confirm('정말로 계정을 삭제하시겠습니까?') ===true){
        const api = 'http://mmyu.direct.quickconnect.to:8880/TEST/DB/DROPTABLE'
        console.log('계정이 삭제 되었습니다.');
        axios.get(api, {
            // headers: {
            //     Authorization: `Bearer ${access_token}`
            // }
        })
        .then(() => {
            alert('계정이 삭제 되었습니다.');
            console.log('계정 삭제');
            window.location.href = "/";
            sessionStorage.removeItem('user_id');
        })
        .catch((error) => {
            console.error(error)
        });
    }
    
        
}  


class Login extends React.Component {
    // goToMain = () => {
    // this.props.history.push('./');  //props 객체의 history (this.props.history) 에 접근해서
                                   //history의 push 메서드의 인자로 Routes.js 에서 설정한 경로('./main')를 넘겨주면, 해당 라우트로 이동
//   }
    render() {
        return (
            <div className = "Team_editPageWrap">
                <Header/>
                <div className = "Team_editWrap">
                <img className="Team_editlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                {/* <h1 className = "Logintitle">로그인 페이지</h1> */}
                
                <p><button className = "Loginbutton" type="button" 
                onClick={User_Data_Edit}>정보 수정</button></p>
                <p><button className = "Loginbutton" type="button" 
                onClick={Sign_Delete}>계정 삭제</button></p>
                {/* </Link> */}
                </div>
                {/* <Tosignup/> */}
            </div>
        );
    }
}

export default Login;