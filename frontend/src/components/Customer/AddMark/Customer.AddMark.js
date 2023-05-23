import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import moment from 'moment';



class AddMark extends Component{


    constructor(props) {
        super(props);        
        // Function Binding
        this.onChangeTmpStd = this.onChangeTmpStd.bind(this);
        this.onChangeTmpMark = this.onChangeTmpMark.bind(this);
        this.addButtonClicked = this.addButtonClicked.bind(this);
        // this.deleteMark = this.deleteMark.bind(this);
        
        console.log(props.ServiceID);
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
          mark: [
              {
            stdID: '',
            mark:0
          }
        ],
          tmpStd:'',
          tmpMark:null
        }
      }
      
      componentDidMount() {
          console.log('name',this.props.name)
        axios.get('http://localhost:5000/backend/CustomerR/'+this.props.name)
          .then(response => {
            console.log(response.data);
            console.log(response.data);
            console.log(response.data.ServiceID);
              this.setState({
                ServiceID: response.data.ServiceID,
                name: response.data.name,
                grade: response.data.grade,
                subject: response.data.subject,
                date: moment(response.data.date).format('DD-MM-YYYY'),
                timeStart: response.data.timeStart,
                timeEnd: response.data.timeEnd,
                notice: response.data.notice,
                mark: response.data.mark,
              })
          })
          .catch((error) => {
            console.log(error);
          })

          
      }

      onChangeTmpStd(e) {
          this.setState({
             tmpStd: e.target.value
          })
      }
      onChangeTmpMark(e) {
          this.setState({
            tmpMark: e.target.value
          })
      }

      //validation 
      addButtonClicked(e) {

        try{
            
                    if(this.state.tmpMark != null && this.state.tmpStd != null){
            
                        if(this.state.tmpMark > 0 && this.state.tmpMark <= 100){
            
                          
            
                                const [ ...desI ] = this.state.tmpStd;
                                console.log(desI);
                                if(desI[0] === 'S' && desI[1] === 'T' && desI[2] ==='D' && desI[3] >= 0 && desI[3] <= 9 && desI[4] >= 0 && desI[4] <= 9){

                                    const result = this.state.mark.find( ({ stdID }) => stdID === this.state.tmpStd );
                                    console.log("result of find STD : " + result);
                                    if(result === undefined){
                                        this.setState(prevState => ({
                                            mark: [...prevState.mark, {
                                                stdID: this.state.tmpStd,
                                                mark: this.state.tmpMark
                                            }]
                                          }))

                                        // this.setState({
                                            
                                        //     mark:[this.state.mark, {
                                        //         stdID: this.state.tmpStd,
                                        //         mark: this.state.tmpMark
                                        //     }]
                                            
                                        // })
                                        console.log(`ID ${this.state.mark}`);
                                    }
                                    else{
                                        alert("Mark of student already has Enterd");
                                    }
                                    
                                }
                                else{
                                    alert("Please Enter Valide Student ID Format");
                                }
                            
                        }
                        else{
                            alert("please Enter valide Mark");
                        }
            
                    }
                    else{
                        alert("please Enter both Student ID or Mark");
                    }

        }catch(err){
            alert("Error : Student ID length should be 5  " + err);
        }
        
    }

    deleteMark(key) {

        
        console.log(`Delete Mark ${this.state.mark.splice(key,1)}`);
        
        this.setState({
            
            mark:[ this.state.mark]
            
        })
        
        console.log(`ID ${this.state.mark} `);
        
    }


      onSubmit(e) {
        
        e.preventDefault();
    console.log('clicked');
        const exercise = {
          ServiceID: this.state.ServiceID,
          name: this.state.name,
          grade: this.state.grade,
          subject: this.state.subject,
          date: moment(this.state.date).format('DD-MM-YYYY'),
          timeStart: this.state.timeStart,
          timeEnd: this.state.timeEnd,
          notice: this.state.notice,
          mark:this.state.mark
        }
        
        console.log('exercise ', exercise);
        console.log('name ',this.props.name);

        axios.put('http://localhost:5000/backend/CustomerR/update/mark/' + this.props.name, exercise)
          .then(res => {
              console.log(res.data);
              alert("Submit Marks");
              window.location = '/CompSearchExm';
        }).catch(err => console.log('errror ', err))
    
      }

    // const id = props.name;

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
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ComponetAddMark">|  Add mark Page</NavLink>
                        </li>
                        
                    </ul>
                </nav>
                <h1 className="text-start m-3"> Add Marks </h1>

                {/* <UpdateFormCustomer name={id} /> */}

                <div className="bg-primary bg-gradient my-3">
                    <form class="row g-3 p-3">
                        <div class="col-auto">
                            <input type="text" className="form-control ms-2" id="ServiceID" value={this.state.ServiceID} disabled />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" id="subject" value={this.state.subject} disabled />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" id="date" value={this.state.date} disabled />
                        </div>
                    </form>
                </div>

                <div className="bg-info bg-gradient my-3">
                    <form class="row g-3 p-3">
                        <div class="col-auto">
                            <input type="text" className="form-control ms-2" id="tmpStd" 
                            placeholder="Type Student ID . . ."
                            value={this.state.tmpStd}
                            onChange={this.onChangeTmpStd}
                            required />
                        </div>
                        <div className="col-auto">
                            <input type="number" className="form-control" id="" 
                            placeholder="Type Marks . . ." 
                            value={this.state.tmpMark}
                            onChange={this.onChangeTmpMark}
                            required />
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary px-5" 
                            id="addMark" onClick={this.addButtonClicked} > Add Mark </button>
                        </div>
                    </form>
                </div>

                <h3 className="text-start m-3"> Added Marks </h3>
                <form class="g-3 p-3" onSubmit={this.onSubmit}>
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
                                    <div className="col-auto">
                                        <button className="btn btn-primary" onClick={this.deleteMark.bind(this,key)} > Delete Mark</button>
                                        
                                    </div>
                            </div>
                        )
                    })
                }
                    <button type="submit" className="btn btn-success"> Submit  </button>
                </form>
                
            </React.Fragment>

        );
    }
}

export default AddMark;