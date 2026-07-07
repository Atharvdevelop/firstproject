
import React from 'react'
import { Link } from 'react-router-dom'


function Navigation({login}) {
  const navStyle = {backgroundColor:'rgb(48, 21, 75)',listStyleType:'none',display:'flex',gap:'20px',padding:'10px',color:'white',justifyContent:'center',margin:0}
  const linkStyle = {cursor:'pointer',color:'rgb(221, 219, 233)',textDecoration:'none'}

  return (
    <>
    <ul style={navStyle}>
      <li><Link to="/home" style={linkStyle}>Home</Link></li>
      <li><Link to="/about" style={linkStyle}>About</Link></li>
      <li><a href="#contact" style={linkStyle}>Contact</a></li>
      {login ? (
        <button className="btn btn-primary bg-green-500 ">Login</button>
      ) : (
        <button className="btn btn-secondary bg-red-500 ">Logout</button>
      )}
    </ul>
    </>
  )
}

export default Navigation