
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Alert from '@mui/material/Alert';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   Box,
//   Select,
//   Button,
//   MenuItem,
//   Container,
//   TextField,
//   Typography,
//   FormControl,
// } from "@mui/material";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// export default function PersonalView() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [emailId, setEmailId] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [gender, setGender] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [placeOfBirth, setPlaceOfBirth] = useState("");
//   const [residentialAddress, setResidentialAddress] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("");
//   const [status, setStatus] = useState("");
//   const [ isApproved , setIsApproved ]= useState("");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     phoneNumber: "",
//     gender: "",
//     dateOfBirth: "",
//     placeOfBirth: "",
//     residentialAddress: "",
//     bloodGroup: "",
//     maritalStatus: "",
//     status:"",
//   });
//   const navigate = useNavigate();
//   const location = useLocation();
//   const username = localStorage.getItem('username');
//   const jwtToken = localStorage.getItem('jwtToken');
//   const empId = localStorage.getItem('empId');
//   console.log(username);
//   console.log(formData);
//     useEffect(() => {
//     if (!username && !jwtToken && !empId) {
//       navigate('/'); // Redirect to login if details are missing
//     }
//   }, [navigate]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const axiosInstance = axios.create({
//         baseURL: "http://localhost:8080", // Your API base URL
//         headers: {
//           "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
//         }
//       });
//       try {
//         // Make GET request to your API endpoint
//         const personalResponse = await axiosInstance.get(`/fetchPersonalDetails/${localStorage.getItem('empId')}`);
//         const isApprovedResponse = await axiosInstance.get(`/getUser/${username}`);
//         setIsApproved(isApprovedResponse.data.isApproved);
//         const { data } = personalResponse;
//         setFormData(data.body);
       
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
  
//     fetchData();
//   }, [empId, jwtToken]);
//   const handleSubmit = async(event) => {
//     event.preventDefault();
    
//    const dateOfBirthToSend = formatDate(dateOfBirth);
//    const axiosInstance = axios.create({
//     baseURL: "http://localhost:8080", // Your API base URL
//     headers: {
//       "Authorization": `Bearer ${jwtToken}`
//     }
//   });
//   console.log(dateOfBirthToSend);
//   console.log(phoneNumber);
// try{
//   const response = await axiosInstance.post('/addPersonalDetails', {
//     empId,
//     firstName,
//     lastName,
//     emailId,
//     phoneNo: phoneNumber,
//     gender,
//     dob: dateOfBirthToSend,
//     placeOfBirth,
//     residentialAddress,
//     bloodGroup,
//     maritalStatus,
//     status:true
//   });
//   console.log(response);
// // alert('Details Submitted Successfully')
// toast.success("Details Saved!!")
//   // setSuccessMessage(true); // Set a state variable to manage the display of the success message
//     navigate('/education', { state: { empId, jwtToken } });
  
// }
// catch(error){
//   alert(error);
// }
   
//   };
  
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };
//   const handleEdit = () => {
//     setStatus((prevStatus) => !prevStatus);
//   };
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
//   return (
//     // <Box sx={{ width: '100%', position: 'fixed',height:'4%' ,marginTop:'-50px'}}>
//     // {/* Slideshow component */}
//     // <Box
//     //   sx={{
//     //     position: 'relative',
//     //     width: '100%',
//     //     height:'80vh',
//     //     marginTop: '60px', // Adjust the top margin to create space above the slideshow
//     //     marginBottom: '100px', // Add margin bottom to create space below the slideshow
//     //   }}
//     // >
//     //   <Slideshow />
//     // </Box>
//     // </Box>
//     <Container>
//       <Slider {...settings} style={{ marginLeft: '-30px' }}>
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
//       </Slider>
//       <Box
//         sx={{
//           marginLeft: 0,
//           margin: "0 auto",
//           padding: 4,
//           border: "2px solid #ccc",
//           borderRadius: 3,
//           boxShadow: 1,
//           mt: 5,
//           textAlign: "left",
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "left",
//         }}
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           Hi {username} ,
//         </Typography>
//         <Typography variant="h5" component="h2" gutterBottom>
//           Let&apos;s start your onboarding process
//         </Typography>
//       </Box>
//       <Box sx={{ mt: 5, width: "100%" }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Personal Details
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             width: "100%",
//           }}
//         >
//          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//          <Box
//   sx={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//   }}
// >
//   <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       First Name
//     </Typography>
//     <TextField
//       placeholder="Enter your first name"
//       name="firstName"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true ? formData.firstName : firstName}
//       onChange={(event) => {
//         if (!status) setFirstName(event.target.value);
//       }}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
//   <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Last Name
//     </Typography>
//     <TextField
//       placeholder="Enter your last name"
//       name="lastName"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true ? formData.lastName : lastName}
//       onChange={(event) => setLastName(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
// </Box>
           
