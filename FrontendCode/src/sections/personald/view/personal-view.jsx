import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Select,
  Button,
  MenuItem,
  Container,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";

export default function PersonalView() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    residentialAddress: "",
    bloodGroup: "",
    maritalStatus: "",
    status:"",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem('username');
  const jwtToken = localStorage.getItem('jwtToken');
  const empId = localStorage.getItem('empId');
  console.log(username);
  console.log(formData);
  useEffect(() => {
    const fetchData = async () => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:8080", // Your API base URL
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }
      });
      try {
        // Make GET request to your API endpoint
        const personalResponse = await axiosInstance.get(`/fetchPersonalDetails/${localStorage.getItem('empId')}`);
        const { data } = personalResponse;
        setFormData(data.body);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchData();
  }, [empId, jwtToken]);

  const handleSubmit = async(event) => {
    event.preventDefault();
    
   const dateOfBirthToSend = formatDate(dateOfBirth);
   const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // Your API base URL
    headers: {
      "Authorization": `Bearer ${jwtToken}`
    }
  });

  console.log(dateOfBirthToSend);
  console.log(phoneNumber);

try{
  const response = await axiosInstance.post('/addPersonalDetails', {
    empId,
    firstName,
    lastName,
    emailId,
    phoneNo: phoneNumber,
    gender,
    dob: dateOfBirthToSend,
    placeOfBirth,
    residentialAddress,
    bloodGroup,
    maritalStatus,
    status:true
  });
  console.log(response);
 
  navigate('/education',{state:{empId , jwtToken }});
  
}
catch(error){
  alert(error);
}
   

  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const handleEdit = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <Container>
      <Box
        sx={{
          marginLeft: 0,
          margin: "0 auto",
          padding: 4,
          border: "2px solid #ccc",
          borderRadius: 3,
          boxShadow: 1,
          mt: 5,
          textAlign: "left",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Hi {username} ,
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Let&apos;s start your onboarding process
        </Typography>
      </Box>
      <Box sx={{ mt: 5, width: "100%" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Personal Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
         <form onSubmit={handleSubmit} style={{ width: "100%" }}>
           <Box sx={{ mb: 2, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               First Name
             </Typography>
             <TextField
               placeholder="Enter your first name"
               name="firstName"
               required
               fullWidth
               margin="normal"
               value={status === true ? formData.firstName : firstName}
               onChange={(event) => {
                 if (!status) setFirstName(event.target.value);
               }}
               disabled={status}
             />
           </Box>
           <Box sx={{ mb: 2, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Last Name
             </Typography>
             <TextField
               placeholder="Enter your last name"
               name="lastName"
               required
               fullWidth
               margin="normal"
               value={status === true ? formData.lastName : lastName}
               onChange={(event) => setLastName(event.target.value)}
               disabled={status}
             />
           </Box>
           <Box sx={{ mb: 2, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Email
             </Typography>
             <TextField
               placeholder="Enter your Email Id"
               name="email"
               required
               fullWidth
               margin="normal"
               value={status === true? formData.emailId : emailId}
               onChange={(event) => setEmailId(event.target.value)}
               disabled={status}
             />
           </Box>
           <Box sx={{ mb: 3, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Mobile Number
             </Typography>
             <TextField
               placeholder="Enter your mobile number"
               name="phoneno"
               required
               fullWidth
               margin="normal"
               value={status === true ? formData.phoneNo : phoneNumber}
               onChange={(event) => setPhoneNumber(event.target.value)}
               disabled={status}
             />
           </Box>
           <Box sx={{ mb: 3, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Gender
             </Typography>
             <FormControl fullWidth margin="normal">
               <Select
                 labelId="gender-label"
                 name="gender"
                 required
                 value={status === true ? formData.gender : gender}
                 onChange={(event) => setGender(event.target.value)}
                 disabled={status}
               >
                 <MenuItem value="male">Male</MenuItem>
                 <MenuItem value="female">Female</MenuItem>
               </Select>
             </FormControl>
           </Box>
           <Box sx={{ mb: 2, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Date of Birth
             </Typography>
             <TextField
               type="date"
               name="dateOfBirth"
               required
               fullWidth
               margin="normal"
               InputLabelProps={{ shrink: true }}
               value={status === true ? formData.dob : dateOfBirth}
               onChange={(event) => setDateOfBirth(event.target.value)}
               disabled={status}
             />
           </Box>
           <Box sx={{ mb: 2, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Place of Birth
             </Typography>
             <TextField
               placeholder="Enter your place of birth"
               name="placeOfBirth"
               required
               fullWidth
               margin="normal"
               value={status === true ? formData.placeOfBirth : placeOfBirth}
               onChange={(event) => setPlaceOfBirth(event.target.value)}
               disabled={status}
             />
           </Box>
           <Box sx={{ mb: 3, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Residential Address
             </Typography>
             <FormControl fullWidth margin="normal">
               <TextField
                 name="address"
                 required
                 fullWidth
                 multiline
                 rows={4}
                 margin="normal"
                 value={status === true? formData.residentialAddress : residentialAddress}
                 onChange={(event) => setResidentialAddress(event.target.value)}
                 disabled={status}
               />
             </FormControl>
           </Box>
           <Box sx={{ mb: 3, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Blood Group
             </Typography>
             <FormControl fullWidth margin="normal">
               <Select
                 labelId="bloodGroup-label"
                 name="bloodGroup"
                 required
                 value={status === true ? formData.bloodGroup : bloodGroup}
                 onChange={(event) => setBloodGroup(event.target.value)}
                 disabled={status}
               >
                 <MenuItem value="">Select</MenuItem>
                 <MenuItem value="A+">A+</MenuItem>
                 <MenuItem value="A-">A-</MenuItem>
                 <MenuItem value="B+">B+</MenuItem>
                 <MenuItem value="B-">B-</MenuItem>
                 <MenuItem value="AB+">AB+</MenuItem>
                 <MenuItem value="AB-">AB-</MenuItem>
                 <MenuItem value="O+">O+</MenuItem>
                 <MenuItem value="O-">O-</MenuItem>
               </Select>
             </FormControl>
           </Box>
           <Box sx={{ mb: 3, width: "100%" }}>
             <Typography variant="h6" component="h2" gutterBottom>
               Marital Status
             </Typography>
             <FormControl fullWidth margin="normal">
               <Select
                 labelId="maritalStatus"
                 name="maritalStatus"
                 required
                 value={status === true ? formData.maritalStatus : maritalStatus}
                 onChange={(event) => setMaritalStatus(event.target.value)}
                 disabled={status}
               >
                 <MenuItem value="">Select</MenuItem>
                 <MenuItem value="Single">Single</MenuItem>
                 <MenuItem value="Married">Married</MenuItem>
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
               variant="contained"
               color="primary"
               sx={{ alignSelf: "flex-end" }}
               onClick={handleEdit}
             >
               {status ? "Save" : "View Details"}
             </Button>
             {!status && (
               <Button
                 type="submit"
                 variant="contained"
                 color="primary"
                 sx={{ alignSelf: "flex-end", ml: 1 }}
               >
                 Save and Continue
               </Button>
             )}
           </Box>
         </form>
        </Box>
      </Box>
    </Container>
  );
}
