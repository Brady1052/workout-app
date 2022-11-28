import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
function StartWorkout() {
  return (
    <Link to="/workout-app" style={{ textDecoration: 'none' }}>
      <Button
        variant="text"
        color="primary"
        size="large"
        sx={{ fontWeight: '1000', textDecoration: 'none' }}
        style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}
      >
        Start Workout
      </Button>
    </Link>
  );
}

export default StartWorkout;