// <Box
//   sx={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     flexWrap: "wrap", // Allow wrapping to next line if needed
//   }}
// >
  
//   <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Email
//     </Typography>
//     <TextField
//       placeholder="Enter your Email Id"
//       name="email"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true? formData.emailId : emailId}
//       onChange={(event) => setEmailId(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
//   <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Mobile Number
//     </Typography>
//     <TextField
//       placeholder="Enter your mobile number"
//       name="phoneno"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true ? formData.phoneNo : phoneNumber}
//       onChange={(event) => setPhoneNumber(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
// </Box>
//            <Box sx={{ mb: 3, width: "100%" }}>
//              <Typography variant="h6" component="h2" gutterBottom>
//                Gender
//              </Typography>
//              <FormControl fullWidth margin="normal">
//                <Select
//                  labelId="gender-label"
//                  name="gender"
//                  required
//                  value={status === true ? formData.gender : gender}
//                  onChange={(event) => setGender(event.target.value)}
//                  disabled={isApproved ==="APPROVED"?true:status}
//                >
//                  <MenuItem value="male">Male</MenuItem>
//                  <MenuItem value="female">Female</MenuItem>
//                </Select>
//              </FormControl>
//            </Box>
//            <Box
//   sx={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     flexWrap: "wrap", // Allow wrapping to next line if needed
//   }}
// >
//   <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Date of Birth
//     </Typography>
//     <TextField
//       type="date"
//       name="dateOfBirth"
//       required
//       fullWidth
//       margin="normal"
//       InputLabelProps={{ shrink: true }}
//       value={status === true ? formData.dob : dateOfBirth}
//       onChange={(event) => setDateOfBirth(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
//   <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Place of Birth
//     </Typography>
//     <TextField
//       placeholder="Enter your place of birth"
//       name="placeOfBirth"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true ? formData.placeOfBirth : placeOfBirth}
//       onChange={(event) => setPlaceOfBirth(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
// </Box>
//            <Box sx={{ mb: 3, width: "100%" }}>
//              <Typography variant="h6" component="h2" gutterBottom>
//                Residential Address
//              </Typography>
//              <FormControl fullWidth margin="normal">
//                <TextField
//                  name="address"
//                  required
//                  fullWidth
//                  multiline
//                  rows={4}
//                  margin="normal"
//                  value={status === true? formData.residentialAddress : residentialAddress}
//                  onChange={(event) => setResidentialAddress(event.target.value)}
//                  disabled={isApproved ==="APPROVED"?true:status}
//                />
//              </FormControl>
//            </Box>
//            <Box
//   sx={{
//     display: "flex",
//     justifyContent: "space-between", // Distribute space between the two boxes
//     width: "100%", // Ensure full width
//     flexWrap: "wrap", // Allow wrapping to next line if needed
//   }}
// >
//   <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Marital Status
//     </Typography>
//     <FormControl fullWidth margin="normal">
//       <Select
//         labelId="maritalStatus"
//         name="maritalStatus"
//         required
//         value={status === true ? formData.maritalStatus : maritalStatus}
//         onChange={(event) => setMaritalStatus(event.target.value)}
//         disabled={isApproved ==="APPROVED"?true:status}
//       >
//         <MenuItem value="">Select</MenuItem>
//         <MenuItem value="Single">Single</MenuItem>
//         <MenuItem value="Married">Married</MenuItem>
//       </Select>
//     </FormControl>
//   </Box>
//   <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Blood Group
//     </Typography>
//     <FormControl fullWidth margin="normal">
//       <Select
//         labelId="bloodGroup-label"
//         name="bloodGroup"
//         required
//         value={status === true ? formData.bloodGroup : bloodGroup}
//         onChange={(event) => setBloodGroup(event.target.value)}
//         disabled={isApproved ==="APPROVED"?true:status}
//       >
//         <MenuItem value="">Select</MenuItem>
//         <MenuItem value="A+">A+</MenuItem>
//         <MenuItem value="A-">A-</MenuItem>
//         <MenuItem value="B+">B+</MenuItem>
//         <MenuItem value="B-">B-</MenuItem>
//         <MenuItem value="AB+">AB+</MenuItem>
//         <MenuItem value="AB-">AB-</MenuItem>
//         <MenuItem value="O+">O+</MenuItem>
//         <MenuItem value="O-">O-</MenuItem>
//       </Select>
//     </FormControl>
//   </Box>
// </Box>
//            <Box
//              sx={{
//                display: "flex",
//                justifyContent: "flex-end", // Align button to the right
//              }}
//            >
            
