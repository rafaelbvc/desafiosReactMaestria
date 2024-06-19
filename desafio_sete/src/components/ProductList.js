import { useEffect, useState } from "react";
import { url } from "../config/config";
import "./ProductList.css";

const ProductList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorFetch, setErrorFetch] = useState(null);

  useEffect(() => {
    const handleFetch = async () => {
      setLoading(true);
      try {
        const data = await fetch(url);
        const items = await data.json();
        setItems(items);
      } catch (e) {
        setLoading(false);
        setErrorFetch("Something went wrong");
      } finally {
        setLoading(false);
        setErrorFetch(null);
      }
    };
    handleFetch();
  }, []);

  return (
    <div className="container_product_list">
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {errorFetch && <p>Error: {errorFetch}</p>}
      {!loading && (
        <ul>
          {items.map((products) => (
            <li key={products.id} >
              Name: {products.name} - $: {products.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
