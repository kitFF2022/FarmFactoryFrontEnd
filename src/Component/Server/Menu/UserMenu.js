import React from "react";
import './TeamEdit.css'
import Header from "../../Header/Header";
import axios from "axios";

const api = 'http://mmyu.direct.quickconnect.to:8880'
//유저 정보 수정
function User_Data_Edit() {
    window.location.href = "/UserEdit";
}
//전체 계정 삭제
function Sign_all_Delete() {
    const access_token = sessionStorage.getItem('user_token');
    var Email = sessionStorage.getItem('user_id');
    var PW = sessionStorage.getItem('user_pw');
    if (window.confirm('정말로 현재 계정을 삭제하시겠습니까?') === true) {

        // console.log('계정이 삭제 되었습니다.');
        axios.delete(api + "/user/userData", {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            data: {
                Emailaddr: Email,
                Password: PW
            }
        })
            .then((response) => {
                console.log(response.data.message)
                alert('계정이 삭제 되었습니다.');
                console.log('계정 삭제');
                sessionStorage.removeItem('user_id');
                sessionStorage.removeItem('user_token');
                sessionStorage.removeItem('user_pw');
                window.location.href = "/";

            })
            .catch((error) => {
                console.error(error)
                //Request failed with status code 422
                if (error.message === 'Network Error') {
                    alert('422 No server response 서버가 동작하지 않습니다');
                }
                else if (error.message === 'Request failed with status code 404') {
                    alert('404 error 존재하지 않는 페이지 입니다');
                }
                else if (error.message === 'Request failed with status code 409') {
                    alert('409 error 데이터가 충돌했습니다. 팀을 삭제하셨는지 확인해 주세요.');
                }
                else if (error.message === 'Request failed with status code 403') {
                    alert('403 error 잘못된 데이터 입니다');
                }
                else if (error.message === 'Request failed with status code 500') {
                    alert('500 error 서버문제 입니다');
                }
                else {
                    alert(error.message);
                }
            });
    }
}


class Login extends React.Component {
    render() {
        return (
            <div className="Team_editPageWrap">
                <Header />
                <div className="Team_editWrap">
                    <img className="Team_editlogo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                    <p><button className="Loginbutton" type="button"
                        onClick={User_Data_Edit}>정보 수정</button></p>
                    <p><button className="Loginbutton" type="button"
                        onClick={Sign_all_Delete}>계정 삭제</button></p>
                </div>
            </div>
        );
    }
}
export default Login;