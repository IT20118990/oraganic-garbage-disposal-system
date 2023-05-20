import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import logo from '../assets/organiclogo.png'

export default function Header() {
  const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"100px"}}>

        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src={logo}
                height="40"
                alt="logo"
                loading="lazy"
              />

            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Home</Link>

              </li>
              <li className="nav-item">
                <Link to={"/add-payment/B003"} className="nav-link">Payment</Link>

              </li>
              <li className="nav-item">
                <Link to={"/about-us"} className="nav-link">About Us</Link>

              </li>
              <li className="nav-item">
                <Link to={"/contactus"} className="nav-link">Contact Us</Link>

              </li>
            </ul>

          </div>
{!localStorage.getItem('user')?(
  <>
  <a href="/login">
  <button type="button" className="btn btn-light me-3" style={{width:"100px", height:"35px", fontSize:"13px"}}>
    Login
  </button>

</a>
<a href="/sign-up">

  <button type="button" className="btn btn-light me-3" style={{width:"100px", height:"35px", fontSize:"13px"}}>
    Sign up
  </button>

</a>
</>

):(
  <></>
) 



}
        

          <form className="d-flex input-group w-auto me-4">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>

          <div className="d-flex align-items-center">

            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">Some news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="/user-profile">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/logout" >Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </nav>

    </>

  );
}