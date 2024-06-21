import { useCounterContext } from "../hooks/useCounterContext";
import "./Photos.css";

const Photos = () => {
  const { counter } = useCounterContext();

  return (
    <div className="photos_pg">
      <h3>Photos</h3>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Photos;
