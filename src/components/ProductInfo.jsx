import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(0);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  let arr = [];
  for (let i in product.images) {
    arr.push(product.images[i]);
  }
  return (
    <div key={product.id}>
      <div className="row">
        <div className="col">
          {arr.map((v) => (
            <img src={v} alt="" />
          ))}
        </div>
        <div className="col">
          <h2>{product.title}</h2>
          <h4>{product.category}</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
