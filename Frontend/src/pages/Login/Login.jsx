import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../Components/navbar/Navbar";
import TextBox from "../../Components/textBox/TextBox";
import Form from "../../Components/form/Form";

function Login() {
   return (
     <>
        <Navbar/>
        <div className="container">
            <TextBox/>
            <Form/>
        </div>
        
        
     </>
    );
}

export default Login;
