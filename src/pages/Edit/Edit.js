import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import Spiner from '../../components/Spiner/Spiner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './edit.css';

const Edit = () => {
  const [inputdata, setInputData] = useState({
    fname: '',
    lname: '',
    current: '',
    date: '',
    mobile: '',
    wast: '',
    weight: '',
  });

  console.log(inputdata);

  const [status, setStatus] = useState('collected');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  const [showspin, setShowSpin] = useState(true);

  //sttus option
  const options = [
    { value: 'collected', label: 'Collected' },
    { value: 'notcollected', label: 'Not Collected' },
  ];
  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  // status set
  const setStatusValue = (e) => {
    setStatus(e.value);
  };

  // profile set
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  //submit userdata
  const submitUserData = (e) => {
    e.preventDefault();

    const { fname, lname, current, date, mobile, wast, weight } = inputdata;

    if (fname === '') {
      toast.error('First name is Required !');
    } else if (lname === '') {
      toast.error('Last name is Required !');
    } else if (current === '') {
      toast.error('current is Required !');
    } else if (mobile === '') {
      toast.error('Mobile is Required !');
    } else if (date === '') {
      toast.error('date is Required !');
    } else if (mobile.length > 10) {
      toast.error('Enter Valid Mobile!f');
    } else if (wast === '') {
      toast.error('wast sorted or not is Required !');
    } else if (image === '') {
      toast.error('image is Required !');
    } else if (weight === '') {
      toast.error('weight is Required !');
    } else {
      toast.success('registrtion success !');
    }
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [image]);

  return (
    <>
      {showspin ? (
        <Spiner />
      ) : (
        <div className="container">
          <h2 className="text-center mt-1">Update Your Details</h2>
          <Card className="shadow mt-3 p-3">
            <div className="profile_div text-center">
              <img src={preview ? preview : '/mn.png'} alt="img" />
            </div>
            <Form className="custom">
              <Row>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={inputdata.fname}
                    onChange={setInputValue}
                    placeholder="Enter FirstName"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    value={inputdata.lname}
                    onChange={setInputValue}
                    placeholder="Enter LastName"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Current address</Form.Label>
                  <Form.Control
                    type="text"
                    name="current"
                    value={inputdata.current}
                    onChange={setInputValue}
                    placeholder="currentAddress"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={inputdata.date}
                    onChange={setInputValue}
                    placeholder="put date here"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={inputdata.mobile}
                    onChange={setInputValue}
                    placeholder="EnterMobile Number"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Your Organic wast</Form.Label>
                  <Form.Check
                    type={'radio'}
                    label={`Sorted`}
                    name="wast"
                    onChange={setInputValue}
                    value={'sorted'}
                  />
                  <Form.Check
                    type={'radio'}
                    label={`Not sorted`}
                    name="wast"
                    onChange={setInputValue}
                    value={'notsorted'}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Status about collecting</Form.Label>
                  <Select
                    options={options}
                    value={status}
                    onChange={setStatusValue}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select Your Profile</Form.Label>
                  <Form.Control
                    type="file"
                    name="user_profile"
                    onChange={setProfile}
                    placeholder="EnterMobile Number"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label> Wast weight in kilograms</Form.Label>
                  <Form.Control
                    type="text"
                    name="weight"
                    value={inputdata.weight}
                    onChange={setInputValue}
                    placeholder="Enter weight"
                  />
                </Form.Group>
                <Button
                  className="custom-button"
                  variant="primary"
                  type="submit"
                  onClick={submitUserData}
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </Card>
          <ToastContainer position="top-center" />
        </div>
      )}
    </>
  );
};

export default Edit;
