import React, { useState, useEffect } from 'react';
import classes from './AddWorkoutForm.module.css';
function AddWorkout(props) {
  const [workoutName, setWorkoutName] = useState([]);

  const workoutNameHandler = (e) => {
    e.preventDefault();
    setWorkoutName((prevState) => prevState + e.target.value);
  };

  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="workout-name">
          What workout would you like to add?
        </label>
        <input
          id="workout-name"
          type="text"
          onChange={workoutNameHandler}
        ></input>
        <button type="submit">Add Workout</button>
        {/* <input type="submit">Add Workout</input> */}
      </form>
      <h1>{workoutName}</h1>
    </React.Fragment>
  );
}

export default AddWorkout;
