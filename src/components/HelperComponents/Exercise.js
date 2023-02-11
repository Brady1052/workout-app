import React, { useContext, useEffect, useState } from 'react';
import { Input, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import WorkoutsContext from '../../context/workouts-context';
import CurrentDate from '../UI/CurrentDate';
import styles from './Exercise.module.css';
// Returns a new component for every set the user intends on completing.(Used in the startWorkout modal)
function Exercise(props) {
  const ctx = useContext(WorkoutsContext);
  // State,function, and effect for discovering if the exercise being mapped through is the first one. If so set state to true which will in turn display the name of the exercise at the top of the individual exercise component
  const [loopIndex, setLoopIndex] = useState(false);
  const LoopIndexHandler = () => {
    if (props.loopIndex === 0) {
      setLoopIndex(true);
    } else setLoopIndex(false);
  };
  useEffect(() => {
    LoopIndexHandler();
    // eslint-disable-next-line
  }, []);

  const [mapIndex, setMapIndex] = useState(false);
  const MapIndexHandler = () => {
    if (props.index === 0) {
      setMapIndex(true);
    } else setMapIndex(false);
  };
  useEffect(() => {
    MapIndexHandler();
    // eslint-disable-next-line
  }, []);

  //Functions for setting state when user completes an exercise (ie sets,weight,reps)
  const completedSetsHandler = (e) => {
    ctx.completedSets.current = e.target.value;
    console.log(e.target.value);
  };
  const completedRepsHandler = (e) => {
    ctx.completedReps.current = e.target.value;
    console.log(ctx.completedReps.current.value);
  };

  const completedWeightHandler = (e) => {
    ctx.completedWeight.current = e.target.value;
  };

  return (
    <React.Fragment key={Math.random().toString()}>
      <Typography
        variant='h4'
        style={{
          display: loopIndex ? 'block' : 'none',
          marginTop: mapIndex ? '-1rem' : '1rem',
          color: 'white',
          fontWeight: '600',
        }}
      >
        {props.exercise.name}
      </Typography>
      <div
        style={{
          display: mapIndex && loopIndex ? 'block' : 'none',
        }}
      >
        <CurrentDate />
      </div>
      <div
        className={styles['exercises-container']}
        style={{
          display: props.activeExercise[props.index] ? 'inline' : 'none',
        }}
      >
        <li
          className='list-group-item'
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            border: '0px',
          }}
        >
          <Input
            value={props.loopIndex + 1}
            color='white'
            style={{ color: 'white', fontWeight: '600' }}
            sx={{
              minWidth: '1.25rem',
              pointerEvents: !props.activeExercise[props.index],
            }}
            onChange={(e) => {
              completedSetsHandler(e);
            }}
          />
          <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
            <ClearIcon />
          </span>
          <Input
            placeholder={props.exercise.reps}
            color='white'
            style={{
              color: 'white',
              fontWeight: '600',
              minWidth: '1.25rem',
            }}
            onChange={(e) => {
              completedRepsHandler(e);
            }}
            sx={{
              pointerEvents: !props.activeExercise[props.index]
                ? 'none'
                : 'auto',
            }}
          />
          <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
            <ClearIcon />
          </span>
          <Input
            placeholder={props.exercise.weight}
            color='white'
            style={{ color: 'white', fontWeight: '600' }}
            sx={{
              color: 'white',
              minWidth: '2rem',
              pointerEvents: !props.activeExercise[props.index]
                ? 'none'
                : 'auto',
            }}
            onChange={(e) => {
              completedWeightHandler(e);
            }}
          />
          <span>lbs</span>
        </li>
      </div>
    </React.Fragment>
  );
}

export default Exercise;
