
// import axios from "axios";
// import React, { useState ,useEffect} from "react";
// import { useLocation,useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import {
//   Box,
//   Alert,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   FormControl,
  
// } from "@mui/material";

// export default function BankingView() {
//   const[bankName , setBankName]=useState("");
//   const[bankAccountNumber , setBankAccountNumber]=useState("");
//   const[ifsc , setIfsc]=useState("");
//   const[branchName , setBranchName]=useState("");
//   const[nameAsPerAdhar , setNameAsPerAdhar]=useState("");
//   const [status, setStatus] = useState("");
//   const [formData, setFormData] = useState({
//       bankName:"",
//       bankAccountNumber:"",
//       ifsc:"",
//       branchName:"",
//       nameAsPerAdhar:"",
//        status:"",
//   });
//   const navigate = useNavigate();
//   const username = localStorage.getItem('username');
//   const jwtToken = localStorage.getItem('jwtToken');
//   const empId = localStorage.getItem('empId');
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
//         const bankingResponse = await axiosInstance.get(`/fetchBankingDetails/${localStorage.getItem('empId')}`);
//         const { data } = bankingResponse;
//         setFormData(data.body);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
  
//     fetchData();
//   }, [empId, jwtToken]);


//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     if (
//       bankName === "" ||
//       bankAccountNumber === "" ||
//       ifsc === "" ||
//       branchName === "" ||
//       nameAsPerAdhar === ""
//     ) {
//       alert("All fields are required.");
//       return;
//     }

//     const axiosInstance = axios.create({
//       baseURL: "http://localhost:8080", // Your API base URL
//       headers: {
//         "Authorization": `Bearer ${jwtToken}`
//       }
//     });

//     try {

//       const response = await axiosInstance.post('/addBankingDetails', {
//         empId,
//         bankName,
//         accountNo:bankAccountNumber,
//         ifscCode:ifsc,
//         branchName,
//         nameOnAadharCard:nameAsPerAdhar,
//         status:true
//       });
//       console.log(response);
//       toast.success("Details Saved!!")

//       navigate('/experience',{state:{empId , jwtToken }});

//     } catch (error) {
//       alert(error);
      
//     }

//   };

//   const handleEdit = () => {
//     setStatus(!status);
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
//         Banking Details
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <Box sx={{ display: "flex", gap: "20px" }}>
//             <FormControl sx={{ flex: 1 }}>
//               <Typography variant="h6" component="h1" gutterBottom>
//                 Bank Name
//               </Typography>
//               <TextField
//                 label="Bank Name"
//                 name="BankName"
//                 value={status === true? formData.bankName:bankName}
//                 onChange={(event) => setBankName(event.target.value)}
//                 required
//                 disabled={status}
//               />
//             </FormControl>
//             <FormControl sx={{ flex: 1 }}>
//               <Typography variant="h6" component="h1" gutterBottom>
//                 Bank Account Number
//               </Typography>
//               <TextField
//                 label="Bank Account Number"
//                 name="BankAccountNumber"
//                 value={status === true? formData.accountNo:bankAccountNumber}
//                 onChange={(event) => setBankAccountNumber(event.target.value)}
//                 required
//                 disabled={status}
//               />
//             </FormControl>
//           </Box>
//           <Box sx={{ display: "flex", gap: "20px" }}>
//             <FormControl sx={{ flex: 1 }}>
//               <Typography variant="h6" component="h1" gutterBottom>
//                 IFSC Code
//               </Typography>
//               <TextField
//                 label="IFSC Code"
//                 name="IFSCODE"
//                 value={status === true? formData.ifscCode : ifsc}
//                 onChange={(event) => setIfsc(event.target.value)}
//                 required
//                 disabled={status}
//               />
//             </FormControl>
//             <FormControl sx={{ flex: 1 }}>
//               <Typography variant="h6" component="h1" gutterBottom>
//                 Branch Name
//               </Typography>
//               <TextField
//                 label="Branch Name"
//                 name="BranchName"
//                 value={status === true? formData.branchName:branchName}
//                 onChange={(event) => setBranchName(event.target.value)}
//                 required
//                 disabled={status}
//               />
//             </FormControl>
//           </Box>
//           <Typography variant="h6" component="h1" gutterBottom>
//             Name as per Aadhar
//           </Typography>
//           <TextField
//             label="Name as per Aadhar"
//             name="NameAsPerAdhar"
//             value={status === true? formData.nameOnAadharCard: nameAsPerAdhar}
//             onChange={(event) => setNameAsPerAdhar(event.target.value)}
//             required
//             disabled={status}
//           />
//           <Box
//           sx={{
//             display: "flex",
//             justifyContent: "flex-end", // Align button to the right
//           }}
//         >
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ alignSelf: "flex-end" }}
//             onClick={handleEdit}
//           >
//             {status ? "Save" : "View Details"}
//           </Button>
//           {!status && (
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{ alignSelf: "flex-end", ml: 1 }}
//             >
//               Save and Continue
//             </Button>
//           )}
//         </Box>
//         </Box>
//       </form>
//     </Container>
//   );
// }




