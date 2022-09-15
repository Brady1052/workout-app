import React from 'react';
import classes from './WrapperCentered.module.css';
function WrapperCentered(props) {
  return <div className={classes.wrapper}>{props.children}</div>;
}

export default WrapperCentered;
