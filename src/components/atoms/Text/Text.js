import React from "react";
import "./Text.css";

export default function Text(props) {
  const { label, type } = props;
  return (
    <>
      {type === "h1" ? (
        <h1>{label}</h1>
      ) : type === "h2" ? (
        <h2>{label}</h2>
      ) : type === "h3" ? (
        <h3>{label}</h3>
      ) : type === "h4" ? (
        <h4>{label}</h4>
      ) : type === "h5" ? (
        <h5>{label}</h5>
      ) : type === "h6" ? (
        <h6>{label}</h6>
      ) : type === "small" ? (
        <small>{label}</small>
      ) : (
        <p>{label}</p>
      )}
    </>
  );
}
