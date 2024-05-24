// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import './login.css'

// export default function LoginView() {
//   const [loginType, setLoginType] = useState('Employee');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailId, setEmailId] = useState('')
//   const navigate = useNavigate();

//   const handleLoginTypeChange = (role) => {
//     setLoginType(role);
//   }

//   const handleSubmit = async(e) => {
//     // e.preventDefault();
//     // if (loginType === "Employee") navigate("/welcome", { state: { username } });
//     // else navigate("/dashboard")
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           username,
//           password,
//           role: loginType
//         })
//       });
//       console.log(response);
//       const data = await response.json();
//       // Assuming the backend returns a JWT token upon successful login
//       if (response.ok) {
//         // Store the JWT token in local storage
//         localStorage.setItem('token', data.token);
//         if (loginType === "employee") {
//           navigate("/welcome", { state: { username } });
//         } else {
//           navigate("/dashboard");
//         }
//       } else {
//         // Handle login failure
//         alert(data.message); // Display error message returned from backend
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle network or other errors
//       alert('An error occurred. Please try again.');
//     }
//   };
  

//   const validatePassword = (e) => {
//     console.log(e)
//   }

//   const forgotPasswordHandle = () => {
//     document.getElementById('login-page').style = "opacity: 0.2"
//     document.getElementById('hidden-form').style = "visibility: visible"
//   }
//   return (
//     <div className="container border p-4" id="container" style={{ minHeight: '470px' }}>
//       <header className="text-center mt-3 mb-3 login-header">
//         <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/3f46748d-52fd-47dc-ba95-1172d582f4de-1706797958077.png" alt="logo" className="img-fluid" style={{ width: '400px', height: '80px' }} />

//       </header>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', visibility: 'hidden' }}>
//         <form id="hidden-form" >
//           <label htmlFor="email">Email Id</label>
//           <input type="email" style={{ width: '20rem' }} className="form-control" onChange={(event) => setEmailId(event.target.value)} id="email" name='email' required placeholder='Enter your email Id' />
//           <button type='button' className='btn btn-success' style={{ marginTop: '2rem' }}>Send Reset Link</button>
//         </form>
//       </div>
//       <div className="row" id='login-page'>
//         <div className="col-md-6">
//           <img src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-to-team-2931995-2459063.png?f=webp" alt="Welcome" className="img-fluid" style={{ width: '500px', height: '300px' }} />
//           {/* <div className='welcome-text'>
//           </div> */}
//         </div>
      
//         <div className="col-md-6">
//           <form onSubmit={handleSubmit} className='form-container'>
//             <div className="mb-3" style={{ margin: '0', padding: '0' }}>
//               <div className="embtn text-center mt-10 buttons-box">
//                 <button
//                   type="button"
//                   className={`btn btn-primary me-2 ${loginType === 'employee' ? 'active' : ''}`}
//                   onClick={() => handleLoginTypeChange('employee')}
//                   style={{ marginTop: '2rem' }}
//                 >
//                   Employee
//                 </button>
//                 <button
//                   type="button"
//                   className={`btn btn-primary ${loginType === 'admin' ? 'active' : ''}`}
//                   onClick={() => handleLoginTypeChange('admin')}
//                   style={{ marginTop: '2rem' }}
//                 >
//                   Admin
//                 </button>
//               </div>
//               <div className="mt-5 form-group">
//                 {loginType === "employee" && <div><label htmlFor="username">Username</label> <input type="text" className="form-control" onChange={(event) => setUsername(event.target.value)} id="username" name='username' required placeholder='Enter your name' /> </div>}
//                 {loginType === "admin" && <div> <label htmlFor="admin">Admin name</label> <input type="text" className="form-control" onChange={(event) => setUsername(event.target.value)} id="adminName" name='adminName' required placeholder='Enter admin name' /> </div>}
//               </div>
//               <div className="mb-3 form-group">
//                 <label htmlFor="password" onChange={(event) => setPassword(event.target.value)}>Password</label>
//                 <input type="password" className="form-control" id="password" name='password' required placeholder='Enter password' minLength={8} />
//               </div>
//               <div className="mb-1 text-center">
//                 <button type="submit" className="btn btn-primary mb-5" onClick={(e) => validatePassword(e)}>Login</button>
//               </div>
//               {/* <a style={{ cursor: 'pointer' }} onClick={forgotPasswordHandle}>Forgot Password?</a> */}
//               <button
//               type='button'
//                 style={{ cursor: 'pointer', border: 'none', background: 'none' }}
//                 onClick={forgotPasswordHandle}
//               >
//                 Forgot Password?
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <footer className="text-center mt-3">
//         <p>&copy; Bounteous X Accolite. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.css';


