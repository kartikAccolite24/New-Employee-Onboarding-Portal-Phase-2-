import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const VerifyEmail = () => {
  const [loginType, setLoginType] = useState('employee');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [register, setRegister] = useState(false);
  const [ otpRecivied , setOtpRecivied] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ changepassword,setChangePassword] = useState('');
 
  const handleSendOTP = async() => {
    //otp logic
    try {
      const response = await axios.post('http://localhost:8080/sendOtp', 
        email, // Assuming `email` contains the email address
      {
        headers: {
          'Content-Type': 'text/plain'
        }
      }
     
      );
      console.log(response);
      if(response.data){
        toast.success('OTP has been sent to your email address!');
        setOtpRecivied(response.data)
        setOtpSent(true);
      }
      else{
        toast.success('Invalid Email Address!');
        setOtpSent(false);
      }
      
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred. Please try again.');
    }
  
  };
  const handleVerifyOTP = () => {
    console.log(typeof otpRecivied);
    console.log(typeof otp);
    if(otpSent && String(otpRecivied) === otp){
      toast.success('OTP is verified');
      setOtpVerified(true);
    }
    else{
      toast.error('OTP Invalid');
      setOtpVerified(false);
    }
    
    
  };
  const handleSubmitChangePassword = async() => {
    const userData = [
      email,
      changepassword
    ];
  
    // Specify the headers to indicate JSON content type
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log(userData);
    const response = await axios.put('http://localhost:8080/setPassword', userData, config);
    console.log(response);
    if(changepassword === confirmPassword){
      toast.success('Password reset successfully!');
      navigate("/");
    }
    else{
      toast.error('Password does not match');
    }
    
  };
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password,
        role: loginType
      });
      localStorage.setItem("username",username);
      localStorage.setItem("password",password);
      localStorage.setItem("loginType",loginType);
      localStorage.setItem('empId',response.data.empId);
      localStorage.setItem('jwtToken',response.data.jwtToken);
      const empId = response.data.empId;
      const jwtToken = response.data.jwtToken;
      if (response.data.jwtToken) {
        localStorage.setItem('token', jwtToken);
        if (loginType === "employee") {
          navigate("/welcome", { state: { username, empId , jwtToken } });
        } else {
          navigate("/user",{state: { username, empId , jwtToken }});
        }
      } else {
        alert("Invalid Username/Password");
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  const validatePassword = (e) => {
    console.log(e)
  }
  const forgotPasswordHandle = () => {
    document.getElementById('login-page').style = "opacity: 0.2"
    document.getElementById('hidden-form').style = "display:'block"
  }
  return (
    <div className="container border p-4" id="container" style={{ minHeight: '470px' }}>
    <header className="text-center mt-3 mb-3 login-header">
      <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/3f46748d-52fd-47dc-ba95-1172d582f4de-1706797958077.png" alt="logo" className="img-fluid" style={{ width: '750px', height: '90px' }} />
    </header>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '300px' }}>
      <form id="hidden-form" style={{ display: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <input type="email" style={{ width: '20rem' }} className="form-control" onChange={(event) => setEmailId(event.target.value)} id="email" name='email' required placeholder='Email Id' />
        <button type='button' className='custom-button' style={{ marginTop: '2rem', marginLeft: '3.5rem' }}>Send Reset Link</button>
      </form>
    </div>
    <div className="row" id='login-page'>
      <div className="col-md-6">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-to-team-2931995-2459063.png?f=webp" alt="Welcome" className="img-fluid" style={{ width: '500px', height: '300px' }} />
        <div className='welcome-text'>
          <p style={{fontFamily:"Poppins", fontWeight: "400",fontSize:"25px"}}><b>Welcome to Bounteous X Accolite !</b></p>
          <p style={{  fontSize: "smaller", fontStyle: "normal" ,fontFamily:"Poppins",fontWeight:"50px"}}>Discover Boundless Digital Possibilities with us</p>
        </div>
      </div>
      <div className="col-md-6 mt-4" style={{verticalAlign:'center'}}>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className="mb-4" style={{ margin: '0', paddingTop: '60px',height:'350px',verticalAlign:'center' }}>
             
             
          {!otpSent ? (
                    <>
            <h2 className="card-title text-center mb-4 mt-4">Verify Email ID</h2>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Enter Email ID:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email ID"
                          required
                        />
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleSendOTP}
                          style={{background:'linear-gradient(90deg, #003A74, #006AD5)', color: "white"}}
                        >
                          Send OTP
                        </button>
                      </div>
                    </>
                  ) : !otpVerified ? (
                    <div style={{alignItems:'center'}}>
                      <>
                    <h2 className="card-title text-center mb-4 mt-4">OTP Verificaion</h2>
                    <div className="mb-3">
                      <label htmlFor="otp" className="form-label">Enter OTP:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        required
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={handleVerifyOTP}
                        style={{background:'linear-gradient(90deg, #003A74, #006AD5)', color: "white"}}
                      >
                        Verify
                      </button>
                    </div>
                  </>
                    </div>
                  ) : (
                    <>
                  
                      <h2 className="card-title text-center mb-4 mt-4">SET PASSWORD</h2>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Enter Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={changepassword}
                          onChange={(e) => setChangePassword(e.target.value)}
                          placeholder="Enter password"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm password"
                          required
                        />
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn"
                          onClick={handleSubmitChangePassword}
                          style={{background:'linear-gradient(90deg, #003A74, #006AD5)', color: "white"}}
                        >
                          Submit
                        </button>
                       
                      </div>
                    </>
                  )}
               
            </div>
          </form>
        </div>
      </div>
      <footer className="text-center mt-5">
        <p>&copy; Bounteous X Accolite. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default VerifyEmail;