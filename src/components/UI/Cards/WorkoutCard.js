import React, { useContext, useState } from 'react';
import WorkoutsContext from '../../../context/workouts-context';
import StartWorkoutModal from '../../Modals/StartWorkoutModal';
import { IconButton, Typography, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function WorkoutCard() {
  const ctx = useContext(WorkoutsContext);
  const [chosenWorkoutID, setChosenWorkoutID] = useState();

  const exerciseInfo = (info) => {
    const map = info.map((exercise) => {
      return (
        <React.Fragment key={Math.random().toString()}>
          <li
            className="list-group-item"
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
          >
            <span>{exercise.sets}</span>
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <ClearIcon />
            </span>
            <span>{exercise.reps}</span>
            <span style={{ marginLeft: '0.2rem', marginRight: '0.3rem' }}>
              <ClearIcon />
            </span>
            <span>{exercise.weight}</span>
            <span>lbs</span>
            <span style={{ marginLeft: '0.5rem' }}>{exercise.name}</span>
          </li>
        </React.Fragment>
      );
    });
    return map;
  };

  return (
    <div className="container">
      <div className="row">
        {ctx.workouts.map((workout) => {
          workout['tableID'] = workout.id;
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
                        maxWidth: 'fit-content',
                        borderRadius: '25px',
                        marginTop: { xs: '3rem', lg: '8rem' },
                        marginLeft: { xs: '1rem', lg: '0' },
                        backgroundColor: '#0057C3',
                        border: '1px solid white',
                        color: 'white',
                        position: 'relative',
                        backgroundImage:
                          'linear-gradient(90deg, rgba(163,86,0,1) 0%, rgba(226,112,11,1) 48%, rgba(51,17,0,1) 100%)',
                      }}
                    >
                      <IconButton
                        style={{
                          position: 'absolute',
                          right: '0.5rem',
                          top: '0.5rem',
                        }}
                        onClick={() => {
                          for (let i = 0; i < ctx.workouts.length; i++) {
                            const workouts = ctx.workouts;
                            if (ctx.workouts[i].id === workout.id) {
                              workouts.splice(i, 1);
                              ctx.setWorkouts(workouts);
                              localStorage.setItem(
                                'Workouts',
                                JSON.stringify(workouts)
                              );
                              ctx.forceRenderHandler();
                              return;
                            }
                          }
                          return alert('Error');
                        }}
                      >
                        <ClearIcon
                          color="primary"
                          style={{ fontSize: '1.5rem' }}
                        />
                      </IconButton>

                      <div className="card-body">
                        <div className="text-center">
                          <Typography
                            className="card-title"
                            variant="h3"
                            style={{
                              textAlign: 'center',
                              color: 'white',
                              fontWeight: '600',
                            }}
                          >
                            {workout.workoutName}
                          </Typography>

                          <ul
                            className={`list-group list-group-flush`}
                            style={{
                              marginTop: '0.5rem',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {exerciseInfo(workout.exercises)}
                          </ul>
                        </div>
                        <StartWorkoutModal
                          id={workout.id}
                          workoutName={workout.workoutName}
                          exercises={exerciseInfo}
                          info={workout.exercise}
                          tableID={workout.tableID}
                          chosenWorkoutID={chosenWorkoutID}
                          setChosenWorkoutID={setChosenWorkoutID}
                        />
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

export default WorkoutCard;
