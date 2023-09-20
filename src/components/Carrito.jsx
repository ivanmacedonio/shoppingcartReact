import React, { useEffect, useState } from "react";

export const Carrito = ({ cart, buy, isOpen }) => {
  const [total, setTotal] = useState(0);

  function handleTotal() {
    cart.forEach((item) => {
      setTotal(total + item.price);
    });
  }

  useEffect(() => {
    handleTotal();
  }, [cart]);

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.qty}</p>
          <p>{item.price}</p>
        </div>
      ))}
      {isOpen ? <h1>TOTAL : {total}</h1> : ""}

      <button onClick={buy}>Buy</button>
    </>
  );
};
