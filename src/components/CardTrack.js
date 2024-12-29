import React from 'react'
import { Grid,Typography,Button,Box } from '@mui/material'
import {FolderAddOutlined} from '@ant-design/icons'
function CardTrack({count,desc}) {
  return (
    <>

    <Grid item xs={12} md={12} className='flex gap-6'>
    <Typography >
    {count} jobs
    </Typography>
    <Button variant='outlined' color='text'>
      Inactive jobs (0)
      </Button> 
    </Grid>
    <Grid item xs={12} md={4}>
      <Box className="flex border-dotted p-6 gap-4 justify-center items-center">
        
        <FolderAddOutlined  style={{ fontSize: '48px', marginBottom: '8px' }}/>
        <Typography >
          
          {desc}
        </Typography>
      </Box>
    </Grid>
    </>
  )
}

export default CardTrack