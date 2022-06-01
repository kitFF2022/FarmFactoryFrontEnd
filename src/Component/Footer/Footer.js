import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <span className="Footer_title">Farm Factory</span>
                <br/>
                <span> &copy; 2022. 금오공과대학교 컴퓨터공학과 이동익, 오승택, 장우석, 진성호 </span>
            </div>
        );
    }
}

export default Footer
