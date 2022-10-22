import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';
import Button from '@mui/material/Button';
import { IconButton, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function WorkoutCard() {
  const ctx = useContext(WorkoutsContext);

  const exerciseInfo = (info) => {
    const map = info.map((exercise) => {
      return (
        <React.Fragment key={Math.random().toString()}>
          <li
            className="list-group-item"
            style={{
              backgroundColor: '#0057C3',
              color: 'white',
              display: 'flex',
            }}
          >
            <span>{exercise.sets}</span>
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <ClearIcon />
            </span>
            <span>{exercise.reps}</span>
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
                    <div
                      className="card"
                      style={{
                        width: '18rem',
                        borderRadius: '25px',
                        marginTop: '8rem',
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
                          color="error"
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
                            }}
                          >
                            {exerciseInfo(workout.exercises)}
                          </ul>
                        </div>
                        <Button
                          variant="contained"
                          style={{
                            maxWidth: '100%',
                            minWidth: '100%',
                            fontWeight: '600',
                            color: 'white',
                            border: '1px solid black',
                          }}
                          color="success"
                        >
                          Start Workout
                        </Button>
                        {/* <div className="table-responsive col-md-offset-1  col-lg-offset-1 col-md-6    col-lg-6">
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
                        </div>
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
                          Remove Workout
                        </Button>
                      </div> */}
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
  );
}

export default WorkoutCard;

// import React, { useContext } from 'react';
// import WorkoutsContext from '../../context/workouts-context';
// import classes from './ExerciseCard.module.css';
// import IconButton from '@mui/material/Button';
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import EditRoundedIcon from '@mui/icons-material/EditRounded';

// function ExerciseCard() {
//   const ctx = useContext(WorkoutsContext);

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           {ctx.workouts.map((workout) => {
//             workout['tableID'] = workout.id;
//             return (
//               <div
//                 className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}
//                 key={Math.random().toString()}
//               >
//                 <div className={`container ${classes.card}`}>
//                   <div className="col">
//                     <div className="col ">
//                       <div
//                         className="card"
//                         style={{
//                           width: '18rem',
//                           borderRadius: '25px',
//                           marginTop: '8rem',
//                           backgroundColor: '#0057C3',

//                           color: 'white',
//                         }}
//                       >
//                         <div className="card-body">
//                           <div className="text-center">
//                             <h5 className="card-title">{exercise.type}</h5>
//                             <h5 className="card-subtitle mb-2 ">
//                               {exercise.name}
//                             </h5>
//                           </div>
//                           <ul className={`list-group list-group-flush`}>
//                             <li
//                               className="list-group-item"
//                               style={{
//                                 backgroundColor: '#0057C3',
//                                 color: 'white',
//                               }}
//                             >
//                               Weight: {exercise.weight}
//                             </li>
//                             <li
//                               className="list-group-item"
//                               style={{
//                                 backgroundColor: '#0057C3',
//                                 color: 'white',
//                               }}
//                             >
//                               Sets: {exercise.sets}
//                             </li>
//                             <li
//                               className="list-group-item"
//                               style={{
//                                 backgroundColor: '#0057C3',
//                                 color: 'white',
//                               }}
//                             >
//                               Reps: {exercise.reps}
//                             </li>
//                           </ul>
//                           <div
//                             className="text-center d-flex justify-content-between flex-row-reverse"
//                             style={{ marginTop: '1rem' }}
//                           >
//                             <IconButton variant="text" color="bonus">
//                               {' '}
//                               <EditRoundedIcon
//                                 sx={{
//                                   color: 'rgb(32, 225, 18)',
//                                   fontSize: '2.5rem',
//                                 }}
//                               />
//                             </IconButton>
//                             <IconButton
//                               sx={{ fontWeight: '700' }}
//                               onClick={() => {
//                                 for (let i = 0; i < ctx.exercises.length; i++) {
//                                   const exercises = ctx.exercises;
//                                   if (ctx.exercises[i].id === exercise.id) {
//                                     exercises.splice(i, 1);
//                                     ctx.setExercises(exercises);
//                                     localStorage.setItem(
//                                       'Exercises',
//                                       JSON.stringify(exercises)
//                                     );
//                                     ctx.forceRenderHandler();
//                                     return;
//                                   }
//                                 }
//                                 return alert('Error');
//                               }}
//                               variant="text"
//                               color="error"
//                             >
//                               <DeleteForeverRoundedIcon
//                                 sx={{ color: 'red', fontSize: '3rem' }}
//                               />
//                             </IconButton>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ExerciseCard;
