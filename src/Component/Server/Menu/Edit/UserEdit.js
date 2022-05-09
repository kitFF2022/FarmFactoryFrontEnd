import React from "react";
import './UserEdit.css'
import Header from "../../../Header/Header";
import axios from "axios";

//프로필 업로드
var access_token = sessionStorage.getItem('user_token');
const onChangeImg = (e) => {
    e.preventDefault();
    const input = document.getElementById('edit_pic')
    if(e.target.files){
        const formData = new FormData()
        console.log("넘어감")
        formData.append('file',input.files[0])
        axios({
            method: 'post',
            url: 'http://mmyu.direct.quickconnect.to:8880/user/profilePic',
            data: formData,
            headers:{
                "Content-Type" : "multipart/form-data",
                Authorization: `Bearer ${access_token}`
            } 
        })
        .then(function (response) {
            console.log(response)
            console.log("데이터 전송 성공함")
        })
    }
}

//유저 데이터 받아옴
function Edit_User_Data(){
    const access_token = sessionStorage.getItem('user_token');
    const api = 'http://mmyu.direct.quickconnect.to:8880/user/update'
    var get_resister_name = document.getElementById('profile_set_name').value;
    var Nickname = document.getElementById('profile_set_nick').value;
    var get_resister_pw = document.getElementById('profile_set_pw').value;
    axios({
        method: 'put',
        url:api,
        data:{
            Name : get_resister_name,
            Nickname : Nickname,
            Password: get_resister_pw
        }
        ,
        headers:{
            Authorization: `Bearer ${access_token}`
        } 
    })
    .then(function (response) {
    console.log(response)
        console.log("데이터 전송 성공함")
    })
    .catch(function (error) {
        console.error(error)
        console.error(error.message)
        if(error.message ==='Network Error'){
            alert('No server response');
            
        }
        if(error.message ==='Request failed with status code 404'){
            alert('404 error');
            
        }
    });
}

function get_data () {
    var access_token = sessionStorage.getItem('user_token');
    const api = 'http://mmyu.direct.quickconnect.to:8880/user/userData'
    var get_profile_Email = document.getElementById('profile_set_email');
    axios.get(api, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    .then((res) => {
        console.log(res)
        console.log(res.data.message.Name)
        console.log(res.data.message.Nickname)
        console.log(res.data.message.Emailaddr)
        document.getElementById('profile_set_name').value = res.data.message.Name;
        document.getElementById('profile_set_nick').value = res.data.message.Nickname;
        get_profile_Email.innerText = res.data.message.Emailaddr;
    })
    .catch((error) => {
        console.error(error)
    }); 
    var profile_pic = document.getElementById('profile_pic');
    axios.get("http://mmyu.direct.quickconnect.to:8880/user/profilePic", {
        responseType: "arraybuffer",
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    .then((response) => {
        console.log(response)
        profile_pic.src="data:image/png;base64," +btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
    })
    .catch((error) => {
        console.error(error)
    });
}   

class UserEdit extends React.Component {
    render() {
        return (
            <div className = "Team_editPageWrap" >
                <Header/>
                <div className = "Team_editWrap">
                <img className="Team_editlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                <br/>
                <img id='profile_pic' width="100px" height="100px" role="button" src={process.env.PUBLIC_URL + '/img/user.png'} alt='profile_photo'></img>
                <br/>
                <form>
                <input 
                    type="file" 
                    id="edit_pic"  
                    accept="image/jpeg,image/png"
                    onChange={onChangeImg}
                    />
                </form>
                <br/>
                <p className = "email">
                    <span>이메일 : </span>
                    <span id = "profile_set_email">없음</span>
                </p>
                <p className = "id">
                    <span> 이름 : </span>
                    <input type="text" id="profile_set_name"
                    placeholder="이름"/>
                </p>
                <p className = "nickname">
                    <span> 닉네임 : </span>
                    <input type="text" id = "profile_set_nick" 
                    placeholder="닉네임"/>
                </p>
                <p className = "pw"><span> 새 비밀번호:</span>
                    <input type="text" id = "profile_set_pw"
                    placeholder="비밀번호"/>
                </p>
                <button className = "Loginbutton" type="button" 
                    onClick={Edit_User_Data}>정보 수정
                </button>
                </div>
                {window.onload=console.log("응애")}
                {window.onload=get_data()}
            </div>
        )
    }
}
export default UserEdit;