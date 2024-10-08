import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const AddExpense = () => {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: '',
    description: ''
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Get the expense ID from the URL

  useEffect(() => {
    if (id) {
      const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
      const expenseToEdit = expenses.find(exp => exp.id === id);
      
      if (expenseToEdit) {
        setExpense(expenseToEdit); // Prepopulate form if expense is found
      } else {
        toast.error('Expense not found!');
        navigate('/expenses'); // Redirect if expense doesn't exist
      }
    }
  }, [id, navigate]);

  // Handle input change and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value
    });
  };

  // Validate expense form inputs
  const validateForm = () => {
    const { title, amount, date, description } = expense;

    if (!title || !amount || !date || !description) {
      toast.error('All fields are required!');
      return false;
    }
    if (isNaN(amount) || Number(amount) <= 0) {
      toast.error('Amount must be a positive number!');
      return false;
    }
    if (!date || new Date(date) === 'Invalid Date') {
      toast.error('Please enter a valid date!');
      return false;
    }
    if (description.length < 5) {
      toast.error('Description must be at least 5 characters long!');
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    
    // If ID exists, update the existing expense
    if (id) {
      const updatedExpenses = expenses.map(exp => (exp.id === id ? expense : exp));
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      toast.success('Expense updated successfully!');
    } else {
      // If no ID, add a new expense
      const newExpense = { ...expense, id: Date.now().toString() }; // Generate a unique ID
      expenses.push(newExpense);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      toast.success('Expense added successfully!');
    }
    
    navigate('/expenses'); // Redirect to the expense list page after adding/updating
  };

  return (
    <div className="expense-form">
      <div className="container pt-5 ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 bg-light p-4 w-100">
            <div className="h2 text-center">{id ? 'Edit Expense' : 'Add New Expense'}</div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="expenseName">Expense Name: </label>
              <input
                type="text"
                name="title"
                className="form-control mb-3"
                id="expenseName"
                value={expense.title}
                onChange={handleChange}
                required
              />
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                name="amount"
                className="form-control mb-3"
                id="amount"
                value={expense.amount}
                onChange={handleChange}
                required
              />
              <label htmlFor="date">Select Date:</label>
              <input
                type="date"
                name="date"
                className="form-control mb-3"
                id="date"
                value={expense.date}
                onChange={handleChange}
                required
              />
              <label htmlFor="description">Description:</label>
              <textarea
                id='description'
                name="description"
                value={expense.description}
                onChange={handleChange}
                className='w-100 mb-3'
                required
              />
              <div className="d-grid gap-1">
                <button type="submit" className="btn btn-success">{id ? 'Update Expense' : 'Add Expense'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
