import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Head from './Head';
import { BallTriangle } from 'react-loader-spinner';
import './Alldoc.css';

export default function AllDoctors() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(true);
  const [alldoctors, setAlldoctors] = useState([]);

  const getAlldoctors = async () => {
    const response = await axios.get(`https://finddoc.onrender.com/doctor/bysubcategory/${id}`);
    if (response.data.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setAlldoctors(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getAlldoctors();
    }, 1000); // Delay for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head />
      {loading ? (
        <div className="loading-spinner">
          <BallTriangle height={100} width={100} radius={5} color="#3281B1" ariaLabel="ball-triangle-loading" />
        </div>
      ) : empty ? (
        <h1>There are no doctors yet.</h1>
      ) : (
        <div>
          <div className="title-specielties-container">
            <div className="border-under-title">
              <p className="title-specielties">{alldoctors[0].Subcategory_ID.title}</p>
            </div>
          </div>
          <div className="container-alldoctors">
            {alldoctors.map((hourframe) => (
              <Link key={hourframe._id} className="container-specielties" to={`/DoctorPage/${hourframe._id}`}>
                <div className="contain-image-doc">
                  <img className="image-doctorsss" src={hourframe.image.url} alt="" />
                </div>
                <div className="doctors-texts">
                  <p className="header-name">{hourframe.User_ID.name}</p>
                  <label className="label-text">Years Of experience</label>
                  <p className="parag-info">{hourframe.yearsofexp} Years</p>
                  <label className="label-text">Location</label>
                  <p className="parag-info">{hourframe.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
