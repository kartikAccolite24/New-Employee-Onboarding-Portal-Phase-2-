
// // import React,{useState,useEffect} from "react";
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { DataGrid } from "@mui/x-data-grid";
// // import CancelIcon from "@mui/icons-material/Cancel";
// // import { Box,Modal, Button,Typography,OutlinedInput, InputAdornment } from "@mui/material";
// // import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// // import axios from "axios";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import { red } from "@mui/material/colors";
// // const UserView = () => {
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [showUserDetails, setShowUserDetails] = useState(false);
// //   const [usersData, setUsersData] = useState([]);
// //   const [filterName, setFilterName] = useState("");
// //   const settings = {
// //     // Your settings for the Slider component
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2000,
// //   };
// //   const navigate = useNavigate();
// //   const username = localStorage.getItem('username');
// //   const jwtToken = localStorage.getItem('jwtToken');
// //   const empId = localStorage.getItem('empId');

// //   // Check if user is logged in
// //   useEffect(() => {
// //     if (!username || !jwtToken || !empId) {
// //       navigate('/login'); // Redirect to login if details are missing
// //     }
// //   }, [navigate]);
// //   // const location = useLocation();
// //   // const { username,empId ,jwtToken} = location.state;
// //   // const jwtToken = localStorage.getItem('jwtToken');
// //   const fetchUsersData = async () => {
// //     const axiosInstance = axios.create({
// //       baseURL: "http://localhost:8080", // Your API base URL
// //       headers: {
// //         "Authorization": `Bearer ${jwtToken}`
// //       }
// //     });

// //     try {
// //       // Make GET request to your API endpoint
// //       const response = await axiosInstance.get("/allEmployee");
// //       setUsersData(response.data);
// //       // console.log(usersData);
// //       localStorage.setItem("documentsId",response.data);
// //       console.log(response);
// //       // console.log(response.data[0].username);
// //     } catch (error) {
// //       console.error("Error fetching users data:", error);
// //     }
// //   };
// //   useEffect(() => {
// //     fetchUsersData();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   },[]);
// //   //   const handleViewClick = (userId) => {
// //   //   const clickedUser = usersData.find((user) => user.id === userId);
// //   //   setSelectedUser(clickedUser);
// //   //   setModalOpen(true);
// //   // };
// //   // const handleViewMoreClick = (userId) => {
// //   //   const clickedUser = usersData.find((user) => user.id === userId);
// //   //   setSelectedUser(clickedUser);
// //   // };
// //   const handleViewClick = (userId) => {
// //     // const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
// //     // setSelectedUser(clickedUser);
// //     // // console.log(clickedUser);
// //     // // console.log(selectedUser);
// //     // setModalOpen(true);
// //     const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
// //     setSelectedUser(clickedUser);
// //     setModalOpen(true);
// //     const idToSend = clickedUser.empId;
// //     const username = clickedUser.username;
// //     console.log(clickedUser);
// //     console.log(idToSend);
// //     navigate('/userDetails',{state:{jwtToken , idToSend,username}});
// //     console.log("view clicked");
// //   };



