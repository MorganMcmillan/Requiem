import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <MuiButton
      type={type}
      onClick={onClick}
      variant="contained"
      color="primary"
      sx={{ marginTop: '1rem', marginBottom: '1rem' }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
