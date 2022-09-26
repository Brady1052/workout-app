import React from 'react';
import classes from './Navbar.module.css';
import NewWorkoutModal from '../AddWorkouts/NewWorkoutModal';

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
            <ul className="navbar-nav me-5 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light"
                  id={classes.btn}
                >
                  Create Schedule
                </button>
              </li>
            </ul>
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

            <NewWorkoutModal />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
