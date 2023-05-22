import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import './details.css';

const Details = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Our Working Days & Rules</h2>

        <Row>
          <div id="description">
            <h1>Welcome to my website!</h1>
            <p>
              This is where you'll find all the latest news and updates about my
              projects and interests.This is where you'll find all the latest
              news and updates about my projects and interests.This is where
              you'll find all the latest news and updates about my projects and
              interests.This is where you'll find all the latest news and
              updates about my projects and interests.
            </p>
          </div>
          <div className="col mt-0">
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>Monday</th>
                    <th>Teusday</th>
                    <th>Wednsday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Details;
