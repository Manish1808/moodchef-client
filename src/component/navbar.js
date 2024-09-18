import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const handleSignupClick = () => {
    navigate("/signup"); 
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg fixed-top " style={{backgroundColor:'white'}} >
        <div className="container-fluid">
          <div className="logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxM-F5yj_GzvY7Z3fAtzkqAfHVqjxz6lDMg&s"
        className='Eimg'
        alt="Cover"
      />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " style={{color:'black'}} aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <button className="btn btn-outline-primary LoginS" type="submit" onClick={handleLoginClick}>
              Login
            </button>
            <button className="btn btn-outline-primary LoginS" type="submit" onClick={handleSignupClick}>
              SignUp
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
