import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import semiheader from "../images/semiheader.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow-right.png";

export const CarouselMediacal = () => {
  const [specielties, setSpecielties] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const getSpecielties = async () => {
    const response = await axios.get("https://finddoc.onrender.com/subcategory/categoryid/64648d6f857265df115fc6cc");
    console.log(response.data);
    setSpecielties(response.data);
  };

  useEffect(() => {
    getSpecielties();
  }, []);

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
