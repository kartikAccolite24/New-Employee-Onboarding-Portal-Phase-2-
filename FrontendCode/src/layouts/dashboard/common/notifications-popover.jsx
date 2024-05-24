import React, { useEffect, useState } from 'react';
import { Button, Popover, Typography, Box } from '@mui/material';
import axios from 'axios';


export default function NotificationsPopover() {
  const [status, setStatus] = useState('Not approved');
 
  // setStatus(localStorage.getItem('isApprovalToSend'));

  const isApprovalHere= localStorage.getItem('isApproval');
  console.log(isApprovalHere);
  const empId = localStorage.getItem('empId');
  const jwtToken = localStorage.getItem('jwtToken');
  console.log(empId);


  

    const fetchApprovalData = async () => {

    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080", // Your API base URL
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    const ApprovalResponse = await axiosInstance.get(`getApprovalStatus/${empId}`);
    console.log(ApprovalResponse);

  };

  useEffect(() => {

    fetchApprovalData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const statusTextStyle = {
    color: isApprovalHere === 'APPROVED' ? 'green' : 'red',
    fontWeight: 'bold'
  };

  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Button sx={{whiteSpace: 'nowrap'}} onClick={handleClick}>View Status</Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>
          <Typography variant="body1" sx={statusTextStyle}>Status: {isApprovalHere}</Typography>
          {/* You can add additional content or buttons related to status here */}
        </Box>
      </Popover>
    </>
  );
}