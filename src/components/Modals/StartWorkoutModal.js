import React, { useEffect, useState, useRef, useContext } from 'react';
import { Modal, Box, Typography, Button, Input } from '@mui/material';
import WorkoutsContext from '../../context/workouts-context';
import ClearIcon from '@mui/icons-material/Clear';

function StartWorkoutModal(props) {
  // eslint-disable-next-line
  const ctx = useContext(WorkoutsContext);
  // Used for determining whether or not modal is open
  const isMounted = useRef(false);
  // Used for holding information related to the user's chosen workout
  const [chosenWorkoutID, setChosenWorkoutID] = useState();
  const [chosenWorkoutExercises, setChosenWorkoutExercises] = useState([]);
  const [chosenWorkoutName, setChosenWorkoutName] = useState();
  // Gathering info when user selects an exercise
  const [activeExercise, setActiveExercise] = useState({});
  const [activeExerciseName, setActiveExerciseName] = useState('');
  // Holding data that the user enters in the modal
  const [completedExercises, setCompletedExercises] = useState([]);
  const completedSets = useRef();
  const completedReps = useRef();
  const completedWeight = useRef();
  // const [activeExerciseID, setActiveExerciseID] = useState('');
  const [startWorkout, setStartWorkout] = useState(false);

  //Functions for setting state when user completes an exercise (ie sets,weight,reps)
  const completedSetsHandler = (e) => {
    completedSets.current = e.target.value;
  };
  const completedRepsHandler = (e) => {
    completedReps.current = e.target.value;
  };

  const completedWeightHandler = (e) => {
    completedWeight.current = e.target.value;
  };

  const activeExerciseHandler = (index) => {
    setActiveExercise((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const completedExerciseHandler = () => {
    setCompletedExercises((prev) => {
      return [
        ...prev,
        {
          name: activeExerciseName,
          sets: completedSets.current,
          reps: completedReps.current,
          weight: completedWeight.current,
        },
      ];
    });
  };

  const completedWorkoutHandler = () => {
    ctx.setCompletedWorkouts((prev) => {
      return [
        ...prev,
        {
          workoutName: chosenWorkoutName,
          completedExercises: [...completedExercises],
          id: Math.random().toString(),
        },
      ];
    });
  };

  // useEffect(() => {
  //   console.log(chosenWorkoutName);
  // });

  const handleEndWorkout = () => {
    setStartWorkout(false);
    completedWorkoutHandler();
  };

  const localStartWorkout = () => {
    if (!startWorkout) {
      isMounted.current = true;
      setStartWorkout(true);
      setChosenWorkoutName(props.workoutName);
      setChosenWorkoutID(props.id);
    } else isMounted.current = false;
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

  // Function that returns a component for every exercise
  const activeExercises = (info) => {
    const map = info.map((exercise, i) => {
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
              sx={{
                minWidth: '1.25rem',
                pointerEvents: !activeExercise[i] ? 'none' : 'auto',
              }}
              onChange={(e) => {
                completedSetsHandler(e);
              }}
            />
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <ClearIcon />
            </span>
            <Input
              placeholder={exercise.reps}
              color="white"
              style={{
                color: 'white',
                fontWeight: '600',
                minWidth: '1.25rem',
              }}
              onChange={(e) => {
                completedRepsHandler(e);
              }}
              sx={{ pointerEvents: !activeExercise[i] ? 'none' : 'auto' }}
            />
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <ClearIcon />
            </span>
            <Input
              placeholder={exercise.weight}
              color="white"
              style={{ color: 'white', fontWeight: '600' }}
              sx={{
                color: 'white',
                minWidth: '2rem',
                pointerEvents: !activeExercise[i] ? 'none' : 'auto',
              }}
              onChange={(e) => {
                completedWeightHandler(e);
              }}
            />
            <span>lbs</span>
            <span style={{ marginLeft: '0.5rem' }}>{exercise.name}</span>
          </li>

          {/* Buttons for starting and completing an exercise */}
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              activeExerciseHandler(i);
              completedExerciseHandler();
              console.log(ctx.completedWorkouts);
            }}
            style={{
              fontWeight: '600',
              display: !activeExercise[i] ? 'none' : 'block',
            }}
          >
            Done
          </Button>

          <Button
            variant="contained"
            color="error"
            style={{
              fontWeight: '600',
              display: activeExercise[i] ? 'none' : 'block',
            }}
            onClick={() => {
              activeExerciseHandler(i);
              setActiveExerciseName(exercise.name);
            }}
          >
            Begin
          </Button>
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
      <Modal open={startWorkout}>
        <Box
          style={style}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: ' rgba(0,65,55,1)',
            height: { xs: '100%', lg: 'auto' },
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
