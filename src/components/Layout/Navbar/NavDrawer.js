import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ViewWorkouts from './NavItems/ViewWorkouts';
import WorkoutModalBtn from '../../Modals/NavModals/WorkoutModalBtn';
import ExerciseModal from '../../Modals/NavModals/ExerciseModal';
import ViewExercises from './NavItems/ViewExercises';
import classes from './NavDrawer.module.css';
import { Drawer, IconButton, Box, Button, Link } from '@mui/material';
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
            }}
          >
            <Grid
              item
              xs={3}
              style={{ marginLeft: '14.5%' }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ViewExercises />
            </Grid>
            <Grid
              item
              xs={3}
              style={{ marginLeft: '13%' }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ViewWorkouts />
            </Grid>
            <Grid item>
              <Link to="/workout-app" style={{ textDecoration: 'none' }}>
                <Button
                  variant="text"
                  color="primary"
                  size="large"
                  sx={{ fontWeight: '1000', textDecoration: 'none' }}
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Start Workout
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ marginLeft: '18%', color: 'white' }}
              className={classes['nav-item']}
              size="large"
            >
              <ExerciseModal />
            </Grid>
            <Grid
              item
              xs={3}
              style={{ marginLeft: '17%', color: 'white' }}
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
