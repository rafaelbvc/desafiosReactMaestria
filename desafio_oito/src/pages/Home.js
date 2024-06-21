import "./Home.css";
import ChangeCounter from "../Components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContex";

const Home = () => {
  const { counter } = useCounterContext();

  const { colorContext } = useTitleColorContext();

  return (
    <div className="home_pg">
      <h3>Home</h3>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter /> 
    </div>
  );
};

export default Home;
