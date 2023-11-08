import React from "react";
import { useState } from "react";

import DateTime from "../Toole/dateTime";
import Toole_Calendar from "../Toole/calendar";
function Footer() {
  return (
    <div id="footer-master">
      <div class="zone--footer1 bg-F5F5F5">
        <div class="container--content">
          <div class="box-footer1">
            {/*--------footer1----------*/}
            <div class="box-menu-footer">Menu Footer</div>
            <div class="box-Toole_Calendar">
              <Toole_Calendar></Toole_Calendar>
            </div>
          </div>
        </div>
      </div>
      <div class="zone--footer2 bg-000000">
        <div class="container--content">
          <div class="box-footer2 text-right pt-8px pb-8px">
            {/*--------footer2----------*/}
            <DateTime></DateTime>
            <div class="text">@2023 App-Project</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
