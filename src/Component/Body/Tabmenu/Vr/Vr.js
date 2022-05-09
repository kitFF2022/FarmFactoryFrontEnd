import React from "react";
import './Vr.css';

if (window.innerWidth <= 1052) {
  
}
else {
  
};

class Vr extends React.Component {
  render() {
    return (
      <div className="Vrtextbox">
        <img className="Vrimg" id = "Vrimg" src='/img/VR_image_confirmed.png' alt="VR 사진" >
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
        {/* {window.onresize = function () {
            document.getElementById('Vrimg').width = window.innerWidth/3;
            document.getElementById('Vrimg').height = window.innerHeight/2;
        }} */}
      </div>

    )
  }
}


export default Vr;