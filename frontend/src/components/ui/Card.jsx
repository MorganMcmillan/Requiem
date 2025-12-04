import React from 'react';
import { Card as MuiCard, CardContent } from '@mui/material';

const Card = ({ children }) => {
  return (
    <MuiCard sx={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)', borderRadius: '0.25rem' }}>
      <CardContent sx={{ padding: '1.5rem' }}>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
