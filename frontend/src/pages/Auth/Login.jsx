import React from 'react';
import api from "../../util/api";
import { setToken, getToken } from "../../util/token";
import { Card, Typography, TextField, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleLogin = () => {
    let formData = new FormData(formRef);
    let formObject = {};
    formData.forEach((k, v) => formObject[k] = v);
    let formJson = JSON.stringify(formObject);

    let response = api.post("/auth/login", formJson);
    let token = response.data.token;
    setToken(token);
    // TODO: navigate to specific role page based on user's current role (depends on the token's contents)
    // Users may register without selecting a role, so navigate to 'select-role' when that's the case
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
        <form ref={formRef}>
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
