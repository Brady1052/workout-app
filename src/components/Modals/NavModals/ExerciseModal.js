import React, { useContext } from 'react';
import WorkoutsContext from '../../../context/workouts-context';
import Button from '@mui/material/Button';
import { TextField, Box, Typography, Modal, MenuItem } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Save } from '@mui/icons-material';
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

  return (
    <>
      <Button
        variant="text"
        color="inherit"
        onClick={ctx.handleExerciseOpen}
        sx={{ fontWeight: '600' }}
      >
        Create Exercise
        <Modal open={ctx.exerciseOpen}>
          <Box
            sx={style}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              backgroundImage:
                'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
              color: 'white',
              width: { xs: '3px' },
              marginLeft: { xs: '2rem' },
              marginRight: { xs: '2rem' },
              height: { xs: '2rem' },
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
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = 'none';
                  }}
                  style={{
                    position: 'relative',
                    backgroundImage:
                      'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
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
                    backgroundImage:
                      'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
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
                    backgroundImage:
                      'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
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
                    backgroundImage:
                      'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
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
                    backgroundImage:
                      'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
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
                gap: '0.5rem',
                flexDirection: 'row-reverse',
              }}
            >
              <Button
                variant="contained"
                color="bonus"
                style={{
                  fontWeight: '600',
                  width: '50%',
                  padding: '0.7rem',
                  whiteSpace: 'nowrap',
                }}
                onClick={ctx.submitHandler}
                endIcon={<Save color="primary" />}
              >
                Save Exercise
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ fontWeight: '600', width: '50%' }}
                onClick={ctx.closeModal}
                endIcon={
                  <DeleteForeverRoundedIcon
                    sx={{ color: 'red', fontSize: '5rem' }}
                  />
                }
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Modal>
      </Button>
    </>
  );
}

export default ExerciseModal;
