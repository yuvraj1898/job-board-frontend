import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Select,InputLabel,MenuItem,FormControl,Box } from '@mui/material';
import axios from 'axios';
import {userRegister } from '../services/ApiCalls';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '',role:'' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res= await userRegister(formData);
    if(res.status===201)
    {
      navigate('/login')
    }
    else{
     alert(res.response.data.message);
    }

   
  };
const handleChange=async(e)=>{
    e.preventDefault();
    setFormData({...formData,role:e.target.value});

}
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
        Sign Up
      </Typography>
    
        <Box className="flex justify-center items-center m-8 " sx={{width:"100%"}}>
        <Box className="flex flex-col gap-3" sx={{width:"40%"}}>
     
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
    <FormControl fullWidth margin="normal">
      <InputLabel id="demo-simple-select-label">Role</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={formData.role}
        onChange={handleChange}
        label="Role"
      >
        <MenuItem value="job_seeker">Job Seeker</MenuItem>
        <MenuItem value="recruiter">Recruiter</MenuItem>
      </Select>
    </FormControl>
    <Button onClick={handleSubmit} variant="contained" color="primary"  style={{marginTop:"16px",padding:"12px 8px",background:"#FFCC00",color:"black"}}
         >
          Register
        </Button>
        <Typography onClick={()=>navigate('/login')} sx={{
          fontStyle:"underline",
          cursor:"pointer"
        }}>
          Already have an account ?
        </Typography>
     </Box>
     </Box>
    </Container>
  );
};

export default Register;
