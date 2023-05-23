import React from "react";

function Home(props) {
  return (
    <div className="container">
      <div className="row row-content align-items-center">
        <div className="col col-sm col-md">
          <div className="media">
            <div className="media-body">
              <h2>
                <span className="badge badge-secondary">Our Mission</span>
              </h2>{" "}
              <br></br>
              <p class=" d-none d-sm-block">
              Honoring our commitments provides our stakeholders peace of mind and establishes us as the premier waste services company in the markets we serve. This creates a safe and rewarding environment for our employees while protecting the health and welfare of the communities we serve, 
              thereby increasing value for our shareholders.
              </p>
              <a role="button" class="btn btn-primary" href="button">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              class="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/garbage.jpg"
              height="700"
                  width="500"
              alt="agencies"
            ></img>
          </div>
        </div>
      </div>

      <div className="row row-content align-items-center">
        <div className="col col-sm col-md">
          <div className="media">
            <div className="media-body">
              <h2>
                <span className="badge badge-secondary">
                  Message from Director
                </span>
              </h2>{" "}
              <br></br>
              <p className=" d-none d-sm-block">
              Our goal is to create an environment where self-directed, empowered employees strive to consistently fulfill our constituent commitments and seek to create positive impacts through interactions with customers, communities, and fellow employees, always relying on our Operating Values as the foundation for our existence.
              </p>
              <a role="button" className="btn btn-primary" href="button">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              className="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/principal.jpg"
              alt="principal"
              height="700"
                  width="498"
            ></img>
          </div>
        </div>
      </div>

      <div className="row row-content align-items-center">
        <div className="con-12 col-sm-4 col-md-3">
          <h3>Dumpster Rentals</h3>
        </div>
        <div className="col col-sm col-md">
          <h2>Roll Off Dumpster Rental</h2>
          <p>
          Make the job easier for yourself and your employees.
         Reduce your reliance on the landfill.
         Keep worksite garbage hazards in one place.
            {" "}
          </p>
          <a role="button" className="btn btn-danger m-2" href="button">
                {" "}
                More info
              </a>
        </div> 
        <div className="col col-sm col-md">
          <h2>Commercial Business Waste Management</h2>
          <p>
          Rent a commercial dumpster for your business and let Waste Connections do the garbage pickup.
          No matter your business size, we can find a commercial dumpster rental that is right for you. 
            {" "}
          </p>
          <a role="button" className="btn btn-danger m-2" href="button">
                {" "}
                More info
              </a>
        </div>
        
        <div className="col col-sm col-md">
          <h2>Trash Compactors </h2>
          <p>
          For large businesses, shopping centers, apartment complexes, or businesses with bulky refuse.
          Compress your waste, which reduces the number of garbage pickups, saving you money.
            {" "}
          </p>
          <a role="button" className="btn btn-danger m-2" href="button">
                {" "}
                More info
              </a>
        </div>
      </div>

      

      <div className="row mb-5 align-items-center">
        <div className="card card-body bg-light">
          <blockquote className="blockquote">
            <p className="mb-0">
              “Don't be litter bag. Help keep your community Clean”
            </p>
            <footer className="blockquote-footer">
              
              <cite title="Source Title">Martin Luther King Jr</cite>
              
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Home;
