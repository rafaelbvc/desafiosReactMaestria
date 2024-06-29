import { SomeContext } from "../../components/Hooks/HookUseContext";
import HookUseEffect from "../../components/Hooks/HookUseEffect";
import HookUseReducer from "../../components/Hooks/HookUseReducer";
import HookUseState from "../../components/Hooks/HookUseState";
import styles from "./Home.module.css";
import { useContext } from "react";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div className={styles.home_container}>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
    </div>
  );
};

export default Home;
