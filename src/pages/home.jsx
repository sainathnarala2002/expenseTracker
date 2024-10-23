import React from 'react'
import { Link } from 'react-router-dom'

function home() {
    return (
        <div className="d-flex justify-content-center align-items-center" >
            <div className="container pt-2 m-0 w-100">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-4 shadow text-center bg-white rounded p-2 w-100">
                        <div className="h3 my-4">
                            Welcome to Expense Tracker
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <Link className='text-success mx-md-3 mb-2 mb-md-0  text-decoration-none font-weight-bold fs-6 fs-md-5' to="/add-expense">Add Expense</Link>
                            <Link className='text-success mx-md-3 mb-2 mb-md-0 text-decoration-none font-weight-bold fs-6 fs-md-5' to="/expenses">Expense List</Link>
                        </div>
                        <div className="position-relative my-3 " style={{ height: '36px'}}> 
                            <small className="form-text text-muted position-absolute " style={{ bottom: '10px', left: '10px' }}>
                                Track and manage your expense effectively. Use the navigation links to add new expenses or view your expense history.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home

