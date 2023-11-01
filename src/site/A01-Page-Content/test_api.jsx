//import React from "react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Content_Page_Api() {
  const img_default = "/image/image-mock/360x320.png";

  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };

  const [data, setData] = useState({});
  const url_api =
    "https://raw.githubusercontent.com/jakarit24/buildApp-project/main/public/databaseAPI/home-slick-carousel.json";

    /* axios.get(url_api)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
  
      console.log("Error Call error");
    });*/
    getApi();
    async function getApi() {
      try {
        const response = await axios.get(url_api);
        console.log("response A");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

  return (
    //<div class="container--content">
    // <pre>{JSON.stringify(data, null, 2)}</pre>
    //</-div>
  
    <div class="zone-slick-carousel"></div>
  );
}
