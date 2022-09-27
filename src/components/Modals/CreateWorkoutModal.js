import React, { useState, useContext } from 'react';
import classes from './CreateWorkoutModal.module.css';
import WorkoutsContext from '../../context/workouts-context';
import WorkoutForm from '../UI/WorkoutForm';

function CreateWorkoutModal() {
  const ctx = useContext(WorkoutsContext);

  // This state is used to determine when to show the form in the modal
  const [addedExercise, setAddedExercise] = useState(false);
  // Functions that tell the app to display or stop displaying the form
  const showForm = () => {
    setAddedExercise(true);
  };
  const resetForm = () => {
    setAddedExercise(false);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-light"
        id={classes['add-workout']}
        data-bs-toggle="modal"
        data-bs-target="#workout-modal"
      >
        Create Workout
      </button>

      <div
        className="modal fade"
        id="workout-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Workout
              </h5>
            </div>

            <div className={`modal-body ${classes['modal-container']}`}>
              <div className="mb-3 form-floating">
                <input
                  //   value={ctx.workoutName}
                  type="text"
                  className={`form-control`}
                  id="workout-name"
                  //   onChange={ctx.workoutNameHandler}
                  placeholder="Place workout name here"
                />
                <label htmlFor="workout-name">Workout Name</label>
              </div>
              <div className="mb-3">
                <select
                  className={`form-select ${classes['modal-input']}`}
                  onChange={ctx.formStateHandler}
                >
                  <option value="Choose from your list of exercises">
                    Choose from your list of exercises
                  </option>
                  {ctx.workouts.map((workout) => {
                    return <option value={workout.name}>{workout.name}</option>;
                  })}
                </select>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  id={classes['add-exercise-btn']}
                  onClick={showForm}
                >
                  Add Exercise to Workout
                </button>
                {addedExercise === true && <WorkoutForm />}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={resetForm}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  //   onClick={ctx.submitHandler}
                  data-bs-dismiss="modal"
                  onClick={resetForm}
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

export default CreateWorkoutModal;
