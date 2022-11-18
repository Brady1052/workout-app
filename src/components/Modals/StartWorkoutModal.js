import React, { useEffect, useState, useRef } from 'react';
import { Modal, Box, Typography, Button, Input } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
function StartWorkoutModal(props) {
  const [chosenWorkoutID, setChosenWorkoutID] = useState();
  const isMounted = useRef(false);
  const [chosenWorkoutExercises, setChosenWorkoutExercises] = useState([]);
  const [chosenWorkoutName, setChosenWorkoutName] = useState('');
  const [startWorkout, setStartWorkout] = useState(false);
  const handleEndWorkout = (event, reason) => {
    if (reason !== 'backdropClick') {
      setStartWorkout(false);
    }
  };

  const localStartWorkout = () => {
    if (!startWorkout) {
      isMounted.current = true;
      setStartWorkout(true);
      setChosenWorkoutName(props.workoutName);
      setChosenWorkoutID(props.id);
    }
  };

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('Workouts'));
    if (isMounted.current) {
      for (let i = 0; i < storedWorkouts.length; i++) {
        if (chosenWorkoutID === storedWorkouts[i].id) {
          setChosenWorkoutExercises(storedWorkouts[i].exercises);
          return;
        }
      }
    } else {
    }
  }, [chosenWorkoutID]);

  // Exercise function for active workout
  const activeExercises = (info) => {
    const map = info.map((exercise) => {
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
            <Input
              placeholder={exercise.sets}
              color="white"
              style={{ color: 'white', fontWeight: '600' }}
            />
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <ClearIcon />
            </span>
            <Input
              placeholder={exercise.reps}
              color="white"
              style={{ color: 'white', fontWeight: '600' }}
            />
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <ClearIcon />
            </span>
            <Input
              placeholder={exercise.weight}
              color="white"
              style={{ color: 'white', fontWeight: '600' }}
              sx={{ color: 'white', width: '20rem' }}
            />
            <span>lbs</span>
            <span style={{ marginLeft: '0.5rem' }}>{exercise.name}</span>
          </li>
        </React.Fragment>
      );
    });
    return map;
  };

  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <Button
      variant="contained"
      style={{
        maxWidth: '100%',
        minWidth: '100%',
        fontWeight: '600',
        color: 'white',
        border: '1px solid black',
      }}
      onClick={!startWorkout ? localStartWorkout : console.log()}
      color="success"
    >
      Start Workout
      <Modal open={startWorkout} onClose={handleEndWorkout}>
        <Box
          style={style}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: ' rgba(0,65,55,1)',
            height: { overflow: 'auto' },
            height: { xs: '80%', lg: 'auto' },
            overflowX: 'hidden',
          }}
        >
          {/* Input Card */}
          <div className="container">
            <div className="row">
              <div
                className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}
                key={Math.random().toString()}
              >
                <div className="container">
                  <div className="col">
                    <div className="col ">
                      <Typography
                        variant="h4"
                        style={{ color: 'white', whiteSpace: 'nowrap' }}
                        sx={{
                          position: 'relative',
                          top: { xs: '5rem', lg: '-4rem' },
                          left: { xs: '2.3rem', lg: '2.5rem' },
                          fontWeight: '600',
                          marginTop: { xs: '-3rem', lg: '1rem' },
                        }}
                      >
                        Current Workout
                      </Typography>
                      <Box
                        className="card"
                        sx={{
                          position: 'relative',
                          left: { xs: '-60px', lg: '18px' },
                          bottom: { xs: '-50px', lg: '93px' },
                          width: '18rem',
                          borderRadius: '25px',
                          marginTop: { xs: '3rem', lg: '3rem' },
                          marginLeft: { xs: '25%', lg: '0' },
                          backgroundColor: '#0057C3',
                          border: '1px solid white',
                          color: 'white',
                        }}
                      >
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
                              {chosenWorkoutName}
                            </Typography>
                            <ul
                              className={`list-group list-group-flush`}
                              style={{
                                marginTop: '0.5rem',
                                display: 'flex',
                                justifyContent: 'flex-start',
                              }}
                            >
                              {activeExercises(chosenWorkoutExercises)}
                            </ul>
                          </div>
                        </div>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{
                            width: 'inherit',
                            position: 'absolute',
                            bottom: { xs: '-3rem', lg: '-3.5rem' },
                            fontWeight: '600',
                          }}
                          onClick={handleEndWorkout}
                        >
                          End Workout
                        </Button>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </Button>
  );
}

export default StartWorkoutModal;
