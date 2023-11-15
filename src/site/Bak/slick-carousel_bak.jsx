/*slick-carousel*/
/* {`${item.price} USD`} */
/* {card.img == "" ? ('') : ('')} */
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home_Slick_Carousel_Top = () => {
  const carousel_item = [
    {
      name: "Name 1",
      title: "Title 1",
      detail: "Lorem ipsum dolor sit amet, consectur dolori",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      img: "/image/image-mock/blue370x270.png",
      img_desktop: "/image/image-mock/blue370x270.png",
      img_mobile: "/image/image-mock/blue370x270.png",
      link: "#",
    },
    {
      name: "Name 2",
      title: "Title 2",
      detail: "Lorem ipsum dolor sit amet, consectur dolori",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      img: "/image/image-mock/blue370x270.png",
      img_desktop: "/image/image-mock/blue370x270.png",
      img_mobile: "/image/image-mock/blue370x270.png",
      link: "#",
    },
    {
      name: "Name 3",
      title: "Title 3",
      detail: "Lorem ipsum dolor sit amet, consectur dolori",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      img: "/image/image-mock/blue370x270.png",
      img_desktop: "/image/image-mock/blue370x270.png",
      img_mobile: "/image/image-mock/blue370x270.png",
      link: "#",
    },
    {
      name: "Name 4",
      title: "Title 4",
      detail: "Lorem ipsum dolor sit amet, consectur dolori",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      img: "/image/image-mock/green370x270.png",
      img_desktop: "/image/image-mock/green370x270.png",
      img_mobile: "/image/image-mock/green370x270.png",
      link: "#",
    },
  ];

  const img_default = "/image/image-mock/360x320.png";

  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <div class="zone-slick-carousel">
      <Slider {...sliderSettings}>
        {carousel_item.map((card, index) => (
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
                <div class="box-text">
                <div class="card-content-name"><h3 class="ellipsis1">{card.name}</h3></div>
                <div class="card-content-title" title="title">
                  <h4>{card.title}</h4>
                </div>
                <div class="card-content-description ellipsis1">{card.description}</div>
                <div class="card-readmore d-flex justify-content-between align-middle">
                  readmore
                </div>
              </div>
              </div>
              
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Home_Slick_Carousel_Top;