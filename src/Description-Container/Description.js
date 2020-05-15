import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const StyledContainer = styled.div`
  width: 70%;
  border-radius: 8px;
  padding: 16px 8px 12px 16px;
  margin: auto;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  background-color: lightgray;
`;

const StyledParagraph = styled.p`
  padding: 2%;
  letter-spacing: 1px;
  margin: auto;
  text-align: left;
  /* font-family: BlinkMacSystemFont, "Segoe UI"; */
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
`;

const Description = ({ explanation }) => {
  // const toggleButton = document.querySelector(".toggle-button");
  // console.log(toggleButton);
  // const articleDiv = document.querySelector(".article");
  // toggleButton.addEventListener("click", (event) => {
  //   articleDiv.classList.toggle("article-open");
  // });
  const [toggle, setToggle] = useState(false);

  if (toggle) {
    return explanation;
  } else {
    explanation = "";
  }

  return (
    <div className="article">
      <StyledContainer>
        <StyledParagraph>{explanation}</StyledParagraph>
        <Button setToggle={setToggle} toggle={toggle} />
      </StyledContainer>
    </div>
  );
};

export default Description;
