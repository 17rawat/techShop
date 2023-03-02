import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const data = await fetch("https://dummyjson.com/products/");
  //     const json = await data.json();

  //     setProducts(json.products);
  //   };

  //   fetchProducts();
  // }, []);

  // console.log(products);
  return (
    <div>
      <ul className="products-container">
        {products.map((product) => (
          <li key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
