import React, { useEffect, useState, useRef } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
function StartWorkoutModal(props) {
  const [secondsTimer, setSecondsTimer] = useState(0);
  const [minutesTimer, setMinutesTimer] = useState(0);
  const [chosenWorkoutID, setChosenWorkoutID] = useState();
  const isMounted = useRef(false);
  const [chosenWorkoutExercises, setChosenWorkoutExercises] = useState([]);
  const [chosenWorkoutName, setChosenWorkoutName] = useState('');
  const [startWorkout, setStartWorkout] = useState(false);
  const handleEndWorkout = () => {
    setStartWorkout(false);
    setSecondsTimer(0);
  };
  const localStartWorkout = () => {
    isMounted.current = true;
    !startWorkout ? setStartWorkout(true) : setStartWorkout(false);
    // ctx.handleStartWorkout(props.id);
    // console.log(props.id);
    // console.log(props.workoutName);
    // console.log(JSON.parse(localStorage.getItem('Workouts')));
    setChosenWorkoutName(props.workoutName);
    setChosenWorkoutID(props.id);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      setSecondsTimer(0);
      setMinutesTimer(0);
    };
  }, [startWorkout]);

  useEffect(() => {
    if (secondsTimer === 59) {
      setSecondsTimer(0);
      setMinutesTimer((prev) => prev + 1);
    }
  }, [secondsTimer]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('Workouts'));
    if (isMounted.current) {
      for (let i = 0; i < storedWorkouts.length; i++) {
        console.log(chosenWorkoutID);
        if (chosenWorkoutID === storedWorkouts[i].id) {
          console.log(storedWorkouts[i].exercises);
          setChosenWorkoutExercises(storedWorkouts[i].exercises);
          console.log(storedWorkouts[i].workoutName);
          return;
        }
      }
    } else {
      console.log('not mounted');
    }
  }, [chosenWorkoutID]);

  const exercises = (info) => {
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
      onClick={localStartWorkout}
      color="success"
    >
      Start Workout
      <Modal open={startWorkout} onClose={handleEndWorkout}>
        <Box
          style={style}
          sx={{
            backgroundColor: ' rgba(0,65,55,1)',
            height: { xs: '50%' },
          }}
        >
          <Typography
            variant="subheader1"
            sx={{
              marginLeft: {
                xs: '1rem',
                lg: '1rem',
              },
              marginTop: { xs: '1rem', lg: '1rem' },
            }}
            style={{
              color: 'white',
              fontSize: '1.5rem',
              position: 'absolute',
            }}
          >
            {minutesTimer} Minutes {secondsTimer} Seconds
          </Typography>
          <div className="container">
            <div className="row">
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
                          marginTop: { xs: '1px', lg: '10rem' },
                          marginLeft: { xs: '25%', lg: '0' },

                          backgroundColor: '#0057C3',
                          border: '1px solid white',
                          color: 'white',
                          position: 'relative',
                          left: { xs: '-60px', lg: '18px' },
                          bottom: { xs: '-50px', lg: '93px' },
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
                              {exercises(chosenWorkoutExercises)}
                            </ul>
                          </div>
                        </div>
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
