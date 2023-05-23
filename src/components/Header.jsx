import React from 'react'
import '../App.css'

import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';



import { Link } from 'react-router-dom';

function  Header() {
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
    <div className='header'>

    <div><h1 className='header-color'>LOGO</h1></div>
    <div className='inner-header'>
      
     { <Link   className='inner-header-link' to="/"><p>Home</p>
    </Link> 
    }
     <a className='inner-header-link' onClick={()=>getPath("medicalservices")}> <p >Medical services</p></a>  
     
       <a  className='inner-header-link'  onClick={()=>getPath("specielties")} > <p>Specialties
    </p>
    </a>    
    
             </div>
             {userID ? (
          <h2 className='header-color' onClick={handleLogout}>Sign out</h2>
        ) : (
          <Link to="/Login" className='header-color'>
            <h2 className='header-color'>Sign in</h2>
          </Link>
        )}
          </div>
  )
}

export default Header