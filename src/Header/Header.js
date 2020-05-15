import React, { useState, useEffect } from "react";
import "./Header.css";
import styled from "styled-components";

const StickyDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightblue;
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0% 0% 2% 0;
  padding: 1%;
`;

const Header = () => {
  return (
    <StickyDiv>
      <h3>Welcome to Nasa's definitely real official Website</h3>
      <img
        className="header-logo"
        src={require("../assets/nasalogo.png")}
        alt=""
      />
    </StickyDiv>
  );
};

export default Header;
