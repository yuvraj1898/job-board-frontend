import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

 const JobCard = ({ icon, title }) => (
    <Grid item xs={12} sm={6} md={4} sx={{margin:'0 auto'}}>
      <Box
        className="flex flex-col justify-center items-center bg-white p-4  rounded-md cursor-pointer"
        sx={{
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
        <Typography variant='h4'>{title}</Typography>
      </Box>
    </Grid>
  );


export default JobCard