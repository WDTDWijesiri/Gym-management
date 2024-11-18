import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function AddSchedule() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [workout_plan, setWorkoutPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert the date to the desired format
      const formattedDate = formatDate(date);
      
      const response = await axios.post('http://localhost:8083/client_schedule-demo/schedules', {
        id,
        name,
        date: formattedDate,
        title,
        workout_plan: workout_plan
      });
      console.log('Schedule added:', response.data);
      // Reset the form
      setId('');
      setName('');
      setDate('');
      setTitle('');
      setWorkoutPlan('');
    } catch (error) {
      console.error('Error adding schedule:', error);
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
    <div>
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
        <h2 className="mt-5">Add Schedule</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-5">
            <label className="input-group-text" htmlFor="id">Schedule ID</label>
            <input
              className="form-control col-sm-6"
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-5">
            <label className="input-group-text" htmlFor="name">Name</label>
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
            <label className="input-group-text" htmlFor="date">Date</label>
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
            <label className="input-group-text" htmlFor="title">Title</label>
            <input
              className="form-control col-sm-6"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-5">
            <label className="input-group-text" htmlFor="workout_plan">Workout Plan</label>
            <textarea
              className="form-control col-sm-6"
              id="workout_plan"
              value={workout_plan}
              onChange={(e) => setWorkoutPlan(e.target.value)}
              required
            />
          </div>
          <Button variant="primary" type="submit">Add Schedule</Button>
        </form>
      </div>
    </div>
  );
}

export default AddSchedule;
