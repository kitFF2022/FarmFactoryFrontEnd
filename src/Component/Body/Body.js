import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './Body.css'
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';
import Img3 from './img3.jpg';
import Tabmenu from './Tabmenu';

const images = [
    { url: Img1 },
    { url: Img2 },
    { url: Img3 },
];

const Slideshow = () => {
    return (
        <div className="Slideshow">
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ display: 'flex', margin: '0 auto', marginTop: '50px' }}
            />
        </div>
    )
}

const Download = () => {
    return (
        <div className="Download">
            <br/><br/><br/><br/><br/><br/><br/>
            <h1> Get Start!</h1>
            <span><a href="#">VR</a></span>
            <span>    |    </span>
            <span><a href="#">APP</a></span>
            <span>   |    </span>
            <span><a href="#">WEB</a></span>
            <br/>
            <span><button>실행하기</button></span>
        </div>
    )
}

class Body extends React.Component {
    render() {
        return (
            <div>
                <Slideshow />
                <Tabmenu/>
                <Download/>
            </div>
            
            
        );
    }
}

export default Body