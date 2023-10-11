import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/navbar'
import Page404 from './components/Page404'
import User from './components/User'
import Filter from './components/Filter'
import ContactUs from './components/ContactUs'
import Channel from './components/Channel'
import Other from './components/Other'
import Company from './components/Company'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/filter' element={<Filter/>}/>
      <Route path='/user/:name' element={<User/>}/>
      <Route path='/*' element={<Page404/>}/>
      <Route path='/contactus' element={<ContactUs/>}>
          <Route path="company" element={<Company/>}/>
          <Route path="channel" element={<Channel/>}/> 
          <Route path="other" element={<Other/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
