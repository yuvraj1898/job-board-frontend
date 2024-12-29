import React,{useState,useEffect} from 'react'
import JobDescription from '../components/JobDescription'
import { Grid,Box,Tab, Typography,Popover, Dialog, DialogTitle, DialogContent} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import { getallJobs,startApplication,saveApplication,updateApplication } from '../services/ApiCalls'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StairsIcon from '@mui/icons-material/Stairs';
import PaymentIcon from '@mui/icons-material/Payment';
import { Divider } from 'antd';
import Button from '@mui/material/Button'
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { MobileStepper } from '@mui/material';
import CardComponent from '../components/CardComponent';
function Jobs() {
  const [jobdetails,setJobDetails]=useState({});
  const [jobs, setJobs] = useState([]); 
  const [anchorEl, setAnchorEl] = useState(null);
  const [opendialog,setOpenDialog] =useState(false);
  const [jobid,setJobId]=useState("");
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { label: 'Step 1: Introduction', content: 'This is the first step.' },
    { label: 'Step 2: Details', content: 'This is the second step.' },
    { label: 'Step 3: Confirmation', content: 'This is the final step.' },
  ];
  const loadalljobs =async()=>{
    const alljobs=await getallJobs();
   console.log(alljobs)
   setJobs(alljobs.data.allJobs);
    setJobId(alljobs.data.allJobs[0]._id)
    const job=alljobs.data.allJobs[0].raw_data
  
   setJobDetails(job)
   }

  useEffect(()=>{
    loadalljobs();
    },[])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialog=()=>{
    setOpenDialog(true);

  }
  const handleApply=async()=>{
    const response= await startApplication({job_id:jobid})
    handleClose();
    setOpenDialog(false)
    handleNext();
    console.log(response)
  }
  const handleSave=async()=>{
    const response= await saveApplication({job_id:jobid})
    handleNext();
    console.log(response)
  }
  const handleStarted=async()=>{
    const response= await updateApplication({job_id:jobid})
    handleClose();
    setOpenDialog(false)
    console.log(response)
  }
  const handleNext = () => {
    if (currentJobIndex < jobs.length - 1) {
      const nextJobIndex = currentJobIndex + 1;
      setCurrentJobIndex(nextJobIndex);
      setJobId(jobs[nextJobIndex]._id);
      setJobDetails(jobs[nextJobIndex].raw_data);
    }
  };

  const handleBack = () => {
    if (currentJobIndex > 0) {
      const prevJobIndex = currentJobIndex - 1;
      setCurrentJobIndex(prevJobIndex);
      setJobId(jobs[prevJobIndex]._id);
      setJobDetails(jobs[prevJobIndex].raw_data);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    
    
      const [value, setValue] =useState('1');

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Grid container sx={{ margin: '0 auto', width: '100%' }}>
       <Button
        onClick={handleBack}
        disabled={currentJobIndex === 0}
        sx={{
          position: 'fixed',
          top: '50%',
          left: '15%',
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          width: 60,
          height: 60,
          minWidth: 0,
          color: 'black',
          boxShadow: 3,
          '&:hover': {
            bgcolor: '#FFCC00',
          },
        }}
      >
        <ArrowBack />
      </Button>

      {/* Prev Button */}
      <Button
        onClick={handleNext}
       
        disabled={currentJobIndex === jobs.length - 1}
        sx={{
          position: 'fixed',
          top: '50%',
          right: '15%',
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          width: 60,
          height: 60,
          minWidth: 0,
        
          color: 'black',
          boxShadow: 3,
          '&:hover': {
            bgcolor: '#FFCC00',
          },
        }}
      >
        <ArrowForward />
      </Button>
    <Box  className="bg-gold  font-raleway py-10" sx={{ width: '100%' }}>
    <MobileStepper
  variant="dots"
  steps={jobs.length}
  position="static"
  activeStep={currentJobIndex}
  sx={{
    background: "transparent",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& .MuiMobileStepper-dot": {
      borderRadius: "50%", // Circular dots
      width: "10px", // Dot size
      height: "10px", // Dot size
      backgroundColor: "#A0A0A0", // Inactive dot color (gray in this case)
    },
    "& .MuiMobileStepper-dotActive": {
      backgroundColor: "black", // Active dot color (black in this case)
    },
  }}
  nextButton={<></>}
  backButton={<></>}
/>

      <Grid container spacing={2} md={7} sx={{ margin: '0  auto' ,marginTop:"16px"}}>
        <Box className="flex justify-between bg-white p-6 rounded-lg"sx={{ width: '100%' }}>
          
          <Box className="flex flex-col justify-start gap-5 ">
            <Typography variant='h2'>
            {jobdetails.job_title},{jobdetails.employer_name}
            </Typography>
            <Box className="flex flex-col justify-start gap-3 ">
            <Typography 
    variant="body1" 
    color="textPrimary" 
    display="flex" 
    alignItems="center" 
    gap={1}
  >
    <LocationOnIcon  />
    {jobdetails.job_location}
  </Typography>
  <Typography 
    variant="body1" 
    color="textPrimary" 
    display="flex" 
    alignItems="center" 
    gap={1}
  >
    <StairsIcon  />
    {jobdetails.job_employment_type}
    </Typography>
  <Typography 
    variant="body1" 
    color="textPrimary" 
    display="flex" 
    alignItems="center" 
    gap={1}
  >
    <PaymentIcon  />
    {`$ ${jobdetails.job_min_salary ===null ? "75":jobdetails.job_min_salary}-${jobdetails.job_max_salary ===null ? "100":jobdetails.job_max_salary}`}
  </Typography>
  </Box>
          </Box>
          <Divider type='vertical'  variant='solid'  style={{height:'100%'}} ></Divider>
          <Box className="flex flex-col">
            <Typography variant='body2'>
              {jobdetails.job_posted_at}
            </Typography>
       <img src={jobdetails.employer_logo}/>

       </Box>
        </Box>
        </Grid>
        </Box>
        <Grid item md={7} sx={{ margin: '0 auto',marginBottom:"66px"}}>
        <TabContext value={value}>
          
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example" centered TabIndicatorProps={{
    style: { backgroundColor: "#1976d2" }, // Custom indicator color
  }} >
    <Tab
    label="Job Description"
    value="1"
    sx={{
      color: value === "1" ? "#1266d2" : "inherit",
      fontWeight: value === "1" ? "bold" : "normal",
    }}
  />
  <Tab
    label="Company"
    value="2"
    sx={{
      color: value === "2" ? "#1976d2" : "inherit",
      fontWeight: value === "2" ? "bold" : "normal",
    }}
  />
  <Tab
    label="Application process"
    value="3"
    sx={{
      color: value === "3" ? "#1976d2" : "inherit",
      fontWeight: value === "3" ? "bold" : "normal",
    }}
  />
    </TabList>
  </Box>
  <TabPanel value="1" style={{ padding: 0 }}>
  <Box className="flex flex-col gap-5" style={{ width: "100%" }}>
    {/* First Row: Two Cards (Responsibilities and Qualifications) */}
    <Box className="flex" sx={{ gap: 2, width: "100%" }}>
      <CardComponent title="Responsibilities" data={jobdetails.job_highlights?.Responsibilities}/>
      <CardComponent title="Qualifications" data={jobdetails.job_highlights?.Qualifications}/>
    </Box>

    {/* Second Row: About Card */}
    <CardComponent title="Role" desc={jobdetails.job_description}/>
  </Box>
