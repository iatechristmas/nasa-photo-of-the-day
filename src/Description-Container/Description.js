import React, { useState, useEffect } from "react";
import "./Description.css";

const Description = ({ explanation }) => {
  return (
    <div className="description-container">
      <p>{explanation}</p>
    </div>
  );
};

export default Description;
