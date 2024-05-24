import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../sections/login/login.css';

export default function WelcomePage() {
  const location = useLocation();
  const { username,empId,jwtToken } = location.state;
  const [daysSinceJoining, setDaysSinceJoining] = useState(0); // State to store the number of days since joining
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  console.log(jwtToken);

  useEffect(() => {
    // Function to calculate the number of days since joining
    const calculateDaysSinceJoining = () => {
      const joiningDate = new Date("May 29, 2024"); // Change the joining date as needed
      const currentDate = new Date();
      const differenceInTime =  joiningDate.getTime() -currentDate.getTime() ;
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setDaysSinceJoining(differenceInDays);
    };

    calculateDaysSinceJoining(); // Calculate days since joining when component mounts
  }, []);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
        <header className="text-center mt-3 mb-0">
            <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/3f46748d-52fd-47dc-ba95-1172d582f4de-1706797958077.png" alt="logo" className="img-fluid" style={{ width: '400px', height: '80px' }} />
        </header>
        <div className="container" style={{ padding: '0', maxWidth: "75vw", height: "75vh", display: "flex", justifyContent: "space-around", border: '2px solid rgb(220, 179, 179)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', borderRadius: "20px",flexWrap:'wrap' }}>
            <div style={{ padding: '10', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                <div style={{ display: 'flex', height: '50%', width: "100%",justifyContent: 'space-evenly', alignItems: 'center',  marginTop:'7px'}}>
                    <div style={{width:'60%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <h1 style={{color:'rgb(38,9,88)', fontSize:'2rem'}}>Welcome!!</h1>
                     <h1 style={{color: 'rgb(38, 9, 88)',fontSize:'2rem',}} >{username}</h1>
                          <p className="text-center"><i>You have successfully logged in.</i></p>
                    </div>

                    <div style={{margintop:'10px', display:'flex'}}>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-security-8876026-7271013.png?f=webp" alt='' />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', height: '35%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>


                    <div className="Customstart">
                        <img src="https://www.shutterstock.com/image-vector/small-house-adjacent-street-vector-600nw-298129772.jpg" alt="" srcSet="" />
                    </div>
                    <div className="statusbar">
                        <div className="bar">.</div>
                        <div className="barstatus">
                                    {daysSinceJoining} Days to Go!!!!
                        </div>
                    </div>
                    <div className="Customend">
                    <img src="https://cdn-icons-png.freepik.com/512/6879/6879696.png" alt="" srcSet="" />
                    </div>
                </div>
            </div>
            
            

        </div>
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", marginTop: "8px" }}>
     <button type="submit" className="custom-button mb-5" style={{ color: "white", backgroundColor: "linear-gradient(90deg, #003A74, #006AD5)" }} onClick={() => { navigate("/personal", { state: { username,empId , jwtToken } }) }}>GetStarted!</button>
   </div>

    </div>
    
);
}