import React, { useEffect, useState } from 'react'

import http from '../../../http';
import Footer from '../Footer/Footer'
import Intr from '../Intr/Intr';
import NavBar from '../NavBar/NavBar'

export default function Home() {
  const [ setData] = useState([]);
  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = () => {
    
    http.get("/productList").then((res) => {
      setData(res.data);
    });
  };


  return (
    <div>
      <NavBar/>
      <Intr />

      <Footer/>
      
    </div>
  )
}
