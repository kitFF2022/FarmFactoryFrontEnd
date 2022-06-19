import React from "react";
import './TeamInvite.css'
import Header from "../../../Header/Header";
import axios from "axios";

const api = "http://mmyu.direct.quickconnect.to:8880"
const access_token = sessionStorage.getItem('user_token');
// const id = sessionStorage.getItem('user_id');
//유저 조회 결과
function Result_Search(response) {
    // var Result_Search_User = document.getElementsByClassName('Result_Search')
    console.log("Result_Search")
    const table = document.getElementById("user_list")
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    td1.innerText = response.data.message[0].Name
    td2.innerText = response.data.message[0].Nickname
    td3.innerText = response.data.message[0].Emailaddr
    if (document.getElementById("user_list").rows.length !== 1) {
        document.getElementById("user_list").deleteRow(table.rows.length - 1);
    }
    // document.getElementById("result_search").detach()\

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    table.appendChild(tr)

    // return(
    //     <div>
    //     <table>
    //         <thead>
    //             <th>유저 이름</th>
    //             <th>유저 닉네임</th>
    //             <th>이메일(아이디)</th>
    //         </thead>
    //         <tbody>
    //             {response.data.message.map((res,i)=>(<tr key={i}>
    //                 <td>{res.Name}</td>
    //                 <td>{res.Nickname}</td>
    //                 <td>{res.Emailaddr}</td>
    //             </tr>))}
    //         </tbody>
    //     </table>
    //     </div>
    // );
}
//유저 조회
function User_Search() {
    var get_search_email = document.getElementById('search_email').value;
    // var get_search_token = document.getElementById('search_token').value;
    // console.log(get_team_resister_name)

    axios({
        method: 'get',
        url: api + "/user/search/email/" + get_search_email,
        headers: {
            Authorization: `Bearer ${access_token}`
        }

    })
        .then(function (response) {
            // response
            console.log("데이터 전송 성공함")
            console.log(response)
            console.log(response.data.message[0])
            console.log(response.data.message[0].Name)
            Result_Search(response)
            // window.location.href = "/TeamMenu";
        }).catch(function (error) {
            // 오류발생시 실행
            console.log(error.message);
            if (error.message === 'Network Error') {
                alert('422 No server response 서버가 동작하지 않습니다');
            }
            else if (error.message === 'Cannot read properties of undefined (reading `Name`)') {
                alert('찾으려는 아이디가 존재하지 않습니다.');
            }
            else if (error.message === 'Request failed with status code 404') {
                alert('404 error 존재하지 않는 페이지 입니다');
            }
            else if (error.message === 'Request failed with status code 409') {
                alert('409 error 데이터가 충돌했습니다');
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
//엔터키 입력시
const enterkey = e => {
    if (e.key === 'Enter') {
        User_Search();
    }
}
class TeamAdd extends React.Component {
    render() {
        return (
            <div className="Team_InvitePageWrap">
                <Header />
                <div className="Team_InviteWrap">
                    <img className="Team_Invitelogo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                    <p>초대할 유저의 이메일을 입력해 주세요</p>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr className="input_email"><td> 이메일 : </td>
                                <td><input type="text" id="search_email"
                                    placeholder="팀명 작성" onKeyUp={enterkey} /></td>
                            </tr>
                            {/* <tr className="input_token"><td> 토큰 : </td>
                            <td><input type="text" id="search_token"
                                placeholder="팀명 작성" onKeyUp={enterkey} /></td>
                        </tr> */}
                        </tbody>
                    </table>
                    <p><button className="Loginbutton" type="button"
                        onClick={User_Search} >조회</button></p>
                    <div >
                        <p><b>조회결과</b></p>
                        <div>
                            <table id="user_list">
                                <thead>
                                    <tr>
                                        <th>유저 이름</th>
                                        <th>유저 닉네임</th>
                                        <th>이메일(아이디)</th>
                                    </tr>
                                </thead>
                                <tbody id="result_search">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TeamAdd;