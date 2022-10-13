import React, { useState, useContext } from 'react';
import WorkoutsContext from '../../../../../context/workouts-context';
import FormWorkoutTable from '../../../../UI/FormWorkoutTable';
import ExercisesDropdown from './ExercisesDropdown';
import { Button, Modal, Box, Typography, TextField } from '@mui/material/';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

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
    ctx.handleWorkoutClose();
    setAddedExercise(false);
    ctx.setFormArray([]);
    ctx.setWorkoutName('');
    ctx.setSelectedExerciseName('');
  };

  const submitForm = () => {
    setAddedExercise(false);
    ctx.handleWorkoutClose();
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
              fullWidth
            ></TextField>
            <ExercisesDropdown />
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgba(6,147,227,1)',
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
                color="error"
                style={{ width: '50%', fontWeight: '600' }}
                endIcon={
                  <DeleteForeverRoundedIcon
                    sx={{ color: 'white', fontSize: '5rem' }}
                  />
                }
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="bonus"
                style={{ fontWeight: '600', width: '50%' }}
                onClick={submitForm}
                endIcon={<FitnessCenterIcon sx={{ color: 'white' }} />}
              >
                Save Workout
              </Button>
            </div>
          </Box>
        </Modal>
      </Button>
    </>
  );
}

export default WorkoutModal;
