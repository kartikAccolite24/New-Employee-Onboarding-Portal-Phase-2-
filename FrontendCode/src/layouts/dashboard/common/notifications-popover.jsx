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



// import React, { useEffect, useState } from 'react';
// import { Button, Popover, Typography, Box } from '@mui/material';
// import axios from 'axios';
// export default function NotificationsPopover() {
//   const [status, setStatus] = useState("");
//   const [comment , setComment] = useState("");
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
//     setComment(getUser.data.adminRejectionComment);
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
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//       >
//         <Box p={2}>
//           <Typography variant="body1" sx={statusTextStyle}>Status: {status}</Typography>
//           {status==="REJECTED"?<Typography variant="body1" sx={statusTextStyle}>Comment: {comment}</Typography>:""}
//         </Box>
//       </Popover>
//     </>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { Button, Typography, Box, Modal } from '@mui/material';
// import axios from 'axios';

// export default function NotificationsModal() {
//   const [status, setStatus] = useState("");
//   const [comment, setComment] = useState("");
//   const empId = localStorage.getItem('empId');
//   const jwtToken = localStorage.getItem('jwtToken');
//   const username = localStorage.getItem('username');

//   const fetchApprovalData = async () => {
//     const axiosInstance = axios.create({
//       baseURL: "http://localhost:8080", // Your API base URL
//       headers: {
//         "Authorization": `Bearer ${jwtToken}`
//       }
//     });
//     const getUser = await axiosInstance.get(`getUser/${username}`);
//     setComment(getUser.data.adminRejectionComment);
//     setStatus(getUser.data.isApproved);
//     localStorage.setItem('fresher', getUser.data.fresher);
//   };

//   useEffect(() => {
//     fetchApprovalData();
//   }, []);

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const statusTextStyle = {
//     color: status === "APPROVED" ? 'green' : 'red',
//     fontWeight: 'bold'
//   };

//   return (
//     <>
//       <Button 
//         sx={{ whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #003A74, #006AD5)', color: 'white' }} 
//         onClick={handleOpen}
//       >
//         View Status
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//       >
//         <Box 
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <Typography id="modal-title" variant="h6" component="h2">
//             Status Information
//           </Typography>
//           <Typography id="modal-description" variant="body1" sx={statusTextStyle}>
//             Status: {status}
//           </Typography>
//           {status === "REJECTED" && (
//             <Typography id="modal-description" variant="body1" sx={statusTextStyle}>
//               Comment: {comment}
//             </Typography>
//           )}
//         </Box>
//       </Modal>
//     </>
//   );
// }



import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Importing the close icon
import axios from 'axios';

export default function NotificationsModal() {
  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");
  const empId = localStorage.getItem('empId');
  const jwtToken = localStorage.getItem('jwtToken');
  const username = localStorage.getItem('username');

  const fetchApprovalData = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    const getUser = await axiosInstance.get(`getUser/${username}`);
    setComment(getUser.data.adminRejectionComment);
    setStatus(getUser.data.isApproved);
    localStorage.setItem('fresher', getUser.data.fresher);
  };

  useEffect(() => {
    fetchApprovalData();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const statusTextStyle = {
    color: status === "APPROVED"? 'green' : 'red',
    fontWeight: 'bold',
    fontFamily: '"Arial", sans-serif' // Specifying a font
  };

  // Adding a fade-in animation effect
  const fadeInAnimation = {
    transition: 'opacity 300ms ease-out',
    opacity: open? 1 : 0
  };

  return (
    <>
      <Button 
        sx={{ whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #003A74, #006AD5)', color: 'white' }} 
        onClick={handleOpen}
      >
        View Status
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            borderRadius: '10px', // Rounded corners
            boxShadow: 24,
            p: 4,
           ...fadeInAnimation // Applying the fade-in animation
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-title" variant="h6" component="h2">
            Application Status
          </Typography>
          <Typography id="modal-description" variant="body1" sx={statusTextStyle}>
            {status}
          </Typography>
          {status === "REJECTED" && (
             <Typography id="modal-description" variant="body1" sx={{ fontFamily: 'Georgia, serif', color: 'Black' }}>
             Comment: {comment}
           </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
}
