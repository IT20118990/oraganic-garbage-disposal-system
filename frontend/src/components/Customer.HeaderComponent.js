import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from './Customer/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" className="fixed-top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/home">
              <img height="40"
                  width="40"
                src={logo}
                alt="Online Customer Portal "
              />
            </NavbarBrand>
            <NavbarBrand href="/">Organic Waste Connection </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span>Customer Service 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> Pickup Schedule
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>Pay My Bill
                    
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>Order
                    
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/login">
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-8">
                <h1>Customer Service</h1>
                <p>
                “Organic Waste Collection” is a  Open Online waste Management Platform
                that has recently been started by experts in the IT industry with 
                high demand, a significant customer base, and a reputation.Waste 
                Connections is one of the largest full-service provider of solid waste collection, providing non-hazardous solid waste collection, recycling and landfill disposal services to commercial, industrial,
                municipal and residential customers. 
                </p>
              </div>
              <div class="col-12 offset-sm-1 col-sm align-self-center">
                <img
                  src={logo}
                  alt="logo"
                  height="200"
                  width="250"
                  class="img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
