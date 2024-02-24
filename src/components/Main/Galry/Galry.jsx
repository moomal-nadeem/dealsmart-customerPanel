import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../http";
import "./Galry.css";

export default function Galry() {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [dataso, setDataso] = useState([]);
  const [selectedImg, setSelectedImg] = useState();

  const { id } = useParams();
  useEffect(() => {
    const fetchAllData = () => {
      http.get("/showByIdProduct/" + id).then((res) => {
        setData(res.data);

        localStorage.setItem("product-info", JSON.stringify(res.data.afterOff));
      });
    };
    fetchAllData();
  }, [id]);

  useEffect(() => {
    const fetchAllData = () => {
      http.get("/searchImg/" + id).then((res) => {
        setDatas(res.data);
      });
    };
    fetchAllData();
  }, [id]);
  useEffect(() => {
    const fetchAllData = () => {
      http.get("/ptotal/" + id).then((res) => {
        setDataso(res.data);
      });
    };
    fetchAllData();
  }, [id]);

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-lg-8  col-md-12 col-sm-12 text-truncate font12">
            {data.smallDesc}
          </div>
          <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-primary font12">
            -Free Delivery
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-12 mt-2 col-md-12 col-sm-12 ">
            <div className="card" style={{ margin: "-.1rem" }}>
              <div className="position-relative">
                <span className="badge2 bg-warning position-absolute top-0 end-0 tags">
                  {data.offf}% OFF
                </span>
              </div>

              <img
                className="card-img-top "
                id="cardi-img"
                src={
                  selectedImg === undefined
                    ? "https://api.dealsmart.ae/Products/" + data.img
                    : selectedImg
                }
                alt=""
              />

              <div className="position-relative">
                <span
                  className="badge1 bg-info position-absolute top-0 start-0 tags "
                  style={{ marginTop: "-1.2rem" }}
                >
                  Free Delivery
                </span>
              </div>
              <div className="card-body">
                <p className="card-text text-truncate font12 mt-2">
                  {data.smallDesc}
                  <p className="dsc ">
                    <b className="text-danger dsc">{data.afterOff} AED</b>{" "}
                    <s className="offe offs">{data.total}</s>
                  </p>
                </p>
              </div>
              <div className="imgContainer mb-2" id="imgContainer-resp">
                {datas.map((img, index) => (
                  <img
                    src={"https://api.dealsmart.ae/Products/" + img.img}
                    style={{
                      border:
                        selectedImg ===
                        "https://api.dealsmart.ae/Products/" + img.img
                          ? "4px solid skyblue"
                          : "",
                    }}
                    key={index++}
                    alt=""
                    onClick={() =>
                      setSelectedImg(
                        "https://api.dealsmart.ae/Products/" + img.img
                      )
                    }
                    className="smallImg m-1"
                    id="smallImg-resp"
                  ></img>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
