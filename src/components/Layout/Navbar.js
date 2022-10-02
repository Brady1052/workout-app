import React from 'react';
import './Navbar.css';
import ExerciseModal from '../Modals/ExerciseModal.js';
import WorkoutModal from '../Modals/WorkoutModal.js';

function NavBar() {
  return (
    <React.Fragment>
      <div>
        <nav className="nav-container">
          <ExerciseModal />
          <WorkoutModal />
        </nav>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