//              <Button
//                variant="contained"
//                color="primary"
//                sx={{ alignSelf: "flex-end" }}
//                onClick={handleEdit}
//              >
//                {status ? "Save" : "View Details"}
//              </Button>
//              {!status && (
//                <Button
//                  type="submit"
//                  variant="contained"
//                  color="primary"
//                  sx={{ alignSelf: "flex-end", ml: 1 }}
//                >
//                  Save and Continue
//                </Button>
//              )}
//            </Box>
//          </form>
//         </Box>
//       </Box>
//     </Container>
//   );
// }


// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import axios from "axios";
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import {
// //   Box,
// //   Button,
// //   Select,
// //   MenuItem,
// //   Container,
// //   TextField,
// //   Typography,
// //   FormControl
// // } from "@mui/material";

// // export default function PersonalView() {
// //   const [educationalCategory, setEducationalCategory] = useState('');
// //   const [educationalDegree, setEducationalDegree] = useState('');
// //   const [fieldOfSpecialization, setFieldOfSpecialization] = useState('');
// //   const [isApproved, setIsApproved] = useState("");
// //   const [courseType, setCourseType] = useState('');
// //   const [cgpa, setCgpa] = useState('');
// //   const [startDate, setStartDate] = useState('');
// //   const [endDate, setEndDate] = useState('');
// //   const [university, setUniversity] = useState('');
// //   const [status, setStatus] = useState("");
// //   const [formData, setFormData] = useState({
// //     educationalCategory: "",
// //     educationalDegree: "",
// //     fieldOfSpecialization: "",
// //     courseType: "",
// //     cgpa: "",
// //     startDate: "",
// //     endDate: "",
// //     university: "",
// //     status: "",
// //   });
// //   const navigate = useNavigate();
// //   const username = localStorage.getItem('username');
// //   const jwtToken = localStorage.getItem('jwtToken');
// //   const empId = localStorage.getItem('empId');

// //   // Check if user is logged in
// //   useEffect(() => {
// //     if (!username && !jwtToken && !empId) {
// //       navigate('/'); // Redirect to login if details are missing
// //     }
// //   }, [navigate]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const axiosInstance = axios.create({
// //         baseURL: "http://localhost:8080", // Your API base URL
// //         headers: {
// //           "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
// //         }
// //       });
// //       try {
// //         // Make GET request to your API endpoint
// //         const educationalResponse = await axiosInstance.get(`/fetchEducationalDetails/${localStorage.getItem('empId')}`);
// //         const isApprovedResponse = await axiosInstance.get(`/getUser/${username}`);
// //         setIsApproved(isApprovedResponse.data.isApproved);
// //         const { data } = educationalResponse;
// //         setFormData(data.body);
// //       } catch (error) {
// //         console.error("Error fetching user data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [empId, jwtToken, username]);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const startDateToSend = formatDate(startDate);
// //     const endDateToSend = formatDate(endDate);
// //     const axiosInstance = axios.create({
// //       baseURL: "http://localhost:8080", // Your API base URL
// //       headers: {
// //         "Authorization": `Bearer ${jwtToken}`
// //       }
// //     });
// //     try {
// //       const response = await axiosInstance.post('/addEducationalDetails', {
// //         empId,
// //         educationalDegree,
// //         fieldOfSpecialization,
// //         courseType,
// //         cgpa,
// //         startDate: startDateToSend,
// //         endDate: endDateToSend,
// //         institutionName: university,
// //         status: true
// //       });
// //       console.log(response);
// //       toast.success('Details Saved!!');
// //       navigate('/banking', { state: { empId, jwtToken } });
// //     } catch (error) {
// //       alert(error);
// //     }
// //   };

// //   const handleEdit = () => {
// //     setStatus((prevStatus) => !prevStatus);
// //   };

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     const year = date.getFullYear();
// //     const month = String(date.getMonth() + 1).padStart(2, '0');
// //     const day = String(date.getDate()).padStart(2, '0');
// //     return `${year}-${month}-${day}`;
// //   };

// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2000,
// //   };

// //   return (
// //     <Container>
// //       <Slider {...settings} style={{ marginLeft: '-30px', marginBottom: '30px' }}>
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
// //       <Typography variant="h4" component="h1" gutterBottom>
// //         Educational Details
// //       </Typography>
// //       <form onSubmit={handleSubmit}>
// //         <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
// //           <Box sx={{ display: "flex", gap: "20px" }}>
// //             <FormControl sx={{ flex: 1 }}>
// //               <Typography variant="h6" component="h1" gutterBottom>
// //                 Educational Category
// //               </Typography>
// //               <Select
// //                 name="EducationalCategory"
// //                 value={status === true ? formData.educationalCategory : educationalCategory}
// //                 onChange={(event) => setEducationalCategory(event.target.value)}
// //                 required
// //                 disabled={isApproved === "APPROVED" ? true : status}
// //               >
// //                 <MenuItem value="Science">Science</MenuItem>
// //                 <MenuItem value="Arts">Arts</MenuItem>
// //                 <MenuItem value="Commerce">Commerce</MenuItem>
// //               </Select>
// //             </FormControl>
// //             <FormControl sx={{ flex: 1 }}>
// //               <Typography variant="h6" component="h1" gutterBottom>
// //                 Educational Degree
// //               </Typography>
// //               <Select
// //                 name="EducationalDegree"
// //                 value={status === true ? formData.educationalDegree : educationalDegree}
// //                 onChange={(event) => setEducationalDegree(event.target.value)}
// //                 required
// //                 disabled={isApproved === "APPROVED" ? true : status}
// //               >
// //                 <MenuItem value="Bachelor">Bachelor</MenuItem>
// //                 <MenuItem value="Master">Master</MenuItem>
// //                 <MenuItem value="Doctorate">Doctorate</MenuItem>
// //               </Select>
// //             </FormControl>
// //           </Box>
// //           <Box sx={{ display: "flex", gap: "20px" }}>
// //             <FormControl sx={{ flex: 1 }}>
// //               <Typography variant="h6" component="h1" gutterBottom>
// //                 Field of Specialization
// //               </Typography>
// //               <TextField
// //                 label="Field of Specialization"
// //                 name="FieldOfSpecialization"
// //                 value={status === true ? formData.fieldOfSpecialization : fieldOfSpecialization}
// //                 onChange={(event) => setFieldOfSpecialization(event.target.value)}
// //                 required
// //                 disabled={isApproved === "APPROVED" ? true : status}
// //                 sx={{ flex: 1 }}
// //               />
// //             </FormControl>
// //             <FormControl sx={{ flex: 1 }}>
// //               <Typography variant="h6" component="h1" gutterBottom>
// //                 Course Type
// //               </Typography>
// //               <Select
// //                 name="CourseType"
// //                 value={status === true ? formData.courseType : courseType}
// //                 onChange={(event) => setCourseType(event.target.value)}
// //                 required
// //                 disabled={isApproved === "APPROVED" ? true : status}
// //               >
// //                 <MenuItem value="Full-time">Full-time</MenuItem>
// //                 <MenuItem value="Part-time">Part-time</MenuItem>
// //                 <MenuItem value="Online">Online</MenuItem>
// //               </Select>
// //             </FormControl>
// //           </Box>
// //           <Typography variant="h6" component="h1" gutterBottom>
// //             CGPA
// //           </Typography>
// //           <TextField
// //             label="CGPA"
// //             name="Cgpa"
// //             type="number"
// //             value={status === true ? formData.cgpa : cgpa}
// //             onChange={(event) => setCgpa(event.target.value)}
// //             required
// //             disabled={isApproved === "APPROVED" ? true : status}
// //           />
// //           <Box sx={{ display: "flex", gap: "20px" }}>
// //             <FormControl sx={{ flex: 1 }}>
// //               <Typography variant="h6" component="h1" gutterBottom>
// //                 Start Date
// //               </Typography>
// //               <TextField
// //                 label=""
// //                 name="StartDate"
// //                 type="date"
// //                 value={status === true ? formData.startDate : startDate}
// //                 onChange={(event) => setStartDate(event.target.value)}
// //                 required
// //                 disabled={isApproved === "APPROVED" ? true : status}
// //                 sx={{ flex: 1 }}
// //               />
// //             </FormControl>
// //             <FormControl sx={{ flex: 1 }}>
// //               <Typography variant="h6" component="h1" gutterBottom>
// //                 End Date
// //               </Typography>
// //               <TextField
// //                 label=""
// //                 name="EndDate"
// //                 type="date"
// //                 value={status === true ? formData.endDate : endDate}
// //                 onChange={(event) => setEndDate(event.target.value)}
// //                 required
// //                 disabled={isApproved === "APPROVED" ? true : status}
// //                 sx={{ flex: 1 }}
// //               />
// //             </FormControl>
// //           </Box>
// //           <FormControl sx={{ flex: 1 }}>
// //             <Typography variant="h6" component="h1" gutterBottom>
// //               University
// //             </Typography>
// //             <Select
// //               name="University"
// //               value={status === true ? formData.institutionName : university}
// //               onChange={(event) => setUniversity(event.target.value)}
// //               required
// //               disabled={isApproved === "APPROVED" ? true : status}
// //             >
// //               <MenuItem value="Harvard University">Harvard University</MenuItem>
// //               <MenuItem value="Stanford University">Stanford University</MenuItem>
// //               <MenuItem value="MIT">MIT</MenuItem>
// //             </Select>
// //           </FormControl>
// //           <Box
// //             sx={{
// //               display: "flex",
// //               justifyContent: "flex-end", // Align button to the right
// //             }}
// //           >
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               sx={{ alignSelf: "flex-end" }}
// //               onClick={handleEdit}
// //             >
// //               {status ? "Save" : "View Details"}
// //             </Button>
// //             {!status && (
// //               <Button
// //                 type="submit"
// //                 variant="contained"
// //                 color="primary"
// //                 sx={{ alignSelf: "flex-end", ml: 1 }}
// //               >
// //                 Save and Continue
// //               </Button>
// //             )}
// //           </Box>
// //         </Box>
// //       </form>
// //     </Container>
// //   );
// // }


// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Alert from '@mui/material/Alert';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   Box,
//   Select,
//   Button,
//   MenuItem,
//   Container,
//   TextField,
//   Typography,
//   FormControl,
// } from "@mui/material";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// export default function PersonalView() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [emailId, setEmailId] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [gender, setGender] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [placeOfBirth, setPlaceOfBirth] = useState("");
//   const [residentialAddress, setResidentialAddress] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("");
//   const [status, setStatus] = useState("");
//   const [ isApproved , setIsApproved ]= useState("");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     phoneNumber: "",
//     gender: "",
//     dateOfBirth: "",
//     placeOfBirth: "",
//     residentialAddress: "",
//     bloodGroup: "",
//     maritalStatus: "",
//     status:"",
//   });
//   const navigate = useNavigate();
//   const location = useLocation();
//   const username = localStorage.getItem('username');
//   const jwtToken = localStorage.getItem('jwtToken');
//   const empId = localStorage.getItem('empId');
//   console.log(username);
//   console.log(formData);
//   useEffect(() => {
//     const fetchData = async () => {
//       const axiosInstance = axios.create({
//         baseURL: "http://localhost:8080", // Your API base URL
//         headers: {
//           "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
//         }
//       });
//       try {
//         // Make GET request to your API endpoint
//         const personalResponse = await axiosInstance.get(`/fetchPersonalDetails/${localStorage.getItem('empId')}`);
//         const isApprovedResponse = await axiosInstance.get(`/getUser/${username}`);
//         setIsApproved(isApprovedResponse.data.isApproved);
//         const { data } = personalResponse;
//         setFormData(data.body);
       
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
  
//     fetchData();
//   }, [empId, jwtToken]);
//   const handleSubmit = async(event) => {
//     event.preventDefault();
    
//    const dateOfBirthToSend = formatDate(dateOfBirth);
//    const axiosInstance = axios.create({
//     baseURL: "http://localhost:8080", // Your API base URL
//     headers: {
//       "Authorization": `Bearer ${jwtToken}`
//     }
//   });
//   console.log(dateOfBirthToSend);
//   console.log(phoneNumber);
// try{
//   const response = await axiosInstance.post('/addPersonalDetails', {
//     empId,
//     firstName,
//     lastName,
//     emailId,
//     phoneNo: phoneNumber,
//     gender,
//     dob: dateOfBirthToSend,
//     placeOfBirth,
//     residentialAddress,
//     bloodGroup,
//     maritalStatus,
//     status:true
//   });
//   console.log(response);
// // alert('Details Submitted Successfully')
// toast.success("Details Saved!!")
//   // setSuccessMessage(true); // Set a state variable to manage the display of the success message
//     navigate('/education', { state: { empId, jwtToken } });
  
// }
// catch(error){
//   alert(error);
// }
   
//   };
  
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };
//   const handleEdit = () => {
//     setStatus((prevStatus) => !prevStatus);
//   };
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
//   return (
//     // <Box sx={{ width: '100%', position: 'fixed',height:'4%' ,marginTop:'-50px'}}>
//     // {/* Slideshow component */}
//     // <Box
//     //   sx={{
//     //     position: 'relative',
//     //     width: '100%',
//     //     height:'80vh',
//     //     marginTop: '60px', // Adjust the top margin to create space above the slideshow
//     //     marginBottom: '100px', // Add margin bottom to create space below the slideshow
//     //   }}
//     // >
//     //   <Slideshow />
//     // </Box>
//     // </Box>
//     <Container>
//       <Slider {...settings} style={{ marginLeft: '-30px' }}>
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
//       </Slider>
//       <Box
//         sx={{
//           marginLeft: 0,
//           margin: "0 auto",
//           padding: 4,
//           border: "2px solid #ccc",
//           borderRadius: 3,
//           boxShadow: 1,
//           mt: 5,
//           textAlign: "left",
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "left",
//         }}
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           Hi {username} ,
//         </Typography>
//         <Typography variant="h5" component="h2" gutterBottom>
//           Let&apos;s start your onboarding process
//         </Typography>
//       </Box>
//       <Box sx={{ mt: 5, width: "100%" }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Personal Details
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             width: "100%",
//           }}
//         >
//          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//          <Box
//   sx={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//   }}
// >
//   <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       First Name
//     </Typography>
//     <TextField
//       placeholder="Enter your first name"
//       name="firstName"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true ? formData.firstName : firstName}
//       onChange={(event) => {
//         if (!status) setFirstName(event.target.value);
//       }}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
//   <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Last Name
//     </Typography>
//     <TextField
//       placeholder="Enter your last name"
//       name="lastName"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true ? formData.lastName : lastName}
//       onChange={(event) => setLastName(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
// </Box>
           
