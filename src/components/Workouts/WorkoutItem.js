import React from 'react';
import classes from './WorkoutItem.module.css';
import Card from '../UI/Card';
function WorkoutItem(props) {
  return (
    <React.Fragment>
      <Card title={props.title} type={props.type}></Card>
    </React.Fragment>
  );
}

export default WorkoutItem;
