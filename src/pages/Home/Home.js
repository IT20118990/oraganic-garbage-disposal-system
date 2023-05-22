import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Tables from '../../components/Tables/Tables';

import Spiner from '../../components/Spiner/Spiner';
import { useNavigate } from 'react-router-dom';
import { addData } from '../../components/context/ContextProvider';
import Alert from 'react-bootstrap/Alert';
import './home.css';

const Home = () => {
  const [showspin, setShowSpin] = useState(true);
  const { useradd, setUseradd } = useContext(addData);
  const navigate = useNavigate();

  const adduser = () => {
    navigate('/register');
  };

  const working = () => {
    navigate('/details');
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, []);

  return (
    <>
      {useradd ? (
        <Alert variant="success" onClose={() => setUseradd('')} dismissible>
          {useradd.fname.toUpperCase()} Succesfully Added
        </Alert>
      ) : (
        ''
      )}
      <div className="container">
        <div className="main_div">
          {/* search add btn */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success" className="search_btn">
                  Search
                </Button>
              </Form>
            </div>

            <div className="add_button">
              <Button variant="primary" onClick={adduser}>
                <i className="fa-solid fa-plus"></i>&nbsp;Add Details
              </Button>
            </div>

            <div className="detail_button">
              <Button variant="success" onClick={working}>
                <i className="fa-solid fa-calendar-users"></i>&nbsp;Working Days
              </Button>
            </div>
          </div>

          {/* export,wast,status */}

          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button className="export_btn">Export To Csv</Button>
            </div>
            <div className="filter_wast">
              <div className="filter">
                <h3>Find Sorted Wast</h3>
                <div className="gender d-flex justify-content-between">
                  <Form.Check
                    type={'radio'}
                    label={`All`}
                    name="wast"
                    value={'All'}
                    defaultChecked
                  />
                  <Form.Check
                    type={'radio'}
                    label={`Sorted`}
                    name="wast"
                    value={'sorted'}
                  />
                  <Form.Check
                    type={'radio'}
                    label={`Not Sorted`}
                    name="wast"
                    value={'notsorted'}
                  />
                </div>
              </div>
            </div>
            {/* short by value */}
            <div className="filter_newold">
              <h3>Sort By Value</h3>
              <Dropdown className="text-center">
                <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                  <i className="fa-solid fa-sort"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>New</Dropdown.Item>
                  <Dropdown.Item>Old</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* filter by status */}
            <div className="filter_status">
              <div className="status">
                <h3>Collecting Status</h3>
                <div className="status_radio d-flex justify-content-between flex-wrap">
                  <Form.Check
                    type={'radio'}
                    label={`All`}
                    name="status"
                    value={'All'}
                    defaultChecked
                  />
                  <Form.Check
                    type={'radio'}
                    label={`Collected`}
                    name="status"
                    value={'Collected'}
                  />
                  <Form.Check
                    type={'radio'}
                    label={`Not Collected`}
                    name="status"
                    value={'NotCllected'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showspin ? <Spiner /> : <Tables />}
      </div>
    </>
  );
};

export default Home;
