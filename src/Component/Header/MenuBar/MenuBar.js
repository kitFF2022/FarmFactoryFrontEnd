import React from 'react'
import './MenuBar.css'
import { Link } from "react-router-dom";


function MenuBarMenu(props) {
    return (
        <li><h4 className='MenuBarMenuItem'>{props.name}</h4></li>
    );
}

 //보이기
 function div_show() {
    var con = document.getElementById("profile_div");
    
	if(con.style.display === 'none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function login_in_out() {
    var button_log = document.getElementById("log_in_out_button");
    var profile_photo = document.getElementById('profile_photo');
    var profile_name = document.getElementById('profile_name');
    var profile_team = document.getElementById('profile_team');
	if(button_log.innerText === '로그아웃'){
		button_log.innerText = '로그인';
        profile_photo.src = process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png';
        profile_team.innerText = "로그인을"
        profile_name.innerText = "해주세요"
        window.location.reload()
    }else{
		button_log.innerText = '로그아웃';
        // window.location.href = "./Login";
        profile_photo.src = process.env.PUBLIC_URL + '/logo192.png';
        profile_team.innerText = "카카오"
        profile_name.innerText = "김카오"
        
    }
}
  

class MenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: ['home','서비스']
            
        }
    }

    renderMenu(i) {
        return (
            <MenuBarMenu name={this.state.menu[i]} />
        )
    }
    

    render() {
        return (
            <nav className="MenuBar">
                
                <ul>
                    <li className='MenuBarLiLogo'>
                    {/* <a href='./'> */}
                    <Link to={"/"}>
                        <img src={process.env.PUBLIC_URL + '/img/logo2.png'} alt="logo"></img>
                    </Link>
                    {/* </a> */}
                    </li>
                    <li className='MenuBarLiLogoText'>
                        <div>
                            {/* Farm Factory */}
                        </div>
                    </li>
                    <li className='MenuBarLiMenu'>
                        <ul>
                            <a href='./'>
                                {this.renderMenu(0)}
                            </a>
                            <a href='/ProfileEdit'>
                                {this.renderMenu(1)}
                            </a>
                            <a href={()=> false} onClick={()=> div_show()}>
                            <li><img className='MenuBarLiUser' role="button" src={process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png'} alt='profile_div'></img></li>
                            </a>
                            <div id='profile_div' >
                                <img id='profile_photo' width="100px" height="100px" role="button" src={process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png'} alt='profile_photo'></img><br/>
                                <span id='profile_team'>로그인을</span><br/>
                                <span id='profile_name'>해주세요</span>
                                <hr/>
                                <button id='log_in_out_button' onClick={()=>login_in_out()}>로그인</button>
                            </div>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MenuBar