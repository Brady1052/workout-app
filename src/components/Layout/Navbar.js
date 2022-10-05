import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ExerciseModal from '../Modals/ExerciseModal.js';
import WorkoutModal from '../Modals/WorkoutModal.js';
import Button from '@mui/material/Button';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { ButtonGroup } from '@mui/material';

function NavBar() {
  return (
    <React.Fragment>
      <div>
        <nav className="nav-container">
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
          <ExerciseModal />
          <WorkoutModal />
        </nav>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
