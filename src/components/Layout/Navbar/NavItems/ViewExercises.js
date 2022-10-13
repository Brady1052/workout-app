import React from 'react';
import classes from './ViewExercises.module.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ViewExercises() {
  return (
    <Link to="/exercises" className={classes['nav-item']}>
      <Button
        color="warning"
        variant="text"
        size="large"
        style={{ color: 'white', fontWeight: '1000' }}
      >
        Exercises
      </Button>
    </Link>
  );
}

export default ViewExercises;
