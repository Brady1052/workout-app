import { Typography } from '@mui/material';
import React from 'react';
import ExerciseCard from '../components/UI/Cards/ExerciseCard';

function Exercises() {
  return (
    <>
      <Typography
        variant="h1"
        style={{ textAlign: 'center', fontWeight: '600' }}
        sx={{
          fontSize: { xs: '5rem' },
          backgroundImage:
            ' linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Exercises
      </Typography>
      <ExerciseCard />
    </>
  );
}

export default Exercises;
