import React from "react";
import './TeamEdit.css'
import Header from "../../Header/Header";
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
    render() {
        return (
            <div className = "Team_editPageWrap">
                <Header/>
                <div className = "Team_editWrap">
                <img className="Team_editlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                <p><button className = "Loginbutton" type="button" 
                onClick={User_Data_Edit}>정보 수정</button></p>
                <p><button className = "Loginbutton" type="button" 
                onClick={Sign_Delete}>계정 삭제</button></p>
                </div>
            </div>
        );
    }
}

export default Login;