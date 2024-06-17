import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../sections/login/login.css';
import { Balance } from '@mui/icons-material';

  export default function WelcomePage() {
  const location = useLocation();
  const { username,empId,jwtToken } = location.state;
  const [daysSinceJoining, setDaysSinceJoining] = useState(0); // State to store the number of days since joining
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  console.log(jwtToken);
  const usernamee = localStorage.getItem('username');
  const jwtTokenn = localStorage.getItem('jwtToken');
  const empIdd = localStorage.getItem('empId');

  // Check if user is logged in
  useEffect(() => {
    if (!usernamee || !jwtTokenn || !empIdd) {
      navigate('/'); // Redirect to login if details are missing
    }
  }, [navigate]);
  useEffect(() => {
    // Function to calculate the number of days since joining
    const calculateDaysSinceJoining = () => {
      const joiningDate = new Date("june 12 2024"); // Change the joining date as needed
      const currentDate = new Date();
      const differenceInTime =  joiningDate.getTime() -currentDate.getTime() ;
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setDaysSinceJoining(differenceInDays);
    };
    calculateDaysSinceJoining(); // Calculate days since joining when component mounts
  }, []);
  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
        <header className="text-center mt-3 mb-0">
            <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/3f46748d-52fd-47dc-ba95-1172d582f4de-1706797958077.png" alt="logo" className="img-fluid" style={{ width: '600px', height: '90px' }} />
        </header>
        <div className="container" style={{ padding: '0', maxWidth: "75vw", height: "75vh", display: "flex", justifyContent: "space-around", border: '2px solid rgb(220, 179, 179)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', borderRadius: "20px",flexWrap:'wrap' }}>
            <div style={{ padding: '10', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                <div style={{ display: 'flex', height: '60%', width: "100%",justifyContent: 'space-evenly', alignItems: 'center',  marginTop:'90px'}}>
                    <div style={{position: "relative", top: "-10%", width:'60%',height:'10%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <h1 style={{margintop:'30px',color:'rgb(38,9,88)', fontSize:'3rem',fontFamily:"Poppins",position:"relative",margintop:"40px", fontWeight: "600"}}>Welcome!!</h1>
                    <h1 style={{color: 'rgb(38, 9, 88)',fontSize:'3rem',fontFamily:"Poppins", fontWeight: "600"}} >{username}</h1>
                        <p className="text-center" style={{fontFamily:"Poppins",fontWeight:"2000"}}><i>You have successfully logged in.</i></p>
                    </div>

                    <div style={{top:'10px', display:'flex',height: '110%', width: '45%',position:"relative"}}>
                        <img src="https://ouch-cdn2.icons8.com/PSRifbsbHgFROyIXGH2aXHbPTgYtt9R5RtyzdsNhsag/rs:fit:368:421/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTIz/L2Q2OTE1MjY2LWJl/MGYtNGIxZS04ODY3/LTc2YWIxNWY5MzAz/ZC5wbmc.png" alt='' />
                    </div>
                </div>
                {/* <div style={{ display: 'flex', flexDirection: 'row', height: '35%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    { <div className="Customstart">
                        <img src="https://th.bing.com/th?id=OIP.pkqcO3wUJHrG-yUHpsQvyAAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" srcSet="" />
                    </div> }
                    <div className="statusbar">
                        { <div className="bar">.</div>} 
                        { <div className="barstatus" style={{fontFamily:"poppins",fontWeight:500,color:'black'}}>
                                    {daysSinceJoining} Days to Go!!!!
                        </div>}
                    </div>
                    { <div className="Customend">
                    <img src="img2.png" alt="" srcSet="" />
                    </div> }
                </div> */}
            </div>
        </div>
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", marginTop: "8px" }}>
     <button type="submit" className="custom-button mb-5" style={{ fontFamily:"Poppins", color: "white", backgroundColor: "linear-gradient(90deg, #003A74, #006AD5)" }} onClick={() => { navigate("/dashboard", { state: { username,empId , jwtToken } }) }}>Get Started!</button>
   </div>

    </div>
    
);
}