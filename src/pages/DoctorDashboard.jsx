import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import "./DoctorDash.css"

function DoctorDashboard() {
  const navigate = useNavigate();

  const [patientsinfo, setpatientsinfo] = useState(null);
  const userID = sessionStorage.getItem('userID');
  
  const [rolee, setrolee] = useState(sessionStorage.getItem('role'));





  function decryptData(encryptedData, secretKey) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }





  function decryptDatanostring(encryptedData, secretKey) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    console.log(decryptedData)
    return decryptedData;

  }
  



  const checkUserRole = () => {
    const encryptedUserRole = sessionStorage.getItem('role');
    const secretKey = 'dana'; // Replace with your secret key

    if (encryptedUserRole) {
      // Decrypt the encrypted user role
      const decryptedUserRole = decryptData(encryptedUserRole, secretKey);

      if (decryptedUserRole !== '"Doctor"' || !rolee) {
        // User has the 'user' role or no role, so navigate to the desired page
        navigate('/', { replace: true });
      } else {
        // encryptedUserRole is not available, handle the case accordingly
      }
    }
    else{
      navigate('/', { replace: true });

    }
  };

  useEffect(() => {
    checkUserRole();
  }, []);

  // getting the userid from the session
  const [docID, setdocID] = useState(null);

  const getdoctorid = async () => {
     const userr=decryptDatanostring(userID,"dana")
    const response = await axios.get(`https://finddoc.onrender.com/doctor/doctoruser/${userr}`);
    setdocID(response.data[0]._id);
    const fetchappointments = async (id) => {
      const response = await axios.get(`https://finddoc.onrender.com/booking/doctorbooking/${id}`);
      setpatientsinfo(response.data);
    };

    fetchappointments(response.data[0]._id);
  };

  const deleteappointment = async (id) => {
    const response = await axios.delete(`https://finddoc.onrender.com/booking/${id}`);
    console.log(response.data);
    window.location.reload();
  };

  useEffect(() => {
    getdoctorid();
  }, []);

  return (
    <div>
      <h2>Appointments for doctor:</h2>
      <br />
      <br />
      <div className='container-card-doctordash'>
        {patientsinfo &&
          patientsinfo.map((hourframe, index) => (
            <div className='card-doctor-dash' key={index}>
              <div className='content'>
                <h2 className='header-card-doc'>Name: {hourframe.User_ID.name}</h2>
                <p className='cardinfo'>Phone: {hourframe.User_ID.phone}</p>
                <p className='cardinfo'>Email: {hourframe.User_ID.email}</p>
                <p className='cardinfo'>Date: {hourframe.date}</p>
                <button className='btn-doc' onClick={() => deleteappointment(hourframe._id)}>
                  Delete Appointment
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DoctorDashboard;
