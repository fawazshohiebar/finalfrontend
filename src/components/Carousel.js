import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import semiheader from "../images/semiheader.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Carousel = () => {
  var settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [Specielties, setSpecielties] = useState();
  const getSpecielties = async () => {
    const response = await axios.get(`http://localhost:4000/subcategory/categoryid/64648d8a857265df115fc6ce`);
    console.log(response.data);
    setSpecielties(response.data);
  };

  useEffect(() => {
    getSpecielties();
  }, []);

  return (
    <div className="container--carosell">
      <Slider {...settings}>
        {Specielties &&
          Specielties.map((hourframe, index) => (
            <div className="card">
              <div className="container-card-image">
                <img className="image-slider-card" src={hourframe.image.url} />
              </div>
              <div className="container-card-text">
                <Link className="links-text" to={`/AllDoctors/${hourframe._id}`}>
                  <p className="links-text">{hourframe.title}</p>
                </Link>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};
