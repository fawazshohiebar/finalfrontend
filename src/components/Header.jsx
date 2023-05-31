import React from 'react'
import '../App.css'
import './Header.css'

import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import menu from '../images/Menu.png'




import { Link } from 'react-router-dom';

function  Header({ setMenuBar, menubar }) {
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
{/* 
    <div> <Link className='header-color' to="/"> <h1 className='header-color'>Find a Doc</h1> </Link></div>
    <div className='inner-header'>
      
     { <Link   className='inner-header-link' to="/"><p>Home</p>
    </Link> 
    }
     <a className='inner-header-link' onClick={()=>getPath("medicalservices")}> <p style={{ cursor: 'pointer' }}> Medical services</p></a>  
     
       <a  className='inner-header-link'  onClick={()=>getPath("specielties")} > <p style={{ cursor: 'pointer' }}> Specialties
       </p>
    </a>    
    
             </div>
             {userID ? (
          <h2 className='header-color' onClick={handleLogout}>Sign out</h2>
        ) : (
          <Link to="/Login" className='header-color'>
            <h2 className='header-color'>Sign in</h2>
          </Link>
        )} */}

    <div className="navbiggerthing">
      <div className="navnavbar">
      <button className="  log">
            <Link className='log' style={{ cursor: 'pointer' }} to="/">Find a Doc</Link>
          </button>
    
        <div className="navnavbar-list">
          
        
          <button className="navnavbar-button">
            <Link to="/">Home</Link>
          </button>
          <button className="navnavbar-button">
            <a className='inner-header-link' onClick={()=>getPath("medicalservices")}> <p style={{ cursor: 'pointer' }} className='header-color'> Medical services</p></a>  
          </button>
          <button className="navnavbar-button">
            <a  className='inner-header-link'  onClick={()=>getPath("specielties")} > <p style={{ cursor: 'pointer' }} className='header-color'> Specialties </p></a>
          </button>

                 {userID ? (
            <h2 className='header-color sign' onClick={handleLogout}>Sign out</h2>
            ) : (
              <Link to="/Login" className='header-color navnavbar-button'>
                <h2 className='header-color'>Sign in</h2>
              </Link>
          )}
         
        </div>
  



        <div className="navnavbar-menu">

          <button className="navmenu-button" id="navmenuButton">
            <img
              src={menu}
              alt="menu"
              className="navmenu"
              onClick={() => setMenuBar(!menubar)}
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

const MenuBar = ({ menubar }) => {
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
    <div className={!menubar ? "navhidden_hidden" : "navhidden_show"}>
      <button className="navmenu-menu">
      <Link to="/">Home</Link>
      </button>
      <button className="navnavbar-bu">
            <a className='inner-header-link' onClick={()=>getPath("medicalservices")}> <p style={{ cursor: 'pointer' }} className='header-color'> Medical services</p></a>  
          </button>
          <button className="navnavbar-bu">
            <a  className='inner-header-link'  onClick={()=>getPath("specielties")} > <p style={{ cursor: 'pointer' }} className='header-color'> Specialties </p></a>
          </button>
          {userID ? (
            <h2 className='header-color ' onClick={handleLogout}>Sign out</h2>
            ) : (
              <Link to="/Login" className='header-color'>
                <h2 className='header-color'>Sign in</h2>
              </Link>
          )}
    </div>
  );
};

export {Header, MenuBar}