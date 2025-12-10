import React from 'react';
import { Card, Typography, TextField, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleRegister = () => {
    let formData = new FormData(formRef);
    let formObject = {};
    formData.forEach((k, v) => formObject[k] = v);
    let formJson = JSON.stringify(formObject);
    
    let response = api.post("/auth/register", formJson);
    
    let loginResponse = api.post("/auth/login", response.data);
    let token = response.data.token;
    setToken(token);

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
          Register
        </Typography>
        <form ref={formRef}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
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
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="password"
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleRegister} sx={{ marginTop: '1rem' }}>
            Register
          </Button>
        </form>
        <Typography variant="body2" sx={{ marginTop: '1rem' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Login here
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default Register;
