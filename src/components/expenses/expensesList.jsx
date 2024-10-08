import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/expenses', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setExpenses(res.data);
    };

    fetchExpenses();
  }, []);

  return (
    <div className="expenses-list">
      <div class="container pt-5 ">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-5 bg-light p-4 w-100">
            <div className="h2 text-center">Your Expenses</div>
            <p>Amount: $ </p>
          <p>Date: </p>

          <a href="/update-Expense"><button type="button" class="btn btn-outline-primary">Edit</button></a>
          <button type="button" class="btn btn-outline-danger">Delete</button>
           
          </div>
        </div>
      </div>
      
      {/* {expenses.map((expense) => (
        <div key={expense._id} className="expense-item">
          <h3>{expense.title} </h3>
          <p>Amount: ${expense.amount} </p>
          <p>Date: {expense.date}</p>
          <button type="button" class="btn btn-outline-primary"><a href="/add-expense"></a>Edit</button>
          <button type="button" class="btn btn-outline-danger">Delete</button>
        </div>
      ))} */}
    </div>
  );
};

export default ExpensesList;