// //   const handleViewMoreClick = (userId) => {
// //     setShowUserDetails(true);
// //     // if (selectedUser) {
// //     //   navigate(`/user/${selectedUser.id}`);
// //     // }
// //     const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
// //     const idToSend = clickedUser.empId;
// //     console.log(clickedUser);
// //     console.log(idToSend);
// //     navigate('/userDetails',{state:{jwtToken , idToSend}});
// //     console.log("view clicked");
// //     setSelectedUser(clickedUser);
// //   };
// //   const rowsWithSerialNumber = usersData.map((user, index) => ({
// //     ...user,
// //     id: index + 1,
// //   }));
// //     const handleFilterByName = (event) => {
// //     setFilterName(event.target.value);
// //   };
// //   // const filteredRows = usersData.filter((user,index) =>
// //   //   user.username.toLowerCase().includes(filterName.toLowerCase()),
// //   // );
// //   const filteredRows = usersData
// //   .filter((user) =>
// //     user.username.toLowerCase().includes(filterName.toLowerCase())
// //   )
// //   .map((filteredUser, index) => ({
// //     ...filteredUser,
// //     id: index + 1,
// //   }));
// //   const columns = [
// //     { field: "id", headerName: "S.NO", width: 120, fontWeight: "bold" },
// //     { field: "username", headerName: "Name", width: 200 },
// //     {
// //       field: "fresher",
// //       headerName: "Employee Type",
// //       width: 200,
// //       renderCell: ({ row }) => (
// //         row.fresher ? "Fresher" : "Experienced"
// //       )
// //     },
// //     // { field: "role", headerName: "Role", width: 200 },
// //     {
// //       field: "isApproved",
// //       headerName: "Status",
// //       width: 150,
// //       renderCell: ({ row }) => (
// //         <>
// //           {(row.isApproved === "NOT_APPROVED" || row.isApproved === "REJECTED"  )? (
// //             <CancelIcon style={{ color: "red" }} />
// //           ) : (
// //             <CheckCircleOutlineIcon style={{ color: "green" }} />
// //           )}
// //         </>
// //       )
// //     },
// //     {
// //       field: "view",
// //       headerName: "View",
// //       sortable: false,
// //       width: 150,
// //       renderCell: ({ row }) => (
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={() => handleViewClick(row.id)}
// //         >
// //           View
// //         </Button>
// //       ),
// //     },
// //     { field: "adminRejectionComment", headerName: "Remark", width: 100,  }, 
// //   ];
// //   return (
// //     <Box>
// //       <Slider {...settings} style={{ marginLeft: '-30px' }}>
// //         <div>
// //           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a114440124164fff93e6d4c0__Darwinbox%20Banner_2%20copy.jpg" alt="Slide 1" />
// //         </div>
// //         <div>
// //           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a46922613264fff93ee90d4__Embrace%20Excellence_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 2" />
// //         </div>
// //         <div>
// //           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a89337630364fff93ecd7d3__One%20Team%2C%20One%20Dream_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
// //         </div>
// //         <div>
// //           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a110357827864fff93eb3b0a__Fearless%20Thinkers_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
// //         </div>
// //         <div>
// //           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a39387173164fff93f1b97a__Cultivate%20Care%20%26%20Compasion_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
// //         </div>
// //       </Slider>
// //       <h4 style={{ fontWeight: "bold", marginLeft: "5px", marginBottom: "20px", marginTop: "5px" }}>
// //         Employee Requests
// //       </h4>
// //       {/* <OutlinedInput
// //         value={filterName}
// //         onChange={handleFilterByName}
// //         placeholder="Search user..."
// //         style={{ marginBottom: '10px' }}
// //         // startAdornment={
// //         //   <InputAdornment position="start">
// //         //     <CancelIcon />
// //         //   </InputAdornment>
// //         // }
// //       /> */}
// //       <Box height="80vh" fontSize="larger">
// //       <DataGrid
// //           rows={filteredRows}
// //           // rows={rowsWithSerialNumber}
// //           columns={columns}
// //           checkboxSelection={false}
// //           rowHeight={60}
// //           fontSize="20px"
// //           getRowId={(row) => row.empId}
// //         />
// //         {/* <DataGrid
// //           rows={rowsWithSerialNumber}
// //           columns={columns}
// //           checkboxSelection={false}
// //           rowHeight={60}
// //           fontSize="20px" // Adjust the font size here
// //           getRowId={(row) => row.empId}
// //         /> */}
// //       </Box>
// //       <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
// //         <Box
// //           sx={{
// //             position: "absolute",
// //             width: 600,
// //             bgcolor: "background.paper",
// //             border: "2px solid #000",
// //             boxShadow: 24,
// //             p: 4,
// //             top: "50%",
// //             left: "50%",
// //             transform: "translate(-50%, -50%)",
// //           }}
// //         >
// //           <Typography variant="h6" gutterBottom>
// //             User Details
// //           </Typography>
// //           {selectedUser && (
// //             <Box>
// //               <p>ID: {selectedUser.id}</p>
// //               <p>Name: {selectedUser.username}</p>
// //               <p>Location: {selectedUser.location}</p>
// //               <p>Role: {selectedUser.role}</p>
// //               <Button variant="contained" color="primary" onClick={handleViewMoreClick(selectedUser.id)}>
// //                 View More
// //               </Button>
// //             </Box>
// //           )
// //           }
// //         </Box>
// //       </Modal>
// //     </Box>
// //   );
// // };
// // export default UserView;

