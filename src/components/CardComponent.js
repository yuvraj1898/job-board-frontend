import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@mui/material'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function CardComponent({title,data,desc}) {
  return (
    <Card sx={{ flex: 1 }}>
    <CardHeader style={{padding:0}}title={<Typography style={{background:"#D8D2CB",padding:"16px"}} variant="h2">
        {title}
      </Typography>}  />
    <CardContent>
        { data &&
   <List>
   {data.map((item, index) => (
     <ListItem key={index}>
       <ListItemIcon sx={{ minWidth: '24px' }}>
         <FiberManualRecordIcon sx={{ fontSize: '8px' }} />
       </ListItemIcon>
       <ListItemText primary={item} />
     </ListItem>
   ))}
 </List>
}  { desc &&<Typography variant="body2">{desc}</Typography>}
    </CardContent>
   
  </Card>
  )
}

export default CardComponent