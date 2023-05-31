import React from 'react'
import "./DoctorDash.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function DoctorDashboard() {
  const navigate = useNavigate();

const[patientsinfo,setpatientsinfo]=useState(null)
const userID = sessionStorage.getItem('userID');

function checkUserRole() {
  const userRole = sessionStorage.getItem('role');



  // Get the user's role from session storage
  if ( userRole !== 'Doctor'||!userRole) {
    // User has the 'user' role, so navigate to the desired page

    navigate("/", { replace: true });
  }
}



useEffect(() => {
  checkUserRole()
  }, []);






// getting the userid from the session 

const [docID,setdocID]=useState(null)

const getdoctorid =async()=>{
  const response=await axios.get(`https://finddoc.onrender.com/doctor/doctoruser/${userID}`)
  setdocID(response.data[0]._id)
  const fetchappointments =async(id)=>{
    const response=await axios.get(`https://finddoc.onrender.com/booking/doctorbooking/${id}`)
    setpatientsinfo(response.data)
    
  }

  fetchappointments(response.data[0]._id)




}





const deleteappointment=async(id)=>{
  const response=await axios.delete(`https://finddoc.onrender.com/booking/${id}`)
  console.log(response.data)
  window.location.reload()
}






useEffect(() => {    
  getdoctorid();
 },[]);

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