// <Box
//   sx={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     flexWrap: "wrap", // Allow wrapping to next line if needed
//   }}
// >
  
//   <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Email
//     </Typography>
//     <TextField
//       placeholder="Enter your Email Id"
//       name="email"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true? formData.emailId : emailId}
//       onChange={(event) => setEmailId(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
//   <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Mobile Number
//     </Typography>
//     <TextField
//       placeholder="Enter your mobile number"
//       name="phoneno"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true ? formData.phoneNo : phoneNumber}
//       onChange={(event) => setPhoneNumber(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
// </Box>
//            <Box sx={{ mb: 3, width: "100%" }}>
//              <Typography variant="h6" component="h2" gutterBottom>
//                Gender
//              </Typography>
//              <FormControl fullWidth margin="normal">
//                <Select
//                  labelId="gender-label"
//                  name="gender"
//                  required
//                  value={status === true ? formData.gender : gender}
//                  onChange={(event) => setGender(event.target.value)}
//                  disabled={isApproved ==="APPROVED"?true:status}
//                >
//                  <MenuItem value="male">Male</MenuItem>
//                  <MenuItem value="female">Female</MenuItem>
//                </Select>
//              </FormControl>
//            </Box>
//            <Box
//   sx={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     flexWrap: "wrap", // Allow wrapping to next line if needed
//   }}
// >
//   <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Date of Birth
//     </Typography>
//     <TextField
//       type="date"
//       name="dateOfBirth"
//       required
//       fullWidth
//       margin="normal"
//       InputLabelProps={{ shrink: true }}
//       value={status === true ? formData.dob : dateOfBirth}
//       onChange={(event) => setDateOfBirth(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
//   <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Place of Birth
//     </Typography>
//     <TextField
//       placeholder="Enter your place of birth"
//       name="placeOfBirth"
//       required
//       fullWidth
//       margin="normal"
//       value={status === true ? formData.placeOfBirth : placeOfBirth}
//       onChange={(event) => setPlaceOfBirth(event.target.value)}
//       disabled={isApproved ==="APPROVED"?true:status}
//     />
//   </Box>
// </Box>
//            <Box sx={{ mb: 3, width: "100%" }}>
//              <Typography variant="h6" component="h2" gutterBottom>
//                Residential Address
//              </Typography>
//              <FormControl fullWidth margin="normal">
//                <TextField
//                  name="address"
//                  required
//                  fullWidth
//                  multiline
//                  rows={4}
//                  margin="normal"
//                  value={status === true? formData.residentialAddress : residentialAddress}
//                  onChange={(event) => setResidentialAddress(event.target.value)}
//                  disabled={isApproved ==="APPROVED"?true:status}
//                />
//              </FormControl>
//            </Box>
//            <Box
//   sx={{
//     display: "flex",
//     justifyContent: "space-between", // Distribute space between the two boxes
//     width: "100%", // Ensure full width
//     flexWrap: "wrap", // Allow wrapping to next line if needed
//   }}
// >
//   <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Marital Status
//     </Typography>
//     <FormControl fullWidth margin="normal">
//       <Select
//         labelId="maritalStatus"
//         name="maritalStatus"
//         required
//         value={status === true ? formData.maritalStatus : maritalStatus}
//         onChange={(event) => setMaritalStatus(event.target.value)}
//         disabled={isApproved ==="APPROVED"?true:status}
//       >
//         <MenuItem value="">Select</MenuItem>
//         <MenuItem value="Single">Single</MenuItem>
//         <MenuItem value="Married">Married</MenuItem>
//       </Select>
//     </FormControl>
//   </Box>
//   <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
//     <Typography variant="h6" component="h2" gutterBottom>
//       Blood Group
//     </Typography>
//     <FormControl fullWidth margin="normal">
//       <Select
//         labelId="bloodGroup-label"
//         name="bloodGroup"
//         required
//         value={status === true ? formData.bloodGroup : bloodGroup}
//         onChange={(event) => setBloodGroup(event.target.value)}
//         disabled={isApproved ==="APPROVED"?true:status}
//       >
//         <MenuItem value="">Select</MenuItem>
//         <MenuItem value="A+">A+</MenuItem>
//         <MenuItem value="A-">A-</MenuItem>
//         <MenuItem value="B+">B+</MenuItem>
//         <MenuItem value="B-">B-</MenuItem>
//         <MenuItem value="AB+">AB+</MenuItem>
//         <MenuItem value="AB-">AB-</MenuItem>
//         <MenuItem value="O+">O+</MenuItem>
//         <MenuItem value="O-">O-</MenuItem>
//       </Select>
//     </FormControl>
//   </Box>
// </Box>
//            <Box
//              sx={{
//                display: "flex",
//                justifyContent: "flex-end", // Align button to the right
//              }}
//            >
            
