import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function ContactUs() {
  return (
    <>
    <h1>Contact Us</h1>
    <p>Here you can go for detailed info how to Contact Us </p>
    <Link to="company">Company</Link>
    <br />
    <Link to="channel">Channel</Link>
    <br />
    <Link to="other">Other</Link>
    <Outlet />
    </>
  )
}
