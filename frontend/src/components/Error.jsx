import React from "react";

const Error = ({ title, message }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#f66c6c",
        width: "500px",
        height: "150px",
        margin: "auto",
        borderRadius: "10px",
        color: "white",
        padding: "20px",
        fontWeight: "bold",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2 style={{ fontSize: "30px" }}>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
