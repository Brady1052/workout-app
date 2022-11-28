import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ViewWorkouts from './NavItems/ViewWorkouts';
import WorkoutModalBtn from '../../Modals/NavModals/WorkoutModalBtn';
import ExerciseModal from '../../Modals/NavModals/ExerciseModal';
import ViewExercises from './NavItems/ViewExercises';
import classes from './NavDrawer.module.css';
import { Drawer, IconButton, Box } from '@mui/material';
import StartWorkout from './NavItems/StartWorkout';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function NavDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {' '}
        <Box
          style={{
            height: 'inherit',
            backgroundColor: '#0057C3',
            paddingTop: '1rem',
          }}
        >
          <Grid
            container
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Grid
              item
              onClick={() => {
                setOpen(false);
              }}
            >
              <ViewExercises />
            </Grid>
            <Grid
              item
              onClick={() => {
                setOpen(false);
              }}
            >
              <ViewWorkouts />
            </Grid>
            <Grid
              item
              onClick={() => {
                setOpen(false);
              }}
            >
              <StartWorkout />
            </Grid>
            <Grid
              item
              style={{ color: 'white' }}
              className={classes['nav-item']}
            >
              <ExerciseModal />
            </Grid>
            <Grid
              item
              style={{ color: 'white' }}
              className={classes['nav-item']}
            >
              <WorkoutModalBtn />
            </Grid>
          </Grid>
        </Box>
      </Drawer>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
        sx={{ position: 'absolute', right: '0' }}
      >
        <MenuRoundedIcon style={{ color: 'white' }} />
      </IconButton>
    </>
  );
}

export default NavDrawer;
