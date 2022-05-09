//유니티 화면
import React from "react";
import './UnityPage.css'
import Header from "../Header/Header";

class UnityPage extends React.Component {
    render() {
        return (
            
            <div className = "UnityPageWrap">
                <Header/>
                <div className = "UnityWrap">
                    유니티가 들어갈 부분
                </div>
            </div>
        );
    }
}

export default UnityPage;