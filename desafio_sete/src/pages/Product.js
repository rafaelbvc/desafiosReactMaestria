import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { urlIDF } from "../utils/urlUtils";

import "./Product.css"

const Product = () => {
  const { id } = useParams();

  const { urlID } = urlIDF(id);

  const { data: product, loading, error } = useFetch(urlID);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Algo deu errado...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div className="product">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <Link to={`/products/${id}/info`} >Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
