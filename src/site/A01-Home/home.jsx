import React, { useState, useEffect } from "react";
//import { Image } from "react-bootstrap";
import Slick_Carousel_Top from "./slick-carousel";
import Home_Content_1 from "./home-content-1";
import Home_Content_2 from "./home-content-2";
import Home_Content_4 from "./home-content-4";
//import Home_Content_5 from "../A01-Page-Content/test_class";
import test888  from "../A01-Page-Content/test_class.js";
import "./home.css";

export default function Home() {
  useEffect(() => {
    document.title = "SecretDotCom : SDC | Main";
  }, []);

  return (
    <div class="app--project">
      <div
        id="zone--home--1"
        class="zone--home--1 zone-title-page pt-24px pb-24px"
      >
        <div class="container--content">
          <div class="title-page">
            <h1>This is Home page</h1>
          </div>
        </div>
      </div>
      <div id="zone--home--2" class="zone--home--2 zone-banner-page mb-40px">
        <div class="container--banner max-height-480px">
          <div class="box-banner">
            <div class="box-banner-image">
              <img
                src="/image/home/banner/home-top1920x360px.png"
                class="banner-top banner"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="zone--home--3" class="zone--home--3 zone-content-page mb-40px">
        <div class="container--content">
          <div class="content--1">
            <div class="box-Slick_Carousel_Top">
              <Slick_Carousel_Top></Slick_Carousel_Top>
            </div>
          </div>
        </div>
      </div>

      <div id="zone--home--6" class="zone--home--6 zone-content-page pt-40px pb-40px">
        <div class="container--content">
        <div class="box--Home_Content_1">
        <Home_Content_1></Home_Content_1>
          </div>
        </div>
      </div>

      <div id="zone--home--4" class="zone--home--4 zone-content-page mb-40px mt-40px">
        <div class="container--content">
          <div class="box--Home_Content_2">
          <Home_Content_2></Home_Content_2>
          </div>
        </div>
      </div>

      <div id="zone--home--5" class="zone--home--5 zone-content-page mb-40px">
        <div class="container--content">
        <div class="box--Home_Content_3 z-anime">
        <Home_Content_4></Home_Content_4>
          </div>
        </div>
      </div>

      <div id="zone--home--7" class="zone--home--7 zone-content-page mb-40px">
        <div class="container--content">
        <div class="box--Home_Content_7 z-game">
          Home_Content_5
          </div>
        </div>
      </div>

      <div id="zone--home--8" class="zone--home--8 zone-content-page mb-40px">
        <div class="container--content">
        <div class="box--Home_Content_8 z-code" id="888">
        <test888></test888>
          </div>
        </div>
      </div>


    </div>
  );
}
