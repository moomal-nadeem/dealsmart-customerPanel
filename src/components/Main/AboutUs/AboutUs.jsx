import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <p>About Us</p>
        <hr />
        <div className="container aboutText mt-2">
          Dealsmart.ae is operated by Dealsmart Services.
        </div>
        <div className="container aboutText mt-2">
          Finding the bargain of a lifetime while shopping online is quite
          commonplace with whole sellers and 3d party retailers selling products
          without any aussurance of source or authenticity.
        </div>
        <div className="container aboutText mt-2">
          Dealsmart.ae brings the value of outlet shopping to the convenience of
          e-commerce, while ensuring that every product you purchase is genuine
          and directly from sellers that manufacture them.
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
