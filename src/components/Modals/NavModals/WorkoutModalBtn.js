import React, { useContext } from 'react';
import { Button } from '@mui/material';
import WorkoutModal from './WorkoutModal';
import WorkoutContext from '../../../context/workouts-context';
function WorkoutModalBtn() {
  const ctx = useContext(WorkoutContext);
  return (
    <Button
      variant="text"
      color="inherit"
      onClick={ctx.handleWorkoutOpen}
      sx={{ fontWeight: '1000' }}
    >
      Create Template
      <WorkoutModal />
    </Button>
  );
}

export default WorkoutModalBtn;
