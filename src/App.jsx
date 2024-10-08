import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard';
import AddExpense from './components/expenses/addExpense';
import ExpensesList from './components/expenses/expensesList';
import UpdateExpense from './components/expenses/updateExpense';
// import { AuthProvider } from './context/AuthContext'; // Import the AuthContext
// import ProtectedRoute from './components/ProtectedRoute'; // Create a protected route

import Home from './pages/home';

const App = () => {
  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/update-Expense" element={<UpdateExpense />} />
        <Route path="/expenses" element={<ExpensesList />} />
      </Routes>
    </Router>
    // </AuthProvider>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/auth/login'; // Capitalized components
// import Register from './components/auth/Register';
// import Dashboard from './components/dashboard';
// import AddExpense from './components/expenses/addExpense';
// import ExpensesList from './components/expenses/expensesList';
// import UpdateExpense from './components/expenses/updateExpense';
// import { AuthProvider } from './context/AuthContext'; // Import the AuthContext
// import ProtectedRoute from './components/ProtectedRoute'; // Create a protected route
// import Home from './pages/home'; // Capitalized Home

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Protected Routes */}
//           <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//           <Route path="/add-expense" element={<ProtectedRoute><AddExpense /></ProtectedRoute>} />
//           <Route path="/update-expense" element={<ProtectedRoute><UpdateExpense /></ProtectedRoute>} />
//           <Route path="/expenses" element={<ProtectedRoute><ExpensesList /></ProtectedRoute>} />

//           {/* Optionally add a 404 route */}
//           <Route path="*" element={<div>404 Not Found</div>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
