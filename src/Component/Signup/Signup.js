// import React, {useState} from 'react'
// import "./Signup.css"
// import axios from 'axios';

// axios.post("http://localhost:8080/signup", {
//             userId: userId,
//             password: password,
//             username: userName,
//             email: email
//         }).then(function (response) {
//             if(response.data.code == 0){
//                 setPopup({
//                     open: true,
//                     title: "Confirm",
//                     message: "Join Success!", 
//                     callback: function(){
//                         navigate("/login");
//                     }
//                 });
//             } else {
//                 let message = response.data.message;
//                 if(response.data.code == 10000){
//                     message = "User ID is duplicated. Please enter a different User ID. "
//                 }
//                 setPopup({
//                     open: true,
//                     title: "Error",
//                     message: message
//                 });
//             }
//         }).catch(function (error) {
//             console.log(error);
//         });