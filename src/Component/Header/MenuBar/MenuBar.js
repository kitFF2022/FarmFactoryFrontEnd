import React from 'react'
import './MenuBar.css'
// import { Link } from "react-router-dom";
import axios from "axios";
// import { response } from 'express';
function MenuBarMenu(props) {
    return (
        <li><h4 className='MenuBarMenuItem'>{props.name}</h4></li>
    );
}

//보이기
function div_show() {
    var con = document.getElementById("profile_div");

    if (con.style.display === 'block') {
        con.style.display = 'none';
    }
    else {
        con.style.display = 'block';
        isLogin();
    }
}
function isLogin() {
    const access_token = sessionStorage.getItem('user_token');
    const api = 'http://mmyu.direct.quickconnect.to:8880/user/userData'
    var button_log = document.getElementById("log_in_out_button");
    var profile_photo = document.getElementById('profile_photo');
    var profile_name = document.getElementById('profile_name');
    var profile_team = document.getElementById('profile_team');
    // var Authorization
    if (sessionStorage.getItem('user_id') == null) {
        button_log.innerText = '로그인';
        profile_photo = process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png';
        profile_team.innerText = "로그인을"
        profile_name.innerText = "해주세요"
    }
    else {
        axios.get(api, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
            .then((res) => {
                console.log(res.data.message)
                if (res.data.message.ProfilePic === "False") {
                    profile_photo.src = process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png'
                }
                else {
                    axios.get("http://mmyu.direct.quickconnect.to:8880/user/profilePic", {
                        responseType: "arraybuffer",
                        headers: {
                            Authorization: `Bearer ${access_token}`
                        }
                        // responseType: 'arraybuffer'
                    })
                        .then((response) => {
                            console.log(response)
                            profile_photo.src = "data:image/png;base64," + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
                        })
                        .catch((error) => {
                            console.error(error)
                        })


                }
                profile_team.innerText = res.data.message.Team;
                profile_name.innerText = res.data.message.Name;
            })
            .catch((error) => {
                console.error(error)
            })

        button_log.innerText = '로그아웃';
        // profile_photo.src = process.env.PUBLIC_URL + '/logo192.png';
        // profile_team.innerText = res.data;
        // profile_name.innerText = res.data;

    }
}
function login_in() {
    var button_log = document.getElementById("log_in_out_button");
    if (button_log.innerText === '로그아웃') {
        sessionStorage.removeItem('user_id')
        window.location.reload()
    }
    else {
        window.location.href = "/Login";
    }
}


class MenuBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            menu: ['home', '서비스']

        }
    }

    renderMenu(i) {
        //----------------

        //-----------------
        return (
            <MenuBarMenu name={this.state.menu[i]} />
        )
    }


    render() {
        return (
            <nav className="MenuBar">

                <ul>
                    <li className='MenuBarLiLogo'>

                        <a href='/'>
                            <img src={process.env.PUBLIC_URL + '/img/logo2.png'} alt="logo"></img>
                        </a>
                    </li>
                    <li className='MenuBarLiLogoText'>
                        <div>
                            {/* Farm Factory */}
                        </div>
                    </li>
                    <li className='MenuBarLiMenu'>
                        <ul>
                            <a href='/'>
                                {this.renderMenu(0)}
                            </a>
                            <a href='/Servicechecklogin'>
                                {this.renderMenu(1)}
                            </a>
                            <a onClick={div_show}>
                                <li><img className='MenuBarLiUser' role="button" src={process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png'} alt='profile_div'></img></li>
                            </a>
                            <div id='profile_div' >
                                <img id='profile_photo' width="100px" height="100px" role="button" src={process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png'} alt='profile_photo'></img><br />
                                팀:<span id='profile_team'>로그인을</span><br />
                                이름:<span id='profile_name'>해주세요</span>
                                <hr />
                                <button id='log_in_out_button' onClick={() => login_in()}>로그인</button>
                            </div>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MenuBar