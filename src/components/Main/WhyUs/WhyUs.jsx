import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../AboutUs/AboutUs.css";
export default function WhyUs() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <p>Why us?</p>
        <hr />
        <div className="container aboutText mt-2">
          Dealsmart is your onestop online shop for classy watches, cool
          gadgets, smart devices and the swankiest gifts across the UAE. All
          products across our site are quality and price guranteed and sourced
          from authorised sellers or even directly from manufacturers to ensure
          their authenticity.{" "}
        </div>
        <div className="container aboutText mt-2">
          We pride ourselves offiering the best prices and while you may not
          find everything on our website. You can be sure, that whatever you do
          will be at the best prices possible.
        </div>
        <div className="container aboutText2 mt-2">
          All orders are shipped from the UAE
        </div>
        <div
          className="container aboutText mt-2"
          style={{ marginLeft: "20px" }}
        >
          If you need your parcel delivered on a certain day our Customer
          Services team will arrange this for you at no extra charge.
        </div>
        <div className="container aboutText2 mt-2">100% genuine products</div>
        <div
          className="container aboutText mt-2"
          style={{ marginLeft: "20px" }}
        >
          Every item sold by dealsmart.ae is a 100% genuine item supplied to us
          directly from the manufacturer.
        </div>
        <div className="container aboutText2 mt-2">Price Promise</div>
        <div
          className="container aboutText mt-2"
          style={{ marginLeft: "20px" }}
        >
          We stand by our lowest price promise.
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
