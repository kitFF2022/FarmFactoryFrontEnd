import React from 'react'
import './MenuBar.css'
import Logo from './logo.png'

function MenuBarMenu(props) {
    return (
        <li><h4 className='MenuBarMenuItem'>{props.name}</h4></li>
    );
}

class MenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: ['HOME', '공지사항', '서비스']
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
                <img className="MenuBarLogo" src={Logo}></img>
                <div className="MenuBarLogoText">
                    Farm Factory
                </div>
                <ul className="MenuBarMenu">
                    {this.renderMenu(0)}
                    {this.renderMenu(1)}
                    {this.renderMenu(2)}
                </ul>
            </nav>
        );
    }
}

export default MenuBar