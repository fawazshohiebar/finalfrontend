import React from 'react'
import Header from './Header'

import { useParams } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from "react";
import semiheader from "../images/semiheader.jpeg"
import { Link } from 'react-router-dom';

export default function AllDoctors() {


  const { id } = useParams();
  console.log(id)


const [alldoctors,setalldoctors]=useState()

  const getalldoctors=async()=>{
    const response =await  axios.get(`http://localhost:4000/doctor/bysubcategory/${id}`)
    console.log(response.data)
    setalldoctors(response.data)
  }

    useEffect(() => {
    getalldoctors();
  }, []);

  return (

<div>

    

<Header/>





<div className='title-specielties-container'>

<div className='border-under-title'>
    <p className='title-specielties'>{alldoctors&&alldoctors[0].Subcategory_ID.title}</p>
   </div>
    

</div>




<div className='container-alldoctors'>






{alldoctors &&
          alldoctors.map((hourframe, index) => (

<div className='container-specielties'>


<div className='container-image-doctors'>


    <img className='image-boxshadow-doctors-services' src={hourframe.image.url} alt="" />
</div>
<br />

<Link  to={`/DoctorPage/${hourframe._id}`}>

<div className='buttun-center'>
<div className="container-card-doctors-text">

  
            <p>Location:{hourframe.location}</p>
            <p>Years of experience:{hourframe.yearsofexp} years</p>
          </div>
          </div>
          </Link>

</div>
    ))}
    



    </div>

    </div>

  )
}
