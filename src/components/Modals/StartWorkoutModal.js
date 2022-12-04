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

    console.log(completedExercises);
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
              marginTop: '1rem',
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
              marginTop: '1rem',
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
        minWidth: '100%',
        fontWeight: '600',
        color: 'white',
        border: '1px solid black',
      }}
      onClick={localStartWorkout}
      color="primary"
    >
      Click Here for Gainz
      <Modal open={startWorkout} sx={{ overflowY: 'scroll' }}>
        <Box
          style={style}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundImage:
              'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
            height: { xs: '99%', lg: '70%' },
            maxWidth: { xs: '99%', lg: '25%' },
            overflowX: 'hidden',
            overflowY: 'scroll',
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
                          top: { xs: '5rem', lg: '-3.5rem' },
                          left: { lg: '176%' },
                          fontWeight: '600',
                          marginTop: { xs: '-4rem', lg: '4rem' },
                          textAlign: 'center',
                        }}
                      >
                        {chosenWorkoutName}
                      </Typography>
                      <Box
                        className="card"
                        sx={{
                          position: 'relative',
                          left: { xs: '-60px', lg: '0px' },
                          bottom: { xs: '-50px', lg: '93px' },
                          width: '18rem',
                          borderRadius: '25px',
                          marginTop: { xs: '3rem', lg: '3rem' },
                          marginLeft: { xs: '25%', lg: '0' },
                          backgroundImage:
                            'linear-gradient(90deg, rgba(255,117,0,1) 0%, rgba(198,102,17,1) 41%, rgba(51,17,0,1) 100%)',
                          border: '1px solid white',
                          color: 'white',
                        }}
                      >
                        <div className="card-body">
                          <div className="text-center">
                            <ul
                              className={`list-group`}
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
                          color="primary"
                          sx={{
                            width: 'inherit',
                            position: 'absolute',
                            bottom: { xs: '-3rem', lg: '-3.5rem' },
                            fontWeight: '600',
                          }}
                          onClick={handleEndWorkout}
                        >
                          Complete Workout
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
