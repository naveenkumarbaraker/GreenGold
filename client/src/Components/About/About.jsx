import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AdbIcon from '@mui/icons-material/Adb';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';
import './About.css'
export default function About() {
  return (
    <Timeline position="alternate">
      <div className='top-heading' id="ABOUT">
      <div>ABOUT</div>    
      <div>Our Growth Journey</div>
      </div>
      <TimelineItem>
      <TimelineOppositeContent 
          sx={{ m: 'auto 1' }}
          variant="body2">
          <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
            Step 1
          </Typography>
          <Typography  fontSize={{xs:"1.23rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold',fontSize:'25px'}}>Green Gold</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>Idea to help farmers</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}}>
            <AccountBalanceIcon sx={{ fontSize:"73px",bgcolor: '#f7c81e',borderRadius:"50%" }}/> 
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
            Step 2
          </Typography>
          <Typography fontSize={{xs:"1.23rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>Ideas to implementation</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>Develop the java-based platform</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}} >
          <AdbIcon sx={{ fontSize:"78px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}} />
       

        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold',fontSize:'23px'}}>
            Step 3
          </Typography>
          <Typography fontSize={{xs:"1.23rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>Changes</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>Bio-waste utilization</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}}  >
        <OpenWithIcon sx={{ fontSize:"78px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
     
        
      </TimelineItem>
      
    </Timeline>
  );
}