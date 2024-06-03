import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Replace with your actual authentication logic
  return isAuthenticated ? children : <Navigate to="/404" replace />;
};
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default ProtectedRoute;






// import React from 'react';
// import PropTypes from 'prop-types';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Replace with your actual authentication logic
//   return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ProtectedRoute;
