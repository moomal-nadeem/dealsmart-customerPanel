import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer" id="footer-res">
        <div className="container flex" id="flexx-res">
          <div className="fd1" id="fd1-res">
            <p className="al">USEFUL LINKS</p>
            <hr></hr>
            <p className="as">
              <Link to="/AboutUs" className="as">
                About Us
              </Link>
            </p>
            <p className="as">
              <Link to="/UnClaimable" className="as">
                Un-Claimable Products
              </Link>
            </p>
            <p className="as">
              <Link to="/WhyUs" className="as">
                Why Us?
              </Link>
            </p>
          </div>
          <div className="fd2" id="fd2-res">
            <p className="al">CONTACT INFO</p>
            <hr></hr>
            <p className="as">Dealsmart</p>
            <p className="as">Fujairah, UAE</p>
            <p className="as">
              Webpage:{" "}
              <a href="https://dealsmart.ae" className="as">
                www.dealsmart.ae
              </a>
            </p>
            <p className="as">
              Facebook:{" "}
              <a
                href="https://web.facebook.com/people/DealsMart/100087885917492/"
                className="as"
              >
                dealsmart
              </a>
            </p>
            <p className="as">
              Instagram:{" "}
              <a
                href="https://instagram.com/dealsmartae?igshid=MGNiNDI5ZTU="
                className="as"
              >
                dealsmart
              </a>
            </p>
            <p className="as">
              Email:{" "}
              <Link href="mailto:Admin@dealsmart.ae" className="as">
                Admin@dealsmart.ae
              </Link>
            </p>
            <p className="as">
              Whatsapp:{" "}
              <Link to="https://wa.me/00971559362396" className="as">
                00971559362396
              </Link>
            </p>
          </div>
          <div className="fd3" id="fd3-res" >
            <hr></hr>
            <a href="https://moomalnadeem.com">
            <p className="as" style={{marginTop:"-1px"}}>
              Site Designed by Moomal Nadeem
            </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
