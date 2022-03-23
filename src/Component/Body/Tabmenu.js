
import React, { Component } from "react";
import './style.css';
import Mail from './Mail';
import Cafe from './Cafe';
import Web from './Web';

const menuList = {
  0: <Mail />,
  1: <Cafe />,
  2: <Web />,
};

class App extends React.Component{
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
  }

  render(){
    return(
      <div className="wrap">
        <div className="menuBar">
          <ul className="tabs">
            <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>VR</li>
            <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>App</li>
            <li className={`${this.state.menu === 2? 'active': ''}`} onClick={() => this.changeMenu(2)}>Web</li>
          </ul>
        </div>
        <div className="contentArea">
          {menuList[this.state.menu]}
        </div>
      </div>
    )
  }
}


export default App;