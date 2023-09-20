import React, { useEffect, useState } from "react";
import { getItem } from "../api/cartapi";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "../styles/detail.css";


export const Detail = () => {
  const [data, setData] = useState([]);

  const params = useParams();

  const navigate = useNavigate()

  function handleOnClick(){
    navigate('/')
  }

  useEffect(() => {
    async function loadItem() {
      const res = await getItem(params.id);
      setData(res.data);
    }
    loadItem();
  }, []);

  return <div>
    <img src={data.image} />
    <h1>{data.title}</h1>
    <h2>{data.price}</h2>
    <button onClick={handleOnClick}>Back to shop</button>
  </div>;
};
