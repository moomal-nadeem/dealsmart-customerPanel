import React from "react";
import OrderNow from "../OrderNow/OrderNow";
import AnOther from "../SelectOther/AnOther";

export default function Forms(props) {
  return (
    <div >
      {!localStorage.getItem("deal-info") ? (
        <OrderNow />
      ) : (
        <AnOther ids={props.ids} />
      )}
    </div>
  );
}
