import React, { useState, useEffect } from 'react';
import http from "../../../http";
import '../Intr/Intr.css'
import '../../../App.css'
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io';
export default function Intro(props){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http.get("/search/" + props.id)
      .then(response => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const sortedProducts = products.sort((a, b) => b.rank - a.rank);

  return (
  <>
  
  <NavBar />
  <Link to="https://wa.me/00971559362396">
  <div className="fixed-bottom" style={{marginTop:"5rem", marginLeft:"1rem"}}>
    
      <IoLogoWhatsapp size={50} className='text-success'/>
      
      </div>
      </Link>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center text-center">
        {sortedProducts.map(product => (
          <div className="col-6 col-lg-4 mt-3 col-md-4 col-sm-6 " >
            
            <div className="card" style={{ margin: "-.4rem" }}>
              <div className="position-relative">
               
                <span
                  className="badge2 bg-warning position-absolute top-0 end-0 "
                >
                  {product.offf}%   OFF
                </span>
              </div>
              <Link to={{ pathname: "/P/" + product.id }} >
              
              <img className="card-img-top image" id="card-img" src={"https://api.dealsmart.ae/Products/" + product.img} alt="" />
             
              </Link>
              <div className="position-relative">
                <span
                  className="badge1 bg-info position-absolute top-0 start-0  "
              style={{marginTop:"-1.4rem"}}
                >
                  Free Delivery
                </span>
              </div>
              <div className="card-body">
                <p className="card-text text-truncate dsc mt-2 font12"  >
                {product.smallDesc}
                </p>
                <p className="dsc " style={{marginTop: "-1rem" }}>
                  <b className="text-danger dsc font14" >{product.afterOff} AED</b>{" "}
                  <s className="offe offs font12" >{product.total}  AED</s>
                </p>
              </div>
            </div>
          </div>
       
          
       ))}
        </div>
      </div>
  </>
  );
};


