import React from 'react';
import { CircularProgress } from '@mui/material';
import '../../App.css';

const Loading = () => {
  const indicatorSize = 80;

  return (
    <CircularProgress
      size={indicatorSize}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: `${-indicatorSize / 2}px`,
        marginLeft: `${-indicatorSize / 2}px`
      }}
    /> 
  )
}

export default Loading;
