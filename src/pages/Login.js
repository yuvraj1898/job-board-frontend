import React, { useState } from 'react';
import { TextField, Button, Container, Typography,Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/ApiCalls';
import PublicHeader from '../components/PublicHeader';
function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(credentials);
      if (response.status === 200) {
        // Store token in localStorage
        localStorage.setItem('token', response.data.token);
        console.log('Token saved:', response.data.token);
        
        // Navigate to the home page
        navigate('/');
      } else {
        console.log('Error:', response.response?.data?.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error.response?.data?.message || error.message);
    }
  };

  return (
   
    <Container
      maxWidth="lg"
      style={{
        height: "100vh",
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" gutterBottom style={{marginTop:"24px"}}>
        Sign In
      </Typography>
    
        <Box className="flex justify-center items-center m-8 " sx={{width:"100%"}}>
        <Box className="flex flex-col gap-3" sx={{width:"40%"}}>
        <TextField
          
          label="Email"
          type="email"
          
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
       
        <TextField
          
          label="Password"
          type="password"
         
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Typography sx={{
          fontStyle:"underline",
          cursor:"pointer"
        }}>
          Forgot your Password ?
        </Typography>
        <Button onClick={handleLogin} variant="contained" color="primary"  style={{marginTop:"16px",padding:"12px 8px",background:"#FFCC00",color:"black"}}
         >
          Login
        </Button>
        </Box>
        </Box>
     
    </Container>
  
  );
}

export default Login;
