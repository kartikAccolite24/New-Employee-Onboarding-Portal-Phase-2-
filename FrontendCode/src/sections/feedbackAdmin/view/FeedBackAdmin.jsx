import React,{useState,useEffect} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { DataGrid } from "@mui/x-data-grid";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box,Modal, Button,Typography,Container } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AdminDashboardLayout from "src/layouts/admindashboard";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedBackAdmin = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();
  const settings = {
    // Your settings for the Slider component
    dots: false,  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const location = useLocation();
  // const { username,empId ,jwtToken} = location.state;
  const username = localStorage.getItem('username');
  const empId = localStorage.getItem('empId');
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
      const response = await axiosInstance.get("/getAllFeedback");
      console.log(response);
      setUsersData(response.data);
      console.log(usersData);
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
  const rowsWithSerialNumber = usersData.map((user, index) => ({
    ...user,
    id: index + 1,
  }));
  const columns = [
    { field: "id", headerName: "S.NO", width: 120, fontWeight: "bold" },
    { field: "name", headerName: "Name", width: 200 },
    { field: "rating", headerName: "Rating", width: 200 },
    { field: "comments", headerName: "Feedback", width: 200 },
  ];
  return (
    <div style={{display:'flex'}}>
      <div style={{width:"25%"}}>
          <AdminDashboardLayout/>
        </div>
        <Container style={{marginTop:"70px",width:"75%"}}>
    <Slider {...settings} style={{ marginLeft: '-30px' }}>
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
      </Slider>
    <Box>
        <h4 style={{ fontWeight: "bold", marginLeft: "-30px", marginBottom: "20px", marginTop: "40px" }}>
          Employee Feedbacks
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
    </Box></Container>
    </div>
  );
};
export default FeedBackAdmin;