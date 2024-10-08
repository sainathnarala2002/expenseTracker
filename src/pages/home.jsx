import React from 'react'
import { Link } from 'react-router-dom'

function home() {
    return (
        <div class="container pt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-5 text-center bg-light p-4 w-100">
                    <h3>Welcome to Expense Tracker</h3>
                    <Link className='text-success mx-3 text-decoration-none font-extrabold' to="/add-expense">Add Expense</Link>
                    <Link className='text-success mx-3 text-decoration-none font-extrabold' to="/expenses">Expense List</Link>
                    <div className="position-relative" style={{ height: '100px' }}> {/* Added height for positioning */}
                        <small className="form-text text-muted position-absolute" style={{ bottom: '10px', left: '10px' }}>
                            Track and manage your expense effectively. Use the navigation links to add new expenses or view your expense history.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home