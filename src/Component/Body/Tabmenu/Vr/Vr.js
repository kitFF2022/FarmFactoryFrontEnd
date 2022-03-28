import React, { Component,useEffect,useState } from "react";
import './Vr.css';

const ResizeComponent = () => {
  const [windowSize,setWindowSize] = useState({
    width : window.innerWidth,
    height: window.innerHeight
  });
  const Handleresize = () => {
    console.log(`브라우저 화면 사이즈 x : ${window.innerWidth}, y : ${window.innerHeight}`);
  }
  useEffect(()=> {
    window.addEventListener('resize',Handleresize);
    return () => {
      window.removeEventListener('resize',Handleresize);
    }
  },[]);
}

class Vr extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    const Vrstyle = {
      color: "black",
      backgroundColor: "blue",
      fontFamily: "Arial"
    }
    return (
      <div className="Vrtextbox">
        <img className="Vrimg" src='/img/img1.jpg' alt="VR 사진">
        </img>
        <div className="Vrpaddingbox"><br/>
          <span className='h1'>3D로<br/>입체감있게 </span><br/>
          <span className="Vrtext">
          <b>
          설비 모델링을 통한 3D로 간편하게 설계가 가능하며,<br/>
          VR 기기가 있다면, MR을 통한 설계가 가능한 프로젝트.
          </b>
          </span>
        <br /></div>
        <div>브라우저 화면 사이즈 x:{window.innerWidth}, y:{window.innerHeight}</div>
      </div>

    )
  }
}


export default Vr;