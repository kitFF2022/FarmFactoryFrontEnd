import React from "react";
import './ProfileEdit.css'
import Header from "../Header/Header";

//서비스를 눌렀을 때 제일 먼저 나오는 창
class Profile_edit extends React.Component {
    render() {
        return (
            <div className = "Profile_editPageWrap">
                <Header/>
                <div className = "Profile_editWrap">
                <img className="Profile_editlogo"  src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                <button className="menu1" ><a href = "/UserMenu">유저 데이터 변경</a></button>
                <button className="menu1" ><a href = "/TeamMenu">팀 데이터 변경</a></button>
                </div>
            </div>
        );
    }
}
export default Profile_edit;