//유니티 화면
import './UnityPage.css'
import Header from "../Header/Header";
import React from 'react'
import Unity, { UnityContent } from "react-unity-webgl";

let unityContent = new UnityContent(
    "/FF-WebGLTestBuild/Build/FF-WebGLTestBuild.json",
    "/FF-WebGLTestBuild/Build/UnityLoader.js"
);
// unityContent.send("오브젝트","함수")
class TestUnityPage extends React.Component {
    render() {

        return (

            <div className="TestUnityPageWrap">
                <Header />
                <div className="TestUnityWrap">
                    <Unity unityContent={unityContent}
                    style={{
                        width: "90%",
                        height: "70%",
                        border: "2px solid black",
                        background: "grey",
                    }}/>
                </div>
            </div>
        );
    }
}
export default TestUnityPage;
