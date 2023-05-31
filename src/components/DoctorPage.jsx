import React from 'react'
import {Header, MenuBar} from '../components/Header'
import semiheader from "../images/semiheader.jpeg"
import "./DoctorPage.css"


import { useParams } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from "react";
import DateTimeComponent from "../components/DateTimeComponent"

export default function DoctorPage() {
  const [menubar, setMenuBar]= useState(false);

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
        
 <Header setMenuBar={setMenuBar} menubar={menubar}/>
      <MenuBar menubar={menubar}/>


<div className='drpage-con'>
<div className='doctor-page-alignment'>










<div className='doctors-image-container'>

<img  className="doctors-picture" src={doctorInfo&&doctorInfo.image.url} alt="" />
</div>













<div className='second-div-doctor'>
  <label className='label-docspage' >Name</label>
<p className='doctors-text-info'  > Dr. {doctorInfo&&doctorInfo.User_ID.name}</p>
<label  className='label-docspage'>Location</label>
<p className='doctors-text-info'> {doctorInfo&&doctorInfo.location}</p>
<label className='label-docspage'> Years Of Experience </label>
<p className='doctors-text-info'>{doctorInfo&&doctorInfo.yearsofexp} Years</p>

{/* <div className='paragraph-doctor-overflow'> */}
<label  className='label-docspage'>Description</label>
<p className='doctors-text-info' > {doctorInfo&&doctorInfo.description}</p>
{/* </div> */}









<DateTimeComponent   />






</div>












</div>

</div>







    </div>
  )
}