//              <Button
//                variant="contained"
//                color="primary"
//                sx={{ alignSelf: "flex-end" }}
//                onClick={handleEdit}
//              >
//                {status ? "Save" : "View Details"}
//              </Button>
//              {!status && (
//                <Button
//                  type="submit"
//                  variant="contained"
//                  color="primary"
//                  sx={{ alignSelf: "flex-end", ml: 1 }}
//                >
//                  Save and Continue
//                </Button>
//              )}
//            </Box>
//          </form>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [ toggleDisable , setToggleDisable]= useState(false);
  const [status, setStatus] = useState(false);
  const [ isApproved , setIsApproved ]= useState(false);
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
        const isApprovedResponse = await axiosInstance.get(`/getUser/${username}`);
        setIsApproved(isApprovedResponse.data.isApproved);
        console.log(isApproved);
        setStatus(personalResponse.data.body.status);
        console.log(personalResponse.data.body.status);

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
// alert('Details Submitted Successfully')
toast.success("Details Saved!!")
  // setSuccessMessage(true); // Set a state variable to manage the display of the success message
    navigate('/education', { state: { empId, jwtToken } });
  
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
    // setStatus((prevStatus) => !prevStatus);
    setToggleDisable(!toggleDisable);
  };
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
  return (
    <Container>
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
          {isApproved ==="REJECTED" && <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: "flex-end" }}
            onClick={handleEdit}
          >
            {toggleDisable ? "Edit":"Save"}
          </Button> }
          
         <form onSubmit={handleSubmit} style={{ width: "100%" }}>
         <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  }}
