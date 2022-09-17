import React from 'react';
import classes from './WrapperRow.module.css';
function Wrapper(props) {
  return <div className={classes.wrapper}>{props.children}</div>;
}

export default Wrapper;
