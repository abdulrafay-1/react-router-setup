import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        display: 'flex',
        gap : '20px',
        justifyContent: "center",
        color : "#000",
    }}>
        <Link style={{
            color : "#000",
            fontSize: '20px',
        }} to='/'>Home</Link>
        <Link style={{
            color : "#000",
            fontSize: '20px',
        }} to='about'>About</Link>
        <Link style={{
            color : "#000",
            fontSize: '20px',
        }} to='contact'>Contact</Link>
    </div>
  )
}

export default Navbar