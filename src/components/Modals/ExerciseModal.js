import React, { useContext, useState } from 'react';
import classes from './ExerciseModal.module.css';
import WorkoutsContext from '../../context/workouts-context';
import Button from '@mui/material/Button';
import { TextField, Box, Typography, Modal } from '@mui/material';

function ExerciseModal() {
  const ctx = useContext(WorkoutsContext);
  const style = {
    position: 'absolute',
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => (!open ? setOpen(true) : console.log());
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="text"
        color="inherit"
        onClick={handleOpen}
        sx={{ fontWeight: '1000' }}
      >
        Create Exercise
        <Modal open={open} onClose={handleClose}>
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
            <Typography variant="h6" style={{ alignSelf: 'center' }}>
              Enter Exercise Information
            </Typography>
            <form
              noValidate
              autoComplete="off"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <TextField variant="standard" label="Exercise Name" fullWidth />
              <TextField label="Weight" fullWidth />
              <TextField label="Sets" fullWidth />
              <TextField label="Reps" fullWidth />
            </form>
          </Box>
        </Modal>
      </Button>

      {/* <div className={`modal-body ${classes['modal-container']}`}>
        <div className="mb-3 form-floating">
          <input
            value={ctx.exerciseName}
            type="text"
            className={`form-control`}
            id="exercise-name"
            onChange={ctx.exerciseNameHandler}
            placeholder="Place exercise name here"
          />
          <label htmlFor="exercise-name">Exercise Name</label>
        </div>

        <div className="mb-3">
          <select
            className={`form-select ${classes['modal-input']}`}
            onChange={ctx.exerciseTypeHandler}
            value={ctx.exerciseType}
          >
            <option value="Select exercise type">Select exercise type</option>
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
            value={ctx.exerciseWeight}
            className={`form-control ${classes['modal-input']}`}
            onChange={ctx.exerciseWeightHandler}
            placeholder="Enter weight here"
          />
          <label htmlFor="exercise-name" className="form-label">
            Weight
          </label>
        </div>
        <div className={`mb-3 form-floating ${classes['input-control']}`}>
          <input
            type="number"
            value={ctx.numSets}
            className={`form-control ${classes['modal-input']}`}
            onChange={ctx.numSetsHandler}
            placeholder="Enter number of sets here"
          />
          <label htmlFor="exercise-name" className="form-label">
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
          <label htmlFor="exercise-name" className="form-label">
            Reps
          </label>
        </div>

        <div
          className="modal-footer"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            type="button"
            data-bs-dismiss="modal"
            onClick={ctx.closeModal}
            variant="contained"
            color="error"
          >
            Close
          </Button>
          <Button
            type="button"
            onClick={ctx.submitHandler}
            data-bs-dismiss="modal"
            variant="contained"
          >
            Create Exercise
          </Button>
        </div>
      </div> */}
    </>
  );
}

export default ExerciseModal;
