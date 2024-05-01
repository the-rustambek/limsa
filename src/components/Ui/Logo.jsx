import React from "react";

const Logo = ({ image, text }) => {
  return (
    <div style={{ display: "flex", flexDirection:"column", alignItems:"center" }} className="logo_card">
      <div
        style={{
          width: "120px",
          height: "120px",
          marginBottom: "10px",
        }}
      >
        <img
          src={image}
          alt="Logo"
          style={{ objectFit: "contain", width: "120px", height: "120px" }}
        />
      </div>
      <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
        {text}
      </p>
    </div>
  );
};

export default Logo;
