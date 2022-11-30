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
            backgroundImage:
              'linear-gradient(90deg, rgba(163,86,0,1) 0%, rgba(226,112,11,1) 48%, rgba(51,17,0,1) 100%)',
            height: 'inherit',
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
      >
        <MenuRoundedIcon color="primary" />
      </IconButton>
    </>
  );
}

export default NavDrawer;
