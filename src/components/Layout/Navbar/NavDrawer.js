import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ViewWorkouts from './NavItems/ViewWorkouts';
import WorkoutModal from './NavItems/Modals/WorkoutModal';
import ExerciseModal from './NavItems/Modals/ExerciseModal';
import ViewExercises from './NavItems/ViewExercises';
import classes from './NavDrawer.module.css';
import { Drawer, IconButton, Box } from '@mui/material';
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
          }}
        >
          <Grid
            container
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid item xs={3} style={{ marginLeft: '14.5%' }}>
              <ViewExercises />
            </Grid>
            <Grid item xs={3} style={{ marginLeft: '13%' }}>
              <ViewWorkouts />
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
              <WorkoutModal />
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
