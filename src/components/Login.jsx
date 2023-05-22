import React from 'react'

function Login() {

const  flipCard=()=> {
    var flipCard = document.querySelector('.flip-card');
    flipCard.classList.toggle('flipped');
  }



  return (
    <div className='container-login-registration'>




<div className='flip-card'>
  <div className="flip-card-inner">
    <div className="flip-card-front">
     <h2 className='Login-header'>Login</h2>
     <br />
<div className='inputs-login'>
     <label className='login-label' >Email</label>
     <input className='login-input' type="text" />

     <label  className='login-label'> Password</label>
     <input className='login-input' type="text" />
      






<br />


<div  className='display-flex-row gap'>
<button className='register-clicker' >Login</button>
      <button className='register-clicker' onClick={()=>flipCard()}>Register</button>
      </div>
      </div>

    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
      <button  onClick={()=>flipCard()} >Flip Card</button>
    </div>
  </div>
</div>








    </div>
  )
}

export default Login