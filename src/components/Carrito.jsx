import React from "react";

export const Carrito = ({ cart, buy }) => {
  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.qty}</p>
        </div>
      ))}

      <button onClick={buy}>Buy</button>
    </>
  );
};
