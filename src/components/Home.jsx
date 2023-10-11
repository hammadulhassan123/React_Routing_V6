import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function Home() {
  const navigate = useNavigate();
  function navToPage(url){
    navigate(url);
  }

  return (
    <>
        <h1>Home</h1>
        <p>Happy Coding, want to go to the about us page? <Link to="/about">About Us</Link></p>
        <br />
        <button onClick={()=>navToPage("/about")}>Go to About Page</button>
        <br />
        <button onClick={()=>navToPage("/filter")}>Go to Filter Page</button>
    </>
  )
}
