import React from "react";
import './Tabmenu.css';
import Vr from './Vr/Vr';
import Application from './Application/Application';
import Web from './Web/Web';
import Loginbutton from '../Loginbutton/Loginbutton';
import "aos/dist/aos.css";


const menuList = {
  0: <Web />,
  1: <Application />,
  2: <Vr />,
};

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  }

  render() {
    return (
      <div className="Tabmenuwrap"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-offset="200">
        <br />
        <div className="menuBar">
          <ul className="tabs">
            <li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>WEB</li>
            <li className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeMenu(1)}>APP</li>
            <li className={`${this.state.menu === 2 ? 'active' : ''}`} onClick={() => this.changeMenu(2)}>VR</li>
          </ul>
        </div>
        <div className="contentArea">
          {menuList[this.state.menu]}
        </div>
        <Loginbutton />

      </div>
    )
  }
}


export default App;