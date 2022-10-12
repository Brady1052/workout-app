import React, { useContext, useState } from 'react';
import classes from './ExerciseModal.module.css';
import WorkoutsContext from '../../context/workouts-context';
import Button from '@mui/material/Button';
import { TextField, Box, Typography, Modal, MenuItem } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function ExerciseModal() {
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => (!open ? setOpen(true) : console.log());
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="text"
        color="inherit"
        onClick={ctx.handleOpen}
        sx={{ fontWeight: '1000' }}
      >
        Create Exercise
        <Modal open={ctx.open} onClose={ctx.handleClose}>
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
              Enter Exercise Information
            </Typography>
            <form
              noValidate
              autoComplete="off"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                color: 'white',
              }}
            >
              {/* Exercise Name */}
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
                label="Exercise Name"
                fullWidth
              ></TextField>
              {/* Exercise Type */}
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
                <MenuItem
                  value="Weight Lifting"
                  id={classes.test}
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = 'none';
                  }}
                  style={{
                    position: 'relative',
                    backgroundColor: 'rgba(6,147,227,1)',
                    top: '-0.5rem',
                    color: 'white',
                    paddingTop: '0.5rem',
                    fontWeight: '600',
                  }}
                >
                  Weight Lifting
                </MenuItem>
                <MenuItem
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = 'none';
                  }}
                  value="Cardio"
                  style={{
                    color: 'white',
                    marginTop: '-0.5rem',
                    backgroundColor: 'rgba(6,147,227,1)',
                    fontWeight: '600',
                  }}
                >
                  Cardio
                </MenuItem>
                <MenuItem
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = 'none';
                  }}
                  value="Yoga"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(6,147,227,1)',
                    fontWeight: '600',
                  }}
                >
                  Yoga
                </MenuItem>
                <MenuItem
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = 'none';
                  }}
                  value="Stretching"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(6,147,227,1)',
                    fontWeight: '600',
                  }}
                >
                  Stretching
                </MenuItem>
                <MenuItem
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = 'none';
                  }}
                  value="Other"
                  style={{
                    position: 'relative',
                    backgroundColor: 'rgba(6,147,227,1)',
                    bottom: '-0.5rem',
                    color: 'white',
                    marginTop: '-0.5rem',
                    fontWeight: '600',
                  }}
                >
                  Other
                </MenuItem>
              </TextField>
              {/* Exercise Weight */}
              <TextField
                value={ctx.exerciseWeight}
                onChange={ctx.exerciseWeightHandler}
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
                label="Weight"
                fullWidth
              />
              {/* Exercise Sets */}
              <TextField
                value={ctx.numSets}
                onChange={ctx.numSetsHandler}
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
                label="Sets"
                fullWidth
              />
              {/* Exercise Reps */}
              <TextField
                value={ctx.numReps}
                onChange={ctx.numRepsHandler}
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
                label="Reps"
                fullWidth
              />
            </form>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
              }}
            >
              <Button
                variant="contained"
                color="bonus"
                style={{ fontWeight: '600' }}
                endIcon={<FitnessCenterIcon sx={{ color: 'white' }} />}
                onClick={ctx.submitHandler}
              >
                Save Exercise
              </Button>
              <Button
                variant="contained"
                color="error"
                style={{ fontWeight: '600' }}
                endIcon={<DeleteForeverRoundedIcon sx={{ color: 'white' }} />}
                onClick={ctx.closeModal}
              >
                Cancel
              </Button>
            </Box>
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
