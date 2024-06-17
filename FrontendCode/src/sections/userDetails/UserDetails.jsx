import axios from "axios";
import {React ,useEffect,useState } from "react";
import { Modal, TextField } from '@mui/material'; // Ensure you import these components
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Box,
  Button,
  Container,
  Typography,
  IconButton

} from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import { PersonPin } from "@mui/icons-material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserDetails() {
  const [openRejectModal, setOpenRejectModal] = useState(false);
const [rejectComment, setRejectComment] = useState("");

  const [personal,setPersonal] = useState({});
  const [ educational , setEducational]= useState({});
  const [ banking , setBanking]= useState({});
  const [isApproval , setApproval]=useState("");
  const [documentsData, setDocumentsData] = useState([]);
  const [ experience, setExperience] = useState({});
  const [ yearofExperience , SetYearsOfExperience] = useState('');
  const [ jobTitle , setJobTitle] = useState('');
  const [previousCompany , setPreviousCompany]=useState('');
  const [ contactDetails,setContactDetails] = useState('');
  const [ approvedResponse , setApprovedResponse] = useState('');
  
  const navigate = useNavigate();
  const [fresher , setFresher] = useState("");
  const [documentImage, setDocumentImage] = useState("");
  const documentsNames = ["Aadhar Card", "Pan Card", "Passport size photograph","10th Marksheet","12th Marksheet","University Marksheet","Passbook/Cancelled Cheque"];

  // const docIds = localStorage.getItem("documentsId");
  // console.log(docIds);
  let docIds="";

  

  const location = useLocation();
  const {jwtToken , idToSend,username} = location.state;
  console.log(idToSend);
  console.log(jwtToken);
  console.log(username);

  const empId=idToSend;

  localStorage.setItem('isApproval',isApproval);


  const fetchUsersData = async () => {

    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080", // Your API base URL
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    try {
      // Make GET request to your API endpoint
      const personalResponse = await axiosInstance.get(`/fetchPersonalDetails/${empId}`);
      const educationalResponse = await axiosInstance.get(`/fetchEducationalDetails/${idToSend}`);
      const bankingResponse = await axiosInstance.get(`/fetchBankingDetails/${idToSend}`);
      const userDetials =  await axiosInstance.get(`/getUser/${username}`); 
      const status = await axiosInstance.get('/allEmployee');
      const approvedHere = await axiosInstance.get(`/getApprovalStatus/${idToSend}`);
      setApprovedResponse(approvedHere.data[0]);

      console.log(status)
      // console.log(userDetials.data.fresher);
      setFresher(userDetials.data.fresher);
      // console.log(userDetials.data.fresher);
      if(fresher===false){
       const experienceResponse = await axiosInstance.get(`/fetchWorkExperience/${idToSend}`);
      //  console.log(experienceResponse);
       SetYearsOfExperience(experienceResponse.data.yearsOfExperience);
       setContactDetails(experienceResponse.data.contactDetails);
       setJobTitle(experienceResponse.data.jobPosition);
       setPreviousCompany(experienceResponse.data.previousCompany);
       setExperience(experienceResponse.data);
      //  console.log(experience);
      }else{
        setExperience(null);
      }
      // console.log(experience);
      const employeeId = personalResponse.data.body.empId;
      // console.log(employeeId);

      
      // const experienceResponse = await axiosInstance.get(`fetchWorkExperience/${empId}`);
      // console.log(experienceResponse);
      // setExperience(experienceResponse.data);

      docIds = userDetials;
      console.log(docIds);
      console.log(docIds.data.documentMap);
      setDocumentsData(docIds.data.documentMap);

      setPersonal(personalResponse.data.body);
      setEducational(educationalResponse.data.body);
      setBanking(bankingResponse.data.body);
      
      // setDocumentsData(localStorage.getItem("documentsId"));
      // console.log(documentsData);


   
      // console.log(documentsResponse)
      // console.log(response.data);
      // console.log(response);
      // console.log(educationalResponse.data);
      // console.log(bankingResponse.data);
      
      // setUsersData(response.data);
      // console.log(usersData);
      // console.log(response.data[0].username);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  const handleDocClick = async (docId) => {
    try {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:8080", // Your API base URL
        headers: {
          "Authorization": `Bearer ${jwtToken}`
        }
      });
      
      // Make a GET request to download the document
      const response = await axiosInstance.get(`file/download/${docId}`, {
        responseType: 'blob'
      });

      const contentType = response.headers['content-type'];

      if (contentType === 'application/pdf') {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      } else {
        const imageUrl = URL.createObjectURL(response.data);
        setDocumentImage(imageUrl);
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };


  useEffect(() => {

    fetchUsersData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 

  const handleSubmit = (event) => {
    // event.preventDefault();

    // axios
    //   .post("/api/personal-details", formData)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const handleApprove = async() => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    try {
      const response = await axiosInstance.put(`/setApprovalStatus/${empId}?status=APPROVED&adminRejectionComment=""`);
      setApproval(response.data.isApproved);
      console.log(response);
      console.log(isApproval);
      toast.success('Application Approved!!');
      // alert('')
    } catch (error) {
      console.error(error);
      toast.error('Failed to Approve Application!');
    }
  };

  const handleReject = () => {
    setOpenRejectModal(true);
  };
  
  const handleRejectSubmit = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    try {
      const response = await axiosInstance.put(`/setApprovalStatus/${empId}?status=REJECTED&adminRejectionComment=${rejectComment}`);
      setApproval(response.data.isApproved);
      toast.success('Application Rejected!!');
      setOpenRejectModal(false);
    } catch (error) {
      console.error(error);
      toast.error('Failed to Reject Application!');
    }
  };
  
  const handleModalClose = () => {
    setOpenRejectModal(false);
  };
  
  // const handleReject = async() => {
  //   const axiosInstance = axios.create({
  //     baseURL: "http://localhost:8080",
  //     headers: {
  //       "Authorization": `Bearer ${jwtToken}`
  //     }
  //   });
  //   try {
  //     const response = await axiosInstance.put(`/setApprovalStatus/${empId}?status=REJECTED`);
  //     setApproval(response.data.isApproved);
  //     console.log(response.data);
  //     toast.success('Application Rejected!!');
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('Failed to Reject Application!');
  //   }
  // };

  const handleViewClick =async(documentId) => {

    console.log(documentId);
    try {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/file", // Your API base URL
        headers: {
          "Authorization": `Bearer ${jwtToken}`
        }
      });
      
      // Make a GET request to view the document
      const response = await axiosInstance.get(`/view/${documentId}`, {
        responseType: 'blob'
      });
      console.log(response);
  
      const contentType = response.headers['content-type'];
  
      if (contentType === 'application/pdf') {
        // If the document is a PDF, open it in a new tab
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      } else {
        // If it's an image or other format, handle accordingly
        const imageUrl = URL.createObjectURL(response.data);
        setDocumentImage(imageUrl);
        // Now you can display the image wherever you want in your UI
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            border: "2px solid #ccc",
            borderRadius: 3,
            boxShadow: 1,
            p: 4,
          }}
      
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Personal Details
        </Typography>
        <Box
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  First Name:
                </Typography>
                <Typography>{personal.firstName}</Typography>
              </Box>
              {/* Last Name */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Last Name:
                </Typography>
                <Typography>{personal.lastName}</Typography>
              </Box>
              {/* Email */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Email:
                </Typography>
                <Typography>{personal.emailId}</Typography>
              </Box>
              {/* Mobile Number */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Mobile Number:
                </Typography>
                <Typography>{personal.phoneNo}</Typography>
              </Box>
              {/* Gender */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Gender:
                </Typography>
                <Typography>{personal.gender}</Typography>
              </Box>
              {/* Date of Birth */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Date of Birth:
                </Typography>
                <Typography>{personal.dob}</Typography>
              </Box>
              {/* Place of Birth */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Place of Birth:
                </Typography>
                <Typography>{personal.placeOfBirth}</Typography>
              </Box>
              {/* Residential Address */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Residential Address:
                </Typography>
                <Typography>{personal.residentialAddress}</Typography>
              </Box>
              {/* Blood Group */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Blood Group:
                </Typography>
                <Typography>{personal.bloodGroup}</Typography>
              </Box>
              {/* Marital Status */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Marital Status:
                </Typography>
                <Typography>{personal.maritalStatus}</Typography>
              </Box>
            </Box>
          
          </form>
        </Box>
      

       <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Educational Details
        </Typography>
        <Box
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              {/* Educational Category */}
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Educational Category:
                </Typography>
                <Typography>{educational.educationalDegree}</Typography>
              </Box>           
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Field of specification:
                </Typography>
                <Typography>{educational.fieldOfSpecialization}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Cgpa:
                </Typography>
                <Typography>{educational.cgpa}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Start date:
                </Typography>
                <Typography>{educational.startDate}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                End date:
                </Typography>
                <Typography>{educational.endDate}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                University:
                </Typography>
                <Typography>{educational.institutionName}</Typography>
              </Box>
            </Box>
            
          </form>
        </Box>
       </Box>
       <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Banking Details
        </Typography>
        <Box
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Bank Name:
                </Typography>
                <Typography>{banking.bankName}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Bank Account Number:
                </Typography>
                <Typography>{banking.accountNo}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                IFSC Code:
                </Typography>
                <Typography>{banking.ifscCode}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Branch Name:
                </Typography>
                <Typography>{banking.branchName}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Name as per Aadhar:
                </Typography>
                <Typography>{banking.nameOnAadharCard}</Typography>
              </Box>
            </Box>
          
          </form>
        </Box>
       </Box>
       { experience && (<Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Experience Details
        </Typography>
        <Box
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Previous Company:
                </Typography>
                {/* (fresher === false && experience )?experience.fieldname:""; */}
                <Typography>{previousCompany}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Job Title:
                </Typography>
                <Typography>{jobTitle}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Year Of Service:
                </Typography>
                <Typography>{yearofExperience}</Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Contact Details :
                </Typography>
                <Typography>{contactDetails}</Typography>
              </Box>
              
            </Box>
          
          </form>
        </Box>
       </Box>)
       }
       <Box sx={{ mt: 5 }}>
        <Box>
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" component="h1" gutterBottom>
              Documents
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Aadhar Card:
                  <IconButton onClick={() => handleViewClick(documentsData.doc1)}>
                  <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Pan Card:
                  <IconButton onClick={() => handleViewClick(documentsData.doc2)}>
                  <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Passport size photograph:
                  <IconButton onClick={() => handleViewClick(documentsData.doc3)}>
                  <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  10th Marksheet:
                  <IconButton onClick={() => handleViewClick(documentsData.doc4)}>
                  <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  12th Marksheet:
                  <IconButton onClick={() => handleViewClick(documentsData.doc5)}>
                  <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  University Marksheet:
                  <IconButton onClick={() => handleViewClick(documentsData.doc6)}>
                  <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
              </Box>
              <Box sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Passbook/Cancelled Cheque:
                  <IconButton onClick={() => handleViewClick(documentsData.doc7)}>
                  <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
              </Box>
            {/* Display document names with view button
            {documentsData.map((docId, index) => (
              <Box key={index} sx={{ width: "50%", paddingRight: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {documentsNames[index]}:
                  <IconButton onClick={() => handleDocClick(docId)}>
                    <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
              </Box>
            ))} */}

            </Box>
            {/* Approve and Reject Buttons */}
            {(approvedResponse ==="REJECTED" || approvedResponse === "NOT_APPROVED") && 
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
              }}
            >
              <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={ handleApprove}>
                Approve
              </Button>
              <Button variant="contained" color="secondary" onClick={ handleReject}>
                Reject
              </Button>
            </Box>
             }
          </form>
        </Box>
      </Box>
      </Box>
      <Modal
  open={openRejectModal}
  onClose={handleModalClose}
  aria-labelledby="reject-modal-title"
  aria-describedby="reject-modal-description"
>
  <Box sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }}>
    <Typography id="reject-modal-title" variant="h6" component="h2">
      Reject Application
    </Typography>
    <TextField
      id="reject-modal-description"
      label="Reason for Rejection"
      multiline
      rows={4}
      fullWidth
      value={rejectComment}
      onChange={(e) => setRejectComment(e.target.value)}
      sx={{ mt: 2 }}
    />
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="contained" color="secondary" onClick={handleRejectSubmit}>
        Submit
      </Button>
      <Button variant="contained" color="primary" onClick={handleModalClose}>
        Cancel
      </Button>
    </Box>
  </Box>
</Modal>
    </Container>
  );
}