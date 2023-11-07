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
        </div>
    )
}
