import React, { useState } from "react";
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signin() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Login", { name, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          alert("Login Successful");
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    <div className="containerc">
      <div>
        <img className="sc" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyS8ShF35OCAw_LO8j8Oz6nC-aeO3p4f1DPjFKG_XwyWxUtMRmz-r8bkFtbPr0bwh068&usqp=CAU"/>
      </div>
      <div className="containerx">
        <div className="c">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="loginUsername"
            placeholder="Username"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            id="loginPassword"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="checkbox-container">
            <input type="checkbox" id="showLoginPasswordCheckbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
            <label htmlFor="showLoginPasswordCheckbox">Show Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
        </div>
      </div>
    </div>
      <footer className=" sfooter">
      </footer>
    </>
  );
}
