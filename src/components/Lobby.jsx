import React, { useEffect, useState } from "react";
import { getAllItems } from "../api/cartapi";
import "../styles/lobby.css";
import { Button } from "./Button";
import { Carrito } from "./Carrito";
import { Modal } from "./Modal";

export const Lobby = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const [counter, setCounter] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item === product.title);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item === product.title ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { title: product.title, qty: 1 }]);
    }
  };
  useEffect(() => {
    async function loadProducts() {
      const res = await getAllItems();
      setProducts(res.data);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <h1>COUNTER : {counter}</h1>
      <div className="modal">
        {isModalOpen ? "" : <button onClick={openModal}>Carrito</button>}
        <Modal isOpen={isModalOpen} onClose={closeModal} cart={cart}>
          <button onClick={closeModal}>Cerrar carrito</button>
        </Modal>
      </div>
      {products.map((product) => (
        <div key={product.id} className="product">
          <p>{product.title}</p>
          <img src={product.image} className="images" />
          <Button
            product={product}
            addToCart={addToCart}
            addCounter={addCounter}
          ></Button>
        </div>
      ))}
    </div>
  );
};
