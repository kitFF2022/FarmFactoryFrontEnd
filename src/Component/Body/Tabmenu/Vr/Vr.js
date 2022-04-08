import React, { Component,useEffect,useState } from "react";
import './Vr.css';
// import styled from 'styled-components';

if (window.innerWidth <= 1052) {
  
} else {
  
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
          <span className='h1'>3D로<br/>입체감 있게 </span><br/>
          <span className="Vrtext">
          <b>
          설비 모델링을 통한 3D로 간편하게 설계가 가능하며,<br/>
          VR 기기가 있다면, MR을 통한 설계가 가능한 프로젝트.
          </b>
          </span>
        <br /></div>
      </div>

    )
  }
}


export default Vr;