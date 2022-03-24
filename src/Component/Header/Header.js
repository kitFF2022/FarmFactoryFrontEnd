import React from "react";
import MenuBar from "./MenuBar/MenuBar";
import './Header.css'

class Header extends React.Component {

    render() {
        return (
            <div className="HeaderWrap">
                <div className="menuBar">
                    <MenuBar />
                </div>
            </div>
        );
    }
}

export default Header