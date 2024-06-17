import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';
import { account } from 'src/_mock/account';
import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';
import { NAV } from './config-layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { navConfigProfile, navConfigDocumentation, navConfigTraining } from './config-navigation';
// ----------------------------------------------------------------------
export default function Nav({ openNav, onCloseNav }) {
  const navigate = useNavigate();
  const pathname = usePathname();
  const [status, setStatus] = useState([]);
  let [personaldetailsStatus,setPersonalDetailsStatus]=useState('');
  let [educationdetailsStatus , setEducationDetailsStatus]=useState('');
  let [bankingdetailsStatus , setBankingStatus]=useState('');
  let [uploaddocumentsStatus , setuploaddocumentsStatus]=useState('');
  let [pastworkexperienceStatus , setworkStatus]=useState('');
  const fresher = localStorage.getItem('fresher');
  const username = localStorage.getItem('username');
  
  console.log(fresher);
  const upLg = useResponsive('up', 'lg');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const axiosInstance = axios.create({
  //         baseURL: "http://localhost:8080",
  //         headers: {
  //           "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
  //         }
  //       });
  //       const personalResponse = await axiosInstance.get(`/fetchPersonalDetails/${localStorage.getItem('empId')}`);
  //       const educationalResponse = await axiosInstance.get(`/fetchEducationalDetails/${localStorage.getItem('empId')}`);
  //       const bankingResponse = await axiosInstance.get(`/fetchBankingDetails/${localStorage.getItem('empId')}`);
  //       const experienceResponse = await axiosInstance.get(`/fetchWorkExperience/${localStorage.getItem('empId')}`);
  //       const UploadDocuments = await axiosInstance.get(`/getUser/${username}`);
  //       const docs = UploadDocuments ? UploadDocuments.data.documentMap:false;
    
  //       // console.log(educationalResponse);
  //       // console.log(personalResponse);
  //       // console.log(bankingResponse);
  //       // console.log(experienceResponse);
  //       const personaldetailsStatus = personalResponse.data.body ? personalResponse.data.body.status : false;
  //       setPersonalDetailsStatus(personaldetailsStatus);
  //       console.log(personaldetailsStatus);
  //       const educationdetailsStatus = educationalResponse.data.body ? educationalResponse.data.body.status : false;
  //       setEducationDetailsStatus(educationdetailsStatus);
  //       const bankingdetailsStatus = bankingResponse.data.body ? bankingResponse.data.body.status : false;
  //       setBankingStatus(bankingdetailsStatus);
  //       // const pastworkexperienceStatus = fresher === 'true' ? true : (experienceResponse.data && experienceResponse.data.status === true);
  //       // setworkStatus(pastworkexperienceStatus);
  //       const uploaddocuments = docs;
  //       setuploaddocumentsStatus(uploaddocuments);
        
  //       // const pastworkexperienceStatus = fresher === 'true' ? true : (experienceResponse.data && experienceResponse.data.status === true);
        
  //       // const pastworkexperienceStatus = fresher === true ? true:experienceResponse.data ?experienceResponse.data.status:false;
  //       // const pastworkexperienceStatus = fresher === true? true: experienceResponse ? experienceResponse.data.status :false;
  //       // console.log(personaldetailsStatus);
  //       // console.log(pastworkexperienceStatus);
        
  //       // console.log(documentsResponse);
  //       // const data = documentsResponse.data.documentMap;
  //       // const uploaddocumentsStatus = (data == null || data == {})?false:true;
        
      
  //       setStatus({
  //         personaldetailsStatus,
  //         educationdetailsStatus,
  //         bankingdetailsStatus,
  //         // pastworkexperienceStatus,
  //         uploaddocumentsStatus
          
  //       });
  //       console.log(status);
  //       localStorage.setItem('email', personalResponse.data.body.emailId);
  //     } catch (error) {
  //       console.error("Error fetching users data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [fresher]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosInstance = axios.create({
          baseURL: "http://localhost:8080",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
  
        // Fetch personal details
        const personalResponse = await axiosInstance.get(`/fetchPersonalDetails/${localStorage.getItem('empId')}`);
        personaldetailsStatus = personalResponse.data.body ? personalResponse.data.body.status : false;
  
        // Fetch educational details
        const educationalResponse = await axiosInstance.get(`/fetchEducationalDetails/${localStorage.getItem('empId')}`);
        educationdetailsStatus = educationalResponse.data.body ? educationalResponse.data.body.status : false;
  
        // Fetch banking details
        const bankingResponse = await axiosInstance.get(`/fetchBankingDetails/${localStorage.getItem('empId')}`);
        bankingdetailsStatus = bankingResponse.data.body ? bankingResponse.data.body.status : false;
  
        // Fetch upload documents
        const UploadDocuments = await axiosInstance.get(`/getUser/${username}`);
        const docs = UploadDocuments ? UploadDocuments.data.documentMap : false;
        uploaddocumentsStatus = docs ? true : false;
  
        // Set statuses
        setPersonalDetailsStatus(personaldetailsStatus);
        setEducationDetailsStatus(educationdetailsStatus);
        setBankingStatus(bankingdetailsStatus);
        setuploaddocumentsStatus(uploaddocumentsStatus);
       
  
        // If not a fresher, fetch experience data
        // if (fresher === 'false') {
        //   const experienceResponse = await axiosInstance.get(`/fetchWorkExperience/${localStorage.getItem('empId')}`);
        //   console.log(experienceResponse);
        //   pastworkexperienceStatus = experienceResponse.data ? experienceResponse.data.status === true : false;
        //   setworkStatus(pastworkexperienceStatus);
        // } else {
        //   // If fresher, set pastworkexperienceStatus to true
        //   pastworkexperienceStatus=true;
        //   setworkStatus(pastworkexperienceStatus);
        // }
        if (fresher === 'false') {
          const experienceResponse = await axiosInstance.get(`/fetchWorkExperience/${localStorage.getItem('empId')}`);
          console.log(experienceResponse);
          
          // Check if experienceResponse.data is not null or undefined
          if (experienceResponse.data) {
            // Assuming status is a boolean value, you can directly assign it
            pastworkexperienceStatus = experienceResponse.data.status === true;
            console.log(pastworkexperienceStatus);
          } else {
            // If experience data is not available, set pastworkexperienceStatus to false
            pastworkexperienceStatus = false;
          }
          
          setworkStatus(pastworkexperienceStatus);
        } else {
          // If fresher, set pastworkexperienceStatus to true
          pastworkexperienceStatus = true;
          setworkStatus(pastworkexperienceStatus);
        }
        setStatus({
                  personaldetailsStatus,
                  educationdetailsStatus,
                  bankingdetailsStatus,
                  pastworkexperienceStatus,
                  uploaddocumentsStatus
                  
                });
        
        console.log(status);
  
        // Set email in local storage
        localStorage.setItem('email', personalResponse.data.body.emailId);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };
  
    fetchData();
  }, [fresher, username]);
  
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);
  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src={account.boy} alt="photoURL" sx={{ mr: 1 }} />
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{localStorage.getItem('username')}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {localStorage.getItem('loginType')}
        </Typography>
      </Box>
    </Box>
  );
  const handleNavItemClick = (collapseId) => {
    const collapseElement = document.getElementById(collapseId);
    if (collapseElement) {
      const bsCollapse = new window.bootstrap.Collapse(collapseElement, {
        toggle: true,
      });
      bsCollapse.hide();
    }
  };
  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{
                height: "57px",
                background: 'linear-gradient(90deg, #003A74, #006AD5)',
                color: "white",
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              <img
                src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
                alt="pro"
                style={{ width: '24px', height: '24px', marginRight: '20px' }}
              />
              Profile
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{navConfigProfile.map((item) => (
              
              <NavItem
                key={item.title}
                item={item}
                status={status[`${item.title.toLowerCase().replace(/\s+/g, '')}Status`]}
                pathname={pathname}
                onClick={() => handleNavItemClick('flush-collapseOne')}
              />
              
              
            ))}</div>
          </div>
        </div>
        <div className="accordion-item" style={{ marginTop: "3px" }}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{
              height: "57px",
              background: 'linear-gradient(90deg, #003A74, #006AD5)',
              color: "white",
              borderRadius: '10px',
              padding: '10px 20px'
            }}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/015/081/211/non_2x/doc-file-format-3d-rendering-isometric-icon-png.png"
                alt="doc"
                style={{ width: '24px', height: '24px', marginRight: '8px' }}
              />
              Documentation
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{navConfigDocumentation.map((item) => (
              <NavItem
                key={item.title}
                item={item}
                status={status[`${item.title.toLowerCase().replace(/\s+/g, '')}Status`]}
                pathname={pathname}
                onClick={() => handleNavItemClick('flush-collapseTwo')}
              />
            ))}</div>
          </div>
        </div>
        <div className="accordion-item" style={{ marginTop: "3px" }}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{
              height: "57px",
              background: 'linear-gradient(90deg, #003A74, #006AD5)',
              color: "white",
              borderRadius: '10px',
              padding: '10px 20px'
            }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3482/3482505.png"
                alt="Training"
                style={{ width: '26px', height: '26px', marginRight: '8px' }}
              />
              Training
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"> {navConfigTraining.map((item) => (
              <NavItem
                key={item.title}
                item={item}
                status={status[`${item.title.toLowerCase().replace(/\s+/g, '')}Status`]}
                pathname={pathname}
                onClick={() => handleNavItemClick('flush-collapseThree')}
              />
            ))}</div>
          </div>
        </div>
        <button
          className="feedbackbtn"
          type="button"
          onClick={() => { navigate("/feedback") }} // Specify the URL of the feedback page
          style={{
            marginTop: "4px",
            width: "247px",
            height: "57px",
            background: 'linear-gradient(90deg, #003A74, #006AD5)',
            color: "white",
            borderRadius: '10px',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '20px',
            borderColor: "transparent"
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCBvXr8DFMyaeOeGyXPa6Lbsrb0G9WJxmag&usqp=CAU"
            alt="doc"
            style={{ width: '24px', height: '24px', marginRight: '8px' }}
          />
          Feedback
        </button>
      </div>
    </Stack>
  );
  const renderUpgrade = (
    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
        <Box component="img" sx={{ width: 100, position: 'absolute', top: -50 }} />
        <Box sx={{ textAlign: 'center' }}>{/* Your upgrade content */}</Box>
      </Stack>
    </Box>
  );
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4 }} />
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
      {renderUpgrade}
    </Scrollbar>
  );
  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'sticky',
            width: NAV.WIDTH,
            borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};
function NavItem({ item, status, pathname,onClick}) {
  const active = item.path === pathname;
  console.log(item.title," ",status);
  console.log(status);
  return (
    <Box sx={{ marginBottom: 1 }}> 
    <ListItemButton
      component={RouterLink}
      href={item.path}
      onClick={onClick}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'black',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        bgcolor: status === true ?'#C8E6C9': status === false ?'#FFCCCB':(theme) => alpha(theme.palette.grey[600], 0.08),
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
        }),
      }}
    >
      <Box component="span" sx={{ width: 26, height: 24, mr: 2 }}>
        {item.icon}
      </Box>
      <Box component="span">{item.title}</Box>
    </ListItemButton>
    </Box>
  );
}
NavItem.propTypes = {
  item: PropTypes.object,
  status: PropTypes.bool,
  pathname: PropTypes.string,
  onClick: PropTypes.func,
};