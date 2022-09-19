import React from 'react';
import classes from './Navbar.module.css';
import NewWorkout from '../AddWorkouts/NewWorkout';

function NavBar(props) {
  return (
    <React.Fragment>
      <nav className={`navbar navbar-expand-sm navbar-dark bg-dark`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className={classes['color-white']}>Workout Tracker</span>
          </a>
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
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark" id={classes.btn}>
                  Create Workout Schedule
                </button>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <NewWorkout
              onAddWorkout={props.onAddWorkout}
              onStoreWorkout={props.onStoreWorkout}
            />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
