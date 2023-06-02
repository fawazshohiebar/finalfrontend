import "../pages/dashboard.css"

import trashcan from "../images/trashcan.png"
import editbutton from "../images/editbutton.png"
import Addbutton from "../images/Addbutton.png"
import { useState } from 'react';
import Collapsible from 'react-collapsible';
import axios from "axios"
import { useEffect } from "react"
import SuperadminDash from "../components/SuperadminDash";

function Dashboard() {

const [editname,seteditname]=useState(null)
const [edityearsofexp,setedityearsofexp]=useState(null)
const[editdescription,seteditdescription]=useState(null)
const [editdoctorid,seteditdoctorid]=useState(null)
const[editlocation,seteditlocation]=useState(null)
const [catimage,setcatimage]=useState(null)
const [titlecat,settitlecat]=useState()

    const [Specielties, setSpecielties] = useState();
    const getSpecielties = async () => {
      const response = await axios.get(`https://finddoc.onrender.com/subcategory/categoryid/64648d6f857265df115fc6cc`);
      setSpecielties(response.data);
    };



    const handleimage = (e) => {
        const selectedFile = e.target.files[0];
        setcatimage(selectedFile);
      };



    const uploadcategory = async () => {
        const formData = new FormData();
        formData.append('Category_ID', '64648d6f857265df115fc6cc');
        formData.append('image', catimage); // Assuming you have an image file object
        formData.append('title', titlecat);
      
        try {
          const response = await axios.post('https://finddoc.onrender.com/subcategory', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
        } catch (error) {
          console.error('Upload error:', error);
        }
      };
      














  
    useEffect(() => {
      getSpecielties();
    }, []);

const[doctoorinfo,setdoctorinfo]=useState()

const getdoctorinfo=async(id)=>{
    const response=await axios.get(`https://finddoc.onrender.com/doctor/doctor/${id}`)
setdoctorinfo(response.data)
}


    const OpenEditProducts = () => {
        document.getElementById("editproductform").style.display = "block";
      }
    
    
      const CloseEditProducts = () => {
        document.getElementById("editproductform").style.display = "none";
      }





const editdoctorinfo=async()=>{
    const data={location:editlocation,yearsofexp:edityearsofexp,description:editdescription}
    const response=await axios.put(`https://finddoc.onrender.com/doctor/edit/${editdoctorid}`,data)

}



    const [alldoctors,setalldoctors]=useState()

    const getalldoctors=async(id)=>{
      const response =await  axios.get(`https://finddoc.onrender.com/doctor/bysubcategory/${id}`)
      setalldoctors(response.data)
    }




    const deletedoctor=async(id)=>{
const response=await axios.delete(`https://finddoc.onrender.com/doctor/delete/${id}`)
    }
    



    const OpenAddCategory = () => {
        document.getElementById("addcategoryform").style.display = "block";
    }


    const CloseAddCategory = () => {
        document.getElementById("addcategoryform").style.display = "none";
    }







    const [openIndex, setOpenIndex] = useState(-1);

    const handleTriggerClick = index => {
        if (index === openIndex) {
            setOpenIndex(-1); // Close the open one if clicked again
        } else {
            setOpenIndex(index); // Open the clicked one
        }
    };



    const [images, setImages] = useState([]);

    const handleImagesChange = (event) => {
        const files = event.target.files;
        const imagesArray = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            imagesArray.push(URL.createObjectURL(file));
        }
        setImages(imagesArray);
    };


    return (
        <div>
            <div className='navbar-container'>
         <SuperadminDash/>
            </div>

            <div className='headers'>
                <div className='parent-headder'>
                    <div className='summer-border'>
                        <p className='summer-parag'> Medical  Services</p>
                    </div>

                </div>
                <div className='newcategory'>
                    <p> Add New  Category</p>
                    <button className="addbutton" onClick={() => { OpenAddCategory() }}>
                        <img src={Addbutton} alt="" />
                    </button>
                </div>
            </div>

            <div className='main-body-container'>
                <div className='collaps'>
                    {Specielties && Specielties.map((item, index) => (
                        <Collapsible
                            className='collaps-title'
                            trigger={item.title}
                            key={item._id}
                            open={index === openIndex}
                            onOpening={() => { getalldoctors(item._id); setOpenIndex(index) }}
                            onClosing={() => setOpenIndex(-1)}
                        >
               


                            {alldoctors && alldoctors.map((product) => (
                                <div className='content-dashboard' key={product._id}>
                                    <p className='parag-dash-content'>{product.User_ID.name}</p>
                                    <div className='flex-content-end'>
                                        <button className='background-none' onClick={() => {getdoctorinfo(product._id);OpenEditProducts();seteditdoctorid(product._id)}}>
                                            <img src={editbutton} alt='' />
                                        </button>
                                        <button className='background-none'     >
                                            <img src={trashcan} alt='' onClick={()=>deletedoctor(product._id)} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Collapsible>
                    ))}
                </div>
            </div>







            <div className="form-popup" id="addcategoryform">

                <h1>Add Category </h1>

                <label ><b>title</b></label>
                <input type="text" placeholder="Enter Email" name="email"   value={titlecat} onChange={(e) => settitlecat(e.target.value)} />
                <br />

                <label ><b>image</b></label>
                <input type="file"   onChange={handleimage} />
                <br />



         






                <button type="submit" className="btn" onClick={()=>uploadcategory()}>Submit</button>
                <button type="button" className="btn cancel" onClick={() => CloseAddCategory()}>Close</button>

            </div>




















            <div className="form-popup" id="editproductform">

<h1>Edit  Doctors information </h1>

<label ><b>Name</b></label>
<input type="text" placeholder={doctoorinfo && doctoorinfo[0].User_ID.name} name="title" required onChange={(e) => { seteditname(e.target.value) }} />
<br />

<label ><b>years of experience</b></label>
<input type="text" placeholder={doctoorinfo && doctoorinfo[0].yearsofexp} name="psw" required onChange={(e) => { setedityearsofexp(e.target.value) }} />
<br />



<label className="textform" >description</label><br />
<input type="text" placeholder={doctoorinfo && doctoorinfo[0].description} onChange={(e) => { seteditdescription(e.target.value) }} />
<br />

<label className="textform" >location</label><br />
<input type="text"  placeholder={doctoorinfo && doctoorinfo[0].location} onChange={(e) => { seteditlocation(e.target.value) }} />
<br />


<button type="submit" className="btn" onClick={() => { editdoctorinfo(); CloseEditProducts() }}>Submit</button>
<button type="button" className="btn cancel" onClick={() => { CloseEditProducts() }}>Close</button>

</div>












        </div>
    );
}

export default Dashboard;