</TabPanel>

  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
</TabContext>
</Grid>
<Grid item md={12} >
  <Box 
    className="flex justify-center p-6 fixed bottom-0 left-0 z-999 " 
    sx={{ 
      width: "100%", 
      backgroundColor: "white", // Ensures visibility over other content
      // Keeps it above other elements
      boxShadow: "0px -2px 5px rgba(0,0,0,0.1)" // Optional: Shadow for better visibility
    }}
  >
    <Button sx={{padding:"10px 48px"}} variant="outlined" color='black'  onClick={handleSave}>
      Save
    </Button>
    <Button  aria-describedby={id} 
        variant="contained" 
        sx={{background:"#FFCC00",mx:2,padding:"10px 48px"}}
        color='black'
        onClick={handleClick} >
      Apply
    </Button>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box className="flex flex-col p-2 gap-2">
        {jobdetails.apply_options?.map((item)=>(
          <a href={item.apply_link} target="_blank" rel="noopener noreferrer"  >
  <Button variant='outlined' color="#000" sx={{color:"black"}} onClick={handleDialog} style={{width:"100%"}}>
{item.publisher}
  </Button>
  </a>
        ))}
     </Box>
      </Popover>
  </Box>
</Grid>
<Dialog
      open={opendialog}
      onClose={() => setOpenDialog(false)} // Correct prop: `onClose`
      sx={{ '& .MuiDialog-paper': { padding: '16px' } }} // Adds padding to the dialog box
    >
      <DialogTitle sx={{ pb: 2 }}> {/* Adds bottom padding */}
        Did you apply?
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,marginTop:"16px" }}>
        <img src={jobdetails.employer_logo} alt="Employer Logo" style={{ maxWidth: '100px', borderRadius: '8px' }} />
        <Typography variant="h2">{jobdetails.job_title}</Typography>
    
     
        <Button variant="contained" color="secondary" sx={{width:"100%"}} onClick={handleApply}>
          Yes
        </Button>
        <Button variant="outlined" color="secondary" sx={{width:"100%"}} onClick={handleStarted}>
          No
        </Button>
  
      </DialogContent>
    </Dialog>
    
        </Grid>
    
  )
}

export default Jobs