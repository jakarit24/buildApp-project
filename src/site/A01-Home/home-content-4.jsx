/*Home_Content_4*/
import React, { useState, useEffect } from "react";
//import MyComponent from "./showclass";
import ReactDOM from "react-dom";
import $ from "jquery";

export default function Home_Content_4() {

  return (
    <div class="zone-z4">
      <div className={`box-anime`} id="box-1">
        <div class="card-image box-circle">
          <img
            src="/image/image-mock/270x150.jpg"
            srcset="/image/image-mock/270x150.jpg 110w, /image/image-mock/270x150.jpg 360w"
            sizes="(max-width: 767.8px) 110px, (min-width: 768px) 360px"
            alt="Title 1"
            class="card-content-img"
          />
        </div>
        <div class="card-title">
          <h4>Title M</h4>
        </div>
        <div class="card-des hide">
          {" "}
          description 3 Lorem ipsum dolor sit amet, consectur dolori Lorem ipsum
          dolor sit amet, consectur dolori
        </div>
      </div>

      <div className={`box-anime`} id="box-2">
        <div class="card-image box-circle">
          <img
            src="/image/image-mock/270x150.jpg"
            srcset="/image/image-mock/270x150.jpg 110w, /image/image-mock/270x150.jpg 360w"
            sizes="(max-width: 767.8px) 110px, (min-width: 768px) 360px"
            alt="Title 1"
            class="card-content-img"
          />
        </div>
        <div class="card-title">
          <h4>Title M</h4>
        </div>
        <div class="card-des hide">
          {" "}
          description 3 Lorem ipsum dolor sit amet, consectur dolori Lorem ipsum
          dolor sit amet, consectur dolori
        </div>
      </div>

    </div>
  );
}