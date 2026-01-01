import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryList() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3006/product/category/${categoryId}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <div>
      <h2>Category Products</h2>

      {products.length === 0 && <p>No products found</p>}

      {products.map((p) => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p> <b>price</b> : {p.price}</p>
          <p> <b>quantity</b> : {p.qty}</p>
          {p.image && (
            <img src={`http://localhost:3006/${p.image}`} width="120" alt="" />
          )}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
