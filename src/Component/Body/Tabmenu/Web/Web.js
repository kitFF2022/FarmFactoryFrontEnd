import React from "react";
import './Web.css';

window.onresize = function() {
  // document.getElementById('Vrimg').width = window.innerWidth/2;
  // document.getElementById('Vrimg').height = window.innerWidth/3;
  document.getElementById('Webimg').width = window.innerWidth/2;
  document.getElementById('Webimg').height = window.innerWidth/3;
};

class Web extends React.Component {
  // constructor(props) {
  //   super();

  //   this.state = {
  //     menu: 0,
  //   };
  // }

  render() {
    return (
      <div className="Webtextbox">
        <img className="Webimg" id="Webimg" src={process.env.PUBLIC_URL + '/img/WEB_image_confirmed.png'} alt="Web 사진">
        
        </img>
        <br/>
        <span className='h1'>웹으로<br/>간편하게</span><br/>
        <span className="Webtext">
        <b>
        VR기기가 없다면, 웹으로도 간편하게 가능합니다!<br/>
        자신의 컴퓨터 안에 펼쳐지는 농장을 경험해보세요!
        </b>
        </span>
        <br />
        
      </div>
    )
  }
}


export default Web;