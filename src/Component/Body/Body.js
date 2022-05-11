import React from "react";
import './Body.css'
import Tabmenu from './Tabmenu/Tabmenu';
import Download from './Download/Download';
import Slideshow from "./Slideshow/Slideshow";
// window.onresize = function() {
//     document.getElementById('Vrimg').width = window.innerWidth/2;
//   document.getElementById('Vrimg').height = window.innerWidth/3;
//   document.getElementById('Appimg').width = window.innerWidth/2;
//   document.getElementById('Appimg').height = window.innerWidth/3;
//   document.getElementById('Webimg').width = window.innerWidth/2;
//   document.getElementById('Webimg').height = window.innerWidth/3;  
//   document.getElementById('sec3').width = window.innerWidth/2;
//     document.getElementById('sec3').height = window.innerWidth/3;
//   };
/* [html 화면 사이즈 변경 이벤트 감지] */
// window.onresize = function() {
//     var ysize = document.getElementById("ysize");
//     var xsize= document.getElementById('xsize');
//     // console.log("");
//     // console.log("[window onresize] : [start]");
//     // console.log(""); 
//     xsize.innerText = window.innerWidth
//     ysize.innerText = window.innerHeight
//     // [이벤트 함수 호출]
//     // checkScreenSize();
// };

/* [이벤트 함수 정의] */
// function checkScreenSize(){
    // console.log("");
    // console.log("[checkScreenSize] : [start]");    		
    // console.log("");

    //화면 해상도 확인
    // var screenWidth = window.innerWidth;
    // var screenHeight = window.innerHeight;
    // console.log("");
    // console.log("[checkScreenSize] : [width] : " + screenWidth);
    // console.log("[checkScreenSize] : [height] : " + screenHeight);
    // console.log("");
    // screenWidth
    // if (screenWidth >= 1201){
    //     console.log("");
    //     console.log("[checkScreenSize] : [min-width: 1201px]"); 
    //     console.log("");

    //     alert("1201px");
    // }
    // else if (screenWidth >= 768) {
    //     console.log("");
    //     console.log("[checkScreenSize] : [min-width: 768px]"); 
    //     console.log("");

    //     alert("768px");
    // }
    // else if (screenWidth >= 540) {
    //     console.log("");
    //     console.log("[checkScreenSize] : [min-width: 540px]"); 
    //     console.log("");

    //     alert("540px");
    // }
    // else if (screenWidth >= 411) {
    //     console.log("");
    //     console.log("[checkScreenSize] : [min-width: 411px]"); 
    //     console.log("");

    //     alert("411px");
    // }
    // else if (screenWidth >= 360) {
    //     console.log("");
    //     console.log("[checkScreenSize] : [min-width: 360px]"); 
    //     console.log("");

    //     alert("360px");
    // }   
    // else if (screenWidth >= 320) {
    //     console.log("");
    //     console.log("[checkScreenSize] : [min-width: 320px]"); 
    //     console.log("");

    //     alert("320px");
    // }
    // else if (screenWidth >= 280) {
    //     console.log("");
    //     console.log("[checkScreenSize] : [min-width: 280px]"); 
    //     console.log("");

    //     alert("280px");
    // }
    // else if (screenWidth >= 200) {
    //     console.log("");
    //     console.log("[checkScreenSize] : [min-width: 200px]"); 
    //     console.log("");

    //     alert("200px");
    // }
    // else {
    //     console.log("");
    //     console.log("[checkScreenSize] : [NONE]"); 
    //     console.log("");

    //     alert("NONE");
    // } 
// };
class Body extends React.Component {
    render() {
        return (
            <div className="Bodycontainer">
                <Slideshow />
                <Tabmenu />
                <Download />
                
            </div>


        );
    }
}

export default Body