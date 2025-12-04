import React from 'react';
import { Typography, Container, Paper, TextField, Button, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const SubmitRequirement = () => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Submit a Requirement
        </Typography>
        <form>
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Software Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={category}
              label="Software Category"
              onChange={handleChange}
            >
              <MenuItem value="web-development">Web Development</MenuItem>
              <MenuItem value="mobile-development">Mobile Development</MenuItem>
              <MenuItem value="data-science">Data Science</MenuItem>
              <MenuItem value="game-development">Game Development</MenuItem>
              <MenuItem value="devops">DevOps</MenuItem>
              <MenuItem value="cloud-computing">Cloud Computing</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Requirement Description"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            multiline
            rows={6}
          />
          <TextField
            label="Estimated Time (in hours)"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
          />
          <Box sx={{ marginTop: '1rem' }}>
            <Button variant="contained" color="primary" type="submit">
              Submit Requirement
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default SubmitRequirement;
