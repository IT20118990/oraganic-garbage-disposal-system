import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import './table.css';

const Tables = () => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-0">
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Address </th>
                    <th>Date</th>
                    <th>Organic Wast</th>
                    <th>&nbsp;&nbsp;&nbsp;Status</th>
                    <th>Weight(KG)</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>H.B Dinidu </td>
                    <td>No:29,Gnnoruwa,Peradeniya</td>
                    <td>2022/02/01</td>
                    <td>sorted</td>
                    <td className="d-flex align-items-center">
                      <Dropdown className="text-center">
                        <Dropdown.Toggle
                          className="dropdown_btn"
                          id="dropdown-basic"
                        >
                          <Badge bg="primary">
                            Collected
                            <i className="fa-solid fa-angle-down"></i>
                          </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Collected</Dropdown.Item>
                          <Dropdown.Item>NotCollected</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>50kg</td>
                    <td className="img_parent">
                      <img src="/man.png" alt="" />
                    </td>
                    <td>
                      <Dropdown className="text-center">
                        <Dropdown.Toggle
                          variant="light"
                          className="action"
                          id="dropdown-basic"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <i
                              className="fa-solid fa-eye"
                              style={{ color: 'green' }}
                            ></i>
                            <span>View</span>
                          </Dropdown.Item>

                          <Dropdown.Item>
                            <i
                              className="fa-solid fa-pen-to-square"
                              style={{ color: 'blue' }}
                            ></i>
                            <span>Edit</span>
                          </Dropdown.Item>

                          <Dropdown.Item>
                            <i
                              className="fa-solid fa-trash"
                              style={{ color: 'red' }}
                            ></i>
                            <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>H.B Dinidu </td>
                    <td>No:29,Gnnoruwa,Peradeniya</td>
                    <td>2022/02/01</td>
                    <td>sorted</td>
                    <td className="d-flex align-items-center">
                      <Dropdown className="text-center">
                        <Dropdown.Toggle
                          className="dropdown_btn"
                          id="dropdown-basic"
                        >
                          <Badge bg="primary">
                            Collected
                            <i className="fa-solid fa-angle-down"></i>
                          </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Collected</Dropdown.Item>
                          <Dropdown.Item>NotCollected</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>10kg</td>
                    <td className="img_parent">
                      <img src="/man.png" alt="" />
                    </td>
                    <td>
                      <Dropdown className="text-center">
                        <Dropdown.Toggle
                          variant="light"
                          className="action"
                          id="dropdown-basic"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <i
                              className="fa-solid fa-eye"
                              style={{ color: 'green' }}
                            ></i>
                            <span>View</span>
                          </Dropdown.Item>

                          <Dropdown.Item>
                            <i
                              className="fa-solid fa-pen-to-square"
                              style={{ color: 'blue' }}
                            ></i>
                            <span>Edit</span>
                          </Dropdown.Item>

                          <Dropdown.Item>
                            <i
                              className="fa-solid fa-trash"
                              style={{ color: 'red' }}
                            ></i>
                            <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Tables;