// import React,{useState,useEffect} from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// import { DataGrid } from "@mui/x-data-grid";
// import CancelIcon from "@mui/icons-material/Cancel";
// import { Box, Modal, Button, Typography, OutlinedInput, InputAdornment } from "@mui/material";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import axios from "axios";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { red } from "@mui/material/colors";

// const UserView = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedRemark, setSelectedRemark] = useState("");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [showUserDetails, setShowUserDetails] = useState(false);
//   const [usersData, setUsersData] = useState([]);
//   const [filterName, setFilterName] = useState("");
//   const settings = {
//     // Your settings for the Slider component
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };
//   const navigate = useNavigate();
//   const username = localStorage.getItem('username');
//   const jwtToken = localStorage.getItem('jwtToken');
//   const empId = localStorage.getItem('empId');

//   // Check if user is logged in
//   useEffect(() => {
//     if (!username || !jwtToken || !empId) {
//       navigate('/login'); // Redirect to login if details are missing
//     }
//   }, [navigate]);

//   const fetchUsersData = async () => {
//     const axiosInstance = axios.create({
//       baseURL: "http://localhost:8080", // Your API base URL
//       headers: {
//         "Authorization": `Bearer ${jwtToken}`
//       }
//     });

//     try {
//       // Make GET request to your API endpoint
//       const response = await axiosInstance.get("/allEmployee");
//       setUsersData(response.data);
//       localStorage.setItem("documentsId",response.data);
//       console.log(response);
//     } catch (error) {
//       console.error("Error fetching users data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsersData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[]);

//   const handleViewClick = (userId) => {
//     const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
//     setSelectedUser(clickedUser);
//     setModalOpen(true);
//     const idToSend = clickedUser.empId;
//     const username = clickedUser.username;
//     console.log(clickedUser);
//     console.log(idToSend);
//     navigate('/userDetails',{state:{jwtToken , idToSend,username}});
//     console.log("view clicked");
//   };

//   const handleViewMoreClick = (userId) => {
//     setShowUserDetails(true);
//     const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
//     const idToSend = clickedUser.empId;
//     console.log(clickedUser);
//     console.log(idToSend);
//     navigate('/userDetails',{state:{jwtToken , idToSend}});
//     console.log("view clicked");
//     setSelectedUser(clickedUser);
//   };

//   const handleRemarkClick = (remark) => {
//     setSelectedRemark(remark);
//     setModalOpen(true);
//   };

//   const rowsWithSerialNumber = usersData.map((user, index) => ({
//     ...user,
//     id: index + 1,
//   }));

//   const handleFilterByName = (event) => {
//     setFilterName(event.target.value);
//   };

//   const filteredRows = usersData
//     .filter((user) =>
//       user.username.toLowerCase().includes(filterName.toLowerCase())
//   )
//     .map((filteredUser, index) => ({
//       ...filteredUser,
//       id: index + 1,
//     }));

