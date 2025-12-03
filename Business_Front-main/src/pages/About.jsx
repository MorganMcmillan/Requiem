import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: '3rem', marginTop: '3rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Requiem
        </Typography>
        <Typography variant="body1" paragraph>
          Requiem is a revolutionary platform designed to bridge the gap between businesses with great ideas and the talented developers who can bring them to life. Our mission is to foster innovation by creating a space where software requirements can be clearly defined, and developers can find meaningful projects to work on.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '2rem' }}>
          For Businesses
        </Typography>
        <Typography variant="body1" paragraph>
          Stop letting your great ideas sit on the back burner. With Requiem, you can post your software requirements, from simple bug fixes to entirely new applications. Our community of skilled developers can then pick up these requirements and turn your vision into a reality. You get to define the scope, set the rewards, and watch your project come to life.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '2rem' }}>
          For Developers
        </Typography>
        <Typography variant="body1" paragraph>
          Are you looking for your next challenge? Requiem offers a diverse range of software requirements from a variety of businesses. You can browse projects, choose tasks that match your skills and interests, and build a portfolio of impressive work. Earn rewards, gain experience, and make a real impact with your code.
        </Typography>
        <Box sx={{ marginTop: '3rem', textAlign: 'center' }}>
          <Typography variant="h6" component="h3">
            Join the Requiem community today and be a part of the future of software development.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
