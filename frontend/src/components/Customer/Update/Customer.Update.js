import React from 'react';
import {  NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import UpdateFormCustomer from '../Customer.UpdateForm';



const UpdateCustomer = (props) =>{

    const id = props.name;
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
                        <NavLink className="nav-link" to="/NewCustomerCompto">|  Modify Customer Page</NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className="text-start m-3"> Modify Customer </h1>

            <UpdateFormCustomer name={id} />
            
        </React.Fragment>

    );
}

export default UpdateCustomer;