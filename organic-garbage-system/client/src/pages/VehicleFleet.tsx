import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function VehicleFleet() {

  const [lCars, setlCars] = useState<any[]>([]);
  const [pCars, setpCars] = useState<any[]>([]);
  const [gCars, setgCars] = useState<any[]>([]);
  const [image, setImage] = useState("");

  const PF = "http://localhost:5000/images/"

  useEffect(() => {
    const fetchcar = async () => {
      const res = await axios.get('http://localhost:5000/api/cars/category/Luxury/')
      setlCars(res.data)
      setImage(res.data['image'])

    }
    fetchcar()
  }, [])

  useEffect(() => {
    const fetchcar = async () => {
      const res = await axios.get('http://localhost:5000/api/cars/category/Premium/')
      setpCars(res.data)
      setImage(res.data['image'])
    }
    fetchcar()
  }, [])

  useEffect(() => {
    const fetchcar = async () => {
      const res = await axios.get('http://localhost:5000/api/cars/category/General/')
      setgCars(res.data)
      setImage(res.data['image'])

    }
    fetchcar()
  }, [])

  return (
    <div className='background-radial-gradient'>
      <Header />
      <br /> <br />
      <h2 style={{ "marginLeft": "15px" }} className='inquiriesHeader'>Luxury Cars</h2>
      <div className="row row-cols-1 row-cols-md-4 g-2" style={{ "marginLeft": "10px", "marginRight": "10px" }}>
        {lCars.map(lcr => (
          <div key={lcr.car_Id} className="col">
            <div className="card" >
              <img src={PF + lcr.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{lcr.model}</h5>
                <Link to={`/CarDetailsPage/${lcr.car_Id}`} className="btn btn-info inquiryBtn btn-grad" >Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br /><br />

      <h2 style={{ "marginLeft": "15px" }} className='inquiriesHeader'>Premium Cars</h2>
      <div className="row row-cols-1 row-cols-md-4 g-2" style={{ "marginLeft": "10px", "marginRight": "10px" }}>
        {pCars.map(pcr => (
          <div key={pcr.car_Id} className="col">
            <div className="card" >
              <img src={PF + pcr.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{pcr.model}</h5>
                <Link to={`/CarDetailsPage/${pcr.car_Id}`} className="btn btn-info inquiryBtn btn-grad" >Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br /><br />

      <h2 style={{ "marginLeft": "15px" }} className='inquiriesHeader'>General Cars</h2>
      <div className="row row-cols-1 row-cols-md-4 g-2" style={{ "marginLeft": "10px", "marginRight": "10px" }}>
        {gCars.map(gcr => (
          <div key={gcr.car_Id} className="col">
            <div className="card" >
              <img src={PF + gcr.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{gcr.model}</h5>
                <Link to={`/CarDetailsPage/${gcr.car_Id}`} className="btn btn-info inquiryBtn btn-grad" >Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  )
}
