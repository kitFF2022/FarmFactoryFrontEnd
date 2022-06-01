import React, { useEffect } from 'react'
import './Download.css'
import Loginbutton from '../Loginbutton/Loginbutton';
import AOS from "aos";
import "aos/dist/aos.css";


const Download = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="Download"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-offset="200">
            <br /><br /><br /><br /><br />
            <img src='/img/smart-farming-with-agriculture-iot.jpg' id='sec3' alt="VR 사진">
            </img>
            <span className='h1'>간편하게</span><br />
            <span className='h1'>내손안에서</span><br />
            <span className='h2'>Farm Factory</span><br />
            <span>
                WEB, APP 그리고 VR을 통한 다양한 방법으로<br />
                자신의 농장을 설계하고, 이를 통한 설계에 필요한 자원을 낮추세요!<br />
                설계를 더욱더 손쉽게 프로젝트로!
            </span>
            <Loginbutton />
            <br /><br />
            {/* <br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /> */}
        </div>

    )
}

export default Download