import React from 'react';
import { Card, Typography, TextField, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a login by redirecting the user
    navigate('/select-role');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ padding: '2rem', width: '100%', maxWidth: '400px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="password"
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ marginTop: '1rem' }}>
            Login
          </Button>
        </form>
        <Typography variant="body2" sx={{ marginTop: '1rem' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Register here
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default Login;
