import React, { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import http from "../../../http";
import Intro from "../Intro/Intro";
import './bill.css';
export default function Bill() {
  const key = JSON.parse(localStorage.getItem("deal-info"));
  const [datas, setData] = useState([]);
  var totalbill = 0;
  var itm = 0;
  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = () => {
    http.get("/showByIdOrder/" + key.id).then((res) => {
      setData(res.data);
    });
  };
  const deleteData = (id) => {
    http.delete("/orderDelete/" + id).then((res) => {
      fetchAllData();
    });
  };

  return (
    <>
      <div className="container col-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
        <div
          className="container-fluid shad  "
          style={{ background: "white", height: "auto" }}
        >
          <div className="form-group ">
            <br></br>
            <div class="alert alert-info font12 " role="alert">
              Your order Confirmed!
            </div>
          
            <label htmlFor="exampleInputEmail1" className="font12" >
              Hello, {key.name}
            </label>
            <br />
            <label
              htmlFor="exampleInputEmail1"
              className="font12"
            
            >
              You order has been confirmed and will be shipped in next two
              working days!
            </label>
            <br />
          </div>
          <div>
            <label
              htmlFor="exampleInputEmail1"
              className="font12 "
              
            >
              Order No <br></br> {key.id}
            </label>
            <label
              htmlFor="exampleInputEmail1"
              className="font12 ml"
              
            >
              Shiping Address: <br></br>
              {key.emi},{key.address}
            </label>
            <label
              htmlFor="exampleInputEmail1"
              className="font12 ml"
             
            >
              Payment
              <br></br>
              Cash on Delivery
            </label>
          </div>
          {datas.map((item, index) => {
            itm = itm + 1;
            totalbill += item.qun * item.afterOff;
            return (
              <div>
                <label
                  htmlFor="exampleInputEmail1"
                  className="font12"
                 
                >
                  <img
                    src={"https://api.dealsmart.ae/Products/" + item.img}
                    alt=""
                    style={{ width: "4rem" }}
                  ></img>
                </label>
                <label
                  htmlFor="exampleInputEmail1"
                  className="font12 ml"
                  
                >
                  Quantity: {item.qun}
                  <br></br>
                  {item.smallDesc}
                </label>
                <label
                  htmlFor="exampleInputEmail1"
                  className="font12 ml"
                  
                >
                  {item.qun * item.afterOff} AED
                  <Link to="/Bills">
                    <ImBin
                      onClick={() => deleteData(item.id)}
                      style={{ marginLeft: "10px" }}
                      class="text-info"
                    />
                  </Link>
                </label>
              </div>
            );
          })}
          <div className="alignRight" >
            <label
              htmlFor="exampleInputEmail1"
              className="font12"
            >
              Subtotal:
            </label>
            <label
              htmlFor="exampleInputEmail1"
              className="font12 mt-2 ml"
            
            >
              {totalbill} AED{" "}
            </label>
          </div>
          <div className="alignRight" >
            <label
              htmlFor="exampleInputEmail1"
              className="font12 mt-2"
             
            >
              Shipping Fee:
            </label>
            <label
              htmlFor="exampleInputEmail1"
              className="font12 mt-2 ml"
           
            >
              Free
            </label>
          </div>
          <div className="alignRight" >
            <label
              htmlFor="exampleInputEmail1"
              className="font12 mt-2"
        
            >
              Grand Total:
            </label>
            <label
              htmlFor="exampleInputEmail1"
              className="font12 mt-2 ml"
           
            >
              {totalbill} AED
              {/* {itm} AED */}
              {localStorage.setItem("item-info", JSON.stringify(itm))}
            </label>
          </div>
          <div className="alignRight" >
            <label
              htmlFor="exampleInputEmail1"
              className="font12 mt-2"
     
            >
              Thanks for shopping with us!
            </label>
          </div>
          <div className="alignRight" >
            <label
              htmlFor="exampleInputEmail1"
              className="font12 mt-2"
             
            >
              <Link to="/ClearBill">
                <button type="submit" className="btn btn-sm btn-info mb-5 text-white">
                  New Order
                </button>
              </Link>
            </label>
          </div>
        </div>
      </div>
      <div className="container col-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
        <Intro />
      </div>
    </>
  );
}
