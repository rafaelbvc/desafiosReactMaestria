import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  const { data: items } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  console.log(items);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <br />
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
