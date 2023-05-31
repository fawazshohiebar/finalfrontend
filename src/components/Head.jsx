import React from 'react'
import "./Head.css"
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Menuimg from "../images/Menu.png"
function Head() {
    const isMobile = window.innerWidth <= 758; // Assuming mobile breakpoint is 768px, you can adjust it as needed
  
  
  
  
    const userID = sessionStorage.getItem('userID');



    const handleLogout = () => {
      // Clear the session storage
      sessionStorage.clear();
      
      // Reload the page or perform any additional logic
      window.location.reload();
    };
  
  
  
    const nav = useNavigate()
    const location = useLocation();
    const currentPath = location.pathname;
  
    const getPath=(path)=>
    {
      if(currentPath == '/'){
        const doctorsDiv = document.getElementById(path)
        doctorsDiv.scrollIntoView()
  
    }else {
      
  
      nav(`/#${path}`);
      setTimeout(()=>{
        const doctorsDiv = document.getElementById(path)
        
        doctorsDiv.scrollIntoView()
      },100)
      
      
    }
  }
  
  
    return (
    <div className='header-conn'>
        {!isMobile ? (<>

<Link className='FindDoc'  style={{ cursor: 'pointer' }}> Find A Doc</Link>

<div className='list-navv'>
    <Link className='normall-linkss' to="/">Home</Link>
    <a className='normall-linkss' onClick={()=>getPath("medicalservices")}>Medical Services</a>
    <a className='normall-linkss' onClick={()=>getPath("specielties")} >Specielties</a>
</div>

{userID ? (
            <h2 className='loged-in' onClick={handleLogout}>Sign out</h2>
            ) : (
              <Link to="/Login" className='loged-in'>
                <h2 className='loged-in-Signin'>Sign in</h2>
              </Link>
          )}
</> ):(<>














<div className='Menuu-conn'>
    
<Link  className='Second-Find ' to="/">Find A Doc</Link>

{/* 
<input type="checkbox"  className="check "/> */}

<input type="checkbox" id="myCheckbox" class="hidden-checkbox" />
<label for="myCheckbox" class="checkbox-label">
  <img src={Menuimg} class="checkbox-image" />
</label>

<ul class="menu-items">
    <li><a  >Home</a></li>
    <li><a onClick={()=>getPath("medicalservices")} >Medical Services</a></li>
    <li><a  onClick={()=>getPath("specielties")} >Specielties</a></li>


    {userID ? (
            <li className='menu-barrr' onClick={handleLogout}>Sign out</li>
            ) : (
              <Link to="/Login" className='menu-barrr'>
                <li className='menu-barrr'>Sign in</li>
              </Link>
          )}
  </ul>









</div>












</>)

}

    </div>
  )
}

export default Head