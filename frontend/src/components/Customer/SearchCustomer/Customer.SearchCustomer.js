import React, { Component } from 'react';
import {  NavLink, Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';


class SearchCustomer extends Component {

    constructor(props) {
        super(props)
        // Function Binding
        this.onChangeSearch = this.onChangeSearch.bind(this);
        // console.log(props.name);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ServiceID: '',
            name: '',
            grade: 0,
            subject: '',
            date: '',
            timeStart: '',
            timeEnd: '',
            notice: '',
            mark:[]
          }
    }
 


    onSubmit() {
        console.log('id ', this.state.ServiceID );
        axios.get('http://localhost:5000/backend/CustomerR/'+this.state.ServiceID)
        .then(response => {
            console.log('ss ', response.data);
            this.setState({
                ServiceID: response.data.ServiceID,
                name: response.data.name,
                grade: response.data.grade,
                subject: response.data.subject,
                date: response.data.date,
                timeStart: response.data.timeStart,
                timeEnd: response.data.timeEnd,
                notice: response.data.notice,
                // mark: response.data.mark,
       })
   })
   .catch((error) => {
     console.log(error);
   })

   
}

onChangeSearch(e) {
    this.setState({
        ServiceID: e.target.value
    })
}


    render(){

    
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
                            <NavLink className="nav-link" to="/CompSearchExm">|  Search Page</NavLink>
                        </li>
                    </ul>
                </nav>

                
                <h1 className="text-start m-3"> Search Customer </h1>

                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="input-group m-3">
                        <input type="text" class="form-control" placeholder="Type here Customer ID . . ." 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2"
                        value={this.state.ServiceID}
                        onChange={this.onChangeSearch} />
                        <button class="btn btn-outline-secondary btn-primary text-white px-3" 
                        type="submit" 
                        id="ServiceID"
                        onClick={this.onSubmit}
                        >Search</button>
                    </div>
                </div>
                <h3 className="text-start m-3"> Result </h3>
                <div>
                    <form>
                        <div>
                        <div className="shadow my-3 p-3 rounded bg-dark bg-gradient text-white"> 
                                <table>
                                    <tr>
                                        <th className="w-25">Service ID:</th>
                                        <td className=""> {this.state.ServiceID} </td>
                                    </tr>
                                    <tr>
                                        <th> First Name:  </th>
                                        <td className=""> {this.state.name} </td>
                                    </tr>
                                    <tr>
                                        <th>Last Name: </th>
                                        <td className=""> {this.state.grade} </td>
                                    </tr>
                                    <tr>
                                        <th> Address:  </th>
                                        <td className=""> {this.state.subject} </td>
                                    </tr>
                                    <tr>
                                        <th> Mobile Number: </th>
                                        <td className=""> {this.state.date} </td>
                                    </tr>
                                    <tr>
                                        <th> Date  </th>
                                        <td className=""> {this.state.timeStart}  To {this.state.timeEnd} </td>
                                    </tr>
                                    <tr>
                                        <th> Time  </th>
                                        <td className=""> {this.state.timeStart}  To {this.state.timeEnd} </td>
                                    </tr>
                                    <tr>
                                        <th>Service Details</th>
                                        <td className=""> {this.state.notice} </td>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <td className=""> {this.state.notice} </td>
                                    </tr>
                                    
                                    
                                </table>
                                <Link className="btn btn-success m-2" to={`/CustomerUpdateComponet/${this.state.ServiceID}`} > Update </Link>
                                <Link className="btn btn-primary m-2" to={`/ComponetAddMark/${this.state.ServiceID}`} > Add Marks </Link>
                                <button className="btn btn-danger m-2"
                                    onClick={() => {
                                        const idExm = this.state.ServiceID
                                        console.log(this.state.ServiceID)
                                        axios.delete('http://localhost:5000/backend/CustomerR/delete'+idExm).then(() => {
                                            alert("Customer Deleted")
                                            window.location = '/CustomerComponet';
                                        }).catch((err) => {
                                            alert(err)
                                        })
                                    }}
                                    > Delete </button>
                            </div>
                        </div>
                        {/* <button className="btn btn-warning">Download</button> */}
                    </form>
                </div>

            </React.Fragment>

        );
    }
}

export default SearchCustomer;