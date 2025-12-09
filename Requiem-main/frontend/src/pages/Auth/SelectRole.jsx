import React from 'react';
import { Typography, Container, Paper, Grid, Button, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const SelectRole = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: '3rem', marginTop: '3rem', textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Choose Your Role
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Are you a business looking to innovate, or a developer ready to build?
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  I'm a Business
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Register your company, submit software requirements, and reward developers who bring your ideas to life. Drive innovation and see your vision become reality.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', paddingBottom: '1.5rem' }}>
                <Button variant="contained" color="primary" component={Link} to="/business-dashboard">
                  Join as a Business
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  I'm a Developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse requirements from top companies, choose projects that inspire you, and build software that matters. Showcase your skills and grow your portfolio.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', paddingBottom: '1.5rem' }}>
                <Button variant="contained" color="secondary" component={Link} to="/developer-dashboard">
                  Join as a Developer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SelectRole;
