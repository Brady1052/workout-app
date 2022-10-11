import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ExerciseModal from '../Modals/ExerciseModal.js';
import WorkoutModal from '../Modals/WorkoutModal.js';
import Button from '@mui/material/Button';
import NavDrawer from './NavDrawer';

import {
  AppBar,
  Toolbar,
  Modal,
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';

function NavBar() {
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => (!open ? setOpen(true) : console.log());
  const handleClose = () => setOpen(false);
  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0,31,65,1) 0%, rgba(0,31,65,1) 100%, rgba(0,31,65,1) 100%)',
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
                <Link to="/exercises" style={{ textDecoration: 'none' }}>
                  <Button
                    color="warning"
                    variant="text"
                    // size="large"
                    sx={{ fontWeight: '1000' }}
                    style={{ color: 'white' }}
                  >
                    Exercises
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={3} textAlign="center">
                <Link to="/workouts" style={{ textDecoration: 'none' }}>
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
              <Grid item xs={3} textAlign="center">
                <ExerciseModal />
              </Grid>
              <Grid item xs={3} textAlign="center">
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
