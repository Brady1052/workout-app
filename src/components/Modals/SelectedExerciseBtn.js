import React, { useState } from 'react';
import { Button } from '@mui/material';
function SelectedExerciseBtn() {
  const [isActive, setIsActive] = useState(false);
  const isActiveHandler = (props) => {
    console.log(props.index);
    // if (isActive) {
    //   setIsActive(true);
    // } else setIsActive(false);
  };
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={isActiveHandler}
        // style={{
        //   display: activeExercise ? 'block' : 'none',
        //   fontWeight: '600',
        // }}

        style={{}}
      >
        Done
      </Button>
      <Button
        onClick={isActiveHandler}
        variant="contained"
        color="error"
        // style={{
        //   display: !activeExercise ? 'block' : 'none',
        //   fontWeight: '600',
        // }}
      >
        Begin
      </Button>
    </>
  );
}

export default SelectedExerciseBtn;
