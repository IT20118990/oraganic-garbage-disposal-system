import React, {useState, useEffect} from 'react';
import axois from 'axios';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import GeneratePDFAll from './GenReport/Customer.GeneratePDFAll';


// Json web token need to handle with login page username password
export default function AllCustomer() {

    const [Customers, setCustomers] = useState([]);
    useEffect(() => {
        function getCustomers() {
            axois.get("http://localhost:5000/backend/CustomerR/").then((res) => {
                
                setCustomers(res.data);               
            }).catch((err) => {
                console.log("error : ", err.message);
                alert(err.massage);
            })
        }
        getCustomers();
    }, [])

    return (
        <div>
            <div className="container mt-3 text-start" >
                <div className="row">
                    <div className="col col-3">
                        <h3> Customer Details  </h3>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary"
                            onClick={() => GeneratePDFAll(Customers)}
                            > Download All Customers 
                        </button>
                    </div>
                </div>
                
                <div>
                    {
                        Customers.map((val, key) => {
                            return (
                            <div className="shadow my-3 p-3 rounded bg-dark bg-gradient text-white"> 
                                <table>
                                    <tr>
                                        <th className="w-25">ServiceID ID</th>
                                        <td className=""> {val.ServiceID} </td>
                                    </tr>
                                    <tr>
                                        <th> Customer Name </th>
                                        <td className=""> {val.name} </td>
                                    </tr>
                                    <tr>
                                        <th> grade </th>
                                        <td className=""> {val.grade} </td>
                                    </tr>
                                    <tr>
                                        <th> subject </th>
                                        <td className=""> {val.subject} </td>
                                    </tr>
                                    <tr>
                                        <th> Date </th>
                                        <td className=""> {moment(val.date).format('DD-MM-YYYY') } </td>
                                    </tr>
                                    <tr>
                                        <th> Time  </th>
                                        <td className=""> {val.timeStart}  To {val.timeEnd} </td>
                                    </tr>
                                    <tr>
                                        <th>Notice</th>
                                        <td className=""> {val.notice} </td>
                                    </tr>
                                    
                                </table>
                                <Link className="btn btn-success m-2" to={`/CustomerUpdateComponet/${val.ServiceID}`} > Modify </Link>
                                
                                <button className="btn btn-danger m-2"
                                    onClick={() => {
                                        const idExm = val.ServiceID
                                        console.log(val.ServiceID)
                                        axios.delete('http://localhost:5000/backend/CustomerR/delete'+idExm).then(() => {
                                            alert("Customer Deleted")
                                            window.location = '/CustomerComponet';
                                        }).catch((err) => {
                                            alert(err)
                                        })
                                    }}
                                    > Delete </button>
                            </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}
