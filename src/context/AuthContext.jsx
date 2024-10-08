import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
export const AuthContext = createContext();  // Use named export

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // On initial render, check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      // Verify the token and get the user details
      axios.get('/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        localStorage.removeItem('token');
        setUser(null);
      })
      .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user); // Assuming the backend sends the user object
      navigate('/dashboard'); // Redirect to the dashboard or home page after login
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  // Register function
  const register = async (username, email, password, fullName) => {
    try {
      await axios.post('/api/auth/register', { username, email, password, fullName });
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
