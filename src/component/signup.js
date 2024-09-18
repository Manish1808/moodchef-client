import React, { useState } from 'react'
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function Signup() {
  const[name,setName]=useState()
  const[password,setPassword]=useState()
  const[email,setEmail]=useState()
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/Register', { name, email, password })
        .then(response => {
            alert("Registration successful!");
            navigate("/home");
        })
        .catch(err => {
            if (err.response && err.response.status === 400) {
                alert("Username already exists. Please choose another.");
            } else {
                alert("An error occurred. Please try again.");
            }
        });
};
  return (
    <>
    <div className="containerc">
      <div>
        <img className="sc" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyS8ShF35OCAw_LO8j8Oz6nC-aeO3p4f1DPjFKG_XwyWxUtMRmz-r8bkFtbPr0bwh068&usqp=CAU"/>
      </div>
    <div className="containerx">
        <h2>Sign Up</h2>
        <form id="signuphtmlhtmlForm" onSubmit={handleSubmit}>
            <input type="text" id="signupUsername" placeholder="Username" pattern="[A-Za-z0-9]{1,15}" required onChange={(e)=>setName(e.target.value)}/>
            <input type={showPassword ? "text" : "password"} id="signupPassword" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
            <input type="email" id="signupEmail" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
            <div className="checkbox-container">
                <input type="checkbox" id="showPasswordCheckbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
                <label htmlFor="showPasswordCheckbox">Show Password</label>
            </div>
            <input type="submit" value="Sign Up"/>
        </form>
        <p>Already a user?</p>
        <Link to="/signin" className="LoginLink">Login</Link>
    </div>
    </div>
    <footer className=" sfooter">
      </footer>
    </>
  )
}
export default Signup;