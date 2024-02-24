import React from "react";
import "./OrderNow.css";
import { ordernow } from "../../../schemas/ordernow";
import { useFormik } from "formik";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../../http";
const initialValues = {
  name: "",
  pno: "",
  emi: "",
  address: "",
};
export default function OrderNow() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ordernow,

      onSubmit: (values, action) => {
        console.log(values);

        http.post("/addDeal", values).then((res) => {
          console.log(res.data.id);
          localStorage.setItem("deal-info", JSON.stringify(res.data));
          if (res.status === 200 || res.status === 201) {
            console.log("Success");
           
            navigate("/P/" + id);
          } else {
            console.log("fail");
            swal({
              title: "Fails!",
              width: "150px",
              height: "314px",
              text: "Fails to Create!",
              icon: "success",
              button: "OK",
            });
            navigate("/FillForm/" + id);
          }
        });
        action.resetForm();
      },
    });

  return (
    <div
      className="container-fluid mt-4 shad  "
      style={{ background: "white"}}
      
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="exampleInputEmail1" className="mt-3 font12">
            Order Now
          </label>
          <br />
          <label htmlFor="exampleInputEmail1" className="font12 ">
            Kindly fill the form & we will deliver next day.
          </label>
          <br />
          <label htmlFor="exampleInputEmail1" className="font12" style={{textAlign:'left'}}>
            Full Name
            <span className="font12" style={{ color: "red" }}>
              *
            </span>
          </label>
          <input
            type="name"
            className="form-control font12"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Full Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className="form-label font12" htmlFor="form3Example1m">
            {errors.name && touched.name ? (
              <p className="v">{errors.name}</p>
            ) : null}
          </label>
        </div>
        <div className="form-group" style={{ marginTop: "-1rem" }}>
          <label htmlFor="exampleInputPassword1" className="font12">
            Mobile
            <span className="font12" style={{ color: "red" }}>
              *
            </span>
          </label>
          <input
            type="text"
            className="form-control font12"
            id="exampleInputPassword1"
            placeholder="Enter Mobile Number"
            name="pno"
            value={values.pno}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className="form-label font12" htmlFor="form3Example1m">
            {errors.pno && touched.pno ? (
              <p className="v">{errors.pno}</p>
            ) : null}
          </label>
        </div>

        <div className="form-group" style={{ marginTop: "-1rem" }}>
          <label htmlFor="exampleInputPassword1" className="font12">
            Emirates
            <span className="font12" style={{ color: "red" }}>
              *
            </span>
          </label>
          <select
            type="password"
            className="form-control font12"
            id="exampleInputPassword1"
            placeholder="Enter Mobile Number"
            name="emi"
            value={values.emi}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="Empty" className="font12">
              -----Select-----
            </option>
            <option value="DUBAI" className="font12">
              DUBAI - Free Delivery
            </option>
            <option value="ABU DHABI" className="font12">
              ABU DHABI - Free Delivery
            </option>
            <option value="SHARJAH" className="font12">
              SHARJAH - Free Delivery
            </option>
            <option value="AJMAN" className="font12">
              AJMAN - Free Delivery
            </option>
            <option value="RAK" className="font12">
              RAK - Free Delivery
            </option>
            <option value="FUJAIRAH" className="font12">
              FUJAIRAH - Free Delivery
            </option>
            <option value="UAQ" className="font12">
              UAQ - Free Delivery
            </option>
            <option value="AL AIN" className="font12">
              AL AIN - Free Delivery
            </option>
          </select>
          <label className="form-label font12" htmlFor="form3Example1m">
            {errors.emi && touched.emi ? (
              <p className="v">{errors.emi}</p>
            ) : null}
          </label>
        </div>

        <div className="form-group" style={{ marginTop: "-1rem" }}>
          <label htmlFor="exampleInputPassword1" className="font12">
            Delivery Address
            <span className="font12" style={{ color: "red" }}>
              *
            </span>
          </label>
          <textarea
            type="password"
            className="form-control font12"
            id="exampleInputPassword1"
            placeholder="Delivery Address"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className="form-label font12" htmlFor="form3Example1m">
            {errors.address && touched.address ? (
              <p className="v">{errors.address}</p>
            ) : null}
          </label>
        </div>
        <button
          type="submit"
          className="btn font14 btn-info form-control mb-5 "
          style={{color:"white"}}
        >
          SUBMIT ORDER
        </button>
      </form>
    </div>
  );
}
