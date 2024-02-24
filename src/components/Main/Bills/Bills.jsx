import React from "react";
import { Link } from "react-router-dom";
import Bill from "../Bill/Bill";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Bills.css";

import Intro from "../Intro/Intro";

export default function Bills() {
  return (
    <>
      <Header />
      <div className=" mt-5">
        <Link to="/">
          <div
            className="cont container col-12 col-lg-9 col-xl-9 col-md-9 col-sm-12 "
            id="cont-res"
          >
            {" "}
            <button
              type="submit"
              className="btn form-control btn-info font14  mt-2 mb-1"
              style={{
                color: "white",
              }}
            >
              Purchase more products
            </button>
          </div>
        </Link>
      
          <Bill />
       
      </div>

  <div className="container col-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
  <Intro id="8" />
  </div>

     
      <Footer />
    </>
  );
}
