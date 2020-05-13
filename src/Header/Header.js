import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ date }) => {
  return (
    <div className="header-wrapper">
      <p>Welcome to Nasa's definitely real official Website</p>
      <img className="header-logo" src={require("../assets/nasalogo.png")} />
      <p>Date: {date}</p>
    </div>
  );
};

export default Header;
