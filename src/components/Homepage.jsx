import React from 'react'
import { CarouselMediacal } from './CarouselMediacal';

import '../App.css';

import semiheader from "../images/semiheader.jpeg"
import rightimage from "../images/rightimage.png"

import firstdr from "../images/firstdr.jpeg"
import secondr from "../images/seconddr.jpeg"
import thirddr from "../images/thirddr.jpeg"
import fourthdr from "../images/fourthdr.jpeg"
import fifthdr from "../images/fifthdr.jpeg"
import leftimage from "../images/leftimage.png"
import Footer from "../components/Footer"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "../components/Carousel"

function Homepage () {



const ScrollTo=()=>{
  const doctorsDiv = document.getElementById('medicalservices')
  doctorsDiv.scrollIntoView()

}



  return (
    <div>



      <div className='first-section'>
        <div className='inner-first-section'>
          <h1 className='search-word'>Search</h1>


          <p className='header-color under-Search '>
            through our expertise to find your   <span className='search-word'> need</span></p>
          <p className='search-word'>  </p>


        </div>

      </div>









      
      <div className='second-section'>

<div className='first-second' ><h1>About Us</h1></div>
<div className='second-second'>

<h1>Find A Doc </h1>
<p className='parag-width'>The first website made for Doctors in lebanon , We have all the specielties and all the informations about doctors in all majors </p>
<button  className='scrolling-button' onClick={()=>ScrollTo()}> check our services</button>
<br />
<img className='left-image-second-second' src={leftimage} alt="" />






</div>






<div className='third-second'>

<img className='rigth-third-image' src={rightimage} alt="" />

<div className='second-card-wrap'>


<div className='inside-second'><h2 className='uderline-border-buttom'>01</h2>

<p className='parag-width'>Your Path to Optimal Wellbeing</p>

</div>
<div className='inside-second'><h2 className='uderline-border-buttom'>02</h2>

<p className='parag-width'>Discover Medical Excellence</p>

</div>

<div className='inside-second'><h2 className='uderline-border-buttom'>03</h2>

<p className='parag-width'>Healing Hands: Nurturing Your Body, Mind, and Spirit</p>

</div>

<div className='inside-second'><h2 className='uderline-border-buttom'>04</h2>

<p className='parag-width'>Empowering Your Health Journey</p>

</div>







</div>


</div>
      </div>



<div className='services'>


<div className='left-services'> <h1>Services</h1></div>
<div className='right-services'>
<div id='medicalservices' ><h1>Medical services</h1>



<Carousel/>



<h1 id='specielties'>Specielties</h1>

<CarouselMediacal/>



</div>








</div>


</div>










<div className='toprated-doctor'>

<div className='left-toprated'><h1> Top Rated Doctor</h1></div>
<div className='right-toprated'>




<div className='card-toprated'>
<img className='image-toprated' src={firstdr}  />
<p className='toprated-parags'>Medical professional diagnosing and treating illnesses, injuries, and diseases to promote health and well-being. Vital in healthcare system.</p>
</div>
<div className='card-toprated'>
<img className='image-toprated' src={secondr} alt="" />
<p className='toprated-parags'>text and descriptidasda asdaadas dsadsa asdsad sasdaon dasdsd ds a asdaabout the eliane</p>
</div>
<div className='card-toprated'>
<img className='image-toprated' src={thirddr} alt="" />
<p className='toprated-parags'>Medical professional diagnosing and treating illnesses, injuries, and diseases to promote health and well-being. Vital in healthcare system.</p>
</div>
<div className='card-toprated'>
<img className='image-toprated' src={fourthdr} alt="" />
<p className='toprated-parags'>Medical professional diagnosing and treating illnesses, injuries, and diseases to promote health and well-being. Vital in healthcare system.</p>
</div>
<div className='card-toprated'>
<img className='image-toprated' src={fifthdr} alt="" />
<p className='toprated-parags'>Medical professional diagnosing and treating illnesses, injuries, and diseases to promote health and well-being. Vital in healthcare system.</p>
</div>
<div className='card-toprated'>
<img className='image-toprated' src={semiheader} alt="" />
<p className='toprated-parags'>Medical professional diagnosing and treating illnesses, injuries, and diseases to promote health and well-being. Vital in healthcare system.</p>
</div>










</div>

</div>




  




      <div className='footer-section'>


<Footer/>

</div>



    </div>
  )
}

export default Homepage