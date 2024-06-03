
// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import {
//   FormControlLabel,
//   Checkbox,
//   TextField,
//   Button,
//   FormGroup,
//   Typography,
//   InputLabel,
// } from "@mui/material";
// import Box from "@mui/material/Box";
// import { useLocation,useNavigate } from "react-router-dom";

// export default function EmployeeExperienceForm() {
//   const [fresher, setFresher] = useState(false);
//   const nevigate = useNavigate();
//   const[previousCompany,SetPreviousCompany]=useState("");
//   const [ jobTitle , SetJobTitle]=useState("");
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
//   const[ yearsOfExperience , SetYearsOfExperience] = useState("");
//   const [ referenceContact, setReferenceContact] = useState("");
//   const navigate = useNavigate();
//   const empId = localStorage.getItem('empId');

//   const jwtToken =localStorage.getItem('jwtToken');
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
//         const experienceResponse = await axiosInstance.get(`/getUser/${localStorage.getItem('username')}`);
//         console.log(experienceResponse);
//         setFresher(experienceResponse.data.fresher);
//         console.log(fresher);
//         // setFormData(data.body);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchData();
//   }, [fresher]);
//   const handleSubmit = async(event) => {
//     event.preventDefault();
//    const axiosInstance = axios.create({
//     baseURL: "http://localhost:8080", // Your API base URL
//     headers: {
//       "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
//     }
    
//   });
//     try{
//       const response = await axiosInstance.post('/addWorkExperience', {
//         empId,
//         previousCompany,
//         jobPosition:jobTitle,
//         yearsOfExperience,
//         contactDetails:referenceContact,
//         status:true
//       });
//       console.log(response);
//       toast.success("Details Saved!!")
//       navigate('/UploadDocuments',{state:{empId ,jwtToken}});
//     }
//     catch(error){
//       alert(error);
//     }
//   };
//   // const [previousExperience, setPreviousExperience] = useState({
//   //   previousCompany: "",
//   //   jobTitle: "",
//   //   yearsOfExperience: "",
//   //   referenceContact: "",
//   // });
//   // const handleExperienceChange = (e) => {
//   //   setIsExperienced(e.target.checked);
//   // };
//   const handleContinue = (e) => {
//     navigate('/UploadDocuments');
//   };
//   return (
//     <Box>
//        <Slider {...settings} style={{ marginLeft: '-30px' }}>
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
//           <Typography variant="h4" component="h1" gutterBottom>
//             {fresher ?"Please ignore this section":"Previous Company Details"}
//           </Typography>
//         <form>
//           <div>
//             <InputLabel htmlFor="previousCompany" style={{ fontWeight: "bold",color:"black" }}>Previous Company:</InputLabel>
//             <TextField
//               id="previousCompany"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="previousCompany"
//               value={previousCompany}
//               onChange={(event) => SetPreviousCompany(event.target.value)}
//               placeholder="Enter previous company"
//               disabled={fresher}
//               required
//             />
//           </div>
//           <div>
//             <InputLabel htmlFor="jobTitle" style={{ fontWeight: "bold",color:"black" }}>Job Title/Position:</InputLabel>
//             <TextField
//               id="jobTitle"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="jobTitle"
//               value={jobTitle}
//               onChange={(event) => SetJobTitle(event.target.value)}
//               placeholder="Enter job title/position"
//               disabled={fresher}
//               required
//             />
//           </div>
//           <div>
//             <InputLabel htmlFor="yearsOfExperience" style={{ fontWeight: "bold",color:"black" }}>Years of Experience:</InputLabel>
//             <TextField
//               id="yearsOfExperience"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="yearsOfExperience"
//               type="number"
//               value={yearsOfExperience}
//               onChange={(event) => SetYearsOfExperience(event.target.value)}
//               placeholder="Enter years of experience"
//               disabled={fresher}
//               required
//             />
//           </div>
//           <div>
//             <InputLabel htmlFor="referenceContact" style={{ fontWeight: "bold",color:"black" }}>Contact Details for Reference:</InputLabel>
//             <TextField
//               id="referenceContact"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="referenceContact"
//               value={referenceContact}
//               onChange={(event) => setReferenceContact(event.target.value)}
//               placeholder="Enter contact details for reference"
//               disabled={fresher}
//               required
//             />
//           </div>
//         </form>
//         {fresher === false?
//         <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSubmit}
//       >
//         Save and Continue
//       </Button>:
//       <Button
//       variant="contained"
//       color="primary"
//       onClick={handleContinue}
//     >
//       Continue
//     </Button>
//         }
//     </Box>
//   );
// }


