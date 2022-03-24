import React, { Component } from "react";
import './style.css';
import Img3 from './img3.jpg';
class Web extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <div className="textbox">
              <img src={Img3} alt="Web 사진">
              </img>
              <h1>Web</h1>
                웹사이트(Website)는 HTTP 프로토콜을 써서 어떤 URL에서 받아오는 HTML로 쓰인[1] 문서이다. 쉽게 말해서 지금 당신이 보고 있는 것.
블로그니 마이크로 블로그니 웹 2.0이니 해도 전부 결국은 웹사이트 기반으로 동작하고 있다.
웹사이트 구조는 일종의 미들웨어 역할을 하기 때문에 여러 모로 편리하다. 기존의 컴퓨터는 어플리케이션을 실행하고 정보를 받아와야 했지만, 웹사이트를 쓰면 OS나 하드웨어와는 상관없이 웹브라우저만 돌아가면 어디에서나 정보를 얻을 수 있기 때문이다. 저주받을 액티브X를 제외한다면...
하지만 서비스가 아닌 개인 사이트 형식은 점점 줄어들고 있다. 웹사이트 제작은 직접 제작하거나 외부 업체에 제작을 의뢰할 수 있으며, 국내에는 다수의 웹에이전시가 홈페이지 제작 서비스를 제공하고 있다.[2]
<br/>
              <span className="start_button"><button>실행하기</button></span>
            </div>
        )
    }
  }
  
  
  export default Web;