import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';
import classes from './Card.module.css';

function Card(props) {
  const ctx = useContext(WorkoutsContext);
  const deleteWorkout = () => {
    const workouts = ctx.workouts;
    workouts.forEach((workout, idx) => {
      if (props.cardID === workout.workoutID) {
        ctx.workouts.splice(idx, 1);

        return props.onDeleteWorkout(props.workouts);
      }
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {ctx.workouts.map((workout) => {
            return (
              <div
                className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}
              >
                <div className={`container ${classes.card}`}>
                  <div className="col">
                    <div className="col ">
                      <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                          <div className="text-center">
                            <h5 className="card-title">{workout.type}</h5>
                            <h5 className="card-subtitle mb-2 ">
                              {workout.name}
                            </h5>
                          </div>
                          <ul className={`list-group list-group-flush`}>
                            <li className="list-group-item">
                              Sets: {workout.sets}
                            </li>
                            <li className="list-group-item">
                              Reps: {workout.reps}
                            </li>
                          </ul>
                          <div
                            className="text-center d-flex justify-content-between"
                            style={{ marginTop: '1rem' }}
                          >
                            <button className="btn text-success">Edit</button>
                            <button
                              onClick={deleteWorkout}
                              className="btn text-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
