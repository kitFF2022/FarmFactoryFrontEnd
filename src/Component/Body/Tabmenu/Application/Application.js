//cafe
import React from "react";
import './Application.css';


class Application extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    return (
      <div className="Apptextbox">
        <img className="Appimg" src='/img/img2.jpg' alt="APP 사진">
        </img>
        <br/>
        <span className='h1'>App을 통한<br/>농장 설계</span><br/>
        <span className="Apptext">
        <b>
        개인 휴대전화를 이용해서, 간편하게, 언제 어디서든지,<br/>
        자신만의 농장을 설계하거나, 관리해보세요!
        </b>
        </span>
        
        <br />
        
      </div>
    )
  }
}

export default Application;