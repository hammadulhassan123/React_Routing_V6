import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
        <h1>About</h1>
        <p>Happy Coding, want to go back to home page? <Link to="/">Home</Link></p>
        <br />
        <h3>Users</h3>
        <Link to="/user/Hammad">Hammad's Page</Link><br />
        <Link to="/user/Hassan">Hassan's Page</Link>

    </>
  )
}
