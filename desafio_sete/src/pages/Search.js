import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { urlParamsF } from "../utils/urlUtils";

const Search = () => {
  let [searchParams] = useSearchParams();

  const { urlParams } = urlParamsF(searchParams);

  const { data: items } = useFetch(urlParams);

  console.log(items, urlParams)


  return (
    <div>
      <h1>Resultados disponíveis</h1>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ - {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
