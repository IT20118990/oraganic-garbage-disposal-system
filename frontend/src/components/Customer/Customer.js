import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import custom from './custom.jpg';
import AllCustomer from './Customer.All';


function Customer(){
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home"> <IoIosArrowForward /> Home</Link>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/CustomerComponet">|  Customer Page</NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className="text-start m-3"> Customer Page</h1>

            
            <div className="container mt-5">
                <div className="row row align-items-center">
                    <div className="col">
                        <div className="row my-2 row align-items-center">
                            <div className="col col-auto">
                                <Link className="btn btn-danger w-100 p-3 my-2" to="/NewCustomerCompt"> Start Service  </Link>
                            
                                <Link className="btn btn-primary w-100 p-3 my-2" to="/CompSearchExm"> Search Customer </Link>

                                <Link className="btn btn-success w-100 p-3 my-2" to="/GenReportComponet"> Generate Customer Mark Reports </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-8">
                        <img className="d-flex img-thumbnail " src={custom} alt="custom" />
                    </div>
                </div>
                <div className="row my-3">
                
                    <AllCustomer />
                </div>
                
            </div>
        
        </React.Fragment>
    );
}

export default Customer;