import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import semiheader from "../images/semiheader.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow-right.png";

export const Carousel = () => {
  const [deviceType, setDeviceType] = useState(null);
  const [specielties, setSpecielties] = useState([]);

  const getSpecielties = async () => {
    const response = await axios.get(`https://finddoc.onrender.com/subcategory/categoryid/64648d8a857265df115fc6ce`);
    console.log(response.data);
    setSpecielties(response.data);
  };

  useEffect(() => {
    getSpecielties();
  }, []);

  // const handleResize = () => {
  //   const screenWidth = window.innerWidth;
  //   let newDeviceType = null;

  //   if (screenWidth <= 768) {
  //     newDeviceType = "mobile";
  //   } else if (screenWidth <= 1024) {
  //     newDeviceType = "tablet";
  //   } else {
  //     newDeviceType = "desktop";
  //   }

  //   setDeviceType(newDeviceType);
  // };

  // const getSlidesToShow = () => {
  //   if (deviceType === "mobile") {
  //     return 1;
  //   } else if (deviceType === "tablet") {
  //     return 2;
  //   } else {
  //     return 3;
  //   }
  // };

  // const settings = {
  //   arrows: true,
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: getSlidesToShow(),
  //   slidesToScroll: 1,
  // };

  //   <Slider {...settings}>
  //   {specielties.map((hourframe, index) => (
  //     <div className="card" key={index}>
  //       <div className="container-card-image">
  //         <img className="image-slider-card" src={hourframe.image.url} alt={hourframe.title} />
  //       </div>
  //       <div className="container-card-text">
  //         <Link className="links-text" to={`/AllDoctors/${hourframe._id}`}>
  //           <p className="links-text">{hourframe.title}</p>
  //         </Link>
  //       </div>
  //     </div>
  //   ))}
  // </Slider>

  return (
    <div>
      {specielties.map((hourframe, index) => (
        <Link className="Link-text" to={`/AllDoctors/${hourframe._id}`}>
          <div className="border-buttom-h3">
            <p>{hourframe.title}</p>

            <img className="arrowgo" src={arrow} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
};
