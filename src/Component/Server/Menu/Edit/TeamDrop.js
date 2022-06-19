import React from "react";
import './TeamAdd.css'
import Header from "../../../Header/Header";
import axios from "axios";
//팀 탈퇴
const api = "http://mmyu.direct.quickconnect.to:8880"
const access_token = sessionStorage.getItem('user_token');
//팀 데이터 탈퇴 창
function Drop_Team () {// 현재 미구현
    var get_team_resister_name = document.getElementById('create_team').value;
    
    console.log(get_team_resister_name)

    axios({
        method: 'get',
        url:api+"/team",
        data:{
            Name : get_team_resister_name
        }
        ,
        headers:{
            Authorization: `Bearer ${access_token}`
        } 
        
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

class TeamAdd extends React.Component {
    render() {
        return (
            <div className = "Team_editPageWrap">
                <Header/>
                <div className = "Team_editWrap">
                <img className="Team_editlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                <p>새로운 팀 추가</p>
                <p className = "pw"><span> 탈퇴할 팀 : </span>
                    <input type="text" id = "create_team"
                    placeholder="팀명 작성"/>
                </p>
                <p><button className = "Loginbutton" type="button" 
                onClick={Drop_Team}
                >버튼</button></p>
                </div>
            </div>
        );
    }
}

export default TeamAdd;