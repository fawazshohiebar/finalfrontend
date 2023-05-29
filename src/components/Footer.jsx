import React from 'react'
import semiheader from "../images/semiheader.jpeg"

import insta from "../images/instagram-fill.svg"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
function Footer() {
  return (
    <div className='footer-container'>
        
<div className='first-footer-section'><h1>Find A Doc</h1> 
<p className='first-footer-paragraph'>
Lebanon biggest website for Doctors  and Medical serveices 
</p>
</div>

<div className='second-footer-section'>
    <h1>We Provide</h1>
    <ul className='first-footer-paragraph'>
    <li>Medical services </li>
    <li>Specielties in majors </li>
    <li>Booking Appointments for Doctors </li>
    <li>Simple Registration</li>
    </ul>
     </div>

<div className='third-footer-section'>
    <h1>Our Socials</h1>
    <div className='display-flex-row-nowrap gap'>
        <img className='social' src={insta} alt="" />
        <img className='social' src={twitter} alt="" />
        <img className='social' src={facebook} alt="" />
    </div>
     </div>

    
    </div> 
  )
}

export default Footer