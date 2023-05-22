import React from 'react'
import Header from './Header'
import semiheader from "../images/semiheader.jpeg"


import { useParams } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from "react";
import DateTimeComponent from "../components/DateTimeComponent"

export default function DoctorPage() {


  const { id } = useParams();
  console.log(id)

  const[doctorInfo,setdoctorInfo]=useState()

const getInfoOfDoctor=async()=>{
  const response=await axios.get(`http://localhost:4000/doctor/doctor/${id}`)
setdoctorInfo(response.data[0])
console.log(response.data[0])
}

useEffect(() => {
  getInfoOfDoctor();
}, []);



  return (
    <div>
        
<Header/>



<div className='display-flex-row-marginnone'>










<div className='doctors-image-container'>

<img  className="doctors-picture" src={doctorInfo&&doctorInfo.image.url} alt="" />
</div>













<div className='second-div-doctor'>
<p className='doctors-text-info'  >Name: {doctorInfo&&doctorInfo.User_ID.name}</p>
<p className='doctors-text-info'>Location: {doctorInfo&&doctorInfo.location}</p>
<p className='doctors-text-info'>Years Of Experience :{doctorInfo&&doctorInfo.yearsofexp} Years</p>
<p className='doctors-text-info'>Description: {doctorInfo&&doctorInfo.description}</p>










<DateTimeComponent   />






</div>












</div>








    </div>
  )
}
