import React from 'react';
import classes from './ViewWorkouts.module.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function ViewWorkouts() {
  return (
    <Link to="/completed-workouts" className={classes['nav-item']}>
      <Button
        variant="text"
        color="primary"
        size="large"
        sx={{ fontWeight: '600' }}
        style={{ color: 'white' }}
      >
        Completed Workouts
      </Button>
    </Link>
  );
}

export default ViewWorkouts;
