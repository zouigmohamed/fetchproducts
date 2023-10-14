import { useEffect, useState } from "react";
import "./product.css";
const url = "https://course-api.com/react-store-products";
const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch(url);
      const Products = await response.json();
      setProducts(Products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h1 className="title"> Fetch products From Api</h1>
      <div className="container">
        {products.map((item) => (
          <div className="wrapper" key={item.id}>
            <div className="product-img">
              <img src={item.image} height="420" width="327" />
            </div>
            <div className="procat">
              <p className="category">{item.category}</p>
              <p className="company">{item.company}</p>
            </div>
            <hr />
            <div className="product-info">
              <div className="product-text">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
              <hr />
              <p>Available Colors :</p>
              <div className="colorsList">
                {item.colors.map((color) => (
                    <ul key={color}>
                        <li className="colors" style={{ backgroundColor: `${color}` }}></li>
                    </ul>
                ))}
              </div>
              <hr />
              <div className="product-price-btn">
                <button type="button">buy now</button>
                <p>
                  <span>{item.price}$</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
