import React, { useState, useEffect } from "react";
// CSS
import logo from "./logo.svg";
import "./style_css/1 - settings/App.css";
import "./style_css/1 - settings/master_style.css";
import "./style_css/1 - settings/margin_style.css";
import "./style_css/1 - settings/padding_style.css";
import "./style_css/add_on_style.css";
import "./style_css/animation _style.css";
// Toole

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

import {
  useBootstrapBreakpoints,
  useBootstrapMinBreakpoint,
  useBootstrapPrefix,
} from "react-bootstrap/esm/ThemeProvider";

// page
import Header from "./site/A01-Master/header";
import Footer from "./site/A01-Master/footer";
//
import Home from "./site/A01-Home/home";
import About from "./site/A01-About/about";
import Contact from "./site/A01-Page-Content/contact";
import Error from "./site/Error/error";   
import Login from "./site/A01-User/login";
import TestApi from "./site/A01-Page-Content/test_api";


//import { Image } from "react-bootstrap";


export default function App() {
  const [count, setCount] = useState(0);

  let activeClassName = "btn-navlink nav-active";
  let navLinkClassName = "btn-navlink";

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    //* Master Page *//

    <BrowserRouter>
      {/*--------header----------*/}
      <header>
        <Header></Header>
      </header>
      {/*--------tab-meun-master----------*/}

      <div class="tab-meun tab-btn d-none d-md-block" id="tab-meun-master">
        <div class="container--tab">
          <nav class="btn-nav d-flex justify-content-between align-middle">
            <div class="btn-img-title">
              <NavLink to="/" class="">
                <img src={logo} className="App-logo" alt="logo" />
              </NavLink>
            </div>

            <div class="btn-nav-title">
              <NavLink
                to="/"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                Home{" "}
              </NavLink>
            </div>
            <div class="btn-nav-title">
              <NavLink
                to="/About"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                About{" "}
              </NavLink>
            </div>
            <div class="btn-nav-title">
              <NavLink
                to="/Update"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                Update{" "}
              </NavLink>
            </div>
            <div class="btn-nav-title">
              <NavLink
                to="/Boards"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                Boards{" "}
              </NavLink>
            </div>
            <div class="btn-nav-title">
              <NavLink
                to="/Contact"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                Contact{" "}
              </NavLink>
            </div>
          </nav>
        </div>
      </div>

      {/*--------content----------*/}
      {/*--------Routes----------*/}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/testapi" element={<TestApi />}></Route>
      </Routes>

      {/*--------footer----------*/}
      <footer>
        <Footer></Footer>
      </footer>
    </BrowserRouter>
  );
};

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



<div class="tab-meun tab-btn d-none d-md-block" id="tab-meun-master">
        <div class="container--tab">
          <nav class="btn-nav d-flex justify-content-between align-middle">
            <div class="btn-img-title">
              <NavLink to="/" class="">
                <img src={logo} className="App-logo" alt="logo" />
              </NavLink>
            </div>

            <div class="btn-nav-title">
              <NavLink
                to="/"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                Home{" "}
              </NavLink>
            </div>
            <div class="btn-nav-title">
              <NavLink
                to="/About"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                About{" "}
              </NavLink>
            </div>
            <div class="btn-nav-title">
              <NavLink
                to="/Update"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                Update{" "}
              </NavLink>
            </div>
            <div class="btn-nav-title">
              <NavLink
                to="/Boards"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                Boards{" "}
              </NavLink>
            </div>
            <div class="btn-nav-title">
              <NavLink
                to="/Contact"
                class="btn-navlink"
                className={({ isActive }) =>
                  isActive ? activeClassName : navLinkClassName
                }
              >
                {" "}
                Contact{" "}
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
*/
