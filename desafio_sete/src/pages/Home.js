import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { url } from "../config/url";
import "./Home.css";

const Home = () => {
  const { data: products, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul className="products">
          {products &&
            products.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>R$ - {item.price}</p>
                <Link to={`/products/${item.id}`}>Detalhes</Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
