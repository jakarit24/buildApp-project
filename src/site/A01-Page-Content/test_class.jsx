/*Home_Content_4*/
import React, { useState, useEffect } from "react";
//import MyComponent from "./showclass";

export default function Home_Content_5() {
  const [show, setShow] = useState(false);

  return (
    <div class="zone-z4">
      <br></br>
      <div className={show ? "show" : "hide"}>Helloadasdasdasdasda</div>
      <br></br>
      <div className={show ? "show" : "hide"}>22222222222Hello</div>
    </div>
  );
}
