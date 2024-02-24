// import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import lo from "../../../img/lo.png";
export default function NavBar() {
  const itm = JSON.parse(localStorage.getItem("item-info"));
  return (
    <>
      <div className="tot">
        <nav
          className="navbar navbar-expand-lg  fixed-top navbar-light "
          style={{ background: "white" }}
        >
          <div className="container-fluid">
            <Link to="https://dealsmart.ae">
              <div id="grad">
                <img src={lo} alt="" style={{ width: "6rem" }} />
              </div>
            </Link>
           
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>

            <div
              className="collapse navbar-collapse color"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 color links">
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/" id="active-link">
                    <span className="Home hm">ALL</span>
                  </Link>
                </li>

                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/Watches" id="active-link">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      Watches
                    </span>
                  </Link>
                </li>
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/Cosmetics" id="active-link">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      Cosmetics
                    </span>
                  </Link>
                </li>

                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/Hair" id="active-link">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      Hair
                    </span>
                  </Link>
                </li>
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/Kitchen" id="active-link">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      Kitchen
                    </span>
                  </Link>
                </li>
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/Mobile" id="active-link">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      Mobile
                    </span>
                  </Link>
                </li>
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/Car" id="active-link">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      Car
                    </span>
                  </Link>
                </li>
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/Electronics" id="active-link">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      Electronics
                    </span>
                  </Link>
                </li>
                <li className="nav-item " style={{ marginTop: "12px" }}>
                  <Link aria-current="page" to="/Other" id="active-link">
                    <span className="Home" style={{ marginLeft: "1rem" }}>
                      Other
                    </span>
                  </Link>
                </li>
              </ul>

             
            </div>
           
          </div>
          
        </nav>
        
      </div>
    </>
  );
}
