import React, { Component } from "react";

class Vr extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    return (

      <div className="textbox">
        <img src='/img/img1.jpg' alt="VR 사진">
        </img>
        <h1>VR</h1>
        가상현실의 기본 개념은 '실제와 유사하지만 실제가 아닌 인공 환경'을 의미한다. 따라서 넓은 의미로 보면 플라이트 시뮬레이터 등의 시뮬레이션, 세컨드 라이프 등의 게임과 같은 시각매체 역시 가상현실에 포함될 수 있다. 하지만 일반적으로 가상현실이라 말하면 단순히 가상의 공간을 구현하는 것을 넘어서서 사용자의 오감에 직접적으로 작용하여 실제에 근접한 공간적, 시간적인 체험을 가능케 하는 기술을 의미한다. 하위 개념으로는 '모의 현실(Simulated Reality)'이 있는데, 가상현실을 현실에 최대한 가깝게 구현한 시뮬레이션이다. 가상현실은 "현실"과 "가상"의 구별이 가능하지만 모의 현실은 시뮬레이션이 너무나도 사실적이라 구별이 불가능하다는 차이점이 있다. 물리학에선 현실을 100% 완벽하게 재현하는 건 불가능하지만[2], 사람을 속일 수 있는 정도의 시뮬레이션은 충분히 가능하다고 한다.
        <br />
        <span className="start_button"><button>실행하기</button></span>
      </div>

    )
  }
}


export default Vr;