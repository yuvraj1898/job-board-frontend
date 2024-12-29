import { Box, Typography,Grid } from '@mui/material'
import { Button } from 'antd'
import React from 'react'

function CardApplication({logo,company,position}) {
  return (
    <Grid item xs={12} md={4}>
   <Box className="flex flex-col p-6 bg-white gap-4" >
    <Box className="flex gap-4">
        <img src={logo} width={60} height={60}/>
        <Box className="flex flex-col gap-2">
            <Typography variant='h2' sx={{fontSize:"24px"}}>
                {company}
            </Typography>
            <Typography variant='body1' sx={{fontSize:"16px"}}>
                {position}
            </Typography>
        </Box>
    </Box>
    <Box className="flex justify-center gap-4">
        <Button>
            View
        </Button>
        <Button>
            Apply
        </Button>
        <Button>
            Move
        </Button>
    </Box>

   </Box>
   </Grid>
  )
}

export default CardApplication