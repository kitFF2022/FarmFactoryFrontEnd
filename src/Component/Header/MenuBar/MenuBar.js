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
    var con = document.getElementById("status");
	if(con.style.display === 'none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
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
                    <Link to="/">
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
                            <a href='./'>
                                {this.renderMenu(1)}
                            </a>
                            <a href={()=> false} onClick={()=> div_show()}>
                            <li><img className='MenuBarLiUser' role="button" src={process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png'} alt='profile'></img></li>
                            </a>
                            <div id='status' >
                                ㅇㅇㅇ님
                                <hr/>
                                <button>로그아웃</button>
                            </div>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MenuBar