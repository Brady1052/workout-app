import React, { useContext } from 'react';
import WorkoutsContext from '../../../context/workouts-context';
import { MenuItem, TextField } from '@mui/material';

function ExercisesDropdown() {
  const ctx = useContext(WorkoutsContext);

  return (
    <TextField
      color="white"
      label="Select from your created exercises"
      select
      onChange={ctx.selectedExerciseNameHandler}
      value={ctx.selectedExerciseName}
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
        if (idx === 0 && ctx.exercises.length === 1) {
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
                backgroundColor: '#e2700b',

                color: 'white',
                paddingTop: '0.5rem',
                fontWeight: '600',
              }}
              sx={{
                marginBottom: '0',
                boxShadow: '',
              }}
            >
              {exercise.name}
            </MenuItem>
          );
        }
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
                backgroundColor: '#e2700b',
                color: 'white',
                paddingTop: '0.5rem',
                fontWeight: '600',
              }}
              sx={{
                position: 'relative',
                top: '-0.5rem',
                marginBottom: '.5rem',
              }}
            >
              {exercise.name}
            </MenuItem>
          );
        } else if (ctx.exercises.length === 2 && idx === 1) {
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
                backgroundColor: '#e2700b',

                color: 'white',
                paddingTop: '0',
                fontWeight: '600',
              }}
              sx={{
                position: 'relative',
                bottom: '0',
                boxShadow: '0 0 0 1.5rem #e2700b)',
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
                backgroundColor: '#e2700b',

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
                backgroundColor: '#e2700b',
                color: 'white',
                paddingTop: '0.5rem',
                fontWeight: '600',
              }}
              sx={{
                boxShadow: '0 0 0 1rem #e2700b',
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
                backgroundColor: '#e2700b',
                marginBottom: '0.5rem',
                color: 'white',
                paddingTop: '0.5rem',
                fontWeight: '600',
                boxShadow: '0 0 0 0.5rem #e2700b',
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
  );
}

export default ExercisesDropdown;
