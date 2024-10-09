import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    fullName: '',
  });

  const [passwordValidity, setPasswordValidity] = useState({
    minLength: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    if (name === 'password') {
      validatePassword(value);
    }
  };

  // Validate password criteria
  const validatePassword = (password) => {
    setPasswordValidity({
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*]/.test(password)
    });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const { username, password, email, fullName } = user;

    // Destructure passwordValidity state
    const { minLength, hasUppercase, hasNumber, hasSpecialChar } = passwordValidity;

    if (username === '' || password === '' || email === '' || fullName === '') {
      toast.error('All fields are required!');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Invalid email format!');
      return false;
    }

    // Ensure all password criteria are met
    if (!(minLength && hasUppercase && hasNumber && hasSpecialChar)) {
      toast.error('Password does not meet the requirements.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;


    // Store user in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.removeItem('expenses');
    toast.success('Registration successful!');
    navigate('/');
  };
  return (
    <div className="auth-form">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 shadow rounded bg-white p-4">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                className="form-control mb-3"
                value={user.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password:</label>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={user.password}
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

                <small className="form-text text-muted">
                  Password must meet the following requirements:
                </small>
                <ul className="list-unstyled">
                  <li className={passwordValidity.minLength ? 'text-success' : 'text-danger'}>
                    At least 8 characters long
                  </li>
                  <li className={passwordValidity.hasUppercase ? 'text-success' : 'text-danger'}>
                    Contains at least one uppercase letter
                  </li>
                  <li className={passwordValidity.hasNumber ? 'text-success' : 'text-danger'}>
                    Contains at least one number
                  </li>
                  <li className={passwordValidity.hasSpecialChar ? 'text-success' : 'text-danger'}>
                    Contains at least one special character (!@#$%^&*)
                  </li>
                </ul>
              </div>

              <label htmlFor="email ">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                value={user.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                name="fullName"
                className="form-control mb-3"
                value={user.fullName}
                onChange={handleChange}
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
      </div >
    </div >
  );
};

export default Register;
