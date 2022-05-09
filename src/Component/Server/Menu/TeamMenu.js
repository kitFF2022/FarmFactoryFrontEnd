import React from "react";
import './TeamEdit.css'
import Header from "../../Header/Header";
import axios from "axios";

//팀 데이터 변경 창
function on_load_team () {
    var on_load_team = document.getElementById('on_load_team');
    const access_token = sessionStorage.getItem('user_data');
    const api = 'http://mmyu.direct.quickconnect.to:8880/user/userData'
    axios.get(api, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    .then((res) => {
        on_load_team.innerText = res.data.message.Team;
        console.log(res.data.message)
        
    })
    .catch((error) => {
        console.error(error)
    })
        
}     

class Login extends React.Component {
    render() {
        return (
            <div className = "Team_editPageWrap">
                <Header/>
                <div className = "Team_editWrap">
                <img className="Team_editlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                <p>현재 소속된 팀</p><p id='on_load_team'> 없음{on_load_team()}</p>
                <p><button className = "Loginbutton" type="button" 
                >팀 추가</button></p>
                <p><button className = "Loginbutton" type="button" 
                >팀 수정</button></p>
                <p><button className = "Loginbutton" type="button" 
                >팀 삭제</button></p>
                <p><button className = "Loginbutton" type="button" 
                >팀 탈퇴</button></p>
                </div>
            </div>
        );
    }
}

export default Login;