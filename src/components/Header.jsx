import React from 'react'
import '../App.css'

import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';

function  Header() {

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
    <div> <h2 className='header-color'> Sign         in</h2> </div>
  </div>
  )
}

export default Header