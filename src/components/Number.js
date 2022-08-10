import React from "react";

export default function Number(props) {
  return (
    <h2
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "2px solid",
        textAlign: "center",
        lineHeight: "100px",
        margin:"5px"
      }}
    >
      {props.number}
    </h2>
  );
}
