import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 70%;
  border-radius: 8px;
  padding: 16px 8px 12px 16px;
  margin: 2% auto;
  /* margin: auto; */
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  background-color: lightgray;
`;

const StyledImage = styled.img`
  width: 95%;
  border-radius: 10px;
  margin-bottom: 2%;
  border: 1px solid white;

  &:hover {
    border: 1px solid black;
  }
`;

const Image = (props) => {
  return (
    <StyledContainer>
      <h1>{props.data.title}</h1>
      <h2>Date: {props.data.date}</h2>
      <h3>By: {props.data.copyright}</h3>
      <StyledImage src={props.data.url} alt="" />
    </StyledContainer>
  );
};

export default Image;
