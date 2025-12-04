import React from 'react';
import { Typography, Container, Paper, TextField, Button, Box } from '@mui/material';

const RegisterCompany = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register Your Company
        </Typography>
        <form>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Company Domain"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Contact Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
          />
          <TextField
            label="Company Website"
            variant="outlined"
            fullWidth
            margin="normal"
            type="url"
          />
          <TextField
            label="Company Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Box sx={{ marginTop: '1rem' }}>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterCompany;