import React, { useState,useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  FormGroup,
  Typography,
  InputLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useLocation,useNavigate } from "react-router-dom";
export default function EmployeeExperienceForm() {
  const [fresher, setFresher] = useState(false);
  const [ isApproved,setIsApproved] = useState("");
  const nevigate = useNavigate();
  const[previousCompany,SetPreviousCompany]=useState("");
  const [ jobTitle , SetJobTitle]=useState("");
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
  const[ yearsOfExperience , SetYearsOfExperience] = useState("");
  const [ referenceContact, setReferenceContact] = useState("");
  const navigate = useNavigate();
  const empId = localStorage.getItem('empId');
  const jwtToken =localStorage.getItem('jwtToken');
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
        const experienceResponse = await axiosInstance.get(`/getUser/${localStorage.getItem('username')}`);
        console.log(experienceResponse);
        setIsApproved(experienceResponse.data.isApproved);
        setFresher(experienceResponse.data.fresher);
        console.log(fresher);
        // setFormData(data.body);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [fresher]);
  const handleSubmit = async(event) => {
    event.preventDefault();
   const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // Your API base URL
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
    }
    
  });
    try{
      const response = await axiosInstance.post('/addWorkExperience', {
        empId,
        previousCompany,
        jobPosition:jobTitle,
        yearsOfExperience,
        contactDetails:referenceContact,
        status:true
      });
      console.log(response);
      toast.success("Details Saved!!")
      navigate('/UploadDocuments',{state:{empId ,jwtToken}});
    }
    catch(error){
      alert(error);
    }
  };
  // const [previousExperience, setPreviousExperience] = useState({
  //   previousCompany: "",
  //   jobTitle: "",
  //   yearsOfExperience: "",
  //   referenceContact: "",
  // });
  // const handleExperienceChange = (e) => {
  //   setIsExperienced(e.target.checked);
  // };
  const handleContinue = (e) => {
    navigate('/UploadDocuments');
  };
  return (
    <Box>
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
          <Typography variant="h4" component="h1" gutterBottom>
            {fresher ?"Please ignore this section":"Previous Company Details"}
          </Typography>
        <form>
          <div>
            <InputLabel htmlFor="previousCompany" style={{ fontWeight: "bold",color:"black" }}>Previous Company:</InputLabel>
            <TextField
              id="previousCompany"
              variant="outlined"
              fullWidth
              margin="normal"
              name="previousCompany"
              value={previousCompany}
              onChange={(event) => SetPreviousCompany(event.target.value)}
              placeholder="Enter previous company"
              disabled={isApproved ==="APPROVED"?true:fresher}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="jobTitle" style={{ fontWeight: "bold",color:"black" }}>Job Title/Position:</InputLabel>
            <TextField
              id="jobTitle"
              variant="outlined"
              fullWidth
              margin="normal"
              name="jobTitle"
              value={jobTitle}
              onChange={(event) => SetJobTitle(event.target.value)}
              placeholder="Enter job title/position"
              disabled={isApproved ==="APPROVED"?true:fresher}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="yearsOfExperience" style={{ fontWeight: "bold",color:"black" }}>Years of Experience:</InputLabel>
            <TextField
              id="yearsOfExperience"
              variant="outlined"
              fullWidth
              margin="normal"
              name="yearsOfExperience"
              type="number"
              value={yearsOfExperience}
              onChange={(event) => SetYearsOfExperience(event.target.value)}
              placeholder="Enter years of experience"
              disabled={isApproved ==="APPROVED"?true:fresher}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="referenceContact" style={{ fontWeight: "bold",color:"black" }}>Contact Details for Reference:</InputLabel>
            <TextField
              id="referenceContact"
              variant="outlined"
              fullWidth
              margin="normal"
              name="referenceContact"
              value={referenceContact}
              onChange={(event) => setReferenceContact(event.target.value)}
              placeholder="Enter contact details for reference"
              disabled={isApproved ==="APPROVED"?true:fresher}
              required
            />
          </div>
        </form>
        {fresher === false?
        <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Save and Continue
      </Button>:
      <Button
      variant="contained"
      color="primary"
      onClick={handleContinue}
    >
      Continue
    </Button>
        }
    </Box>
  );
}