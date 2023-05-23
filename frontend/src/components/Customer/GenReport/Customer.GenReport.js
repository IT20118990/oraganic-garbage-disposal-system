import React, { Component } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import GeneratePDF from './Customer.GeneratePDF'
import { Bar } from 'react-chartjs-2';

const stay=
    {labelsA: [],
    dataA:[]};


class GenReport extends Component{

    constructor(props) {
        super(props);
           
        // Function Binding
        this.onChangeSearch = this.onChangeSearch.bind(this);
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
            mark: [{
              stdID: '',
              mark:0
            }],
            tmpID:'',
            tmpMark:null,
            sta :{
              labels: [],
              datasets: [
                {
                  label: 'Rainfall',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: []
                }
              ]
            }
          }

        
      }

      onSubmit() {
        axios.get('http://localhost:5000/backend/CustomerR/'+this.state.ServiceID)
        .then(response => {
            console.log(response.data);
            this.setState({
                ServiceID: response.data.ServiceID,
                name: response.data.name,
                grade: response.data.grade,
                subject: response.data.subject,
                date: response.data.date,
                timeStart: response.data.timeStart,
                timeEnd: response.data.timeEnd,
                notice: response.data.notice,
                mark: response.data.mark,
       })

       console.log("Bar Chart");
       stay.labelsA.splice(response.data.mark[0].stdID);

    for (let index = 0; index < response.data.mark.length; index++) {
        console.log("Chart Data : "+response.data.mark[index].stdID);
        stay.labelsA.push(response.data.mark[index].stdID);
        console.log("Chart Data : "+response.data.mark[index].mark);
        stay.dataA.push(response.data.mark[index].mark);
        console.log("Chart Data STD : "+stay.labelsA); 
        console.log("Chart Data Data : "+stay.dataA); 
    }

    this.setState({

        sta:{
            labels:[...stay.labelsA],
            datasets:[{
                label: 'Customer Marks',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [...stay.dataA]
            }]
        }
        
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
                            <NavLink className="nav-link" to="/NewCustomerCompt">|  Modyfy Customer Page</NavLink>
                        </li>
                    </ul>
                </nav>
                <h1 className="text-start m-3"> Genarate Customer Marks Reports </h1>

                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="input-group m-3">
                    <input type="text" class="form-control" placeholder="Type here Customer ID . . ." 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2"
                        value={this.state.ServiceID}
                        onChange={this.onChangeSearch} />
                        <button class="btn btn-outline-secondary btn-primary text-white px-3" 
                        type="submit" id="ServiceID"
                        onClick={this.onSubmit}
                        >Search</button>
                    </div>
                </div>

                <div className="w-75">
                   
                    <Bar
                    data={this.state.sta}
                    options={{
                        title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                    />
                </div>


                <h3 className="text-start m-3"> Result </h3>
                <div>
                    <form>
                        <div>
                            <div>
                    <form>
                        <div>
                        <div className="shadow my-3 p-3 rounded bg-dark bg-gradient text-white"> 
                                <table>
                                    <tr>
                                        <th className="w-25">Customer ID</th>
                                        <td className=""> {this.state.ServiceID} </td>
                                    </tr>
                                    <tr>
                                        <th> Customer Name </th>
                                        <td className=""> {this.state.name} </td>
                                    </tr>
                                    <tr>
                                        <th> Grade </th>
                                        <td className=""> {this.state.grade} </td>
                                    </tr>
                                    <tr>
                                        <th> Subject </th>
                                        <td className=""> {this.state.subject} </td>
                                    </tr>
                                    <tr>
                                        <th> Date </th>
                                        <td className=""> {this.state.date} </td>
                                    </tr>
                                    <tr>
                                        <th> Time  </th>
                                        <td className=""> {this.state.timeStart}  To {this.state.timeEnd} </td>
                                    </tr>
                                    <tr>
                                        <th>Notice</th>
                                        <td className=""> {this.state.notice} </td>
                                    </tr>
                                    
                                </table>
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
                        
                    </form>
                </div>
                        </div>
                        <button className="btn btn-warning"
                        onClick={() => GeneratePDF(this.state.mark, this.state.subject, this.state.grade, this.state.name)}
                        >Download Report</button>
                    </form>

                </div>
                <form class="g-3 p-3" >
                {
                    
                    this.state.mark.map((val, key) => {
                        return(
                            <div className=" my-3 row">
                                    <div class="col-auto">
                                        <input type="text" className="form-control ms-2" id="stdId" value={val.stdID} />
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" className="form-control" id="mark" value={val.mark} />
                                    </div>
                                    
                            </div>
                        )
                    })
                }
                    
                </form>
     

            </React.Fragment>

        );
    }
}

export default GenReport;