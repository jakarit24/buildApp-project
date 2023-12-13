import React, { useState, useEffect } from "react";

export default function LoginPage() {

    useEffect(() => {
        document.title = 'SecretDotCom : SDC | About';
      }, []);

    return(
        <div>This is about page
        <br></br>
        about TEST TEST
        

        <div>I am Atomic</div>

        <div>This is about page</div>
        <a href="/index-code.html">index-code</a>
        <br></br>
        <a href="/testapi">MY-API</a>
        <br></br>
        <a href="/login">Login</a>
        <br></br>
        <a href="/register">register</a>
        <br></br>
        <a href="/test_login">test_login</a>
        <br></br>

        <a href="/user_form">user_form</a>
        <br></br>
        
        </div>
    )
}
