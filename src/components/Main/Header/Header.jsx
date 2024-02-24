// import "../App.css";
import React from "react";

import "../NavBar/NavBar.css";
import "./Nav.css";
import lo from "../../../img/lo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top "
        id="wid-res"
        style={{ background: "white" }}
      >
        <div
          className="container-fluid "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div id="grad">
            <Link to="https://dealsmart.ae">
              <h6 className="flex" id="grad">
                <img
                  src={lo}
                  alt=""
                  style={{ width: "4rem", marginBottom: "-.5rem" }}
                />
              </h6>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
