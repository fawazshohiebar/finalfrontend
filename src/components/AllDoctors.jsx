import React from 'react'
import {Header, MenuBar} from '../components/Header'

import { useParams } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from "react";
import semiheader from "../images/semiheader.jpeg"
import { Link } from 'react-router-dom';

import "./Alldoc.css"

export default function AllDoctors() {
  const [menubar, setMenuBar]= useState(false);



  const { id } = useParams();
  console.log(id)

  const [empty,setempty]=useState(true)

const [alldoctors,setalldoctors]=useState()

const getalldoctors = async () => {
  const response = await axios.get(`http://localhost:4000/doctor/bysubcategory/${id}`);
  console.log(response.data);

  if (response.data.length === 0) {
    // Array is empty
    // Handle the case when there are no doctors
    console.log('No doctors found.');
    setempty(true)
    
    // You can display a message or handle the empty array case in any way you prefer
  } else {
    // Array is not empty
    setempty(false)
    setalldoctors(response.data);
  }
};


    useEffect(() => {
    getalldoctors();
  }, [empty]);

  return (

<div>

    

    <Header setMenuBar={setMenuBar} menubar={menubar}/>
      <MenuBar menubar={menubar}/>


{empty ? (
            <h1>There are no doctors yet.</h1>
          ) : (

<div>


<div className='title-specielties-container'>

<div className='border-under-title'>
    <p className='title-specielties'>{alldoctors&&alldoctors[0].Subcategory_ID.title}</p>
   </div>
    

</div>




<div className='container-alldoctors'>






{alldoctors &&
          alldoctors.map((hourframe, index) => (
            <Link className='container-specielties'  to={`/DoctorPage/${hourframe._id}`}>












<div className='contain-image-doc'>
<img className='image-doctorsss' src={hourframe.image.url} alt="" />
</div>


<div className='doctors-texts'>

<p className='header-name'>{hourframe.User_ID.name}</p>
<label className='label-text'> Years Of experience </label>
<p className='parag-info'>{hourframe.yearsofexp} Years</p>
<label className='label-text'> Location </label>
<p className='parag-info'>{hourframe.location}</p>


</div>







</Link>
    ))}
    



    </div>
    </div>
)}
    </div>

  )
}
