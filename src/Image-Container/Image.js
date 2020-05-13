import React, { useState, useEffect } from "react";
import "./Image.css";

const Image = ({ image }) => {
  return (
    <div className="image-container">
      <img src={image} />
    </div>
  );
};

export default Image;