export default function LoginView() {
  const [loginType, setLoginType] = useState('employee');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();

  const handleLoginTypeChange = (role) => {
    if (role === "admin") {
      document.getElementById('admin').style = "border-radius: 15px"
      document.getElementById('admin').style = "background: linear-gradient(90deg, #003A74, #006AD5)"
      document.getElementById('admin').style = "color: white"

      document.getElementById('group').style = "border-radius: 15px"
      document.getElementById('group').style = "background: linear-gradient(90deg, #003A74, #006AD5)"
      document.getElementById('group').style = "color: white"



      // document.getElementById('employee').style="border-radius: 15px"
      // document.getElementById('employee').style="background-color: transparent;" 
      // document.getElementById('employee').style="color: black"


    }

    setLoginType(role);
  }

  const handleSubmit = async(e) => {
     // if (loginType === "Employee") navigate("/welcome", { state: { username } });
    // else navigate("/dashboard")
    e.preventDefault();
    try {
      console.log(username);
      console.log(password);
      console.log(loginType);
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
        // Handle login failure
        alert("Invalid Username/Password"); // Display error message returned from backend
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
          {/* <label htmlFor="email">Email Id</label> */}
          <input type="email" style={{ width: '20rem' }} className="form-control" onChange={(event) => setEmailId(event.target.value)} id="email" name='email' required placeholder='Email Id' />
          <button type='button' className='custom-button' style={{ marginTop: '2rem', marginLeft: '3.5rem' }}>Send Reset Link</button>
        </form>
      </div>
      <div className="row" id='login-page'>
        <div className="col-md-6">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-to-team-2931995-2459063.png?f=webp" alt="Welcome" className="img-fluid" style={{ width: '500px', height: '300px' }} />
          <div className='welcome-text'>
            <p><b>Welcome to Bounteous X Accolite !</b></p>
            <p style={{ fontWeight: "400", fontSize: "smaller", fontStyle: "normal" }}><i>Discover Boundless Digital Possibilities with us</i></p>
          </div>
        </div>

        <div className="col-md-6 mt-4">
          <form onSubmit={handleSubmit} className='form-container'>
            <div className="mb-4" style={{ margin: '0', padding: '0' }}>
              {/* <div className="embtn text-center mt-10 buttons-box">
                <button
                  type="button"
                  className={`btn btn-primary me-2 ${loginType === 'Employee' ? 'active' : ''}`}
                  onClick={() => handleLoginTypeChange('Employee')}
                  style={{ marginTop: '2rem' }}
                >
                  Employee
                </button>
                <button
                  type="button"
                  className={`btn btn-primary ${loginType === 'Admin' ? 'active' : ''}`}
                  onClick={() => handleLoginTypeChange('Admin')}
                  style={{ marginTop: '2rem' }}
                >
                  Admin
                </button>
              </div> */}
              <div className="text-center mt-10 login_register" id="group" style={{ marginTop: '2rem', padding: 0, boxSizing: 'border-box' }}>
                <button
                  type="button"
                  id="employee"
                  className={`btn ${loginType === 'employee' ? 'active' : ''}`}
                  onClick={() => handleLoginTypeChange('employee')}
                  style={{ background: loginType === 'employee' ? 'linear-gradient(90deg, #003A74, #006AD5)' : 'white', color: loginType === 'employee' ? 'white' : 'black' }}
                >
                  Employee
                </button>
                <button
                  type="button"
                  id="admin"
                  className={`btn ${loginType === 'admin' ? 'active' : ''}`}
                  onClick={() => handleLoginTypeChange('admin')}
                  style={{ background: loginType === 'admin' ? 'linear-gradient(90deg, #003A74, #006AD5)' : 'white', color: loginType === 'admin' ? 'white' : 'black' }}
                >
                  Admin
                </button>
              </div>

              <div className="mt-4 form-group">
                {loginType === "employee" && <div>
                  {/* <label htmlFor="username">Username</label>  */}
                  <input type="text" className="form-control" onChange={(event) => setUsername(event.target.value)} id="username" name='username' required placeholder='Username' /> </div>}
                {loginType === "admin" && <div>
                  {/* <label htmlFor="admin">Admin name</label> */}
                  <input type="text" className="form-control" onChange={(event) => setUsername(event.target.value)} id="adminName" name='adminName' required placeholder='AdminName' /> </div>}

              </div>
              <div className="mb-3 form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" className="form-control" id="password" name='password' onChange={(event) => setPassword(event.target.value)} required placeholder='Password' minLength={0} />
              </div>
              <div className="mb-1 text-center">
                <button type="submit" className="btn mb-5 mt-3"
                  style={{ background: 'linear-gradient(90deg, #003A74, #006AD5)', color: "white", width: "35%" }}
                  onClick={(e) => validatePassword(e)}>Login</button>
              </div>
              {/* <a style={{ cursor: 'pointer' }} onClick={forgotPasswordHandle}>Forgot Password?</a> */}
              <button
                type='button'
                style={{ cursor: 'pointer', border: 'none', background: 'none', textAlign: 'center', justifyContent: 'center'   }}
                onClick={forgotPasswordHandle}
                id='forgotButton'
              >
                <u>Forgot Password?</u>
              </button>
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