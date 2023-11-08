import React from "react";
import { useState } from "react";

function Header() {
  return (
    <div class="zone--header">
      <div class="container--content">
        <div class="tab-header d-flex justify-content-between align-middle">
          <div class="pull-left d-none d-md-block">
            <a class="charon" href="#">
            SecretDotCom : SDC
            </a>
          </div>
          <div class="text-right hide-mobile">
            <a href="https://github.com/jakarit24/buildApp-project" class="ch24-app-project">
              GitHub-Project
            </a>
            <a href="/login" class="goto-login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

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
