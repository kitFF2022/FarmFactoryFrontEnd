import React from "react";
import './Body.css'
import Tabmenu from './Tabmenu/Tabmenu';
import Download from './Download/Download';
import Slideshow from "./Slideshow/Slideshow";


class Body extends React.Component {
    render() {
        return (
            <div>
                <Slideshow />
                <Tabmenu />
                <Download />
            </div>


        );
    }
}

export default Body