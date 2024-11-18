import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const AddAttendance = () => {
  const [attendanceid, setAttendanceId] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [checkintime, setCheckInTime] = useState('');
  const [checkouttime, setCheckOutTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert the date to the desired format
      const formattedDate = formatDate(date);
      
      const response = await axios.post('http://localhost:8085/projectead/attendance', {
        attendanceid,
        name,
        date: formattedDate,
        checkintime,
        checkouttime,
        description
      });
      console.log('Attendance added:', response.data);
      // Reset the form
      setAttendanceId('');
      setName('');
      setDate('');
      setCheckInTime('');
      setCheckOutTime('');
      setDescription('');
    } catch (error) {
      console.error('Error adding attendance:', error);
    }
  };

  // Function to format the date
  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const year = dateObject.getFullYear();
    let month = dateObject.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`; // Prefix single-digit months with a zero
    }
    let day = dateObject.getDate();
    if (day < 10) {
      day = `0${day}`; // Prefix single-digit days with a zero
    }
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Add Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="attendanceId">
            Attendance ID
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            id="attendanceId"
            value={attendanceid}
            onChange={(e) => setAttendanceId(e.target.value)}
            required
          />
        </div>
        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="name">
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="date">
            Date
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="checkintime">
            Check-In Time
          </label>
          <input
            className="form-control col-sm-6"
            type="time"
            id="checkintime"
            value={checkintime}
            onChange={(e) => setCheckInTime(e.target.value)}
            required
          />
        </div>
        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="checkouttime">
            Check-Out Time
          </label>
          <input
            className="form-control col-sm-6"
            type="time"
            id="checkouttime"
            value={checkouttime}
            onChange={(e) => setCheckOutTime(e.target.value)}
            required
          />
        </div>
        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="description">
            Description
          </label>
          <textarea
            className="form-control col-sm-6"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <Button variant="primary" type="submit">Add Attendance</Button>
      </form>
    </div>
  );
};

export default AddAttendance;
//mark attendace