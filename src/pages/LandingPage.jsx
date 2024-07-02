import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div>
      <p>Landing page</p>
      <Navbar/>
      <Link to={'addproduct'} >Add</Link>
    </div>
  )
}

export default LandingPage