//   const columns = [
//     { field: "id", headerName: "S.NO", width: 120, fontWeight: "bold" },
//     { field: "username", headerName: "Name", width: 200 },
//     {
//       field: "fresher",
//       headerName: "Employee Type",
//       width: 200,
//       renderCell: ({ row }) => (
//         row.fresher ? "Fresher" : "Experienced"
//       )
//     },
//     {
//       field: "isApproved",
//       headerName: "Status",
//       width: 150,
//       renderCell: ({ row }) => (
//         <>
//           {(row.isApproved === "NOT_APPROVED" || row.isApproved === "REJECTED"  )? (
//             <CancelIcon style={{ color: "red" }} />
//           ) : (
//             <CheckCircleOutlineIcon style={{ color: "green" }} />
//           )}
//         </>
//       )
//     },
//     {
//       field: "view",
//       headerName: "View",
//       sortable: false,
//       width: 150,
//       renderCell: ({ row }) => (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => handleViewClick(row.id)}
//         >
//           View
//         </Button>
//       ),
//     },
//     {
//       field: "adminRejectionComment",
//       headerName: "Remark",
//       width: 150,
//       renderCell: ({ row }) => (
//         <Box
//           component="div"
//           sx={{
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             width: '100%',
//             cursor: 'pointer',
//             color: 'blue',
//             textDecoration: 'underline'
//           }}
//           onClick={() => handleRemarkClick(row.adminRejectionComment)}
//         >
//           {row.adminRejectionComment}
//         </Box>
//       ),
//     }
//   ];

//   return (
//     <Box>
//       {/* <Slider {...settings} style={{ marginLeft: '-30px' }}>
//         <div>
//           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a114440124164fff93e6d4c0__Darwinbox%20Banner_2%20copy.jpg" alt="Slide 1" />
//         </div>
//         <div>
//           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a46922613264fff93ee90d4__Embrace%20Excellence_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 2" />
//         </div>
//         <div>
//           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a89337630364fff93ecd7d3__One%20Team%2C%20One%20Dream_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
//         </div>
//         <div>
//           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a110357827864fff93eb3b0a__Fearless%20Thinkers_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
//         </div>
//         <div>
//           <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a39387173164fff93f1b97a__Cultivate%20Care%20%26%20Compasion_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
//         </div>
//       </Slider> */}
//       <h4 style={{ fontWeight: "bold", marginLeft: "5px", marginBottom: "20px", marginTop: "5px" }}>
//         Employee Requests
//       </h4>
//       <Box height="80vh" fontSize="larger">
//         <DataGrid
//           rows={filteredRows}
//           columns={columns}
//           checkboxSelection={false}
//           rowHeight={60}
//           fontSize="20px"
//           getRowId={(row) => row.empId}
//         />
//       </Box>
//       <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             width: 600,
//             bgcolor: "background.paper",
//             border: "2px solid #000",
//             boxShadow: 24,
//             p: 4,
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             User Remark
//           </Typography>
//           <Typography variant="body1">
//             {selectedRemark}
//           </Typography>
//           {selectedUser && (
//             <Box>
//               <p>ID: {selectedUser.id}</p>
//               <p>Name: {selectedUser.username}</p>
//               <p>Location: {selectedUser.location}</p>
//               <p>Role: {selectedUser.role}</p>
//               <Button variant="contained" color="primary" onClick={() => handleViewMoreClick(selectedUser.id)}>
//                 View More
//               </Button>
//             </Box>
//           )}
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default UserView;


import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { DataGrid } from "@mui/x-data-grid";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Modal, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { red } from "@mui/material/colors";

