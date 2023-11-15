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
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
  };

  const [data, setData] = useState([]);
  const url_api =
    "https://raw.githubusercontent.com/jakarit24/buildApp-project/main/public/databaseAPI/home-slick-carousel.json";

 /*useEffect(() => {
  axios.get(url_api).then((res) => {
      console.log(res);
      setData(res.data);
    });
  },[]);*/

  /*axios
    .get(url_api)
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch((error) => {
      console.log("Error Call error");
    });*/

  //const response_api = getApi();
   getApi();
    async function getApi() {
    try {
      const response = await axios.get(url_api);
      //console.log(response);
      setData(response.data);
      return response;
  
    } catch (error) {
      console.error('Error Call Api');
    }
  }

  return (
    <div class="zone-slick-carousel">
      <Slider {...sliderSettings}>
        {data.map((card, index) => (
          <div class="box-slick-carousel item pt-8px pb-8px" item-index={index}>
            <a href={card.link}>
              <div class="card-content">
                <div class="box-img">
                  {card.img == "" ? (
                    <img
                      src={card.img}
                      srcSet={`${img_default} 110w, ${img_default} 360w`}
                      sizes="(max-width: 767px) 110px, (min-width: 768px) 360px"
                      alt={card.title}
                      className="card-content-img img-default"
                    />
                  ) : (
                    <img
                      src={card.img}
                      srcSet={`${card.img_mobile} 110w, ${card.img_desktop} 360w`}
                      sizes="(max-width: 767.8px) 110px, (min-width: 768px) 360px"
                      alt={card.title}
                      className="card-content-img"
                    />
                  )}
                </div>
              </div>
              <div class="box-text">
                <div class="card-content-name">{card.name}</div>
                <div class="card-content-title" title="title">
                  <h4>{card.title}</h4>
                </div>
                <div class="card-content-description">{card.description}</div>
                <div class="card-readmore d-flex justify-content-between align-middle">
                  readmore
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
