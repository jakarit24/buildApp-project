import React, { useState, useEffect } from "react";


export default function Contact(){

    useEffect(() => {
        document.title = 'SecretDotCom : SDC | Contact';
      }, []);

    return(
        <div>This is contact page</div>
    );
};