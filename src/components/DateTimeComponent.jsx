import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';


function DateTimeComponent() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDatee, setselectedDatee] = useState();
  const userID = sessionStorage.getItem('userID');
  const [user, setuser] = useState(userID);

  function decryptDatanostring(encryptedData, secretKey) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    console.log(decryptedData)
    return decryptedData;

  }



  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date.toLocaleString());
      setselectedDatee(date);
    }
  };

  const handleInputFocus = (e) => {
    e.preventDefault();
    e.target.blur(); // Remove focus from the input field
  };

  const Book = async () => {
    if (!selectedDate) {
      toast.error('Please enter the date');
    } else if (!user) {
      toast.error('Please sign in');
    } else {
     const useid= decryptDatanostring(user,"dana")




      try {
        const response = await axios.post('https://finddoc.onrender.com/booking', {
          date: selectedDate,
          User_ID: useid,
          Doctor_ID: id,
        });

        toast.success('Appointment booked successfully!', { position: toast.POSITION.TOP_RIGHT });
      } catch (error) {
        toast.error(error.response.data.message);
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
        onFocus={handleInputFocus} // Add the onFocus event handler to prevent the keyboard from showing
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={30}
        dateFormat='MMMM d, yyyy h:mm aa'
        minTime={new Date().setHours(9, 0)} // Set the minimum time to 9:00 am
        maxTime={new Date().setHours(17, 0)} // Set the maximum time to 5:00 pm
      />
      <button className='booking-button' onClick={Book}>
        Book the appointment
      </button>
    </div>
  );
}

export default DateTimeComponent;
