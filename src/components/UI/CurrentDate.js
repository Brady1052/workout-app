import { Typography } from '@mui/material';
import React from 'react';

function CurrentDate() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getUTCFullYear();

  return (
    <>
      <Typography variant="h3" style={{ color: 'white' }}>
        {month}/{day}/{year}
      </Typography>
    </>
  );
}

export default CurrentDate;
