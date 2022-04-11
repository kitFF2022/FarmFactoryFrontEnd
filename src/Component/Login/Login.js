import React, { useRef, useState, useEffect } from "react";
import './Login.css'
// import Header from "../Header/Header";
// import Tosignup from "./Tosignup";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);

    useEffect(()=> {
        userRef.current.focus();
    },[])

    useEffect(()=> {
        setErrMsg('');
    },[user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br/>
                    <p>
                        <a href="/Home">Go to Home</a>
                    </p>
                </section>
            ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errMsg" : 
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <img className="Loginlogo"  src={process.env.PUBLIC_URL + '/img/logo.png' }alt="logo"></img>
            <h1 className = "Logintitle">로그인 페이지</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                /> 
                <br/>   
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    placeholder="비밀번호"
                /> 
                <button className = "Loginbutton">로그인 하기</button> 
            </form> 
            <p>계정이 없으신가요? |
                <span className="line">
                    {/*put router link here*/}
                    {/* <a href="/Signup">가입하기</a> */}
                </span>
            </p>
        </section>
        )}
        </>
    )
}

// class Login extends React.Component {
//     render() {
//         return (
//             <div className = "LoginPageWrap">
//                 <Header/>
//                 <div className = "LoginWrap">
//                     {toLogin}
//                 </div>
//                 <Tosignup/>
//             </div>
//         );
//     }
// }

export default Login;