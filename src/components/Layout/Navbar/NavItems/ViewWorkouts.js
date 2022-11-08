import React from 'react';
import classes from './ViewWorkouts.module.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function ViewWorkouts() {
  return (
    <Link to="/workouts" className={classes['nav-item']}>
      <Button
        variant="text"
        color="primary"
        size="large"
        sx={{ fontWeight: '1000' }}
        style={{ color: 'white' }}
      >
        Templates
      </Button>
    </Link>
  );
}

export default ViewWorkouts;
