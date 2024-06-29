import { SomeContext } from "../../components/Hooks/HookUseContext";
import HookUseEffect from "../../components/Hooks/HookUseEffect";
import HookUseReducer from "../../components/Hooks/HookUseReducer";
import HookUseState from "../../components/Hooks/HookUseState";
import styles from "./Home.module.css";
import { useContext } from "react";
import HookUseRef from "../../components/Hooks/HookUseRef";
import HookUseCallback from "../../components/Hooks/HookUseCallback/HookUseCallback";
import HookUseMemo from "../../components/Hooks/HookUseMemo";

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
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
    </div>
  );
};

export default Home;