>
  <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
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
      disabled={isApproved === "APPROVED" ? true : toggleDisable}
    />
  </Box>
  <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
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
      disabled={isApproved === "APPROVED" ? true : toggleDisable}
    />
  </Box>
</Box>
           
<Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap", // Allow wrapping to next line if needed
  }}
>
  
  <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
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
      disabled={isApproved === "APPROVED" ? true : toggleDisable}
    />
  </Box>
  <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
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
      disabled={isApproved === "APPROVED" ? true : toggleDisable}
    />
  </Box>
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
                 disabled={isApproved === "APPROVED" ? true : toggleDisable}
               >
                 <MenuItem value="male">Male</MenuItem>
                 <MenuItem value="female">Female</MenuItem>
               </Select>
             </FormControl>
           </Box>
           <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap", // Allow wrapping to next line if needed
  }}
>
  <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
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
      disabled={isApproved === "APPROVED" ? true : toggleDisable}
    />
  </Box>
  <Box sx={{ mb: 2, width: "48%" }}> {/* Adjust width as needed */}
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
      disabled={isApproved === "APPROVED" ? true : toggleDisable}
    />
  </Box>
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
                 disabled={isApproved === "APPROVED" ? true : toggleDisable}
               />
             </FormControl>
           </Box>
           <Box
  sx={{
    display: "flex",
    justifyContent: "space-between", // Distribute space between the two boxes
    width: "100%", // Ensure full width
    flexWrap: "wrap", // Allow wrapping to next line if needed
  }}
>
  <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
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
        disabled={isApproved === "APPROVED" ? true : toggleDisable}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value="Single">Single</MenuItem>
        <MenuItem value="Married">Married</MenuItem>
      </Select>
    </FormControl>
  </Box>
  <Box sx={{ mb: 3, width: "48%" }}> {/* Adjust width as needed */}
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
        disabled={isApproved === "APPROVED" ? true : toggleDisable}
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
</Box>
           <Box
             sx={{
               display: "flex",
               justifyContent: "flex-end", // Align button to the right
             }}
           >
             {(isApproved === "REJECTED" || isApproved === "NOT_APPROVED") && (
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
