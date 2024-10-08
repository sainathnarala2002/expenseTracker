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
                    <div className='fs-6 '>Manage and praticpate in polls with ease. Use the navigation links to create new polls or view and vote in existing ones</div>
                </div>
            </div>
        </div>
    )
}

export default home