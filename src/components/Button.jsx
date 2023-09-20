import React, { useState } from "react";
import "../styles/button.css";

export const Button = ({product , addToCart, addCounter}) => {

    function handleOnClick() {
      addToCart(product)
      addCounter()
    }

  return <button onClick={handleOnClick}>+</button>;
};
