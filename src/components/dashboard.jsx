import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to your Expense Tracker</h2>
      <p>Total Expenses: $XXX</p>
      <Link to="/add-expense">Add New Expense</Link>
      <Link to="/expenses">View All Expenses</Link>
    </div>
  );
};

export default Dashboard;
