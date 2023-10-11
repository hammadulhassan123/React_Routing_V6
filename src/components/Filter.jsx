import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    var age = searchParams.get('age');
    var city = searchParams.get('city');

    return (
    <>
    <h1>Filter</h1>
    <h3>Age is: {age}</h3>
    <br />
    <h3>City is: {city}</h3>
    <input type="text" placeholder='Enter your Age' onChange={(e)=>setSearchParams({age: e.target.value})} />
    <br />
    <input type="text" placeholder='Enter your City'onChange={(e)=>setSearchParams({city: e.target.value})}/>
    <br />
    <button type="submit" onClick={()=>setSearchParams({age:30})}>Submit</button>
    </>
  )
}

export default Filter