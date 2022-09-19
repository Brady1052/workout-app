import React from 'react';
import classes from './Navbar.module.css';
import NewWorkout from '../AddWorkouts/NewWorkout';

function NavBar(props) {
  return (
    <React.Fragment>
      <nav className={`navbar navbar-expand-sm navbar-dark bg-dark`}>
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button type="button" className="btn btn-dark" id={classes.btn}>
                  Create Workout Schedule
                </button>
              </li>
            </ul>

            <NewWorkout onAddWorkout={props.onAddWorkout} />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
