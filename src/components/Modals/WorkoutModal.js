import React, { useState, useContext } from 'react';
import classes from './WorkoutModal.module.css';
import WorkoutsContext from '../../context/workouts-context';
import FormWorkoutTable from '../UI/FormWorkoutTable';

function WorkoutModal() {
  const ctx = useContext(WorkoutsContext);

  // This state is used to determine when to show the form in the modal
  const [addedExercise, setAddedExercise] = useState(false);

  // Functions that tell the app to display or stop displaying the form
  const showTable = () => {
    setAddedExercise(true);
    ctx.displayExerciseTable(ctx.selectedExerciseName);
  };

  const eraseTable = () => {
    setAddedExercise(false);
    ctx.setFormArray([]);
    ctx.setWorkoutName('');
    ctx.setSelectedExerciseName('');
  };

  const submitForm = () => {
    setAddedExercise(false);
    ctx.saveWorkoutHandler();
    ctx.setFormArray([]);
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
            <div className={classes['modal-header-container']}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Workout
                </h5>
              </div>
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
                <label htmlFor="workout-name">Workout Name</label>
              </div>
              <div className="mb-3">
                <select
                  className={`form-select ${classes['modal-input']}`}
                  onChange={ctx.selectedExerciseNameHandler}
                  value={ctx.selectedExerciseName}
                >
                  <option value="Choose from your list of exercises">
                    Choose from your list of exercises
                  </option>
                  {ctx.exercises.map((exercise) => {
                    return (
                      <option
                        key={Math.random().toString()}
                        value={exercise.name}
                      >
                        {exercise.name}
                      </option>
                    );
                  })}
                </select>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  id={classes['add-exercise-btn']}
                  onClick={showTable}
                >
                  Add Exercise to Workout
                </button>
                {addedExercise === true && <FormWorkoutTable />}
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={eraseTable}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={submitForm}
                >
                  Create Workout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkoutModal;
