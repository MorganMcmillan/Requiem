import React from 'react';
import { Typography, Container, Paper, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BusinessDashboard = () => {
  return (
    <Container>
      <Paper sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Business Dashboard
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: '1rem' }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '1.5rem', textAlign: 'center' }}>
              <Typography variant="h6">Points</Typography>
              <Typography variant="h4" component="p">
                1,250
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '1.5rem', textAlign: 'center' }}>
              <Typography variant="h6">Requirements Submitted</Typography>
              <Typography variant="h4" component="p">
                25
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '1.5rem', textAlign: 'center' }}>
              <Typography variant="h6">Requirements Picked Up</Typography>
              <Typography variant="h4" component="p">
                10
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: '2rem' }}>
          <Button variant="contained" component={Link} to="/requirements/new" sx={{ marginRight: '1rem' }}>
            Submit a New Requirement
          </Button>
          <Button variant="outlined" component={Link} to="/register-company">
            Company Profile
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default BusinessDashboard;
