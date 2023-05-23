import React from "react";

import { FaSearch } from 'react-icons/fa';
import { HiDocumentReport } from 'react-icons/hi';
import { VscNewFile } from 'react-icons/vsc';

import {
  Nav,
  Navbar,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import GenReport from "./Customer.GenReport";

function RenderSideBar(props) {


  return (
 <div>
    
     <Navbar>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> agencies
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-briefcase" aria-hidden="true"></i> Lecturer
          </NavLink>
          <NavLink className="nav-link" to="/CustomerComponet">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Customers
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-book" aria-hidden="true"></i> Course
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i> Module
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-usd" aria-hidden="true"></i> Finance
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-trophy" aria-hidden="true"></i> Feedback
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-bell" aria-hidden="true"></i> Notices
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>

    <div className="nav flex-column">
          <NavLink className="nav-item" to="/NewCustomerCompt"> <VscNewFile /> New Customer </NavLink>
          <NavLink className="nav-item" to="/CompSearchExm"> <FaSearch /> Search Customer </NavLink>
          <NavLink className="nav-item" to="/GenReportComponet"> <HiDocumentReport /> Mark Reports </NavLink>
    </div>
 </div>
  );
}

const GenReportComponet = (props) => {
    console.log(props.match.params.ServiceID);
    const id = props.match.params.ServiceID;
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-2">
          <RenderSideBar />
        </div>
        <div className="col-12 col-sm-10">
            <div><GenReport name={id} /> </div>
        </div>
      </div>
    </div>
  );
};



export default GenReportComponet;