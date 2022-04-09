import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './Slideshow.css'
import Loginbutton from '../Loginbutton/Loginbutton';



class Slideshow extends React.Component {
    constructor(props) {
      super();
      this.state = {
        menu: 0,
        images:[{  
            url: process.env.PUBLIC_URL + '/img/img1.jpg',
            caption: 'Slide 1'
        },
        {
            url: process.env.PUBLIC_URL + '/img/img2.jpg',
            caption: 'Slide 2'
        },
        {
            url: process.env.PUBLIC_URL + '/img/img3.jpg',
            caption: 'Slide 3'
        }],
        width: 500,
        height:300,
      }
        if (window.innerWidth < 640){
            return (this.state.width =300, this.state.height =210);
        }
        else {
            return (this.state.width =500, this.state.height =350);
        }
    }
    render() {
        return (
            <div className='Slideshow'>
            <ul className='Slideshowul'>
                <li className='Slideshowli1'>
                    <ul className='Slideshowul2'>
                        <li><h2 className='SlideshowTitle'>나만의<br />개인 농장</h2></li>
                        <li><h3 className='SlideshowName'>Farm Factory</h3></li>
                        <li><h4 className='SlideshowSubs'>
                            당신의 손안에서 만들어가는 지하철 농장,<br/>
                            가정내의 작은 농장 그리고, 스마트 농장을 위한 프로젝트<br/>
                            설계, 디자인, 설비를 보고, 나만의 농장을 만들어 보세요!
                        </h4></li>
                        <Loginbutton/>
                    </ul>
                </li>
                <li className='Slideshowli2'>
                    
                    <SimpleImageSlider
                        width={this.state.width}
                        height={this.state.height}
                        images={this.state.images}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                        useGPURender={true}
                    />
                </li>
            </ul>
        </div>
        )
      }
} export default Slideshow