import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';
import classes from './ExerciseCard.module.css';

function ExerciseCard() {
  const ctx = useContext(WorkoutsContext);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {ctx.exercises.map((exercise) => {
            exercise['cardID'] = exercise.exerciseID;
            return (
              <div
                className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}
                key={exercise.exerciseID}
              >
                <div className={`container ${classes.card}`}>
                  <div className="col">
                    <div className="col ">
                      <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                          <div className="text-center">
                            <h5 className="card-title">{exercise.type}</h5>
                            <h5 className="card-subtitle mb-2 ">
                              {exercise.name}
                            </h5>
                          </div>
                          <ul className={`list-group list-group-flush`}>
                            <li className="list-group-item">
                              Weight: {exercise.weight}
                            </li>
                            <li className="list-group-item">
                              Sets: {exercise.sets}
                            </li>
                            <li className="list-group-item">
                              Reps: {exercise.reps}
                            </li>
                          </ul>
                          <div
                            className="text-center d-flex justify-content-between"
                            style={{ marginTop: '1rem' }}
                          >
                            <button className="btn text-success">Edit</button>
                            <button
                              onClick={ctx.deleteExercise}
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

export default ExerciseCard;
