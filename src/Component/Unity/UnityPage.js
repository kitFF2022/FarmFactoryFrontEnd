//유니티 화면
import './UnityPage.css'
import Header from "../Header/Header";
import React from 'react'
import Unity, { UnityContent } from "react-unity-webgl";

let unityContent = new UnityContent(
    "/Build/WebGLTestBuild.json",
    "/Build/UnityLoader.js"
);
// unityContent.send("오브젝트","함수")
class UnityPage extends React.Component {
    render() {

        return (

            <div className="UnityPageWrap">
                <Header />
                <div className="UnityWrap">
                    <Unity unityContent={unityContent}
                    style={{
                        height: "100%",
                        width: "90%",
                        border: "2px solid black",
                        background: "grey",
                    }}/>
                </div>
            </div>
        );
    }
}
export default UnityPage;
