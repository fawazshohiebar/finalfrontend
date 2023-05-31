import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Head from './Head';
function Login() {
  const [menubar, setMenuBar]= useState(false);

  const flipCard = () => {
    var flipCard = document.querySelector('.flip-card');
    flipCard.classList.toggle('flipped');
  };
  const navigate = useNavigate();

  const [EmailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setpasswordLogin] = useState('');
  const [registrationrole, setRegistrationRole] = useState('user');
  const [RegEmail, setRegEmail] = useState('');
  const [RegName, setRegName] = useState('');
  const [RegPassword, setRegPassword] = useState('');
  const [RegPhone, setRegPhone] = useState('');

  const login = async () => {
    const data = { email: EmailLogin, password: passwordLogin };
    const response = await axios.post(`https://finddoc.onrender.com/users/login`, data);
    console.log(response.data.message);
    console.log(response.data);
    if (response.data.message === 'Welcome!') {
      toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });
      sessionStorage.setItem('userID', response.data._id);
      sessionStorage.setItem('role', response.data.role);
      if(response.data.role=="superadmin"){
        navigate('/Dashboard');
      }
      else if(response.data.role=="Doctor"){
        navigate(`/DoctorDash`)
      }
      else if(response.data.role=="user"){
        navigate(`/`)
      }



    
    } else {
      toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT });
    }
  };


const Register=async()=>{
  const data={email:RegEmail,password:RegPassword,phone:RegPhone,name:RegName,role:registrationrole}
  const response=await axios.post(`https://finddoc.onrender.com/users/`,data)
  if(response.data.message=="User created successfully."){
    toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });
    sessionStorage.setItem('userID', JSON.stringify(response.data._id));
    sessionStorage.setItem('role', JSON.stringify(response.data.role));

  }else{
  console.log(response.data.message) 
  toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT });
}}

  return (
    <div>
      <Head/>
  
       <div className='container-login-registration'>
     
      <ToastContainer />
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <h2 className='Login-header'>Login</h2>
            <br />
            <div className='inputs-login'>
              <label className='login-label'>Email</label>
              <input
                className='login-input'
                type='text'
                value={EmailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
              />

              <label className='login-label'>Password</label>
              <input
                className='login-input'
                type='text'
                value={passwordLogin}
                onChange={(e) => setpasswordLogin(e.target.value)}
              />

              <br />

              <div className='display-flex-row gap'>
                <button className='register-clicker' onClick={() => login()}>
                  Login
                </button>
                <button className='register-clicker' onClick={() => flipCard()}>
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className='flip-card-back'>
            <div className='inner-registration'>
              <h2>Register</h2>
            </div>
            <div className='inner-registration-inputs'>
              <label className='registration-label'>Name</label>
              <input
                className='registraion-inputs'
                type='text'
                value={RegName}
                onChange={(e) => setRegName(e.target.value)}
              />
              <label className='registration-label'>Email</label>
              <input
                className='registraion-inputs'
                type='text'
                value={RegEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
              <label className='registration-label'>Password</label>
              <input
                className='registraion-inputs'
                type='text'
                value={RegPassword}
                onChange={(e) => setRegPassword(e.target.value)}
              />
              <label className='registration-label'>Phone</label>
              <input
                className='registraion-inputs'
                type='number'
                value={RegPhone}
                onChange={(e) => setRegPhone(e.target.value)}
              />
            </div>
            <div className='display-flex-row gap clickers-registration'>
              <button className='register-clicker' onClick={()=>Register()}>Submit</button>
              <button className='register-clicker' onClick={() => flipCard()}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
