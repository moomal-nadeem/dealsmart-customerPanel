import { useFormik } from "formik";
import React from "react";
import { odr } from "../../../schemas/odr";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const initialValues = {
  dID: "",
  pID: "",
  qun: "",
};
export default function AnOther(props) {
  const key = JSON.parse(localStorage.getItem("deal-info"));
  const key2 = JSON.parse(localStorage.getItem("product-info"));
  // alert(key2);
  // alert("product id"+props.ids+"deal id"+key.id)

  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: odr,

      onSubmit: (values) => {
        const formData = new FormData();
        formData.append("dID", key.id);
        formData.append("pID", props.ids);
        formData.append("qun", values.qun);
        fetch("https://api.dealsmart.ae/api/addOrder", {
          method: "POST",
          body: formData,
        }).then((response) => {
          if (response.status === 200 || response.status === 201) {
            
            navigate("/Bills");
          } else {
            swal({
              title: "Fails!",
              width: "100px",
              height: "314px",
              text: "Fails to Order!",
              icon: "error",
              button: "OK",
            });
            navigate("/FillAnOtherForm/" + props.id);
          }
        });
      },
    });

  return (
    <div className="container-fluid mt-4 shad "  style={{ background: "white"}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label for="exampleInputEmail1 font12" className="mt-1">
            Order Now
          </label>
          <br />
          <label for="exampleInputEmail1" className="font12">
            Kindly fill the form & we will deliver next day.
          </label>
          <br />
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1" className="mt-2 mb-1 font12">
            Quantity
            <span className="font12" style={{ color: "red" }}>
              *
            </span>
          </label>
          {/* <input type="number" className="form-control opt" id="exampleInputPassword1" placeholder="Enter Quantity" name="qun"
            value={values.qun}
            onChange={handleChange}
            onBlur={handleBlur}>
        
    </input> */}
          <select
            type="number"
            className="form-control font12"
            id="exampleInputPassword1"
            name="qun"
            value={values.qun}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value={0} className="font12">
              -----Select-----
            </option>
            <option value={1} className="font12">
              1 - {key2} AED
            </option>
            <option value={2} className="font12">
              2 - {key2 * 2} AED
            </option>
            <option value={3} className="font12">
              3 - {key2 * 3} AED
            </option>
            <option value={4} className="font12">
              4 - {key2 * 4} AED
            </option>
            <option value={5} className="font12">
              5 - {key2 * 5} AED
            </option>
          </select>
          <label className="form-label" htmlFor="form3Example1m">
            {errors.qun && touched.qun ? (
              <p className="v">{errors.qun}</p>
            ) : null}
          </label>
        </div>

        <button
          type="submit"
          className="btn  btn-info font14 form-control mt-2 mb-5"
         style={{color:"white"}}
        >
        Confirm Order
        </button>
      </form>
    </div>
  );
}
