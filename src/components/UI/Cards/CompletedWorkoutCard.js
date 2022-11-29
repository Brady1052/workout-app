import React, { useContext } from 'react';
import WorkoutsContext from '../../../context/workouts-context';
import { IconButton, Typography, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function CompletedWorkoutCard() {
  const ctx = useContext(WorkoutsContext);
  const completedWorkouts = ctx.completedWorkouts;

  const completedWorkoutExercises = (exerciseInfo) => {
    const mappedExercises = exerciseInfo.map((exercise) => {
      return (
        <React.Fragment key={Math.random().toString()}>
          <li
            className="list-group-item"
            style={{
              backgroundColor: '#0057C3',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span>{exercise.sets}</span>
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <ClearIcon />
            </span>
            <span>{exercise.reps}</span>
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <ClearIcon />
            </span>
            <span>{exercise.weight}</span>
            <span>lbs</span>
            <span style={{ marginLeft: '0.5rem' }}>{exercise.name}</span>
          </li>
        </React.Fragment>
      );
    });
    return mappedExercises;
  };
  return (
    <div className="container">
      <div className="row">
        {completedWorkouts.map((workout) => {
          return (
            <div
              className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}
              key={Math.random().toString()}
            >
              <div className="container">
                <div className="col">
                  <div className="col ">
                    <Box
                      className="card"
                      sx={{
                        width: '18rem',
                        borderRadius: '25px',
                        marginTop: { xs: '1rem', lg: '8rem' },
                        marginLeft: { xs: '1rem', lg: '0' },
                        backgroundColor: '#0057C3',
                        border: '1px solid white',
                        color: 'white',
                        position: 'relative',
                      }}
                    >
                      <IconButton
                        style={{
                          position: 'absolute',
                          right: '0.5rem',
                          top: '0.5rem',
                        }}
                        onClick={() => {
                          for (
                            let i = 0;
                            i < ctx.completedWorkouts.length;
                            i++
                          ) {
                            const completedWorkouts = ctx.completedWorkouts;
                            if (ctx.completedWorkouts[i].id === workout.id) {
                              completedWorkouts.splice(i, 1);
                              ctx.setCompletedWorkouts(completedWorkouts);
                              localStorage.setItem(
                                'Completed_Workouts',
                                JSON.stringify(ctx.completedWorkouts)
                              );
                              ctx.forceRenderHandler();
                              return;
                            }
                          }
                          return alert('Error');
                        }}
                      >
                        <ClearIcon
                          color="error"
                          style={{ fontSize: '1.5rem' }}
                        />
                      </IconButton>
                      <Typography
                        variant="h5"
                        style={{ color: 'white' }}
                        sx={{
                          paddingTop: '0.5rem',
                          textAlign: 'center',
                        }}
                      >
                        {workout.date}
                      </Typography>
                      <div className="card-body">
                        <div className="text-center">
                          <Typography
                            className="card-title"
                            variant="h3"
                            style={{
                              textAlign: 'center',
                              color: 'white',
                              fontWeight: '600',
                              marginTop: '-1rem',
                            }}
                          >
                            {workout.workoutName}
                          </Typography>

                          <ul
                            className={`list-group list-group-flush`}
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-start',
                            }}
                          >
                            {completedWorkoutExercises(
                              workout.completedExercises
                            )}
                          </ul>
                        </div>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompletedWorkoutCard;
