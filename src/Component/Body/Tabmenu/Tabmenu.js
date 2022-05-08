import React from "react";
import './Tabmenu.css';
import Vr from './Vr/Vr';
import Application from './Application/Application';
import Web from './Web/Web';
import Loginbutton from '../Loginbutton/Loginbutton';

window.onresize = function() {
  // document.getElementById('Vrimg').width = window.innerWidth/2;
  // document.getElementById('Vrimg').height = window.innerWidth/3;
  // document.getElementById('Appimg').width = window.innerWidth/2;
  // document.getElementById('Appimg').height = window.innerWidth/3;
  // document.getElementById('Webimg').width = window.innerWidth/2;
  // document.getElementById('Webimg').height = window.innerWidth/3;
};

const menuList = {
  0: <Vr />,
  1: <Application />,
  2: <Web />,
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
      <div className="Tabmenuwrap">
      <br/>
        <div className="menuBar">
          <ul className="tabs">
            
            <li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>VR</li>
            <li className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeMenu(1)}>APP</li>
            <li className={`${this.state.menu === 2 ? 'active' : ''}`} onClick={() => this.changeMenu(2)}>WEB</li>
          </ul>
        </div>
        <div className="contentArea">
          {menuList[this.state.menu]}
        </div>
        <Loginbutton/>
        
      </div>
    )
  }
}


export default App;