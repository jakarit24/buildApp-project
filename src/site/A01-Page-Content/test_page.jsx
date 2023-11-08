import React from "react";

function Content_Page(){

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
          <h1>This is Content_Page</h1>
        </div>
        <div class="mt-40px">
        <button onClick={clickBtn}> Try Click! </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button id="id-btn" btn-name="btn-home" onClick={clickBtnGet}> Click Get! </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={clickBtnSet('ลองส่ง date')}> Click Set! </button>&nbsp;     
        </div>
        
      </div>
    )
}

export default Content_Page