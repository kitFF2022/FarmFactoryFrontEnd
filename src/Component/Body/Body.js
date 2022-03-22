import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './Body.css'
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';
import Img3 from './img3.jpg';

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

const Hover = () => {
    return(
        <div className="Hover">
            <span><a>VR</a></span>
            <span><a helf="">APP</a></span>
            <span><a helf="">WEB</a></span>
        </div>
    )
}

const Description = () => {
    return (
        <div className="Description">
            <div>
                <img src='https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/uPd/image/i7otegJ8UuUstpqoCEv7uOnS4vM.jpg' alt="사진1"></img>
                <p>
                    <h1 className="D_title">VR</h1>
                    <span className="D_desc">응애응애</span>
                </p>
            </div>
        </div>
    )
}

const Download = () => {
    return (
        <div className="Download">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1> Get Start!</h1>
            <span><a href="http://www.google.com">VR</a></span>
            <span>    |    </span>
            <span><a href="www.naver.com">APP</a></span>
            <span>   |    </span>
            <span><a href="www.daum.net">WEB</a></span>
            
        </div>
    )
}

class Body extends React.Component {
    render() {
        return (
            <div>
                <Slideshow />
                <Hover/>
                <Description/>
                <Download/>
            </div>
            
            
        );
    }
}

export default Body