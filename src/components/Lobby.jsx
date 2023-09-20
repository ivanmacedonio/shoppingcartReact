import React, { useEffect, useState } from "react";
import { getAllItems } from "../api/cartapi";
import "../styles/lobby.css";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Navigate, useNavigate, useParams } from "react-router-dom";


export const Lobby = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const [counter, setCounter] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const buy = () => {
    setCart([])
    setCounter(0)

  }

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.title === product.title);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.title === product.title ? { ...item,  qty: item.qty + 1, price: item.price } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { title: product.title, qty: 1, price: product.price }]);
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
        <Modal isOpen={isModalOpen} onClose={closeModal} cart={cart}
        buy = {buy}>
          <button onClick={closeModal}>Cerrar carrito</button>
        </Modal>
      </div>
      {products.map((product) => (
        <div key={product.id} className="product" 
        onClick={() => {
          navigate(`/product/${product.id}`);
        }} >
          <h3>{product.title}</h3>
          <p>${product.price}</p>
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
