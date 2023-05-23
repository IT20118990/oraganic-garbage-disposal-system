import React, { Component } from "react";
import Home from "./Customer.HomeComponent";
import Header from "./Customer.HeaderComponent";
import Footer from "./Customer.FooterComponent";
import Menu from "./Customer.MenuComponent";
import StudentList from "./Customer.StudentComponent";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ITEMS } from "../shared/Customer.functionItems";
import { agencies } from "../shared/Customer.studentList";
import CustomerComponet from "./Customer/Customer.Componet";
import NewCustomerCompt from "./Customer/NewCustomer/Customer.NewCustomerCompt";
import CustomerUpdateComponet from "./Customer/Update/CustomerUpdateComponet";
import GenReportComponet from "./Customer/GenReport/Customer.GenReportComponet";
import CompSearchExm from "./Customer/SearchCustomer/Customer.CompSearchCustomer";
import ComponetAddMark from "./Customer/AddMark/Customer.ComponetAddMark";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
      agencies: agencies,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <BrowserRouter>
          <Header />
          
          <Switch>
            <Route
              exact
              path="/menu"
              component={() => <Menu items={this.state.items} />}
            />
            <Route
              exact
              path="/studentList"
              component={() => <StudentList agencies={this.state.agencies} />}
            />
            <Route path="/CustomerComponet">
              <CustomerComponet />
            </Route>
            <Route path="/NewCustomerCompt">
              <NewCustomerCompt />
            </Route>
            <Route path="/CustomerUpdateComponet/:ServiceID" component={CustomerUpdateComponet} exact={true} />
            <Route path="/GenReportComponet" component={GenReportComponet} />
            <Route path="/CompSearchExm" component={CompSearchExm} />
            <Route path="/CustomerAddMark/:ServiceID" component={ComponetAddMark} />


            <Route path="/" component={HomePage} />
          </Switch>
          
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
