import React from "react";
import './Body.css'
import Tabmenu from './Tabmenu/Tabmenu';
import Download from './Download/Download';
import Slideshow from "./Slideshow/Slideshow";
import Location from '../GPS/Location';

class Body extends React.Component {
    render() {
        return (
            <div className="Bodycontainer">
                
                <Slideshow />
                <Tabmenu />
                <Download />
                <Location/>
            </div>
        );
    }
}

export default Body