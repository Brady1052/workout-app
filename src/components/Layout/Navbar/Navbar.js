import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseModal from '../../Modals/NavModals/ExerciseModal';
import WorkoutModalBtn from '../../Modals/NavModals/WorkoutModalBtn';
import Button from '@mui/material/Button';
import NavDrawer from './NavDrawer';
import classes from './Navbar.module.css';
import {
  AppBar,
  Toolbar,
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
  Container,
} from '@mui/material';
import CurrentDate from '../../UI/CurrentDate';

function Navbar() {
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            ' linear-gradient(90deg, rgba(163,86,0,1) 0%, rgba(226,112,11,1) 48%, rgba(51,17,0,1) 100%)',
          position: 'relative',
        }}
      >
        <Toolbar>
          {screenSmall ? (
            <Container
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
            >
              <CurrentDate />
              <Typography
                variant="caption"
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                {' '}
                Gainz Central
              </Typography>
              <NavDrawer />
            </Container>
          ) : (
            <Grid container sx={{ placeItems: 'center' }}>
              <Grid item xs={2.3} textAlign="center">
                <Link to="/exercises" className={classes['nav-item']}>
                  <Button
                    color="warning"
                    variant="text"
                    size="large"
                    sx={{ fontWeight: '600' }}
                    style={{ color: 'white' }}
                  >
                    Exercises
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={2.3} textAlign="center">
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
              </Grid>
              <Grid item xs={2.3} textAlign="center">
                <Link to="/workout-app" className={classes['nav-item']}>
                  <Button
                    variant="text"
                    color="primary"
                    size="large"
                    sx={{ fontWeight: '600' }}
                    style={{ color: 'white' }}
                  >
                    Start Workout
                  </Button>
                </Link>
              </Grid>
              <Grid
                item
                xs={2.3}
                textAlign="center"
                className={classes['nav-item']}
                size="large"
              >
                <ExerciseModal />
              </Grid>
              <Grid
                item
                xs={2.3}
                textAlign="center"
                className={classes['nav-item']}
              >
                <WorkoutModalBtn />
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
