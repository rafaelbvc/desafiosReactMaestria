import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { url } from "./config/config";
import "./App.css";

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productID, setProductID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    httpConfig(productID, "DELETE");
    setProductID("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <br />
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                Id {product.id} - {product.name} - R$: {product.price}
              </li>
            ))}
        </ul>
      )}
      <div className="add_product">
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
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
        <section className="delete_section">
          <label>
            Insira o ID do Produto a ser Deletado:
            <br />
            <input
              type="text"
              name="productID"
              value={productID}
              onChange={(e) => setProductID(e.target.value)}
            />
          </label>
          <button className="delete_section_btn" onClick={handleDelete}>
            Delete
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
