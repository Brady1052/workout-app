import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';
import { Modal, Box, Typography, Button } from '@mui/material';
function StartWorkoutModal(props) {
  // const startWorkout = () => {
  //   ctx.handleStartWorkout();
  //   console.log(props.exercises());
  //   console.log(props.id);
  //   console.log(props.workoutName);
  // };
  // const ctx = useContext(WorkoutsContext);
  // const style = {
  //   position: 'relative',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   pt: 2,
  //   px: 4,
  //   pb: 3,
  // };
  // return (
  //   <Button
  //     variant="contained"
  //     style={{
  //       maxWidth: '100%',
  //       minWidth: '100%',
  //       fontWeight: '600',
  //       color: 'white',
  //       border: '1px solid black',
  //     }}
  //     onClick={startWorkout}
  //     color="success"
  //   >
  //     Start Workout
  //     <Modal open={ctx.startWorkout} onClose={ctx.handleEndWorkout}>
  //       <Box style={style} sx={{ backgroundColor: 'red' }}>
  //         <div className="container">
  //           <div className="row">
  //             <div
  //               className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}
  //               key={Math.random().toString()}
  //             >
  //               <div className="container">
  //                 <div className="col">
  //                   <div className="col ">
  //                     <Box
  //                       className="card"
  //                       sx={{
  //                         width: '18rem',
  //                         borderRadius: '25px',
  //                         marginTop: { xs: '3rem', lg: '8rem' },
  //                         marginLeft: { xs: '1rem', lg: '0' },
  //                         backgroundColor: '#0057C3',
  //                         border: '1px solid white',
  //                         color: 'white',
  //                         position: 'relative',
  //                       }}
  //                     >
  //                       <div className="card-body">
  //                         <div className="text-center">
  //                           <Typography
  //                             className="card-title"
  //                             variant="h3"
  //                             style={{
  //                               textAlign: 'center',
  //                               color: 'white',
  //                               fontWeight: '600',
  //                             }}
  //                           >
  //                             {props.workoutName}
  //                           </Typography>
  //                           <ul
  //                             className={`list-group list-group-flush`}
  //                             style={{
  //                               marginTop: '0.5rem',
  //                               display: 'flex',
  //                               justifyContent: 'flex-start',
  //                             }}
  //                           >
  //                             {props.exercises()}
  //                           </ul>
  //                         </div>
  //                       </div>
  //                     </Box>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </Box>
  //     </Modal>
  //   </Button>
  // );
}

export default StartWorkoutModal;
