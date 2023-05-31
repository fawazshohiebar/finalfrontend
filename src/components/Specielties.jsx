import React, { useState } from 'react'
import {Header, MenuBar} from '../components/Header'
import semiheader from "../images/semiheader.jpeg"

function Specielties ()  {
  const [menubar, setMenuBar]= useState(false);

  return (
    <div>
<Header setMenuBar={setMenuBar} menubar={menubar}/>
      <MenuBar menubar={menubar}/>
<div className='title-specielties-container'>

<div className='border-under-title'>
    <p className='title-specielties'>Cancer</p>
   </div>
    

</div>






<div className='display-flex-row'>




<div className='container-specielties'>


<div className='container-image-specielties'>


    <img className='image-circle-specielties' src={semiheader} alt="" />
</div>



<div className='buttun-center'>
<div className="container-card-specielties-text">
            <p>Womens Health</p>
          </div>
          </div>

</div>









<div className='container-specielties'>


<div className='container-image-specielties'>


    <img className='image-circle-specielties' src={semiheader} alt="" />
</div>



<div className='buttun-center'>
<div className="container-card-specielties-text">
            <p>Womens Health</p>
          </div>
          </div>

</div>





<div className='container-specielties'>


<div className='container-image-specielties'>


    <img className='image-circle-specielties' src={semiheader} alt="" />
</div>



<div className='buttun-center'>
<div className="container-card-specielties-text">
            <p>Womens Health</p>
          </div>
          </div>

</div>







<div className='container-specielties'>


<div className='container-image-specielties'>


    <img className='image-circle-specielties' src={semiheader} alt="" />
</div>



<div className='buttun-center'>
<div className="container-card-specielties-text">
            <p>Womens Health</p>
          </div>
          </div>

</div>









<div className='container-specielties'>


<div className='container-image-specielties'>


    <img className='image-circle-specielties' src={semiheader} alt="" />
</div>



<div className='buttun-center'>
<div className="container-card-specielties-text">
            <p>Womens Health</p>
          </div>
          </div>

</div>









<div className='container-specielties'>


<div className='container-image-specielties'>


    <img className='image-circle-specielties' src={semiheader} alt="" />
</div>



<div className='buttun-center'>
<div className="container-card-specielties-text">
            <p>Womens Health</p>
          </div>
          </div>

</div>




</div>
























        
    </div>
  )
}

export default Specielties