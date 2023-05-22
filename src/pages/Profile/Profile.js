import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './profile.css';

const profile = () => {
  return (
    <>
      <div className="container">
        <Card className="card-profile shadow col-lg-6 mx-auto mt-5">
          <Card.Body>
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center">
                  <img src="/mn.png" alt="" />
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>Dinesh</h3>
              <h4>
                <i className="fa-solid fa-house address"></i>&nbsp;:-
                <span>No29/B,Gannoruwa</span>
              </h4>
              <h6>
                <i className="fa-solid fa-mobile"></i>&nbsp;:-
                <span>0715254255</span>
              </h6>
              <h3>
                <i className="fa-solid fa-trash"></i>&nbsp;:-
                <span>Collected</span>
              </h3>
              <h4>
                <i className="fa-solid fa-weight-scale weight"></i>&nbsp;:-
                <span>10KG</span>
              </h4>
              <h5>
                <i className="fa-solid fa-calendar-days calender"></i>
                &nbsp;Date created&nbsp;:-
                <span>1</span>
              </h5>
              <h5>
                <i className="fa-solid fa-calendar-days calender"></i>
                &nbsp;Date Updated&nbsp;:-
                <span>1</span>
              </h5>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default profile;
