import React from 'react'
import "./DoctorDash.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function DoctorDashboard() {

const[patientsinfo,setpatientsinfo]=useState(null)
const userID = sessionStorage.getItem('userID');
// getting the userid from the session 

const [docID,setdocID]=useState(null)

const getdoctorid =async()=>{
  const response=await axios.get(`http://localhost:4000/doctor/doctoruser/${userID}`)
  setdocID(response.data[0]._id)

  const fetchappointments =async(id)=>{
    const response=await axios.get(`http://localhost:4000/booking/doctorbooking/${id}`)
    setpatientsinfo(response.data)
    
  }

  fetchappointments(response.data[0]._id)




}




const deleteappointment=async(id)=>{
  const response=await axios.delete(`http://localhost:4000/booking/${id}`)
  console.log(response.data)
}






useEffect(() => {    
  getdoctorid()
 },[patientsinfo]);

  return (


<div>
<h2>Appointments  for doctor :</h2>
<br />
<br />
<div className='container-card-doctordash'>


{patientsinfo &&
          patientsinfo.map((hourframe, index) => (
<div className="card-doctor">
  <div className="content">
    <h2 className='header-card'>Name: {hourframe.User_ID.name}</h2>
    <p className='cardinfo'>Phone: {hourframe.User_ID.phone} </p>
    <p className='cardinfo'>Email: {hourframe.User_ID.email} </p>
    <p className='cardinfo'>Date: {hourframe.date} </p>
    <button className="btn" onClick={()=>deleteappointment(hourframe._id)}>Delete Appointment</button>
  </div>
</div>
   ))}
</div>
</div>
  )
}

export default DoctorDashboard