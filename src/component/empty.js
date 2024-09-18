import React from 'react';
import { useNavigate } from "react-router-dom";
export default function MoodChef() {
    const containerStyle = {
        position: 'relative',
        width: '100vw', 
        height: '100vh', 
        overflow: 'hidden', 
      };
    
      const imgStyle = {
        filter: 'brightness(20%)',
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      };
    

  const h1Style = {
    position: 'absolute',
    top: '150px',
    left: '250px',
    color: 'white',
    fontSize: '100px',
  };

  const pStyle = {
    position: 'absolute',
    top: '280px',
    left: '450px',
    color: 'white',
    fontSize: '50px',
  };

  const h2Style = {
    position: 'absolute',
    top: '360px',
    left: '580px',
    color: 'white',
    fontSize: '50px',
  };

  const buttonBStyle = {
    position: 'absolute',
    top: '450px',
    left: '500px',
    color: 'black',
    fontSize: '20px',
    border: '1px solid white',
    borderRadius: '25px',
    height: '50px',
    width: '200px',
  };

  const buttonCStyle = {
    position: 'absolute',
    top: '450px',
    left: '750px',
    color: 'black',
    fontSize: '20px',
    border: '1px solid black',
    borderRadius: '25px',
    height: '50px',
    width: '200px',
  };
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const handleSignupClick = () => {
    navigate("/signup"); 
  };
  return (
    <div style={containerStyle}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxM-F5yj_GzvY7Z3fAtzkqAfHVqjxz6lDMg&s"
        alt="MoodChef Image"
        style={imgStyle}
      />
      <h1 style={h1Style}>Welcome to MoodChef</h1>
      <p style={pStyle}>"Tasty food for every Mood"</p>
      <h2 style={h2Style}>To know more</h2>
      <button style={buttonBStyle} onClick={handleSignupClick}>Dive In</button>
      <button style={buttonCStyle} onClick={handleLoginClick}>Login</button>
    </div>
  );
}
