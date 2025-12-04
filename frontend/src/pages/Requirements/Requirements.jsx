import React from 'react';
import { Typography, Container, Paper, Card, CardContent, CardActions, Button, Grid, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Requirements = () => {
  const requirements = [
    { id: 1, category: 'Web Development', description: 'A user authentication system with social login options.', time_estimate: 20 },
    { id: 2, category: 'Mobile Development', description: 'A push notification service for iOS and Android.', time_estimate: 15 },
    { id: 3, category: 'Data Science', description: 'A recommendation engine for an e-commerce platform.', time_estimate: 40 },
    { id: 4, category: 'Web Development', description: 'A real-time chat feature using WebSockets.', time_estimate: 30 },
    { id: 5, category: 'Game Development', description: 'A leaderboard system for a multiplayer game.', time_estimate: 25 },
    { id: 6, category: 'Cloud Computing', description: 'Automated deployment pipeline using AWS.', time_estimate: 35 },
  ];

  const [category, setCategory] = React.useState('all');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredRequirements = category === 'all' ? requirements : requirements.filter(req => req.category.toLowerCase().replace(' ', '-') === category);

  return (
    <Container>
      <Paper sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Browse Requirements
        </Typography>
        <Box sx={{ marginBottom: '2rem' }}>
          <FormControl fullWidth>
            <InputLabel id="category-filter-label">Filter by Category</InputLabel>
            <Select
              labelId="category-filter-label"
              id="category-filter-select"
              value={category}
              label="Filter by Category"
              onChange={handleChange}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="web-development">Web Development</MenuItem>
              <MenuItem value="mobile-development">Mobile Development</MenuItem>
              <MenuItem value="data-science">Data Science</MenuItem>
              <MenuItem value="game-development">Game Development</MenuItem>
              <MenuItem value="devops">DevOps</MenuItem>
              <MenuItem value="cloud-computing">Cloud Computing</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={3}>
          {filteredRequirements.map((req) => (
            <Grid item xs={12} md={6} lg={4} key={req.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {req.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {req.description}
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ marginTop: '1rem' }}>
                    Estimated Time: {req.time_estimate} hours
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Pick Up Requirement</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Requirements;
