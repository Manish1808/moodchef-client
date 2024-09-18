import React from 'react';
import {useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        navigate("/");
    }
  return (
    <>
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MoodChef</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <button type="button" class="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}
