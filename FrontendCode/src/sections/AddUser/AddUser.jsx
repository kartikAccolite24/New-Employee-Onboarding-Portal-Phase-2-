import axios from "axios";
import React, { useState } from "react";
import AdminDashboardLayout from "src/layouts/admindashboard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Box,
  Button,
  Select,
  MenuItem,
  Container,
  TextField,
  Typography,
  FormControl
} from "@mui/material";
import { toast } from "react-toastify";

export default function AddUser() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [isFresher, setIsFresher] = useState("");
  const jwtToken = localStorage.getItem('jwtToken');

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });

    try {
      const fresherToSend = isFresher === "Fresher" ? true : false;
      const response = await axiosInstance.post('/addUser', {
        username,
        email,
        dateOfJoining,
        role: "employee",
        documentIds: {},
        applicationStatus: false,
        fresher: fresherToSend,
        isApproved: "NOT_APPROVED",
        adminRejectionComment: null
      });
      console.log(response);
      toast.success('User Created')
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: "25%" }}>
        <AdminDashboardLayout />
      </div>
      <Container style={{ marginTop: "70px", width: "78%" }}>
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
        <h4 style={{ fontWeight: "bold", marginLeft: "5px", marginBottom: "20px", marginTop: "80px" }}>
          Add User
        </h4>
        <form>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <FormControl sx={{ flex: "1 1 50%" }}>
                <Typography variant="h6" component="h1" gutterBottom>
                  Name
                </Typography>
                <TextField
                  label="Enter the name"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                  sx={{ flex: 1 }}
                />
              </FormControl>
              <FormControl sx={{ flex: "1 1 50%" }}>
                <Typography variant="h6" component="h1" gutterBottom>
                  Email
                </Typography>
                <TextField
                  label="Enter the email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  sx={{ flex: 1 }}
                />
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <FormControl sx={{ flex: "1 1 50%" }}>
                <Typography variant="h6" component="h1" gutterBottom>
                  Date of Joining
                </Typography>
                <TextField
                  type="date"
                  name="dateOfJoining"
                  value={dateOfJoining}
                  onChange={(event) => setDateOfJoining(event.target.value)}
                  required
                  sx={{ flex: 1 }}
                />
              </FormControl>
              <FormControl sx={{ flex: "1 1 50%" }}>
                <Typography variant="h6" component="h1" gutterBottom>
                  Fresher/Experienced
                </Typography>
                <Select
                  label="Fresher/Experienced"
                  name="fresher"
                  required
                  value={isFresher}
                  onChange={(event) => setIsFresher(event.target.value)}
                >
                  <MenuItem value="Fresher">Fresher</MenuItem>
                  <MenuItem value="Experienced">Experienced</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end", // Align button to the right
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ alignSelf: "flex-end", ml: 1 }}
                onClick={handleCreateUser}
              >
                Create User
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </div>
  );
}
