//cafe
import React from "react";
import './Application.css';

// window.onresize = function() {

//   document.getElementById('Appimg').width = window.innerWidth/2;
//   document.getElementById('Appimg').height = window.innerWidth/3;
// };

class Application extends React.Component {
  render() {
    return (
      <div className="Apptextbox">
        <img className="Appimg" id="Appimg" src='/img/iphone-1936818.jpg' alt="APP 사진">
        </img>
        <br />
        <span className='h1'>App을 통한<br />농장 설계</span><br />
        <span className="Apptext">
          <b>
            개인 휴대전화를 이용해서, 간편하게, 언제 어디서든지,<br />
            자신만의 농장을 설계하거나, 관리해보세요!
          </b>
        </span>
        <br />
        {/* {window.onresize = function () {
          document.getElementById('Appimg').width = window.innerWidth / 5;
          document.getElementById('Appimg').height = window.innerWidth / 4;
        }} */}
      </div>
    )
  }
}

export default Application;