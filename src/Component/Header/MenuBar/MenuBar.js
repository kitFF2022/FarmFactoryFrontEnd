import React from 'react'
import './MenuBar.css'

function MenuBarMenu(props) {
    return (
        <li><h4 className='MenuBarMenuItem'>{props.name}</h4></li>
    );
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
                    <a href='./'>
                        <img src={process.env.PUBLIC_URL + '/img/logo2.png'}></img>
                    </a>
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
                            <a href='./Login'>
                            <li><img className='MenuBarLiUser' src={process.env.PUBLIC_URL + '/img/Farm_Factory_profile.png'}></img></li>
                            </a>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MenuBar