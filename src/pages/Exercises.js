import { Typography } from '@mui/material';
import React from 'react';
import ExerciseCard from '../components/UI/Cards/ExerciseCard';

function Exercises() {
  return (
    <>
      <Typography
        variant="h1"
        style={{ color: 'white', textAlign: 'center' }}
        sx={{ fontSize: { xs: '5rem' } }}
      >
        Exercises
      </Typography>
      <ExerciseCard />
    </>
  );
}

export default Exercises;