const UserView = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRemark, setSelectedRemark] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [filterName, setFilterName] = useState("");
  // const settings = {
  //   // Your settings for the Slider component
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const jwtToken = localStorage.getItem('jwtToken');
  const empId = localStorage.getItem('empId');

  // Check if user is logged in
  useEffect(() => {
    if (!username || !jwtToken || !empId) {
      navigate('/login'); // Redirect to login if details are missing
    }
  }, [navigate]);

  const fetchUsersData = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080", // Your API base URL
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });

    try {
      // Make GET request to your API endpoint
      const response = await axiosInstance.get("/getAllPendingEmployees");
      setUsersData(response.data);
      localStorage.setItem("documentsId", response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewClick = (userId) => {
    const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
    setSelectedUser(clickedUser);
    setModalOpen(true);
    const idToSend = clickedUser.empId;
    const username = clickedUser.username;
    console.log(clickedUser);
    console.log(idToSend);
    navigate('/userDetails', { state: { jwtToken, idToSend, username } });
    console.log("view clicked");
  };

  const handleViewMoreClick = (userId) => {
    setShowUserDetails(true);
    const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
    const idToSend = clickedUser.empId;
    console.log(clickedUser);
    console.log(idToSend);
    navigate('/userDetails', { state: { jwtToken, idToSend } });
    console.log("view clicked");
    setSelectedUser(clickedUser);
  };

  const handleRemarkClick = (remark) => {
    setSelectedRemark(remark);
    setModalOpen(true);
  };

  const rowsWithSerialNumber = usersData.map((user, index) => ({
    ...user,
    id: index + 1,
  }));

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredRows = usersData
    .filter((user) =>
      user.username.toLowerCase().includes(filterName.toLowerCase()) 
      // user.isApproved !==  "APPROVED"
      // (user.isApproved === "REJECTED" || user.isApproved === "NOT_APPROVED")
  )
    .map((filteredUser, index) => ({
      ...filteredUser,
      id: index + 1,  
    }));

  const columns = [
    { field: "id", headerName: "S.NO", width: 120, fontWeight: "bold" },
    { field: "username", headerName: "Name", width: 200 },
    {
      field: "fresher",
      headerName: "Employee Type",
      width: 200,
      renderCell: ({ row }) => (
        row.fresher ? "Fresher" : "Experienced"
      )
    },
    {
      field: "isApproved",
      headerName: "Status",
      width: 150,
      renderCell: ({ row }) => (
        <>
          {(row.isApproved === "NOT_APPROVED" || row.isApproved === "REJECTED") ? (
              <Typography style={{ color: "red", fontFamily:"poppins" , marginTop:'15%', marginLeft:'-7%', fontSize:'14px'}}>Pending</Typography>
            ) : (
            <CheckCircleOutlineIcon style={{ color: "green" }} />
          )}
        </>
      )
    },
    // {
    //   field: "view",
    //   headerName: "View",
    //   sortable: false,
    //   width: 150,
    //   renderCell: ({ row }) => (
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       onClick={() => handleViewClick(row.id)}
    //     >
    //       View
    //     </Button>
    //   ),
    // },
    // {
    //   field: "adminRejectionComment",
    //   headerName: "Remark",
    //   width: 150,
    //   renderCell: ({ row }) => (
    //     <Box
    //       component="div"
    //       sx={{
    //         whiteSpace: 'nowrap',
    //         overflow: 'hidden',
    //         textOverflow: 'ellipsis',
    //         width: '100%',
    //         cursor: 'pointer',
    //         color: 'blue',
    //         textDecoration: 'underline'
    //       }}
    //       onClick={() => handleRemarkClick(row.adminRejectionComment)}
    //     >
    //       {row.adminRejectionComment}
    //     </Box>
    //   ),
    // }
  ];

  return (
    <Box>
      {/* <Slider {...settings} style={{ marginLeft: '-30px' }}>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a114440124164fff93e6d4c0__Darwinbox%20Banner_2%20copy.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a46922613264fff93ee90d4__Embrace%20Excellence_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a89337630364fff93ecd7d3__One%20Team%2C%20One%20Dream_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a110357827864fff93eb3b0a__Fearless%20Thinkers_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a39387173164fff93f1b97a__Cultivate%20Care%20%26%20Compasion_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
        </div>
      </Slider> */}
      <h4 style={{ fontWeight: "bold", marginLeft: "5px", marginBottom: "20px", marginTop: "15px" }}>
        Employee Requests
      </h4>
      <Box height="80vh" fontSize="larger">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          checkboxSelection={false}
          rowHeight={60}
          fontSize="16px"
          headerHeight={60}
          headerAlign="center"
          disableColumnMenu
        />
      </Box>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={600}
          bgcolor="background.paper"
          border="2px solid #000"
          boxShadow={24}
          p={4}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Remark
          </Typography>
          <Typography variant="body1">
            {selectedRemark}
          </Typography>
          <Button
            onClick={() => setModalOpen(false)}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserView;
