// import React from 'react'
// import { Link } from "react-router-dom";

// function SuperadminDash() {
//   return (
//     <div>



// <Link to={'/AddDoctors'}>Add Doctors Page</Link>


// <Link to={'/Dashboard'}>Medical dashboard</Link>



//     </div>
//   )
// }

// export default SuperadminDash

import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './SuperadminDash.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function SuperadminDash() {
  const navigate = useNavigate();
  const [role,setrole]=useState()

  

  function checkUserRole() {
    const userRole = sessionStorage.getItem('role');



    // Get the user's role from session storage
    if ( userRole !== 'superadmin'||!userRole) {
      // User has the 'user' role, so navigate to the desired page

      navigate("/", { replace: true });
    }
  }




 const clearSession = () => {
  sessionStorage.removeItem('role');
  sessionStorage.removeItem('userID');
  checkUserRole()
};

setTimeout(clearSession, 60000); // 30 minutes





  useEffect(() => {
    checkUserRole()
    }, []);


  return (
    <div className="navbar">

      <Link to="/AddDoctors" className="navbar-link1" activeClassName="active">
        <FontAwesomeIcon icon={faUserMd} className="navbar-icon" />
        Add Doctors Page
      </Link>

      <Link to="/Dashboard" className="navbar-link1" activeClassName="active">
        <FontAwesomeIcon icon={faChartLine} className="navbar-icon" />
        Medical Services
      </Link>




 <Link to="/Specieltiesdash" className="navbar-link1" activeClassName="active">
        <FontAwesomeIcon icon={faUserMd} className="navbar-icon" />
        Specielties Dashboard
      </Link>

    </div>
  );
}

export default SuperadminDash;
