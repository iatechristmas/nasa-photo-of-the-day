import React, { useState } from "react";

const Button = (props) => {
  const { setToggle, toggle } = props;
  return (
    <div>
      <button onClick={(setToggle = True)}>Toggle on</button>
      <button onClick={(setToggle = False)}>Toggle off</button>
    </div>
  );
};

export default Button;
