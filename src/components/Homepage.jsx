import React from 'react'
import { CarouselMediacal } from './CarouselMediacal';

import '../App.css';

import semiheader from "../images/semiheader.jpeg"



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "../components/Carousel"

function Homepage () {
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




        <div className='container-of-text'>
          <div className='container-image-semiheader'>
          </div>
          <div className='container-text-secondsection'>
            <p className='section-two-text'> <span className='dr-eliana'> Dr. eliana </span><br />
              Earned his degree in Medical Dentistry in 1975 from Saint
              Joseph University, Lebanon. He pushed forward his education in France
              , where he specialized in periodontics (Gum and Bone Disease)
            </p>
          </div>
        </div>
        <div className='container-of-text'>
          <div className='container-image-semiheader'>
          </div>
          <div className='container-text-secondsection'>
            <p className='section-two-text'> <span className='dr-eliana'> Dr. eliana </span><br />
              Earned his degree in Medical Dentistry in 1975 from Saint
              Joseph University, Lebanon. He pushed forward his education in France
              , where he specialized in periodontics (Gum and Bone Disease)
            </p>
          </div>
        </div>
        <div className='container-of-text'>
          <div className='container-image-semiheader'>
          </div>
          <div className='container-text-secondsection'>
            <p className='section-two-text'> <span className='dr-eliana'> Dr. eliana </span><br />
              Earned his degree in Medical Dentistry in 1975 from Saint
              Joseph University, Lebanon. He pushed forward his education in France
              , where he specialized in periodontics (Gum and Bone Disease)
            </p>
          </div>
        </div>
      </div>





      <div className='third-section' id='specielties'>
        <h1 className='third-header'>Specialties</h1>
        <Carousel />


      </div>





      <div className='fourth-section' id='medicalservices'>
        <h1 className='fourth-header'>Medical Services</h1>
        <CarouselMediacal />
      </div>





      <div className='footer-section'>


<div className='footer-leftdiv'>

<p className='foooter-text'>If you need help dont hesitate to contact us </p>

<label className='footer-label'>Message</label> <br />

<textarea id="message" name="message" rows="10" cols="60" ></textarea>
<br />
<button className='footer-submit'>Submit</button>
</div>

<p className='footer-right-text'>Copyright © 2023 Find  A Doc</p>

</div>



    </div>
  )
}

export default Homepage