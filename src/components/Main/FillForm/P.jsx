import React, { useEffect, useState } from "react";
import Galry from "../Galry/Galry";

import Header from "../Header/Header";
import "./Form.css";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import http from "../../../http";
import Forms from "./Forms";

import Intro from "../Intro/Intro";
export default function P() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchAllData = () => {
      http.get("/showByIdProduct/" + id).then((res) => {
        setData(res.data);
      });
    };
    fetchAllData();
  }, [id]);
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-5 col-xl-5 mt-3 col-md-6 col-sm-12 ">
            {" "}
            <Galry />
          </div>
          <div className="col-12 col-lg-5 col-xl-5 mt-3 col-md-6 col-sm-12 ">
            <Forms ids={id} />
          </div>
        </div>
      </div>
      <div className="container col-12 col-lg-9 col-xl-9 col-md-9 col-sm-12 px-4 mt-2">
        <div class="card " >
          <div class="card-header bg-info font14 pt-2" style={{color:'white'}}>Description</div>
          <div class="card-body mb-2" >
            <p class="card-text font12 mt-3">{data.Des}</p>
          </div>
        </div>
      </div>

      
      <div className="container col-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
        <Intro id="8" />
      </div>

      <Footer id="foot-res" />
    </>
  );
}
