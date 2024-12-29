import React, { useEffect, useState } from 'react'
import { getAllApplications } from '../services/ApiCalls';
import { Box, Button, Grid,Typography } from '@mui/material';
import JobCard from '../components/JobCard';
import { AppstoreOutlined,ProfileOutlined,AppstoreAddOutlined,ToTopOutlined,FundOutlined,BankOutlined,FolderAddOutlined} from '@ant-design/icons'
import CardTrack from '../components/CardTrack';
import CardApplication from '../components/CardApplication';
function Home() {
const [applicationlist,setApplicationList] =useState([]);
const [savedApplication,setSavedApplication] = useState([]);
const [appliedApplication,setAppliedApplication] =useState([]);
const [startedApplication,setStartedApplication] = useState([]);
useEffect(()=>{
  getapplications()
},[])
const getapplications =async()=>{
  const response=await getAllApplications();
  console.log(response)
  setSavedApplication(response.data.applications?.filter((item)=>item.status==="Saved"));
  setStartedApplication(response.data.applications?.filter((item)=>item.status==="Started"));
  setAppliedApplication(response.data.applications?.filter((item)=>item.status==="Applied"));

}
useEffect(()=>{
  console.log(startedApplication)

},[startedApplication])

const cardData = [
  { icon: <AppstoreOutlined style={{ fontSize: '48px', marginBottom: '8px' }} />, title: 'All your Jobs' },
  { icon: <ProfileOutlined style={{ fontSize: '48px', marginBottom: '8px' }} />, title: 'Apply with your Profile' },
  { icon: <AppstoreAddOutlined style={{ fontSize: '48px', marginBottom: '8px' }} />, title: 'Jobs added this week' },
  { icon: <ToTopOutlined style={{ fontSize: '48px', marginBottom: '8px' }} />, title: 'Fully remote' },
  { icon: <FundOutlined style={{ fontSize: '48px', marginBottom: '8px' }} />, title: 'Recently Funded' },
  { icon: <BankOutlined style={{ fontSize: '48px', marginBottom: '8px' }} />, title: 'Fintech companies' },
];
const  cardTrack=[
  {
    title:"Saved",
    desc:"Your Save jobs will appear here so you can choose which to apply for",
    count:0
  },
  {
    title:"Started",
    desc:"Your Started jobs will appear here so you can choose which to apply for",
    count:0
  },

  {
    title:"Applied",
    desc:"Your Applied jobs will appear here so you can choose which to apply for",
    count:0
  }
]

  
  return (  
    <Grid container sx={{ margin: '0 auto', width: '100%' }}>
      <Box className="bg-gold  font-raleway py-6" sx={{ width: '100%' }}>
        
        <Grid container spacing={2} md={8}  sx={{ margin: '0 auto' }}>
        <Grid item xs={'auto'} md={12} >
      <Typography variant='h1'>Welcome back,Pratik</Typography>
      </Grid>
          {cardData.map((card, index) => (
            <JobCard key={index} icon={card.icon} title={card.title} />
          ))}
        </Grid>
      </Box>
      <Grid container spacing={2} md={8} sx={{ margin: '16px auto' }}>
         
       {/* {cardTrack.map((item)=>(
        <CardTrack title={item.title} count={item.count} desc={item.desc}/>
       ))} */}
       <Grid item xs={12} md={12}>
    <Typography variant='h2'>
      {cardTrack[0].title}
    </Typography>
    </Grid>
        {savedApplication.length!==0 ? savedApplication.map((item)=>(
          <CardApplication logo={item.job_id.raw_data.employer_logo} position={item.job_id.raw_data.job_title} company={item.job_id.raw_data.employer_name}/>

          
        )):(
          <CardTrack  count={cardTrack[0].count} desc={cardTrack[0].desc}/>
        )}
           <Grid item xs={12} md={12}>
    <Typography variant='h2'>
      {cardTrack[1].title}
    </Typography>
    </Grid>
        {startedApplication.length!==0 ? startedApplication.map((item)=>(
          <CardApplication logo={item.job_id.raw_data.employer_logo} position={item.job_id.raw_data.job_title} company={item.job_id.raw_data.employer_name}/>

          
        )):(
          <CardTrack  count={cardTrack[1].count} desc={cardTrack[1].desc}/>
        )}
           <Grid item xs={12} md={12}>
    <Typography variant='h2'>
      {cardTrack[2].title}
    </Typography>
    </Grid>
        {appliedApplication.length!==0 ? appliedApplication.map((item)=>(
          <CardApplication logo={item.job_id.raw_data.employer_logo} position={item.job_id.raw_data.job_title} company={item.job_id.raw_data.employer_name}/>

          
        )):(
          <CardTrack  count={cardTrack[2].count} desc={cardTrack[2].desc}/>
        )}
        
        </Grid>
      
    </Grid>

  )
}

export default Home