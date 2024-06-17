import React,{useState,useEffect} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { DataGrid } from "@mui/x-data-grid";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box,Modal, Button,Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";

const UserView = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();f
  // const location = useLocation();
  // const { username,empId ,jwtToken} = location.state;
  const jwtToken = localStorage.getItem('jwtToken');
  const fetchUsersData = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080", // Your API base URL
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    try {
      // Make GET request to your API endpoint
      const response = await axiosInstance.get("/allEmployee");
      setUsersData(response.data);
      console.log(usersData);
      localStorage.setItem("documentsId",response.data);
      console.log(response);
      console.log(response.data[0].username);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };
  useEffect(() => {
    fetchUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const handleViewClick = (userId) => {
    // const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
    // setSelectedUser(clickedUser);
    // // console.log(clickedUser);
    // // console.log(selectedUser);
    // setModalOpen(true);
    const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
    const idToSend = clickedUser.empId;
    const username = clickedUser.username;
    console.log(clickedUser);
    console.log(idToSend);
    navigate('/userDetails',{state:{jwtToken , idToSend,username}});
    console.log("view clicked");
  };
  const handleViewMoreClick = (userId) => {
    setShowUserDetails(true);
    // if (selectedUser) {
    //   navigate(`/user/${selectedUser.id}`);
    // }
    const clickedUser = rowsWithSerialNumber.find((user) => user.id === userId);
    const idToSend = clickedUser.empId;
    console.log(clickedUser);
    console.log(idToSend);
    navigate('/userDetails',{state:{jwtToken , idToSend}});
    console.log("view clicked");
  };
  const rowsWithSerialNumber = usersData.map((user, index) => ({
    ...user,
    id: index + 1,
  }));
  const columns = [
    { field: "id", headerName: "S.NO", width: 120, fontWeight: "bold" },
    { field: "username", headerName: "Name", width: 200 },
    { field: "location", headerName: "Location", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    {
      field: "applicationStatus",
      headerName: "Status",
      width: 150,
      renderCell: ({ row }) => (
        <>
          {row.applicationStatus === false ? (
            <CancelIcon style={{ color: "red" }} />
          ) : (
            <CheckCircleOutlineIcon style={{ color: "green" }} />
          )}
        </>
      ),
    },
    {
      field: "view",
      headerName: "View",
      sortable: false,
      width: 150,
      renderCell: ({ row }) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleViewClick(row.id)}
        >
          View
        </Button>
      ),
    },
  ];
  return (
    <Box>
      <h4 style={{ fontWeight: "bold", marginLeft: "5px", marginBottom: "20px", marginTop: "5px" }}>
        Employee List
      </h4>
      <Box height="80vh" fontSize="larger">
        <DataGrid
          rows={rowsWithSerialNumber}
          columns={columns}
          checkboxSelection={false}
          rowHeight={60}
          fontSize="20px" // Adjust the font size here
          getRowId={(row) => row.empId}
        />
      </Box>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            User Details
          </Typography>
          {selectedUser && (
            <Box>
              <p>ID: {selectedUser.id}</p>
              <p>Name: {selectedUser.username}</p>
              <p>Location: {selectedUser.location}</p>
              <p>Role: {selectedUser.role}</p>
              <Button variant="contained" color="primary" onClick={handleViewMoreClick(selectedUser.id)}>
                View More
              </Button>
            </Box>
          )
          }
        </Box>
      </Modal>
    </Box>
  );
};
export default UserView;