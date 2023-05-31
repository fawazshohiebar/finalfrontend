import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

function DateTimeComponent() {
  const { id } = useParams();
  console.log(id);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDatee,setselectedDatee]=useState()
  const userID = sessionStorage.getItem('userID');
  const[user,setuser]=useState(userID)
  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date.toLocaleString());
      setselectedDatee(date)

      console.log(date.toLocaleString());
    }
  };
  

  const Book = async () => {
    if(!selectedDate){
      toast.error("please  enter the date ");
    } else if(!user){
      toast.error("please  Sign in ");
    }
    else{
    try {
      const response = await axios.post('https://finddoc.onrender.com//booking', {
        date: selectedDate,
        User_ID: user,
        Doctor_ID: id,
      });

      toast.success('Appointment booked successfully!', { position: toast.POSITION.TOP_RIGHT });
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error.response.data);
    }
  }
  };

  return (
    <div className='datecom'>
      <ToastContainer />

      <DatePicker
        className='button-ordering'
        placeholderText='Pick a Date'
        selected={selectedDatee}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={30}
        dateFormat='MMMM d, yyyy h:mm aa'
        minTime={new Date().setHours(9, 0)} // Set the minimum time to 9:00 am
        maxTime={new Date().setHours(17, 0)} // Set the maximum time to 5:00 pm
      />
      <button className='booking-button' onClick={() => Book()}>Book the appointment</button>
    </div>
  );
}

export default DateTimeComponent;
