// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import AuthContext from '../context/AuthContext'; // Import AuthContext

// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   // While loading user data, show a loading spinner or null
//   if (loading) return <div>Loading...</div>;

//   // If the user is not logged in, redirect them to the login page
//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   // If the user is logged in, render the children components
//   return children;
// };

// export default ProtectedRoute;

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Adjust path based on your structure

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/" />;
  }

  // Render the child component if user is authenticated
  return children;
};

export default ProtectedRoute;
