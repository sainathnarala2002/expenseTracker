// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/register', { username, email, password, fullName });
//       if (response.status === 201) {
//         // Redirect to login page upon successful registration
//         navigate('/login');
//       }
//     } catch (err) {
//       setError('Registration failed');
//     }
//   };

//   return (
//     <div className="auth-form">
//       <div class="container pt-5">
//         <div class="row justify-content-center">
//           <div class="col-12 col-md-6 col-lg-5 bg-light p-4">
//             <h2>Registration</h2>
//             <form onSubmit={handleRegister}>
//               <label for="username">Username: </label>
//               <input type="text" class="form-control mb-3" value={username} onChange={(e) => setPassword(e.target.value)}
//                 required
//                 id="floatingInputGroup1" />
//               <label for="floatingPassword">Password:</label>
//               <input type="password" class="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)}
//                 required
//                 id="floatingPassword" />
//               <label for="exampleInputEmail1" class="form-label">Email:</label>
//               <input type="email" class="form-control mb-3" value={email} onChange={(e) => setPassword(e.target.value)}
//                 required
//                 id="exampleInputEmail1" aria-describedby="emailHelp" />
//               <label for="fullName">Full Name: </label>
//               <input type="text" class="form-control mb-3" id="fullName" value={fullName} onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <div className=" d-grid gap-1">
//                 <button type="submit" onClick={handleRegister} class="btn btn-primary">Register</button>
//               </div>
//             </form>
//             <p class="text-center pt-4">
//               <a href="/">
//                 Already have an account? Login here</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { username, email, password, fullName });
      if (response.status === 201) {
        // Redirect to login page upon successful registration
        navigate('/login');
      }
    } catch (err) {
      console.log('Err=>',err);
      setError('Registration failed. Please try again.',err);
      
    }
  };

  return (
    <div className="auth-form">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 bg-light p-4">
            <h2>Register</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleRegister}>
              <label htmlFor="username">Username:</label>
              <input 
                type="text"
                className="form-control mb-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="password">Password:</label>
              <input 
                type="password"
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="email">Email:</label>
              <input 
                type="email"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="fullName">Full Name:</label>
              <input 
                type="text"
                className="form-control mb-3"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center pt-4">
            <a href="/">Already have an account? Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
