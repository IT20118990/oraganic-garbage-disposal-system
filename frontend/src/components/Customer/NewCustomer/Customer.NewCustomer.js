import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import Form from '../Customer.Form';



function NewCustomer(){
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home"> <IoIosArrowForward /> Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/CustomerComponet">|  Customer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/NewCustomerCompt">|  New Customer Page</NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className="text-start m-3"> Add New Customer </h1>

            <Form />
            
        </React.Fragment>

    );
}

export default NewCustomer;