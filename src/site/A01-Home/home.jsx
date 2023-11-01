import React from "react";
//import { Image } from "react-bootstrap";
import Slick_Carousel_Top from "./slick-carousel";

/*src={img_banner_top} */
function Home() {
   

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
      <div id="zone--home--2" class="zone--home--2 zone-banner-page">
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

      <div id="zone--home--3" class="zone--home--3 zone-content-page">
        <div class="container--content">
          <div class="content--1">
            <div class="box-Slick_Carousel_Top">
              <Slick_Carousel_Top></Slick_Carousel_Top>
            </div>
          </div>
        </div>
        <div class="container--content">
          <div class="content--2">
            <h1>content</h1>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
