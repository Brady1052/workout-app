import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ExerciseModal from '../Modals/ExerciseModal.js';
import WorkoutModal from '../Modals/WorkoutModal.js';
import Button from '@mui/material/Button';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Grid from '@mui/material/Grid';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function NavBar() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          {/* <div className="nav-container"> */}
          <Grid container justifyContent="center">
            <Grid item>
              <Button variant="contained" onClick={handleOpen}>
                Open
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Modal>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Link to="/exercises">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<FitnessCenterIcon style={{ color: 'black' }} />}
                >
                  Exercises
                </Button>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="/workouts">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ImportContactsIcon style={{ color: 'black' }} />}
                >
                  Workouts
                </Button>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <ExerciseModal />
            </Grid>
            <Grid item>
              <WorkoutModal />
            </Grid>
          </Grid>
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
