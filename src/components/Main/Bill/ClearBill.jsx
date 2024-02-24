import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ClearBill() {
  const navigate = useNavigate();
  // localStorage.clear()
  localStorage.removeItem("deal-info");

  useEffect(() => {
    if (!localStorage.getItem("deal-info")) {
      navigate("/");
    }
  }, [navigate]);

  return <div></div>;
}
