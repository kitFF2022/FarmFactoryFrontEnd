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
    if (e.target.files) {
        const formData = new FormData()
        formData.append('file', input.files[0])
        axios({
            method: 'post',
            url: api + '/user/profilePic',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(function (response) {
                console.log(response)
                console.log("데이터 전송 성공함")
                window.location.href = "/UserEdit";
            })
    }
}
//이미지 삭제 함수
function Delete_image() {
    if (window.confirm('정말로 현재 이미지를 삭제하시겠습니까?') === true) {
        axios({
            method: 'delete',
            url: api + "/user/profilePic",
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(function (response) {
                // response
                console.log("이미지 삭제 성공함");
                window.location.href = "/UserEdit";
                // document.location.reload();
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

}
//엔터키 입력시
const enterkey = e => {
    if (e.key === 'Enter') {
        Edit_User_Data();
    }
}
//유저 데이터 수정
function Edit_User_Data() {
    var get_resister_name = document.getElementById('profile_set_name').value;
    var Nickname = document.getElementById('profile_set_nick').value;
    var get_resister_pw
    if (document.getElementById('profile_set_pw').value === '') {
        get_resister_pw = sessionStorage.getItem('user_pw');
    }
    else {
        get_resister_pw = document.getElementById('profile_set_pw').value;
    }

    axios({
        method: 'put',
        url: api + "/user/userData",
        data: {
            Name: get_resister_name,
            Nickname: Nickname,
            Password: get_resister_pw
        }
        ,
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
        .then(function (response) {
            console.log(response.data)
            console.log("데이터 전송 성공함")
            window.location.href = "/";
        })
        .catch(function (error) {
            console.error(error)
            console.error(error.message)
            if (error.message === 'Network Error') {
                alert('No server response');

            }
            if (error.message === 'Request failed with status code 404') {
                alert('404 error');

            }
        });
}
//유저 데이터 받아옴
function get_data() {
    axios.get(api + "/user/profilePic", {
        responseType: "arraybuffer",
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
        .then((response) => {
            // console.log(response)
            document.getElementById('profile_pic').src = "data:image/png;base64," + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
        })
        .catch((error) => {
            console.error(error)
        });

    axios.get(api + "/user/userData", {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
        .then((res) => {
            document.getElementById('profile_set_name').value = res.data.message.Name;
            document.getElementById('profile_set_nick').value = res.data.message.Nickname;
            document.getElementById('profile_set_email').innerText = res.data.message.Emailaddr;
        }, 1000)
        .catch((error) => {
            console.error(error)
        });


}

class UserEdit extends React.Component {
    render() {
        return (
            <div className="Team_editPageWrap" >
                <Header />
                <div className="Team_editWrap">
                    <img className="Team_editlogo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                    <br />
                    <img id='profile_pic' width="100px" height="100px" role="button" src={process.env.PUBLIC_URL + '/img/user.png'} alt='profile_photo'></img>
                    <br />
                    <form>
                        <input
                            type="file"
                            id="edit_pic"
                            accept="image/jpeg,image/png"
                            onChange={onChangeImg}
                        />
                    </form>
                    <button onClick={Delete_image}>이미지 삭제</button>
                    <br />
                    <table>
                        <tbody>
                            <tr className="email">
                                <td><p>이메일 : </p></td>
                                <td id="profile_set_email">없음</td>
                            </tr>
                            <tr className="id">
                                <td><p>이름 : </p></td>
                                <td><input type="text" id="profile_set_name"
                                    placeholder="이름" onKeyUp={enterkey} /></td>
                            </tr>
                            <tr className="nickname">
                                <td><p>닉네임 : </p></td>
                                <td><input type="text" id="profile_set_nick"
                                    placeholder="닉네임" onKeyUp={enterkey} /></td>
                            </tr>
                            <tr className="pw">
                                <td><p>새 비밀번호 : </p></td>
                                <td><input type="text" id="profile_set_pw"
                                    placeholder="새 비밀번호를 입력해주세요" onKeyUp={enterkey} /></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <button className = "Loginbutton" type="button" 
                    onClick={get_data}>정보 조회
                </button> */}
                    <button className="Loginbutton" type="button"
                        onClick={Edit_User_Data}>정보 수정
                    </button>
                    {/* {get_data} */}
                </div>
                {get_data()}
            </div>
        )
    }
}
export default UserEdit;