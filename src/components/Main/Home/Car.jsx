import React from 'react'
import Footer from '../Footer/Footer'
import Intro from '../Intro/Intro';
import NavBar from '../NavBar/NavBar'
import { IoLogoWhatsapp } from 'react-icons/io';
import { Link } from 'react-router-dom';
export default function Car() {


  return (
    <div>
      <NavBar/>
      <Link to="https://wa.me/00971559362396">
  <div className="fixed-bottom" style={{marginTop:"5rem", marginLeft:"1rem"}}>
    
      <IoLogoWhatsapp size={50} className='text-success'/>
      
      </div>
      </Link>
      <Intro id = '6'/>
      <Footer/>
    </div>
  )
}
