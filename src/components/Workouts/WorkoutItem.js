import React from 'react';

import Card from '../UI/Card';
function WorkoutItem(props) {
  return (
    <React.Fragment>
      <Card
        title={props.title}
        type={props.type}
        sets={props.sets}
        reps={props.reps}
      ></Card>
    </React.Fragment>
  );
}

export default WorkoutItem;
