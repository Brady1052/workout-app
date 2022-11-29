import React, { useEffect, useState, useRef, useContext } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import WorkoutsContext from '../../context/workouts-context';
import Exercise from '../HelperComponents/Exercise';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import OpacitySharpIcon from '@mui/icons-material/OpacitySharp';
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
  const [activeExerciseName, setActiveExerciseName] = useState('');
  const [activeExercise, setActiveExercise] = useState({});
  // Holding data that the user enters information in the modal
  const [completedExercises, setCompletedExercises] = useState([]);

  // const [activeExerciseID, setActiveExerciseID] = useState('');
  const [startWorkout, setStartWorkout] = useState(false);

  //Functions for setting state when user completes an exercise (ie sets,weight,reps)
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
          sets: ctx.completedSets.current,
          reps: ctx.completedReps.current,
          weight: ctx.completedWeight.current,
        },
      ];
    });
  };
  const date = new Date().toLocaleDateString() + '';
  const completedWorkoutHandler = () => {
    ctx.setCompletedWorkouts((prev) => {
      return [
        ...prev,
        {
          date: date,
          workoutName: chosenWorkoutName,
          completedExercises: [...completedExercises],
          id: Math.random().toString(),
        },
      ];
    });
  };

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
      let sets = [];
      for (let index = 0; index < exercise.sets; index++) {
        sets.push(
          <Exercise
            key={Math.random().toString()}
            exercise={exercise}
            loopIndex={index}
            index={i}
            info={info}
            activeExercise={activeExercise}
            style={{
              display: activeExercise[i] ? 'inherit' : 'none',
            }}
          />
        );
      }
      return (
        <React.Fragment key={Math.random().toString()}>
          {sets}
          {/* Buttons for starting and completing an exercise */}
          <Button
            variant="contained"
            onClick={() => {
              activeExerciseHandler(i);
              completedExerciseHandler();
            }}
            style={{
              fontWeight: '600',
              display: !activeExercise[i] ? 'none' : 'flex',
              backgroundColor: 'black',
              fontSize: '1rem',
            }}
            size="large"
            endIcon={<WhatshotIcon color="warning" />}
          >
            Solidify Gainz
          </Button>

          <Button
            variant="contained"
            style={{
              fontWeight: '600',
              display: activeExercise[i] ? 'none' : 'flex',
              fontSize: '1rem',
              backgroundColor: 'black',
            }}
            onClick={() => {
              activeExerciseHandler(i);
              setActiveExerciseName(exercise.name);
            }}
            endIcon={<OpacitySharpIcon color="error" />}
          >
            Initiate Gainz
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
    border: '2px solid white',
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
      Click Here for Gainz
      <Modal open={startWorkout}>
        <Box
          style={style}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
            height: { xs: '99%', lg: 'auto' },
            maxWidth: { xs: '99%', lg: 'auto' },
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
                        variant="h3"
                        style={{ color: 'white', whiteSpace: 'nowrap' }}
                        sx={{
                          position: 'relative',
                          top: { xs: '5rem', lg: '-4rem' },
                          fontWeight: '600',
                          marginTop: { xs: '-4rem', lg: '1rem' },
                          textAlign: 'center',
                        }}
                      >
                        {chosenWorkoutName}
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
