import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard'); // Redirect to the dashboard or welcome page
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="auth-form">

    <div class="container pt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-5 bg-light p-4">
          <h2>Login Page</h2>
          <form onSubmit={handleLogin}>
            <label for="username">Username: </label>
            <input type="text" class="form-control mb-3" id="floatingInputGroup1"/>
              <label for="floatingPassword">Password:</label>
              <input type="password" class="form-control mb-3" id="floatingPassword"/>
              <div className=" d-grid gap-1">
                <button type="submit" class="btn btn-success">Login</button>
              </div>
              </form>
              <p class="text-center pt-4">
          <a href="/register">
          New user? Register here</a>
        </p>
            </div>
        </div>
      </div>


     </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // import AuthContext from '../../context/AuthContext'; // Import AuthContext

// const Login = () => {
//   // const { login } = useContext(AuthContext); // Get the login function from AuthContext
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password); // Call the login function
//     } catch (err) {
//       setError('Invalid login credentials');
//     }
//   };

//   return (
//     <div className="auth-form">
//       <form onSubmit={handleLogin}>
//         <label htmlFor="email">Email:</label>
//         <input 
//           type="email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <label htmlFor="password">Password:</label>
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Login</button>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;
