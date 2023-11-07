import React, { useState, useEffect } from "react";


export default function Error() {

    useEffect(() => {
        document.title = 'SecretDotCom : SDC | Error';
      }, []);

    const clickBtn = () => {
        alert("This is Home page !");
      };
      
      /*clickBtn getAttribute*/ 
      const clickBtnGet = (event) => {
        const id = event.target.id;
        console.log('id: ' + id);  
        const name = event.target.getAttribute('btn-name'); 
        console.log('attr:' + name);   
      };
     /*clickBtn PassValue*/
      const clickBtnSet = Getvalue => () => {
        const value  = Getvalue; 
        console.log(value);
        }

    return(
        <div class="container--content">
        <div class="mt-40px">
          <h1>This is Error 404</h1>
        </div>
        <div class="mt-40px">
        <button onClick={clickBtn}> Try Click! </button>&nbsp;
        <button id="id-btn" btn-name="btn-home" onClick={clickBtnGet}> Click Get! </button>&nbsp;
        <button onClick={clickBtnSet('ลองส่ง date')}> Click Set! </button>&nbsp;     
        </div>
        
      </div>
    );
};