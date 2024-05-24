// import axios from "axios";
// import React, { useState } from "react";

// import {
//   Box,
//   Button,
//   Container,
//   Typography,
//   FormControl,
  
// } from "@mui/material";

// export default function UploadDocumentView() {
//   const [formData, setFormData] = useState({});
//   const [bgColorIndex, setBgColorIndex] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios
//       .post("/api/personal-details", formData)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleChange = (event) => {
//     const { name, value, type } = event.target;

//     if (type === "file") {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: event.target.files[0],
//       }));
//     } else {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: value,
//       }));
//     }
//   };

//   const alternateBgColor = () => {
//     setBgColorIndex((prevIndex) => (prevIndex + 1) % 2);
//   };

//   const backgroundColors = ["  #53a8b6","#79c2d0"]; // Define alternate background colors

//   return (
//     <Container bgcolor={backgroundColors[0]}>
//       <form onSubmit={handleSubmit}>
//         <Box bgcolor={backgroundColors[0]}>
//         <Box p={2} mb={2} bgcolor={backgroundColors[0]} borderRadius={0}>
//           <Typography variant="h4" gutterBottom>
//             Personal Details
//           </Typography>
//           <Box p={2} bgcolor={backgroundColors[1]} borderRadius={0} display="flex" justifyContent="space-between">
//             <Typography variant="h6" gutterBottom>
//               Aadhaar Card
//             </Typography>
//             <FormControl fullWidth>
//               <input
//                 type="file"
//                 name="aadhar"
//                 accept=".pdf"
//                 required
//                 onChange={handleChange}
//               />
//             </FormControl>
//             <Typography variant="h6" gutterBottom>
//               PanCard
//             </Typography>
//             <FormControl fullWidth>
//               <input
//                 type="file"
//                 name="panCard"
//                 accept=".pdf"
//                 required
//                 onChange={handleChange}
//               />
//             </FormControl>
//           </Box>
//         </Box>

//         {/* Educational Details */}
//         <Box p={2} mb={2} bgcolor={backgroundColors[0]} borderRadius={0}>
//           <Typography variant="h4" gutterBottom>
//             Educational Details
//           </Typography>
//           <Box p={2} bgcolor={backgroundColors[1]} borderRadius={0} display="flex" justifyContent="space-between">
//             <Typography variant="h6" gutterBottom>
//               Highest Degree Certificate
//             </Typography>
//             <FormControl fullWidth>
//               <input
//                 type="file"
//                 name="Marksheet"
//                 accept=".pdf"
//                 required
//                 onChange={handleChange}
//               />
//             </FormControl>
//           </Box>
//         </Box>

//         {/* Previous Company Experience Details */}
//         <Box p={2} mb={2} bgcolor={backgroundColors[0]} borderRadius={0}>
//           <Typography variant="h4" gutterBottom>
//             Previous Company Experience Details
//           </Typography>
//           <Box p={2} bgcolor={backgroundColors[1]} borderRadius={0} display="flex" justifyContent="space-between">
//             <Typography variant="h6" gutterBottom>
//               Experience Letter(s) from previous Employers
//             </Typography>
//             <FormControl fullWidth>
//               <input
//                 type="file"
//                 name="letter"
//                 accept=".pdf"
//                 required
//                 onChange={handleChange}
//               />
//             </FormControl>
//           </Box>
//         </Box>

//         {/* Bank Details */}
//         <Box p={2} mb={2} bgcolor={backgroundColors[0]} borderRadius={0}>
//           <Typography variant="h4" gutterBottom>
//             Bank Details
//           </Typography>
//           <Box p={2} bgcolor={backgroundColors[1]} borderRadius={0} display="flex" justifyContent="space-between">
//             <Box flexGrow={1} mr={2}>
//               <Typography variant="h6" gutterBottom>
//                 PassBook/Cancelled Cheque
//               </Typography>
//               <FormControl fullWidth>
//                 <input
//                   type="file"
//                   name="Cheque"
//                   accept=".pdf"
//                   required
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box flexGrow={1} ml={2}>
//               <Typography variant="h6" gutterBottom>
//                 Previous Employment Salary Proofs (3 Months)
//               </Typography>
//               <FormControl fullWidth>
//                 <input
//                   type="file"
//                   name="SalaryProof"
//                   accept=".pdf"
//                   required
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//           </Box>
//         </Box>

//         {/* Signed Documents */}
//         <Box p={2} mb={2} bgcolor={backgroundColors[bgColorIndex]} borderRadius={0}>
//           <Typography variant="h4" gutterBottom>
//             Signed Documents
//           </Typography>
//           <Box p={2} bgcolor={backgroundColors[1]} borderRadius={0} display="flex" justifyContent="space-between">
//             <Box flexGrow={1} mr={2}>
//               <Typography variant="h6" gutterBottom>
//                 NDA
//               </Typography>
//               <FormControl fullWidth>
//                 <input
//                   type="file"
//                   name="NDA"
//                   accept=".pdf"
//                   required
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box flexGrow={1} mx={2}>
//               <Typography variant="h6" gutterBottom>
//                 BGV
//               </Typography>
//               <FormControl fullWidth>
//                 <input
//                   type="file"
//                   name="BGV"
//                   accept=".pdf"
//                   required
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box flexGrow={1} ml={2}>
//               <Typography variant="h6" gutterBottom>
//                 LOA
//               </Typography>
//               <FormControl fullWidth>
//                 <input
//                   type="file"
//                   name="LOA"
//                   accept=".pdf"
//                   required
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//           </Box>
//           <Box p={2} bgcolor={backgroundColors[1]} borderRadius={0} display="flex" justifyContent="center">
//             <Box flexGrow={1} mr={2}>
//               <Typography variant="h6" gutterBottom>
//                 Standard of Conduct
//               </Typography>
//               <FormControl fullWidth>
//                 <input
//                   type="file"
//                   name="SOCD"
//                   accept=".pdf"
//                   required
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//           </Box>
//         </Box>
      
//         {/* Submit button */}
//         <Box p={2} display="flex" justifyContent="flex-end">
//         <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             style={{ position: 'absolute', bottom: '20px', right: '20px' }}
//           >
//             Save and Continue
//           </Button>
//         </Box>
//       </Box>
//       </form>
//     </Container>
//   );
// }


import axios from "axios";
import React, { useState } from "react";
import DashboardLayout from 'src/layouts/dashboard'
import {
  Box,
  Button,
  Container,
  Typography,
  FormControl,
} from "@mui/material";
import { AddBox } from "@mui/icons-material";

export default function UploadDocumentView() {
  const [formData, setFormData] = useState({});
  const [bgColorIndex, setBgColorIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/personal-details", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: event.target.files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
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
    <div style={{marginTop:"100px" , width:'85%'}}><Container bgcolor={backgroundColors[0]}>
      <form onSubmit={handleSubmit}>
        <Box p={2} mb={2} bgcolor={backgroundColors[0]} borderRadius={0}>
          <Typography variant="h4" gutterBottom>
            Upload Documents
          </Typography>
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
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
                  accept=".pdf"
                  required
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
          </Box>
          </Box>
      
        <Box p={2} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary" onClick={alternateBgColor}>
            Save and Continue
          </Button>
        </Box>
      
      </form>
    </Container>
    </div></div>
  );
}