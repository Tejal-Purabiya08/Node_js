import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/product/api", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  return (
    <div>
      {state.map((el) => (
        <li key={el._id}>
          <Link to={`/category/${el.categoryId._id}`}>
            <h3>{el.title}</h3>
          </Link>
          <p><b>price</b> : {el.price}</p>
          <p><b>quantity</b> : {el.qty}</p>
          <img
            src={`http://localhost:3006/${el.image}`}
            alt=""
            height="100"
            width="100"
          />
        </li>
      ))}
    </div>
  );
}

export default Product;
