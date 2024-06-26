




// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from "axios";
// import React, { useState,useEffect } from "react";
// import { useLocation,useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   Box,
//   Button,
//   Select,
//   MenuItem,
//   Container,
//   TextField,
//   Typography,
//   FormControl
// } from "@mui/material";
// export default function PersonalView() {
//   const [educationalCategory, setEducationalCategory] = useState('');
//   const [educationalDegree, setEducationalDegree] = useState('');
//   const [fieldOfSpecialization, setFieldOfSpecialization] = useState('');
//   const [ isApproved , setIsApproved] = useState("");
//   const [courseType, setCourseType] = useState('');
//   const [cgpa, setCgpa] = useState('');
//   const [startDate, setStartDate] = useState('');
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
//   const [endDate, setEndDate] = useState('');
//   const [university, setUniversity] = useState('');
//   const [status, setStatus] = useState("");
//   const [formData, setFormData] = useState({
//     educationalCategory:"",
//     educationalDegree:"",
//     fieldOfSpecialization:"",
//     courseType:"",
//     cgpa:"",
//     startDate:"",
//     endDate:"",
//     university:"",
//     status:"",
//   });
//   const navigate = useNavigate();
//   const username = localStorage.getItem('username');
//   const jwtToken = localStorage.getItem('jwtToken');
//   const empId = localStorage.getItem('empId');
//   console.log(username);
//   console.log(formData);
//   // Check if user is logged in
//   useEffect(() => {
//     if (!username || !jwtToken || !empId) {
//       navigate('/login'); // Redirect to login if details are missing
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
//         const educationalResponse = await axiosInstance.get(`/fetchEducationalDetails/${localStorage.getItem('empId')}`);
//         const isApprovedResponse = await axiosInstance.get(`/getUser/${username}`);
//         setIsApproved(isApprovedResponse.data.isApproved);
//         const { data } = educationalResponse;
//         setFormData(data.body);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
  
//     fetchData();
//   }, [empId, jwtToken]);
 
//   const handleSubmit = async(event) => {
//     event.preventDefault();
    
//    const startDateToSend = formatDate(startDate);
//    const endDateToSend = formatDate(endDate);
//    const axiosInstance = axios.create({
//     baseURL: "http://localhost:8080", // Your API base URL
//     headers: {
//       "Authorization": `Bearer ${jwtToken}`
//     }
//   });
//     try{
//       const response = await axiosInstance.post('/addEducationalDetails', {
//         empId,
//         educationalDegree,
//         fieldOfSpecialization,
//         courseType,
//         cgpa,
//         startDate:startDateToSend,
//         endDate:endDateToSend,
//         institutionName:university,
//         status:true
//       });
//       console.log(response);
//       toast.success('Details Saved!!');
//       navigate('/banking',{state:{empId , jwtToken }});
//     }
//     catch(error){
//       alert(error);
//     }
    
