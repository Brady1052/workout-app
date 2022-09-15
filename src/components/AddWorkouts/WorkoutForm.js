import React, { useState } from 'react';
import classes from './WorkoutForm.module.css';
import WrapperCentered from '../UI/WrapperCentered';
function WorkoutForm(props) {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutType, setWorkoutType] = useState('');

  const workoutNameHandler = (e) => {
    setWorkoutName(e.target.value);
  };

  const workoutTypeHandler = (e) => {
    setWorkoutType(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const workoutData = {
      name: workoutName,
      type: workoutType,
    };
    props.onSaveWorkout(workoutData);
    setWorkoutName('');
    setWorkoutType('');
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
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
            <div className="modal-body">
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
            </div>
            <div className="mb-3">
              <label htmlFor="workout-type" className="form-label">
                Type
              </label>
              <WrapperCentered>
                <select
                  className="form-select"
                  id={classes['categories-dropdown']}
                  onChange={workoutTypeHandler}
                >
                  <option selected>Open this select menu</option>
                  <option value="Weight Lifting">Weight Lifting</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Stretching">Stretching</option>
                  <option value="Sauna">Sauna</option>
                  <option value="Steam Room">Steam Room</option>
                  <option value="Other">Other</option>
                </select>
              </WrapperCentered>
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
    </React.Fragment>
  );
}

export default WorkoutForm;
