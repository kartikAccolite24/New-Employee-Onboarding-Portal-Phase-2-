import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from 'src/layouts/dashboard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Button,
  Container,
  Typography,
  FormControl,
} from "@mui/material";
export default function UploadDocumentView() {
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [formData, setFormData] = useState([]);
  const [isApproved,setIsApproved] = useState("");
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const jwtToken=localStorage.getItem('jwtToken');
  const empId = localStorage.getItem('empId');
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
  console.log(jwtToken);
  console.log(empId);
  useEffect(() => {
    const fetchData = async () => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:8080", // Your API base URL
        headers: {
          "Authorization": `Bearer ${jwtToken}`
        }
      });
      try {
        // Make GET request to your API endpoint
        const isApprovedResponse = await axiosInstance.get(`/getUser/${username}`);
        setIsApproved(isApprovedResponse.data.isApproved);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
      const formDataToSend = new FormData();
      // Object.keys(formData).forEach((key) => {
      //   formDataToSend.append(key, formData[key]);
      // });
      for(let i=0;i<formData.length;i+=1){
        formDataToSend.append("files",formData[i]);
      }
      console.log(formData);
      const axiosInstance = axios.create({
        baseURL: `http://localhost:8080/file`, // Your API base URL
        headers: {
          "Authorization": `Bearer ${jwtToken}`,
          "Content-Type": "multipart/form-data",
        }
      });
      try {
      const response = await axiosInstance.post(`/upload?employeeId=${empId}`,formDataToSend);
      console.log(response);
      toast.success("Form Submitted")
      navigate('/documents', { state: { empId, jwtToken } });
      setFormData([]);
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 401) {
        // Handle unauthorized error
        alert("Unauthorized. Please login again.");
        // Redirect to login page or handle logout
      } else {
        // Handle other errors
        alert("An error occurred. Please try again later.");
      }
    }
  };
  const handleSubmitButton = async() =>{
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080", // Your API base URL
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    try {
      // Make GET request to your API endpoint
      const response = await axiosInstance.get(`/checkApplicationStatus?employeeId=${empId}`);
      console.log(response);
      console.log(response.data[0].username);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };
  const handleChange = (event) => {
    const { files } = event.target;
    // setFormData((prevFormData) => ({
    //   // ...prevFormData,
    //   // [name]: files[0], // Assuming single file selection
    // }));
    console.log(files);
    setFormData((prev)=>[
      ...prev,
      files[0]
    ]);
  };
  const alternateBgColor = () => {
    setBgColorIndex((prevIndex) => (prevIndex + 1) % 2);
  };
  const backgroundColors = []; // Define alternate background colors
  return (
    <div style={{display:'flex'}}>
      <div style={{width:"25%"}}>
          <DashboardLayout/>
        </div>
        <div style={{marginTop:"70px",width:"78%"}}>
    <Container bgcolor={backgroundColors[0]}>
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
      <form onSubmit={handleSubmit}>
        <Box p={2} mb={2} bgcolor={backgroundColors[0]} borderRadius={0}>
          {/* <Typography variant="h4" gutterBottom >
            Upload Documents
          </Typography> */}
          <h4 style={{ fontWeight: "bold", marginLeft: "5px", marginBottom: "20px", marginTop: "30px" }}>
          Upload documents
          </h4>
          <Box display="flex" flexWrap="wrap">
            {/* Aadhaar Card */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                Aadhaar Card
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="Aadhar"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* Pan Card */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                Pan Card
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="Pancard"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* Highest Degree Certificate */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                Highest Degree Certificate
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="DegreeCertificate"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* Xth Certificate */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                Xth Certificate
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="XthCertificate"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* Inter Certificate */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                Inter Certificate
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="InterCertificate"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* Experience Letter(s) */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                Experience Letter(s)
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="ExperienceLetters"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* PassBook/Cancelled Cheque */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                PassBook/Cancelled Cheque
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="PassBook"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* Previous Employment Salary Proofs */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                Previous Employment Salary Proofs (3 Months)
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="SalaryProof"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                NDA
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="NDA"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* BGV */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                BGV
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="BGV"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* LOA */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                LOA
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="LOA"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
            {/* Standard of Conduct */}
            <Box width="50%" p={2}>
              <Typography variant="h6" gutterBottom>
                Standard of Conduct
              </Typography>
              <FormControl fullWidth>
                <input
                  type="file"
                  name="SOCD"
                  accept="*/*"
                  required
                  onChange={handleChange}
                  disabled={isApproved ==="APPROVED"?true:false}
                />
              </FormControl>
            </Box>
          </Box>
          </Box>
        <Box p={2} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmitButton}>
            Submit
          </Button>
        </Box>
      </form>
    </Container>
    </div></div>
  );
}
