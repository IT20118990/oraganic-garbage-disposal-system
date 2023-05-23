import React, {Component} from 'react'
import axios from 'axios';
import swal from 'sweetalert2';
// import SweetAlert from 'react-bootstrap-sweetalert';

//import moment from 'moment';

export default class form extends Component {
       constructor(props) {
         super(props);
  
    this.onChangeServiceID = this.onChangeServiceID.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangegrade = this.onChangegrade.bind(this);
    this.onChangesubject = this.onChangesubject.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onChangetimeStart = this.onChangetimeStart.bind(this);
    this.onChangetimeEnd = this.onChangetimeEnd.bind(this);
    this.onChangenotice = this.onChangenotice.bind(this);
    // this.onChangemark = this.onChangemark.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        ServiceID: '',
        name: '',
        grade: '',
        subject: '',
        date: '',
        timeStart: '',
        timeEnd: '',
        notice: '',
        //mark: [],
        // Submit:[]
    }

       }

       onChangeServiceID(e) {
        this.setState({
            ServiceID: e.target.value
        })
    }

    onChangename(e) {
            this.setState({
                name: e.target.value
            })
        }
        
    onChangegrade(e) {
        this.setState({
            grade: e.target.value
        })
    }

    onChangesubject(e) {
        this.setState({
            subject: e.target.value
        })
    }

    onChangedate(e) {
        this.setState({
            date: e.target.value
        })
    }

    onChangetimeStart(e) {
        this.setState({
            timeStart: e.target.value
        })
    }

    onChangetimeEnd(e) {
        this.setState({
            timeEnd: e.target.value
        })
    }

    onChangenotice(e) {
        this.setState({
            notice: e.target.value
        })
    }
    onChangemark(e) {
        this.setState({
            mark: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

    const Customer ={
            "ServiceID":this.state.ServiceID,
            "name":this.state.name,
             "grade": this.state.grade,
            "subject": this.state.subject,
            "date": this.state.date,
            "timeStart": this.state.timeStart,
            "timeEnd":this.state.timeEnd,
            "notice":this.state.notice,
            
    }

     console.log(Customer);

       axios.post('http://localhost:5000/backend/CustomerR/add',Customer)
        .then((res)=>{
            console.log(res)
            swal.fire({
                title: "Done!",
                text: "Customer added Succesufully",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            }).catch((error) => console.log('error', error))
        
        });
    
        
    }

        render() {
            return ( <div >
                <h3 > Start Service  </h3> <form onSubmit = { this.onSubmit } >
                <div className = "form-group" style = { { marginBottom: '15px' }} >

            <label > Service ID: </label> 
            <input type = "text"
            required className = "form-control"
            name = "ServiceID"
            placeholder = "ServiceID"
            value = { this.state.ServiceID }
            onChange = { this.onChangeServiceID }/> </div > 
            <div className = "form-group" >

            <label > First Name: </label> 
            <input type = "text"
            required className = "form-control"
            name = "name"
            placeholder = "Enter name"
            value = { this.state.name }
            onChange = { this.onChangename }/></div >
            
            <div className = "form-group" >

            <label > Last Name: </label> 
            <input type = "text"
            required className = "form-control"
            name = "name"
            placeholder = "Enter name"
            value = { this.state.name }
            onChange = { this.onChangename }/></div >

            <div className = "form-group" >
            <label > Address: </label>
            <input type = "number"
            required className = "form-control"
            name = "grade"
            placeholder = "Enter grade"
            value = { this.state.grade }
            onChange = { this.onChangegrade }/>
             </div >

            <div className = "form-group" >
            <label > Mobile Number: </label>
            <input type = "text"
            required className = "form-control"
            name = "subject"
            placeholder = "subject"
            value = { this.state.subject }
            onChange = { this.onChangesubject }/>
             </div >
             
            <div className = "form-group" >
            <label > Date: </label> 
            <input type = "date"
            required className = "form-control"
            name = "date"
            placeholder = "Enter date"
            value = { this.state.date }
            onChange = { this.onChangedate }/> </div >

            <div className = "form-group" >
            <label > Start Time: </label> 
            <input type = "text"
            required className = "form-control"
            name = "timeStart"
            placeholder = "Enter time"
            value = { this.state.timeStart }
            onChange = { this.onChangetimeStart }/> </div >

            <div className = "form-group" >
            <label > End Time: </label> 
            <input type = "text"
            required className = "form-control"
            name = "timeEnd"
            placeholder = "Enter time"
            value = { this.state.timeEnd }
            onChange = { this.onChangetimeEnd }/> </div >
             
            <div className = "form-group" >
            <label > Service Details: </label>
            <input type = "text"
            required className = "form-control"
            name = "notice"
            placeholder = "notice"
            value = { this.state.notice }
            onChange = { this.onChangenotice}/>
             </div >

            <div className = "form-group" >
            <label > Description: </label>
            <input type = "text"
            required className = "form-control"
            name = "notice"
            placeholder = "notice"
            value = { this.state.notice }
            onChange = { this.onChangenotice}/>
             </div >


             {/* <div className = "form-group" >
            <label > Mark: </label>
            <input type = "text"
            required className = "form-control"
            name = "number"
            placeholder = "mark"
            value = { this.state.mark}
            onChange = { this.onChangemark}/>
             </div > */}


             <div className = "form-group" >
            <input type = "submit"
            value = "submit"
            onClick={this.onSubmit}
            className = "btn btn-primary"/>
            </div>
            
             </form > </div>
        )
    }
}
                   
//export default form; 