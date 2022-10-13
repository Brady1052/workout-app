import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseModal from '../Modals/ExerciseModal.js';
import WorkoutModal from '../Modals/WorkoutModal.js';
import Button from '@mui/material/Button';
import NavDrawer from './NavDrawer';
import classes from './Navbar.module.css';

import { AppBar, Toolbar, Grid, useTheme, useMediaQuery } from '@mui/material';

function NavBar() {
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0,65,55,1) 0%, rgba(3,35,64,1) 50%, rgba(0,117,245,1) 100%)',
          position: 'relative',
        }}
      >
        <Toolbar>
          {screenSmall ? (
            <>
              <NavDrawer />
            </>
          ) : (
            <Grid container sx={{ placeItems: 'center' }}>
              <Grid item xs={3} textAlign="center">
                <Link to="/exercises" className={classes['nav-item']}>
                  <Button
                    color="warning"
                    variant="text"
                    size="large"
                    sx={{ fontWeight: '1000' }}
                    style={{ color: 'white' }}
                  >
                    Exercises
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={3} textAlign="center">
                <Link to="/workouts" className={classes['nav-item']}>
                  <Button
                    variant="text"
                    color="primary"
                    size="large"
                    sx={{ fontWeight: '1000' }}
                    style={{ color: 'white' }}
                  >
                    Workouts
                  </Button>
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                textAlign="center"
                className={classes['nav-item']}
                size="large"
              >
                <ExerciseModal />
              </Grid>
              <Grid
                item
                xs={3}
                textAlign="center"
                className={classes['nav-item']}
              >
                <WorkoutModal />
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
