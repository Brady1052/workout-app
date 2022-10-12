import React, { useState, useContext } from 'react';
import classes from './WorkoutModal.module.css';
import WorkoutsContext from '../../context/workouts-context';
import FormWorkoutTable from '../UI/FormWorkoutTable';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material/';

function WorkoutModal() {
  const ctx = useContext(WorkoutsContext);
  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

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
    ctx.setSelectedExerciseName('');
  };

  return (
    <>
      <Button
        variant="text"
        color="inherit"
        onClick={ctx.handleWorkoutOpen}
        sx={{ fontWeight: '1000' }}
      >
        Create Workout
        <Modal open={ctx.workoutOpen} onClose={ctx.handleWorkoutClose}>
          <Box
            sx={style}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              backgroundColor: '#0057C3',
              color: 'white',
            }}
          >
            <Typography
              variant="h6"
              style={{
                alignSelf: 'center',
                borderBottom: '1px solid white',
                fontWeight: '600',
              }}
            >
              Enter Workout Information
            </Typography>
            <TextField
              value={ctx.exerciseName}
              onChange={ctx.exerciseNameHandler}
              sx={{
                '& .MuiFormLabel-root': {
                  color: 'white.main',
                },
                '& .MuiInputBase-root': {
                  color: 'white.main',
                  fontWeight: '700',
                },
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { border: '1px solid white' },
                },
                '& .MuiOutlinedInput-root:hover': {
                  '& > fieldset': { border: '2px solid white' },
                },
              }}
              color="white"
              label="Workout Name"
              fullWidth
            ></TextField>
            <TextField
              color="white"
              label="Select exercise type"
              select
              value={ctx.exerciseType}
              onChange={ctx.exerciseTypeHandler}
              sx={{
                '& .MuiFormLabel-root': {
                  color: 'white.main',
                },
                '& .MuiInputBase-root': {
                  color: 'white.main',
                  fontWeight: '700',
                },
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { border: '1px solid white' },
                },
                '& .MuiOutlinedInput-root:hover': {
                  '& > fieldset': { border: '2px solid white' },
                },
              }}
            >
              {ctx.exercises.map((exercise, idx) => {
                if (idx === 0) {
                  return (
                    <MenuItem
                      key={Math.random().toString()}
                      value={exercise.name}
                      onMouseEnter={(e) => {
                        e.target.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.textDecoration = 'none';
                      }}
                      style={{
                        backgroundColor: 'rgba(6,147,227,1)',

                        color: 'white',
                        paddingTop: '0.5rem',
                        fontWeight: '600',
                      }}
                      sx={{
                        position: 'relative',
                        top: '-0.5rem',
                      }}
                    >
                      {exercise.name}
                    </MenuItem>
                  );
                } else if (idx === ctx.exercises.length - 1) {
                  return (
                    <MenuItem
                      key={Math.random().toString()}
                      value={exercise.name}
                      onMouseEnter={(e) => {
                        e.target.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.textDecoration = 'none';
                      }}
                      style={{
                        backgroundColor: 'rgba(6,147,227,1)',

                        color: 'white',
                        paddingTop: '0.5rem',
                        fontWeight: '600',
                      }}
                      sx={{
                        position: 'relative',
                        bottom: '-0.5rem',
                      }}
                    >
                      {exercise.name}
                    </MenuItem>
                  );
                } else if (idx === ctx.exercises.length - 2) {
                  return (
                    <MenuItem
                      key={Math.random().toString()}
                      value={exercise.name}
                      onMouseEnter={(e) => {
                        e.target.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.textDecoration = 'none';
                      }}
                      style={{
                        backgroundColor: 'rgba(6,147,227,1)',

                        color: 'white',
                        paddingTop: '0.5rem',
                        fontWeight: '600',
                      }}
                      sx={{
                        boxShadow: '0 0 0 1rem rgba(6,147,227,1)',
                      }}
                    >
                      {exercise.name}
                    </MenuItem>
                  );
                } else
                  return (
                    <MenuItem
                      key={Math.random().toString()}
                      value={exercise.name}
                      onMouseEnter={(e) => {
                        e.target.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.textDecoration = 'none';
                      }}
                      style={{
                        backgroundColor: 'rgba(6,147,227,1)',
                        marginBottom: '0.5rem',
                        color: 'white',
                        paddingTop: '0.5rem',
                        fontWeight: '600',
                        boxShadow: '0 0 0 0.5rem rgba(6,147,227,1)',
                      }}
                      sx={{
                        position: 'relative',
                        top: '-0.5rem',
                      }}
                    >
                      {exercise.name}
                    </MenuItem>
                  );
              })}
            </TextField>
          </Box>
        </Modal>
      </Button>

      {/* <Button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#workout-modal"
        variant="contained"
      >
        Create Workout
      </Button>

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
              <div
                className="modal-footer"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={eraseTable}
                  variant="contained"
                  color="error"
                >
                  Close
                </Button>
                <Button
                  type="button"
                  data-bs-dismiss="modal"
                  onClick={submitForm}
                  variant="contained"
                >
                  Create Workout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </>
  );
}

export default WorkoutModal;
