import React from 'react'
import NavigationMenu from './NavigationMenu'
import { Grid } from '@mui/material'
function Header() {
  return (
    <Grid
    container
    md={12}
    style={{margin:"0 auto" }}
  >
    <header className='flex justify-around p-1' style={{
        width:"100%"
    }}>
        <div >dsdd</div>
       <NavigationMenu/>
       
    </header>
    
    </Grid>
  )
}

export default Header