import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);
  // const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  const navigate = useNavigate();

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);


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
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <div className="container pt-5 ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 shadow bg-white rounded p-4 w-100">
            <div className="h2 text-center"> Expenses List</div>
            <ul className="list-group">
              {expenses.map((expense, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center border border-0 border-bottom">
                  <div className="row ">
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
