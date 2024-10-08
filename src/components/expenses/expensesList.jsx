import React from 'react';
import { useNavigate } from 'react-router-dom';
const ExpensesList = () => {
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  const navigate = useNavigate();

  // Handle navigation to the edit expense page
  const handleEdit = (id) => {
    navigate(`/edit-expense/${id}`); // Navigate to edit route with expense ID
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setExpenses(updatedExpenses);
    toast.success('Expense deleted!');
  };
  return (
    <div className="expenses-list">
      <div className="container pt-5 ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 bg-light p-4 w-100">
            <div className="h2 text-center">Your Expenses</div>
            <ul className="list-group">
              {expenses.map((expense, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="row">
                    <div className="text-success h5">{expense.title}</div>
                    <div className=""><span className="fw-bold">Amount:</span> ${expense.amount}</div>
                    <div className=""><span className="fw-bold">Date:</span> {expense.date}</div>
                  </div>

                  <div>
                    <button className="btn btn-warning btn-sm mx-2" onClick={() => handleEdit(expense.id) }>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-center pt-4">
              <a href="/home">Go back to Welcome Page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesList;
