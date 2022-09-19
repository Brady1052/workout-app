import React, { useState } from 'react';
import classes from './AddWorkoutModal.module.css';

function WorkoutForm(props) {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [numSets, setNumSets] = useState(0);
  const [numReps, setNumReps] = useState(0);

  const workoutNameHandler = (e) => {
    setWorkoutName(e.target.value);
  };

  const workoutTypeHandler = (e) => {
    setWorkoutType(e.target.value);
  };

  const numSetsHandler = (e) => {
    setNumSets(e.target.value);
  };

  const numRepsHandler = (e) => {
    setNumReps(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const workoutData = {
      name: workoutName,
      type: workoutType,
      sets: numSets,
      reps: numReps,
    };
    props.onSaveWorkout(workoutData);
    setWorkoutName('');
    setWorkoutType('');
    setNumSets(0);
    setNumReps(0);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-light"
        id={classes['add-workout']}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Workout
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Workout
              </h5>
            </div>
            <div className={`modal-body ${classes['modal-container']}`}>
              <div className="mb-3">
                <label htmlFor="workout-name" className="form-label">
                  Workout Name
                </label>
                <input
                  type="text"
                  className={`form-control`}
                  id="workout-name"
                  onChange={workoutNameHandler}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="workout-type" className="form-label">
                  Type
                </label>

                <select
                  className={`form-select ${classes['modal-input']}`}
                  onChange={workoutTypeHandler}
                >
                  <option value="selected">Open this select menu</option>
                  <option value="Weight Lifting">Weight Lifting</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Stretching">Stretching</option>
                  <option value="Sauna">Sauna</option>
                  <option value="Steam Room">Steam Room</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={`mb-3 ${classes['input-control']}`}>
                <label htmlFor="workout-name" className="form-label">
                  Sets
                </label>
                <input
                  type="number"
                  value={numSets}
                  className={`form-control ${classes['modal-input']}`}
                  id="workout-name"
                  onChange={numSetsHandler}
                />
              </div>
              <div className={`mb-3 ${classes['input-control']}`}>
                <label htmlFor="workout-name" className="form-label">
                  Reps
                </label>

                <input
                  type="number"
                  value={numReps}
                  className={`form-control ${classes['modal-input']}`}
                  id="workout-name"
                  onChange={numRepsHandler}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={submitHandler}
                >
                  Add Workout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkoutForm;
