import React from 'react';
import { Typography, Container, Paper, Grid, Box, Button, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const DeveloperDashboard = () => {
  const projects = [
    { name: 'Project Alpha', description: 'A revolutionary new social media platform.' },
    { name: 'Project Beta', description: 'A mobile app for tracking fitness goals.' },
    { name: 'Project Gamma', description: 'An e-commerce site for handmade crafts.' },
  ];

  return (
    <Container>
      <Paper sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Developer Dashboard
        </Typography>
        <Box sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Button variant="contained" component={Link} to="/create-project">
            Create a New Project
          </Button>
        </Box>
        <Typography variant="h5" component="h2" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to={`/projects/${index}`}>
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default DeveloperDashboard;