import axios from "axios";
import React, { useState ,useEffect} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Alert,
  Button,
  Container,
  TextField,
  Typography,
  FormControl,
  
} from "@mui/material";
export default function BankingView() {
  const[bankName , setBankName]=useState("");
  const[bankAccountNumber , setBankAccountNumber]=useState("");
  const[ifsc , setIfsc]=useState("");
  const[branchName , setBranchName]=useState("");
  const[nameAsPerAdhar , setNameAsPerAdhar]=useState("");
  const [status, setStatus] = useState("");
  const [isApproved , setIsApproved ] = useState("");
  const [formData, setFormData] = useState({
      bankName:"",
      bankAccountNumber:"",
      ifsc:"",
      branchName:"",
      nameAsPerAdhar:"",
       status:"",
  });
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
        const bankingResponse = await axiosInstance.get(`/fetchBankingDetails/${localStorage.getItem('empId')}`);
        const isApprovedResponse = await axiosInstance.get(`/getUser/${username}`);
        setIsApproved(isApprovedResponse.data.isApproved);
        const { data } = bankingResponse;
        setFormData(data.body);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchData();
  }, [empId, jwtToken]);
  const handleSubmit = async(event) => {
    event.preventDefault();
    if (
      bankName === "" ||
      bankAccountNumber === "" ||
      ifsc === "" ||
      branchName === "" ||
      nameAsPerAdhar === ""
    ) {
      alert("All fields are required.");
      return;
    }
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080", // Your API base URL
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    try {
      const response = await axiosInstance.post('/addBankingDetails', {
        empId,
        bankName,
        accountNo:bankAccountNumber,
        ifscCode:ifsc,
        branchName,
        nameOnAadharCard:nameAsPerAdhar,
        status:true
      });
      console.log(response);
      toast.success("Details Saved!!")
      navigate('/experience',{state:{empId , jwtToken }});
    } catch (error) {
      alert(error);
      
    }
  };
  const handleEdit = () => {
    setStatus(!status);
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
        Banking Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <FormControl sx={{ flex: 1 }}>
              <Typography variant="h6" component="h1" gutterBottom>
                Bank Name
              </Typography>
              <TextField
                label="Bank Name"
                name="BankName"
                value={status === true? formData.bankName:bankName}
                onChange={(event) => setBankName(event.target.value)}
                required
                disabled={isApproved ==="APPROVED"?true:status}
              />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <Typography variant="h6" component="h1" gutterBottom>
                Bank Account Number
              </Typography>
              <TextField
                label="Bank Account Number"
                name="BankAccountNumber"
                value={status === true? formData.accountNo:bankAccountNumber}
                onChange={(event) => setBankAccountNumber(event.target.value)}
                required
                disabled={isApproved ==="APPROVED"?true:status}
              />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <FormControl sx={{ flex: 1 }}>
              <Typography variant="h6" component="h1" gutterBottom>
                IFSC Code
              </Typography>
              <TextField
                label="IFSC Code"
                name="IFSCODE"
                value={status === true? formData.ifscCode : ifsc}
                onChange={(event) => setIfsc(event.target.value)}
                required
                disabled={isApproved ==="APPROVED"?true:status}
              />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <Typography variant="h6" component="h1" gutterBottom>
                Branch Name
              </Typography>
              <TextField
                label="Branch Name"
                name="BranchName"
                value={status === true? formData.branchName:branchName}
                onChange={(event) => setBranchName(event.target.value)}
                required
                disabled={isApproved ==="APPROVED"?true:status}
              />
            </FormControl>
          </Box>
          <Typography variant="h6" component="h1" gutterBottom>
            Name as per Aadhar
          </Typography>
          <TextField
            label="Name as per Aadhar"
            name="NameAsPerAdhar"
            value={status === true? formData.nameOnAadharCard: nameAsPerAdhar}
            onChange={(event) => setNameAsPerAdhar(event.target.value)}
            required
            disabled={isApproved ==="APPROVED"?true:status}
          />
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
        </Box>
      </form>
    </Container>
  );
}