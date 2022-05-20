import React from "react";
import './UserEdit.css'
import Header from "../../../Header/Header";
import axios from "axios";

//프로필 업로드
const api = "http://mmyu.direct.quickconnect.to:8880"
const access_token = sessionStorage.getItem('user_token');
const onChangeImg = (e) => {
    e.preventDefault();
    const input = document.getElementById('edit_pic')
    if(e.target.files){
        const formData = new FormData()
        formData.append('file',input.files[0])
        axios({
            method: 'post',
            url: api+'/user/profilePic',
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
    var get_resister_name = document.getElementById('profile_set_name').value;
    var Nickname = document.getElementById('profile_set_nick').value;
    var get_resister_pw = document.getElementById('profile_set_pw').value;
    axios({
        method: 'put',
        url:api+"/user/update",
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
    var get_profile_Email = document.getElementById('profile_set_email');
    console.log("응애애")
    axios.get(api+"/user/userData", {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    .then((res) => {
        document.getElementById('profile_set_name').value = res.data.message.Name;
        document.getElementById('profile_set_nick').value = res.data.message.Nickname;
        get_profile_Email.innerText = res.data.message.Emailaddr;
    })
    .catch((error) => {
        console.error(error)
    }); 
    var profile_pic = document.getElementById('profile_pic');
    axios.get(api+"/user/profilePic", {
        responseType: "arraybuffer",
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    .then((response) => {
        // console.log(response)
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
                <table>
                    <tbody>
                <tr className = "email"></tr>
                    <td>이메일 : </td>
                    <td id = "profile_set_email">없음</td>
                
                <tr className = "id"></tr>
                    <td> 이름 : </td>
                    <td><input type="text" id="profile_set_name"
                    placeholder="이름"/></td>
                
                <tr className = "nickname"></tr>
                    <td> 닉네임 : </td>
                    <td><input type="text" id = "profile_set_nick" 
                    placeholder="닉네임"/></td>
                
                <tr className = "pw"></tr>
                    <td> 새 비밀번호:</td>
                    <td><input type="text" id = "profile_set_pw"
                    placeholder="비밀번호"/></td>
                </tbody>
                </table>
                <button className = "Loginbutton" type="button" 
                    onClick={get_data}>정보 조회
                </button>
                <button className = "Loginbutton" type="button" 
                    onClick={Edit_User_Data}>정보 수정
                </button>
                </div>
                {window.onload=console.log("응애")}
                {get_data()}
            </div>
        )
    }
}
export default UserEdit;