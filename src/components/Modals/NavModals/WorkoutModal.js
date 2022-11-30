import React, { useState, useContext } from 'react';
import WorkoutsContext from '../../../context/workouts-context';
import FormWorkoutTable from '../../UI/FormWorkoutTable';
import ExercisesDropdown from './ExercisesDropdown';
import { Button, Modal, Box, Typography, TextField } from '@mui/material/';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Save } from '@mui/icons-material';

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

  const eraseTable = (e) => {
    ctx.handleWorkoutOpen(e);
    setAddedExercise(false);
    ctx.setFormArray([]);
    ctx.setWorkoutName('');
    ctx.setSelectedExerciseName('');
  };

  const submitForm = (e) => {
    ctx.handleWorkoutOpen(e);
    setAddedExercise(false);
    ctx.saveWorkoutHandler();
    ctx.setFormArray([]);
    ctx.setSelectedExerciseName('');
    ctx.forceRenderHandler();
  };

  return (
    <>
      <Modal open={ctx.workoutOpen}>
        <Box
          sx={style}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            backgroundImage:
              'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
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
            value={ctx.workoutName}
            onChange={ctx.workoutNameHandler}
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
            autoComplete="off"
            fullWidth
          ></TextField>
          <ExercisesDropdown />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: '600',
            }}
            onClick={showTable}
          >
            Add Exercise
          </Button>
          {addedExercise === true && <FormWorkoutTable />}
          <div
            className="buttons-container"
            style={{ display: 'flex', gap: '0.2rem' }}
          >
            <Button
              variant="contained"
              onClick={eraseTable}
              color="primary"
              style={{ width: '50%', fontWeight: '600' }}
              endIcon={
                <DeleteForeverRoundedIcon
                  sx={{ color: 'red', fontSize: '5rem' }}
                />
              }
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="bonus"
              style={{ fontWeight: '600', width: '50%', whiteSpace: 'nowrap' }}
              endIcon={<Save color="primary" />}
              onClick={submitForm}
            >
              Save Workout
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default WorkoutModal;
