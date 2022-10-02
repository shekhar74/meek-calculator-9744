import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";

import Slider from "react-slick";

export default function Carousel() {
  const arr = ['https://uidesign.gbtcdn.com/GB/image/8823/samebike_1190X420_en.jpg',
  'https://uidesign.gbtcdn.com/GB/image/8823/MASTER3_1190X420_EN.jpg',
  "https://uidesign.gbtcdn.com/GB/image/5200/1190x420.jpg"
  ]
  const renderSlides = () =>
    arr.map(num => (
      <div key={num} >
        <img style={{width:'912px'}} src={num} />
      </div>
    ));

  return (
    <div  style={{maxWidth:'912px'}} className="Appy">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
  );
}

