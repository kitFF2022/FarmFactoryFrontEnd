import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './Slideshow.css'
import Loginbutton from '../Loginbutton/Loginbutton';
import "aos/dist/aos.css";


document.addEventListener('resize', function () {
    window.addEventListener('resize', function () {
        if (window.matchMedia('(orientation: portrait)').matches) {
            document.location.reload();
        } else {
            document.location.reload();
        }
    });
});
class Slideshow extends React.Component {
    constructor(props) {
        super();
        this.state = {
            menu: 0,
            images: [{
                url: process.env.PUBLIC_URL + '/img/vecteezy_organic-vegetables-at-the-farm_2301681.jpg',
                caption: 'Slide 1'
            },
            {
                url: process.env.PUBLIC_URL + '/img/medium-shot-agronomists-taking-picture-strawberry-with-digital-tablet.jpg',
                caption: 'Slide 2'
            },
            // {
            //     url: process.env.PUBLIC_URL + '/img/vecteezy_vegetable-green-oak-growing-in-hydroponic-system_3556085.jpg',
            //     caption: 'Slide 3'
            // },
            // {
            //     url: process.env.PUBLIC_URL + '/img/vecteezy_asian-man-on-the-farm_2301674.jpg',
            //     caption: 'Slide 4'
            // },
            // {
            //     url: process.env.PUBLIC_URL + '/img/vecteezy_fresh-frillice-iceberg-lettuce-leaves-salads-vegetable-hydroponics-farm_2686872.jpg',
            //     caption: 'Slide 5'
            // },
            {
                url: process.env.PUBLIC_URL + '/img/vecteezy_fresh-frillice-iceberg-lettuce-leaves-salads-vegetable-hydroponics-farm_2923853.jpg',
                caption: 'Slide 6'
            },
                // {
                //     url: process.env.PUBLIC_URL + '/img/vecteezy_young-farmer-is-holding-vegetable-green-oak_2899153.jpg',
                //     caption: 'Slide 7'
                // },
            ],
        }
        if (window.innerWidth < 500) {
            return (this.state.width = window.innerWidth - 50, this.state.height = (window.innerWidth - 50) * 0.7);
        }
        else {
            return (this.state.width = 450, this.state.height = 300);
        }
    }
    render() {

        return (
            <div className='Slideshow'
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-offset="500">
                <ul className='Slideshowul'>
                    <li className='Slideshowli1'>
                        <ul className='Slideshowul2'>
                            <li><h2 className='SlideshowTitle'>?????????<br />?????? ??????</h2></li>
                            <li><h3 className='SlideshowName'>Farm Factory</h3></li>
                            <li><h4 className='SlideshowSubs'>
                                ????????? ???????????? ??????????????? ????????? ??????,<br />
                                ???????????? ?????? ?????? ?????????, ????????? ????????? ?????? ????????????<br />
                                ??????, ?????????, ????????? ??????, ????????? ????????? ????????? ?????????!
                            </h4></li>
                            <Loginbutton />
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
} export default Slideshow;