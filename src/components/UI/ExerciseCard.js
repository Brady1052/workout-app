import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';
import classes from './ExerciseCard.module.css';
import IconButton from '@mui/material/Button';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { Box } from '@mui/material';

function ExerciseCard() {
  const ctx = useContext(WorkoutsContext);

  return (
    <>
      <div className="container">
        <div className="row">
          {ctx.exercises.map((exercise) => {
            exercise['cardID'] = exercise.id;
            return (
              <div
                className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}
                key={Math.random().toString()}
              >
                <Box
                  className={`container ${classes.card}`}
                  sx={{
                    width: '100%',
                    marginLeft: {
                      lg: '1rem',
                    },
                    marginRight: { xs: '-1rem', lg: '0rem' },
                  }}
                >
                  <div className="col">
                    <div className="col ">
                      <Box
                        className="card"
                        style={{
                          width: '18rem',
                          borderRadius: '25px',
                          marginTop: '5rem',
                          backgroundColor: '#0057C3',
                          border: '1px solid white',
                          color: 'white',
                          alignSelf: 'center',
                        }}
                      >
                        <div className="card-body">
                          <div className="text-center">
                            <h3 className="card-title">{exercise.name}</h3>
                          </div>
                          <ul className={`list-group list-group-flush`}>
                            <li
                              className="list-group-item"
                              style={{
                                backgroundColor: '#0057C3',
                                color: 'white',
                              }}
                            >
                              Weight: {exercise.weight}
                            </li>
                            <li
                              className="list-group-item"
                              style={{
                                backgroundColor: '#0057C3',
                                color: 'white',
                              }}
                            >
                              Sets: {exercise.sets}
                            </li>
                            <li
                              className="list-group-item"
                              style={{
                                backgroundColor: '#0057C3',
                                color: 'white',
                              }}
                            >
                              Reps: {exercise.reps}
                            </li>
                          </ul>
                          <div
                            className="text-center d-flex justify-content-between flex-row-reverse"
                            style={{ marginTop: '1rem' }}
                          >
                            <IconButton
                              sx={{ fontWeight: '700' }}
                              onClick={() => {
                                for (let i = 0; i < ctx.exercises.length; i++) {
                                  const exercises = ctx.exercises;
                                  if (ctx.exercises[i].id === exercise.id) {
                                    exercises.splice(i, 1);
                                    ctx.setExercises(exercises);
                                    localStorage.setItem(
                                      'Exercises',
                                      JSON.stringify(exercises)
                                    );
                                    ctx.forceRenderHandler();
                                    return;
                                  }
                                }
                                return alert('Error');
                              }}
                              variant="text"
                              color="error"
                            >
                              {' '}
                              <DeleteForeverRoundedIcon
                                sx={{ color: 'red', fontSize: '2rem' }}
                              />
                            </IconButton>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>
                </Box>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ExerciseCard;
