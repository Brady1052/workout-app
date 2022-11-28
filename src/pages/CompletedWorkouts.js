import { Typography } from '@mui/material';
import React from 'react';
import CompletedWorkoutCard from '../components/UI/CompletedWorkoutCard';

function Completed_Workouts() {
  return (
    <>
      <Typography
        variant="h4"
        style={{
          color: 'white',
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
