import React from 'react';
import { TextField } from '@mui/material';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <TextField
      type={type}
      label={placeholder}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default Input;