//   };
//   const handleEdit = () => {
//     setStatus((prevStatus) => !prevStatus);
//   };
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };
//   return (
//     <Container>
//       <Slider {...settings} style={{ marginLeft: '-30px' ,marginBottom:'30px'}}>
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
//       <Typography variant="h4" component="h1" gutterBottom>
//         Educational Details
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <Box sx={{ display: "flex", gap: "20px" }}>
//             <FormControl sx={{ flex: 1 }}>
//             <Typography variant="h6" component="h1" gutterBottom>
//               Educational Category 
//             </Typography>
//               <Select
//                 name="EducationalCategory"
//                 value={status === true ? formData.educationalCategory : educationalCategory}
//                 onChange={(event) => setEducationalCategory(event.target.value)}
//                 required
//                 disabled={isApproved ==="APPROVED"?true:status}
//               >
//                 <MenuItem value="Science">Science</MenuItem>
//                 <MenuItem value="Arts">Arts</MenuItem>
//                 <MenuItem value="Commerce">Commerce</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl sx={{ flex: 1 }}>
//             <Typography variant="h6" component="h1" gutterBottom>
//               Educational Degree
//             </Typography>
//               <Select
//                 name="EducationalDegree"
//                 value={status === true ? formData.educationalDegree : educationalDegree}
//                 onChange={(event) => setEducationalDegree(event.target.value)}
//                 required
//                 disabled={isApproved ==="APPROVED"?true:status}
//               >
//                 <MenuItem value="Bachelor">Bachelor</MenuItem>
//                 <MenuItem value="Master">Master</MenuItem>
//                 <MenuItem value="Doctorate">Doctorate</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//           <Box sx={{ display: "flex", gap: "20px" }}>
//           <FormControl sx={{ flex: 1 }}>
//            <Typography variant="h6" component="h1" gutterBottom>
//               Field of specification
//             </Typography>
//             <TextField
//               label="Field of Specialization"
//               name="FieldOfSpecialization"
//               value={status === true ? formData.fieldOfSpecialization : fieldOfSpecialization}
//               onChange={(event) => setFieldOfSpecialization(event.target.value)}
//               required
//               disabled={isApproved ==="APPROVED"?true:status}
//               sx={{ flex: 1 }}
//             />
//             </FormControl>
//             <FormControl sx={{ flex: 1 }}>
//             <Typography variant="h6" component="h1" gutterBottom>
//               Course Type
//             </Typography>
//               <Select
//                 name="CourseType"
//                 value={status === true ? formData.courseType : courseType}
//                 onChange={(event) => setCourseType(event.target.value)}
//                 required
//                 disabled={isApproved ==="APPROVED"?true:status}
//               >
//                 <MenuItem value="Full-time">Full-time</MenuItem>
//                 <MenuItem value="Part-time">Part-time</MenuItem>
//                 <MenuItem value="Online">Online</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//           <Typography variant="h6" component="h1" gutterBottom>
//               Cgpa
//             </Typography>
//           <TextField
//             label="CGPA"
//             name="Cgpa"
//             type="number"
//             value={status === true ? formData.cgpa : cgpa}
//             onChange={(event) => setCgpa(event.target.value)}
//             required
//             disabled={isApproved ==="APPROVED"?true:status}
//           />
//           <Box sx={{ display: "flex", gap: "20px" }}>
//           <FormControl sx={{ flex: 1 }}>
//             <Typography variant="h6" component="h1" gutterBottom>
//              Start date
//             </Typography>
//             <TextField
//               label=""
//               name="StartDate"
//               type="date"
//               value={status === true ? formData.startDate : startDate}
//               onChange={(event) => setStartDate(event.target.value)}
//               required
//               disabled={isApproved ==="APPROVED"?true:status}
//               sx={{ flex: 1 }}
//             />
//             </FormControl>
//             <FormControl sx={{ flex: 1 }}>
//             <Typography variant="h6" component="h1" gutterBottom>
//               End date
//             </Typography>
//             <TextField
//               label=""
//               name="EndDate"
//               type="date"
//               value={status ===true ? formData.endDate: endDate}
//               onChange={(event) => setEndDate(event.target.value)}
//               required
//               disabled={isApproved ==="APPROVED"?true:status}
//               sx={{ flex: 1 }}
//             />
//             </FormControl>
//           </Box>
//           <FormControl sx={{ flex: 1 }}>
//           <Typography variant="h6" component="h1" gutterBottom>
//               University
//             </Typography>
//             <Select
//               name="University"
//               value={status ===true ? formData.institutionName: university}
//               onChange={(event) => setUniversity(event.target.value)}
//               required
//               disabled={isApproved ==="APPROVED"?true:status}
//             >
//               <MenuItem value="Harvard University">Harvard University</MenuItem>
//               <MenuItem value="Stanford University">Stanford University</MenuItem>
//               <MenuItem value="MIT">MIT</MenuItem>
//             </Select>
//           </FormControl>
//           <Box
//         sx={{
//           display: "flex",
//           justifyContent: "flex-end", // Align button to the right
//         }}
//       >
//       <Button
//       variant="contained"
//       color="primary"
//       sx={{ alignSelf: "flex-end" }}
//       onClick={handleEdit}
//     >
//       {status ? "Save":"View Details"}
//     </Button>
//     {!status && (
//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         sx={{ alignSelf: "flex-end", ml: 1 }}
//       >
//         Save and Continue
//       </Button>
//         )}
//       </Box>
//       </Box>
//       </form>
//     </Container>
//   );
// }



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
export default function PersonalView() {
  const [educationalCategory, setEducationalCategory] = useState('');
  const [educationalDegree, setEducationalDegree] = useState('');
  const [fieldOfSpecialization, setFieldOfSpecialization] = useState('');
  const [ isApproved , setIsApproved] = useState("");
  const [courseType, setCourseType] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [ toggleDisable , setToggleDisable]= useState(false);
  const [startDate, setStartDate] = useState('');
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
  const [endDate, setEndDate] = useState('');
  const [university, setUniversity] = useState('');
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    educationalCategory:"",
    educationalDegree:"",
    fieldOfSpecialization:"",
    courseType:"",
    cgpa:"",
    startDate:"",
    endDate:"",
    university:"",
    status:"",
  });
  const navigate = useNavigate();
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
        const educationalResponse = await axiosInstance.get(`/fetchEducationalDetails/${localStorage.getItem('empId')}`);
        const isApprovedResponse = await axiosInstance.get(`/getUser/${username}`);
        setIsApproved(isApprovedResponse.data.isApproved);
        
        setStatus(educationalResponse.data.body.status);
        console.log(status);

        const { data } = educationalResponse;
        setFormData(data.body);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchData();
  }, [empId, jwtToken]);
 
  const handleSubmit = async(event) => {
    event.preventDefault();
    
   const startDateToSend = formatDate(startDate);
   const endDateToSend = formatDate(endDate);
   const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // Your API base URL
    headers: {
      "Authorization": `Bearer ${jwtToken}`
    }
  });
    try{
      const response = await axiosInstance.post('/addEducationalDetails', {
        empId,
        educationalDegree,
        fieldOfSpecialization,
        courseType,
        cgpa,
        startDate:startDateToSend,
        endDate:endDateToSend,
        institutionName:university,
        status:true
      });
      console.log(response);
      toast.success('Details Saved!!');
      navigate('/banking',{state:{empId , jwtToken }});
    }
    catch(error){
      alert(error);
    }
    
  };
  // const handleEdit = () => {
  //   setStatus((prevStatus) => !prevStatus);
  // };
  const handleEdit = () => {
    // setStatus((prevStatus) => !prevStatus);
    setToggleDisable(!toggleDisable);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <Container>
      <Slider {...settings} style={{ marginLeft: '-30px' ,marginBottom:'30px'}}>
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
      <Typography variant="h4" component="h1" gutterBottom>
        Educational Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {isApproved ==="REJECTED" && <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: "flex-end" }}
            onClick={handleEdit}
          >
           {toggleDisable ? "Edit" :"Save"} 
          </Button> }
          <Box sx={{ display: "flex", gap: "20px" }}>
            <FormControl sx={{ flex: 1 }}>
            <Typography variant="h6" component="h1" gutterBottom>
              Educational Category 
            </Typography>
              <Select
                name="EducationalCategory"
                value={status === true ? formData.educationalCategory : educationalCategory}
                onChange={(event) => setEducationalCategory(event.target.value)}
                required
                disabled={isApproved ==="APPROVED"?true:toggleDisable}
              >
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Arts">Arts</MenuItem>
                <MenuItem value="Commerce">Commerce</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
            <Typography variant="h6" component="h1" gutterBottom>
              Educational Degree
            </Typography>
              <Select
                name="EducationalDegree"
                value={status === true ? formData.educationalDegree : educationalDegree}
                onChange={(event) => setEducationalDegree(event.target.value)}
                required
                disabled={isApproved ==="APPROVED"?true:toggleDisable}
              >
                <MenuItem value="Bachelor">Bachelor</MenuItem>
                <MenuItem value="Master">Master</MenuItem>
                <MenuItem value="Doctorate">Doctorate</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
          <FormControl sx={{ flex: 1 }}>
           <Typography variant="h6" component="h1" gutterBottom>
              Field of specification
            </Typography>
            <TextField
              label="Field of Specialization"
              name="FieldOfSpecialization"
              value={status === true ? formData.fieldOfSpecialization : fieldOfSpecialization}
              onChange={(event) => setFieldOfSpecialization(event.target.value)}
              required
              disabled={isApproved ==="APPROVED"?true:toggleDisable}
              sx={{ flex: 1 }}
            />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
            <Typography variant="h6" component="h1" gutterBottom>
              Course Type
            </Typography>
              <Select
                name="CourseType"
                value={status === true ? formData.courseType : courseType}
                onChange={(event) => setCourseType(event.target.value)}
                required
                disabled={isApproved ==="APPROVED"?true:toggleDisable}
              >
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Online">Online</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Typography variant="h6" component="h1" gutterBottom>
              Cgpa
            </Typography>
          <TextField
            label="CGPA"
            name="Cgpa"
            type="number"
            value={status === true ? formData.cgpa : cgpa}
            onChange={(event) => setCgpa(event.target.value)}
            required
            disabled={isApproved ==="APPROVED"?true:toggleDisable}
          />
          <Box sx={{ display: "flex", gap: "20px" }}>
          <FormControl sx={{ flex: 1 }}>
            <Typography variant="h6" component="h1" gutterBottom>
             Start date
            </Typography>
            <TextField
              label=""
              name="StartDate"
              type="date"
              value={status === true ? formData.startDate : startDate}
              onChange={(event) => setStartDate(event.target.value)}
              required
              disabled={isApproved ==="APPROVED"?true:toggleDisable}
              sx={{ flex: 1 }}
            />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
            <Typography variant="h6" component="h1" gutterBottom>
              End date
            </Typography>
            <TextField
              label=""
              name="EndDate"
              type="date"
              value={status ===true ? formData.endDate: endDate}
              onChange={(event) => setEndDate(event.target.value)}
              required
              disabled={isApproved ==="APPROVED"?true:toggleDisable}
              sx={{ flex: 1 }}
            />
            </FormControl>
          </Box>
          <FormControl sx={{ flex: 1 }}>
          <Typography variant="h6" component="h1" gutterBottom>
              University
            </Typography>
            <Select
              name="University"
              value={status ===true ? formData.institutionName: university}
              onChange={(event) => setUniversity(event.target.value)}
              required
              disabled={isApproved ==="APPROVED"?true:toggleDisable}
            >
              <MenuItem value="Harvard University">Harvard University</MenuItem>
              <MenuItem value="Stanford University">Stanford University</MenuItem>
              <MenuItem value="MIT">MIT</MenuItem>
            </Select>
          </FormControl>
          <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Align button to the right
        }}
      >
      {/* <Button
      variant="contained"
      color="primary"
      sx={{ alignSelf: "flex-end" }}
      onClick={handleEdit}
    >
      {status ? "Save":"View Details"}
    </Button> */}
    {(isApproved === "REJECTED" || isApproved === "NOT_APPROVED")&& (
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
      </Box>
      </form>
    </Container>
  );
}