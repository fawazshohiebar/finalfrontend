import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './SuperadminDash.css';
import CryptoJS from 'crypto-js';

function SuperadminDash() {
  const navigate = useNavigate();
  const [role, setRole] = useState();

  function decryptData(encryptedData, secretKey) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }


  const checkUserRole = () => {
    const encryptedUserRole = sessionStorage.getItem('role');
    const secretKey = 'dana'; // Replace with your secret key

    if (encryptedUserRole) {
      // Decrypt the encrypted user role
      const decryptedUserRole = decryptData(encryptedUserRole, secretKey);
    

      if (decryptedUserRole !== '"superadmin"') {
        // User has the 'user' role or no role, so navigate to the desired page
        navigate('/', { replace: true });
   
        
      } else {
        // encryptedUserRole is not available, handle the case accordingly
        
      }
      
    }
  };

  useEffect(() => {


    checkUserRole();


  }, []);

  return (
    <div className="navbar">
      <Link to="/AddDoctors" className="navbar-link1" >
        <FontAwesomeIcon icon={faChartLine} className="navbar-icon" />
        Add Doctors Page
      </Link>

      <Link to="/Dashboard" className="navbar-link1" >
        <FontAwesomeIcon icon={faUserMd} className="navbar-icon" />
        Medical Services
      </Link>

      <Link to="/Specieltiesdash" className="navbar-link1" >
        <FontAwesomeIcon icon={faUserMd} className="navbar-icon" />
        Specielties Dashboard
      </Link>
    </div>
  );
}

export default SuperadminDash;
