import { Typography } from '@mui/material';
import React from 'react';
import CompletedWorkoutCard from '../components/UI/Cards/CompletedWorkoutCard';

function Completed_Workouts() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          backgroundImage:
            ' linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
          backgroundClip: 'text',
          color: 'transparent',
          fontWeight: '600',
          marginTop: '1rem',
          textAlign: 'center',
        }}
      >
        Completed Workouts
      </Typography>
      <CompletedWorkoutCard />
    </>
  );
}

export default Completed_Workouts;
