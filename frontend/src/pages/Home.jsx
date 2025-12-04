import React from 'react';
import { Typography, Container, Button, Box, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Paper 
        sx={{
          padding: '4rem 2rem',
          marginTop: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Requiem
          </Typography>
          <Typography variant="h5" component="h2" color="text.secondary" paragraph sx={{ color: 'white' }}>
            The ultimate platform for connecting businesses with developers. Post your software needs and find the talent to make them a reality.
          </Typography>
          <Box sx={{ marginTop: '2rem' }}>
            <Button variant="contained" size="large" component={Link} to="/select-role" sx={{ marginRight: '1rem' }}>
              Get Started
            </Button>
            <Button variant="outlined" size="large" component={Link} to="/about" sx={{ color: 'white', borderColor: 'white' }}>
              Learn More
            </Button>
          </Box>
        </Container>
      </Paper>

      <Container sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" gutterBottom>
              For Businesses
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Have a great idea for a new software feature or application? Post your requirements on Requiem and let our community of talented developers bring your vision to life. Award points for implemented requirements and become a recognized innovator in your field.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/register-company">
              Post a Requirement
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" gutterBottom>
              For Developers
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Looking for your next project? Browse a diverse range of software requirements from innovative businesses. Pick up challenges that match your skillset, build impactful software, and grow your professional portfolio.
            </Typography>
            <Button variant="contained" color="secondary" component={Link} to="/requirements">
              Browse Requirements
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
