// import React, { useEffect, useState } from 'react';
// import { Button, Popover, Typography, Box } from '@mui/material';
// import axios from 'axios';
// export default function NotificationsPopover() {
//   const [status, setStatus] = useState("");
//   // setStatus(localStorage.getItem('isApprovalToSend'));
//   const empId = localStorage.getItem('empId');
//   const jwtToken = localStorage.getItem('jwtToken');
//   const username = localStorage.getItem('username');
//   console.log(empId);
//     const fetchApprovalData = async () => {
//     const axiosInstance = axios.create({
//       baseURL: "http://localhost:8080", // Your API base URL
//       headers: {
//         "Authorization": `Bearer ${jwtToken}`
//       }
//     });
//     console.log(empId);
//     const getUser = await axiosInstance.get(`getUser/${username}`);
//     console.log(getUser);
//     setStatus(getUser.data.isApproved);
//     localStorage.setItem('fresher',getUser.data.fresher);
//   };
//   useEffect(() => {
//     fetchApprovalData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[]);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const statusTextStyle = {
//     color: status === "APPROVED" ? 'green' : 'red',
//     fontWeight: 'bold'
//   };
//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;
//   return (
//     <>
//       <Button sx={{whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #003A74, #006AD5)',color:'white'}} onClick={handleClick}>View Status</Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical:  'top',
//           horizontal: 'center',
//         }}
//       >
//         <Box p={2}>
//           <Typography variant="body1" sx={statusTextStyle}>Status: {status}</Typography>
//           {/* You can add additional content or buttons related to status here */}
//         </Box>
//       </Popover>
//     </>
//   );
// }



import React, { useEffect, useState } from 'react';
import { Button, Popover, Typography, Box } from '@mui/material';
import axios from 'axios';
export default function NotificationsPopover() {
  const [status, setStatus] = useState("");
  const [comment , setComment] = useState("");
  // setStatus(localStorage.getItem('isApprovalToSend'));
  const empId = localStorage.getItem('empId');
  const jwtToken = localStorage.getItem('jwtToken');
  const username = localStorage.getItem('username');
  console.log(empId);
    const fetchApprovalData = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080", // Your API base URL
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    console.log(empId);
    const getUser = await axiosInstance.get(`getUser/${username}`);
    console.log(getUser);
    setComment(getUser.data.adminRejectionComment);
    setStatus(getUser.data.isApproved);
    localStorage.setItem('fresher',getUser.data.fresher);
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
    color: status === "APPROVED" ? 'green' : 'red',
    fontWeight: 'bold'
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Button sx={{whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #003A74, #006AD5)',color:'white'}} onClick={handleClick}>View Status</Button>
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
          <Typography variant="body1" sx={statusTextStyle}>Status: {status}</Typography>
          {status==="REJECTED"?<Typography variant="body1" sx={statusTextStyle}>Comment: {comment}</Typography>:""}
        </Box>
      </Popover>
    </>
  );
}