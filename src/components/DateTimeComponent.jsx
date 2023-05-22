import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DateTimeComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    console.log(date.toLocaleString());

    try {
      const response = await axios.post('http://localhost:4000/bookings', {
        date: date.toLocaleString(), // Convert the date to local string format
      });

      toast.success('Appointment booked successfully!');
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <DatePicker
        className='button-ordering'
        placeholderText='Book an appointment'
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={30}
        dateFormat='MMMM d, yyyy h:mm aa'
      />
    </div>
  );
}

export default DateTimeComponent;
