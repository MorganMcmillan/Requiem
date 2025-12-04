import React from 'react';
import { Typography, Container, Paper, TextField, Button, Box } from '@mui/material';

const CreateProject = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create a New Project
        </Typography>
        <form>
          <TextField
            label="Project Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Project Summary"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            multiline
            rows={4}
          />
          <TextField
            label="Project Website or Repository"
            variant="outlined"
            fullWidth
            margin="normal"
            type="url"
          />
          <Box sx={{ marginTop: '1rem' }}>
            <Button variant="contained" color="primary" type="submit">
              Create Project
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateProject;
