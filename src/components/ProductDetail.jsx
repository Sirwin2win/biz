import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(0);
  useEffect(() => {
    // fetch(`https://fakeapi.net/products/${id}`)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [product]);

  return (
    <div key={product.id}>
      <div className="row">
        <div className="col">
          <img src={product.image} alt="" />
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

export default ProductDetail;
