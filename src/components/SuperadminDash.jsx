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
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './SuperadminDash.css';

function SuperadminDash() {
  return (
    <div className="navbar">

      <Link to="/AddDoctors" className="navbar-link1" activeClassName="active">
        <FontAwesomeIcon icon={faUserMd} className="navbar-icon" />
        Add Doctors Page
      </Link>

      <Link to="/Dashboard" className="navbar-link1" activeClassName="active">
        <FontAwesomeIcon icon={faChartLine} className="navbar-icon" />
        Medical Dashboard
      </Link>

    </div>
  );
}

export default SuperadminDash;
