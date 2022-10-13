import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function WorkoutTable() {
  const ctx = useContext(WorkoutsContext);

  const exerciseInfo = (info) => {
    const map = info.map((exercise) => {
      return (
        <React.Fragment key={Math.random().toString()}>
          <tr
            style={{
              color: 'white',
              backgroundColor: '#0057C3',
              borderTop: '2px solid white',
              fontWeight: '600',
            }}
          >
            <td>{exercise.name}</td>
            <td>{exercise.type}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.sets}</td>
            <td>{exercise.reps}</td>
          </tr>
        </React.Fragment>
      );
    });
    return map;
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {ctx.workouts.map((workout) => {
        workout['tableID'] = workout.id;

        return (
          <div key={Math.random().toString()}>
            <Typography
              variant="h3"
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '600',
                marginTop: '2rem',
              }}
            >
              {workout.workoutName}
            </Typography>
            <table
              className="table"
              style={{
                maxWidth: '50rem',
                minWidth: '50rem',
                alignSelf: 'center',
                position: 'relative',
                marginTop: '1rem',
                border: '2px solid white',
              }}
            >
              <thead>
                <tr
                  style={{
                    color: 'white',
                    border: '2px solid white',
                  }}
                >
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Sets</th>
                  <th scope="col">Reps</th>
                </tr>
              </thead>
              <tbody>{exerciseInfo(workout.exercises)}</tbody>
            </table>
            <Button
              variant="contained"
              style={{
                maxWidth: '100%',
                minWidth: '100%',
                fontWeight: '600',
                color: 'white',
              }}
              color="error"
              onClick={() => {
                for (let i = 0; i < ctx.workouts.length; i++) {
                  const workouts = ctx.workouts;
                  if (ctx.workouts[i].id === workout.id) {
                    workouts.splice(i, 1);
                    ctx.setWorkouts(workouts);
                    localStorage.setItem('Workouts', JSON.stringify(workouts));
                    ctx.forceRenderHandler();
                    return;
                  }
                }
                return alert('Error');
              }}
            >
              Remove Workout
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default WorkoutTable;
