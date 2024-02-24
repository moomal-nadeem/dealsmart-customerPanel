import React from "react";
import NavBar from "../NavBar/NavBar";
import "./MainPage.css";
import imge from "../../../img/m6.jfif";
import { Link } from "react-router-dom";
import { FiArrowUpCircle } from 'react-icons/fi';

export default function MainPage() {
        



  return (
    <>
      <NavBar />
      <div className="fixed-bottom" style={{marginTop:"5rem", marginLeft:"1rem"}}>
      <FiArrowUpCircle />
      moomal
      </div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center text-center">
       
          <div className="col-6 col-lg-3 mt-3 col-md-4 col-sm-6 ">
            
            <div className="card" style={{ margin: "-.6rem" }}>
              <div className="position-relative">
               
                <span
                  className="badge bg-warning position-absolute top-0 end-0 tags"
                >
                  20% Off
                </span>
              </div>
              <Link>
              
              <img className="card-img-top card-img img-fluid" src={imge} alt="" />
             
              </Link>
              <div className="position-relative">
                <span
                  className="badge bg-primary position-absolute top-0 start-0 tags"
              
                >
                  Free Delivery
                </span>
              </div>
              <div className="card-body">
                <p className="card-text text-truncate dsc mt-2" >
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p className="dsc " style={{marginTop: "-1rem" }}>
                  <b className="text-danger dsc">200 AED</b>{" "}
                  <s className="offe offs">blue</s>
                </p>
              </div>
            </div>
          </div>
       
          
          
        </div>
      </div>
      
    </>
  );
}
