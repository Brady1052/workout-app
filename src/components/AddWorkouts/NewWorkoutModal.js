import React, { useState, useContext } from 'react';
import classes from './NewWorkoutModal.module.css';
import WorkoutsContext from '../../context/workouts-context';
function WorkoutForm() {
  const ctx = useContext(WorkoutsContext);

  const [workoutName, setWorkoutName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [numSets, setNumSets] = useState('');
  const [numReps, setNumReps] = useState('');

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

  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      workoutID: Math.random().toString(),
    };
    ctx.onAddWorkout(workoutData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const workoutData = {
      key: Math.random().toString(),
      name: workoutName,
      type: workoutType,
      sets: numSets,
      reps: numReps,
    };
    saveWorkoutDataHandler(workoutData);
    setWorkoutName('');
    setWorkoutType('Select Workout Type');
    setNumSets('');
    setNumReps('');
  };

  const closeModal = () => {
    setWorkoutName('');
    setWorkoutType('Select Workout Type');
    setNumSets('');
    setNumReps('');
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
        Add Exercise
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
                Add Exercise
              </h5>
            </div>
            <div className={`modal-body ${classes['modal-container']}`}>
              <div className="mb-3 form-floating">
                <input
                  value={ctx.workoutName}
                  type="text"
                  className={`form-control`}
                  id="workout-name"
                  onChange={ctx.workoutNameHandler}
                  placeholder="Place workout name here"
                />
                <label htmlFor="workout-name">Exercise Name</label>
              </div>

              <div className="mb-3">
                <select
                  className={`form-select ${classes['modal-input']}`}
                  onChange={ctx.workoutTypeHandler}
                  value={ctx.workoutType}
                >
                  <option value="Select workout type">
                    Select workout type
                  </option>
                  <option value="Weight Lifting">Weight Lifting</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Stretching">Stretching</option>
                  <option value="Sauna">Sauna</option>
                  <option value="Steam Room">Steam Room</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={`mb-3 form-floating ${classes['input-control']}`}>
                <input
                  type="number"
                  value={ctx.numSets}
                  className={`form-control ${classes['modal-input']}`}
                  onChange={ctx.numSetsHandler}
                  placeholder="Enter number of sets here"
                />
                <label htmlFor="workout-name" className="form-label">
                  Sets
                </label>
              </div>
              <div className={`mb-3 form-floating ${classes['input-control']}`}>
                <input
                  type="number"
                  value={ctx.numReps}
                  className={`form-control ${classes['modal-input']}`}
                  onChange={ctx.numRepsHandler}
                  placeholder="Enter number of reps here"
                />
                <label htmlFor="workout-name" className="form-label">
                  Reps
                </label>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={ctx.closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={ctx.submitHandler}
                  data-bs-dismiss="modal"
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
