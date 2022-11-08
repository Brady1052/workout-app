import React, { useContext, useEffect } from 'react';
import WorkoutsContext from '../../../context/workouts-context';
import { MenuItem, TextField } from '@mui/material';

function ExercisesDropdown() {
  const ctx = useContext(WorkoutsContext);
  useEffect(() => {
    console.log(ctx.exercises.length);
  });
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
          console.log('yo');
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
                marginBottom: '0',
                boxShadow: '0 0 0 1.5rem rgba(6,147,227,1)',
              }}
            >
              {exercise.name}
            </MenuItem>
          );
        }
        if (idx === 0) {
          console.log('yo');
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
                marginBottom: '.5rem',
              }}
            >
              {exercise.name}
            </MenuItem>
          );
        } else if (ctx.exercises.length === 2 && idx === 1) {
          console.log('hey');
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
                paddingTop: '0',
                fontWeight: '600',
              }}
              sx={{
                position: 'relative',
                bottom: '0',
                boxShadow: '0 0 0 1.5rem rgba(6,147,227,1)',
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
  );
}

export default ExercisesDropdown;
