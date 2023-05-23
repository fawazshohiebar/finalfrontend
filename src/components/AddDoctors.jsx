// import React, { useState } from 'react'
// import axios from "axios"
// import { useEffect } from 'react'
// import SuperadminDash from './SuperadminDash'
// function AddDoctors() {


// const[name,setname]=useState()
// const [Email,setEmail]=useState()
// const[password,setpassword]=useState()
// const[phone,setphone]=useState()
// const[Role,setRole]=useState("Doctor")
// const[description,setdescription]=useState()
// const [yearsofexp,setyearsofexp]=useState()
// const [file, setFile] = useState(null);
// const[SubCatId,setSubCatId]=useState(null)
// const [userid,setuserid]=useState(null)
// const[location,setlocation]=useState()

// const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };
// const [Specielties, setSpecielties] = useState();
// const getSpecielties = async () => {
//   const response = await axios.get(`http://localhost:4000/subcategory/categoryid/64648d6f857265df115fc6cc`);
//   console.log(response.data);
//   setSpecielties(response.data);
// };

// const getmedicalServices = async () => {
//   const response = await axios.get(`http://localhost:4000/subcategory/categoryid/64648d8a857265df115fc6ce`);
//   console.log(response.data);
//   setSpecielties(response.data);
// };



// useEffect(() => {
  
//   }, [userid,SubCatId]);



// const postdoctor=async(e)=>{
//     e.preventDefault();
//     const data={name:name,email:Email,password:password,phone:phone,role:Role}
//     const response=await axios.post(`http://localhost:4000/users/`,data)
//     console.log("new user is in ",response.data._id)
//     setuserid(response.data._id);
//     console.log("res ",response);

//     if(response){

//         console.log("IF CONDITIO");
       


//             const data_doctor = new FormData();
//             data_doctor.append('User_ID', response.data._id);
//             data_doctor.append('Subcategory_ID', SubCatId);
//             data_doctor.append('description', description);
//             data_doctor.append('location', location);
//             data_doctor.append('yearsofexp', yearsofexp);
//             data_doctor.append('image', file);
     

//             const response_doctor=await axios.post(`http://localhost:4000/doctor/`,data_doctor);
//             console.log("doctor response ",response_doctor)
//             console.log("new doctor is in")
//     }
//     else{
//         console.log("something is wrong ")
//     }
    

// }






//   return (
//     <div>

// <SuperadminDash/>
// <br /><br />


// <div className='register-new-doctor'>
//     <h2>Regirster New Doctor</h2>
//     <div className='register-new-doctor'>
// <label>Name</label>
// <input type="text"  value={name} onChange={(e) => setname(e.target.value)}  />
// <label >Email</label>
// <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
// <label >password</label>
// <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} />
// <label >Phone number</label>
// <input type="number"  value={phone} onChange={(e) => setphone(e.target.value)} />



// <label > description</label>
// <input type="text"    value={description} onChange={(e) => setdescription(e.target.value)} />
// <label >Years of experience</label>
// <input type="text"  value={yearsofexp} onChange={(e) => setyearsofexp(e.target.value)} />

// <label >Location</label>
// <input type="text"  value={location} onChange={(e) => setlocation(e.target.value)} />


// <label > Image</label>
// <input type="file" onChange={handleFileChange}/>


// <br />





// <label >pick the category</label>
// <div className='display-flex-row'>
// <br />
// <button onClick={()=>getSpecielties()} >Specielties</button>  
// <button  onClick={()=>getmedicalServices()}>Medical Services</button>


// {Specielties &&Specielties.map((hourframe, index) => (
//     <div className='display-flex-column'>

// <div>
// <input type="radio" name='options' onClick={()=>{console.log(hourframe._id);setSubCatId(hourframe._id)}}/>
// <label >{hourframe.title}</label>
//   <br />
//   </div>
//   </div>
//   ))}
// </div>












// <button onClick={(e)=>postdoctor(e)}>Submit</button>
//     </div>
// </div>
        





//     </div>
//   )
// }

// export default AddDoctors


import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import SuperadminDash from './SuperadminDash';
import "./AllDoctors.css"

function AddDoctors() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Doctor');
  const [description, setDescription] = useState('');
  const [yearsOfExp, setYearsOfExp] = useState('');
  const [file, setFile] = useState(null);
  const [specielties, setSpecielties] = useState([]);
  const [subCatId, setSubCatId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [location, setLocation] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const getSpecielties = async () => {
    const response = await axios.get('http://localhost:4000/subcategory/categoryid/64648d6f857265df115fc6cc');
    console.log(response.data);
    setSpecielties(response.data);
  };

  const getMedicalServices = async () => {
    const response = await axios.get('http://localhost:4000/subcategory/categoryid/64648d8a857265df115fc6ce');
    console.log(response.data);
    setSpecielties(response.data);
  };

  const postDoctor = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      role: role,
    };
    const response = await axios.post('http://localhost:4000/users/', data);
    console.log('new user is in ', response.data._id);
    setUserId(response.data._id);
    console.log('res ', response);

    if (response) {
      console.log('IF CONDITION');
      const data_doctor = new FormData();
      data_doctor.append('User_ID', response.data._id);
      data_doctor.append('Subcategory_ID', subCatId);
      data_doctor.append('description', description);
      data_doctor.append('location', location);
      data_doctor.append('yearsofexp', yearsOfExp);
      data_doctor.append('image', file);

      const response_doctor = await axios.post('http://localhost:4000/doctor/', data_doctor);
      console.log('doctor response ', response_doctor);
      console.log('new doctor is in');
    } else {
      console.log('something is wrong');
    }
  };

  useEffect(() => {}, [userId, subCatId]);

  return (
    <div>
      <SuperadminDash />
      <br />
      <br />

      <div className='register-new-doctor'>
        <h2>Register New Doctor</h2>
        <div className='register-form'>
          <label>Name</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

          <label>Email</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />

          <label>Phone number</label>
          <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} />

          <label>Description</label>
          <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />

          <label>Years of experience</label>
          <input type='text' value={yearsOfExp} onChange={(e) => setYearsOfExp(e.target.value)} />

          <label>Location</label>
          <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} />

          <label>Image</label>
          <input type='file' onChange={handleFileChange} />

          <br />

          <label>Pick the category</label>
          <div className='category-buttons'>
            <button onClick={getSpecielties}>Medical Services</button>
            <button onClick={getMedicalServices}>Specielties</button>
          </div>

          <div className='subcategory-list'>
            {specielties.map((hourframe, index) => (
              <div key={index}>
                <input type='radio' name='options' onClick={() => setSubCatId(hourframe._id)} />
                <label>{hourframe.title}</label>
              </div>
            ))}
          </div>

          <button className='submit-button' onClick={postDoctor}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDoctors;
