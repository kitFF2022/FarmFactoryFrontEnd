import React from "react";
import './UserEdit.css'
import Header from "../../../Header/Header";
// import Tosignup from "./Tosignup";
// import { Link } from "react-router-dom";
import axios from "axios";

//유저 데이터 받아옴
function Edit_User_Data(){
    var get_resister_name = document.getElementById('profile_name').value;
    var Nickname = document.getElementById('profile_nick').value;
    var get_resister_email = document.getElementById('profile_email').value;
    var get_resister_pw = document.getElementById('profile_pw').value;

    axios.post("http://mmyu.direct.quickconnect.to:8880/user/signup", {
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
function get_data () {
    const access_token = sessionStorage.getItem('user_token');
    const api = 'http://mmyu.direct.quickconnect.to:8880/user/userData'
    // console.log("응ㅇㅇㅇㅇㅇ")
    axios.get(api, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    .then((res) => {
        console.log(res.data.message.Name)
        // if (res.data.message.ProfilePic === "False"){
            // profile_photo.src = process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png'
        // }
        // else{
        //     profile_photo.src = process.env.PUBLIC_URL + res.data.message.ProfilePic;
        // }
         // profile_team.innerText = res.data.message.Team;
        // profile_name.innerText = res.data.message.Name;
    })
    .catch((error) => {
        console.error(error)
    }); 
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
                <p className = "id"><span> 이름 : <span>없음</span></span>
                   </p>
                   <p className = "nickname"><span> 닉네임 : <span>없음</span>{get_data}</span>
                    <input type="text" id = "profile_nick" value="ldi2676"
                    placeholder="전화번호"/></p>
                <p className = "id"><span>이메일 : </span>
                    <input type="text" id = "profile_email" value="jw2676@naver.com"
                    // _onChange={(e) => {setId(e.target.value);}} 
                    placeholder="전화번호, 사용자 이름 또는 이메일"/></p>
                <p className = "pw"><span> 새 비밀번호: </span>
                    <input type="text" id = "profile_pw" value="1234"
                    // _onChange={(e) => {setPwd(e.target.value);}} 
                    placeholder="비밀번호"/></p>
                {/* <Link to="/"> */}
                <button className = "Loginbutton" type="button" 
                onClick={Edit_User_Data}>정보 수정</button>
                {/* </Link> */}
                </div>
                {/* <Tosignup/> */}
            </div>
        );
    }
}

export default Login;