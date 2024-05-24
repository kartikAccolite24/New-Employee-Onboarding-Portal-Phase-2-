// import React, { useState } from "react";
// import {
//   FormControlLabel,
//   Checkbox,
//   TextField,
//   Button,
//   FormGroup,
// } from "@mui/material";
// import Box from "@mui/material/Box";

// export default function EmployeeExperienceForm() {
//   const [isExperienced, setIsExperienced] = useState(false);
//   const [previousExperience, setPreviousExperience] = useState({
//     previousCompany: "",
//     jobTitle: "",
//     yearsOfExperience: "",
//     referenceContact: "",
//   });

//   const handleExperienceChange = (e) => {
//     setIsExperienced(e.target.checked);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPreviousExperience((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <Box>
//       <FormGroup>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={isExperienced}
//               onChange={handleExperienceChange}
//             />
//           }
//           label="Do you have any Work Experience?"
//         />
//       </FormGroup>
//       {isExperienced && (
//         <form>
//           <div>
//             <label htmlFor="previousCompany" style={{ fontWeight: "bold" }}>
//               Previous Company:
//             </label>
//             <TextField
//               id="previousCompany"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="previousCompany"
//               value={previousExperience.previousCompany}
//               onChange={handleChange}
//               placeholder="Enter previous company"
//             />
//           </div>
//           <div>
//             <label htmlFor="jobTitle" style={{ fontWeight: "bold" }}>
//               Job Title/Position:
//             </label>
//             <TextField
//               id="jobTitle"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="jobTitle"
//               value={previousExperience.jobTitle}
//               onChange={handleChange}
//               placeholder="Enter job title/position"
//             />
//           </div>
//           <div>
//             <label htmlFor="yearsOfExperience" style={{ fontWeight: "bold" }}>
//               Years of Experience:
//             </label>
//             <TextField
//               id="yearsOfExperience"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="yearsOfExperience"
//               type="number"
//               value={previousExperience.yearsOfExperience}
//               onChange={handleChange}
//               placeholder="Enter years of experience"
//             />
//           </div>
//           <div>
//             <label htmlFor="referenceContact" style={{ fontWeight: "bold" }}>
//               Contact Details for Reference:
//             </label>
//             <TextField
//               id="referenceContact"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="referenceContact"
//               value={previousExperience.referenceContact}
//               onChange={handleChange}
//               placeholder="Enter contact details for reference"
//             />
//           </div>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             style={{ position: "absolute", bottom: "20px", right: "20px" }}
//           >
//             Save and Continue
//           </Button>
//         </form>
//       )}
//     </Box>
//   );
// }


import React, { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  FormGroup,
  InputLabel,
} from "@mui/material";
import Box from "@mui/material/Box";

export default function EmployeeExperienceForm() {
  const [isExperienced, setIsExperienced] = useState(false);
  const [previousExperience, setPreviousExperience] = useState({
    previousCompany: "",
    jobTitle: "",
    yearsOfExperience: "",
    referenceContact: "",
  });

  const handleExperienceChange = (e) => {
    setIsExperienced(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreviousExperience((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={isExperienced}
              onChange={handleExperienceChange}
            />
          }
          label="Do you have any Work Experience?"
        />
      </FormGroup>
      {isExperienced && (
        <form>
          <div>
            <InputLabel htmlFor="previousCompany" style={{ fontWeight: "bold" }}>Previous Company:</InputLabel>
            <TextField
              id="previousCompany"
              variant="outlined"
              fullWidth
              margin="normal"
              name="previousCompany"
              value={previousExperience.previousCompany}
              onChange={handleChange}
              placeholder="Enter previous company"
            />
          </div>
          <div>
            <InputLabel htmlFor="jobTitle" style={{ fontWeight: "bold" }}>Job Title/Position:</InputLabel>
            <TextField
              id="jobTitle"
              variant="outlined"
              fullWidth
              margin="normal"
              name="jobTitle"
              value={previousExperience.jobTitle}
              onChange={handleChange}
              placeholder="Enter job title/position"
            />
          </div>
          <div>
            <InputLabel htmlFor="yearsOfExperience" style={{ fontWeight: "bold" }}>Years of Experience:</InputLabel>
            <TextField
              id="yearsOfExperience"
              variant="outlined"
              fullWidth
              margin="normal"
              name="yearsOfExperience"
              type="number"
              value={previousExperience.yearsOfExperience}
              onChange={handleChange}
              placeholder="Enter years of experience"
            />
          </div>
          <div>
            <InputLabel htmlFor="referenceContact" style={{ fontWeight: "bold" }}>Contact Details for Reference:</InputLabel>
            <TextField
              id="referenceContact"
              variant="outlined"
              fullWidth
              margin="normal"
              name="referenceContact"
              value={previousExperience.referenceContact}
              onChange={handleChange}
              placeholder="Enter contact details for reference"
            />
          </div>
        </form>
      )}
      <Button
        variant="contained"
        color="primary"
        
      >
        Save and Continue
      </Button>
    </Box>
  );
}
