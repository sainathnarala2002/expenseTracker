import React,{useState} from 'react'
import axios from 'axios';

const updateExpense = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setdate] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            await axios.post('/api/expenses', {
                title, amount, category, description
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Redirect to expenses list after adding
        } catch (err) {
            setError('Failed to add expense');
        }
    };

    return (
        <div className="expense-form">
            <div class="container pt-5 ">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-5 bg-light p-4 w-100">
                        <div className="h2 text-center">Update Expense</div>
                        <form>
                            <label for="expenseName">Expense Name: </label>
                            <input type="text" class="form-control mb-3" id="expenseName" placeholder="" />
                            <label for="amount">Amount:</label>
                            <input type="number" class="form-control mb-3" id="amount" name="amount" placeholder="" value={amount} onChange={(e) => setAmount(e.target.value)} min="0" step="1" />
                            <label for="date">Select Date:</label>
                            <div class="input-group">
                                <input type="date" class="form-control mb-3" id="date" name="date" placeholder="Choose a date" />
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <label for="description">Description:</label>
                            <textarea
                                id='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className='w-100 mb-3'
                            />

                            <div className=" d-grid gap-1">
                                <button type="submit" class="btn btn-success">Update Expense</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default updateExpense;