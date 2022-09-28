import React from 'react';
import classes from './Navbar.module.css';
import CreateExerciseModal from '../Modals/CreateExerciseModal.js';
import CreateWorkoutModal from '../Modals/CreateWorkoutModal.js';

function NavBar() {
  return (
    <React.Fragment>
      <nav className={`navbar d-flex navbar-expand-sm navbar-dark bg-dark `}>
        <div className="container-fluid d-flex justify-content-between">
          <h4 id={classes['color-white']} className={`navbar-brand}`}>
            Workout Tracker
          </h4>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNavbar"
            aria-controls="#mobile-Navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="mobileNavbar">
            <CreateWorkoutModal />

            <ul className="navbar-nav me-5 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light"
                  id={classes.btn}
                >
                  View Exercises
                </button>
              </li>
            </ul>

            <CreateExerciseModal />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;