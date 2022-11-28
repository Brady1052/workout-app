import { Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

function CurrentDate() {
  const date = new Date().toLocaleDateString() + '';
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Typography
        variant={screenSmall ? 'subtitle2' : 'h4'}
        style={{ color: 'white', fontWeight: '600' }}
      >
        {date}
      </Typography>
    </>
  );
}

export default CurrentDate;
