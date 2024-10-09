import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === credentials.username && storedUser.password === credentials.password) {
      toast.success('Login successful!');
      navigate('/home');
    } else {
      toast.error('Invalid credentials!');
    }
  };

  return (
    <div className="auth-form">

      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 shadow bg-white rounded p-4">
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="username"
                className="form-control mb-3"
                id="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingPassword">Password:</label>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                    name="password"
                    id='floatingPassword'
                    className="form-control"
                    placeholder=""
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    style={{
                      borderRight: 'none', // Remove right border
                    }}
                  />
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: 'white', // Match the input background
                      borderLeft: 'none', // Remove border
                    }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </div>
                </div>
              <div className=" d-grid gap-1">
                <button type="submit" className="btn btn-success">Login</button>
              </div>
            </form>
            <p className="text-center pt-4">
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
