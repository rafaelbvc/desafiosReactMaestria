import HookUseReducer from "../../components/Hooks/HookUseReducer";
import HookUseState from "../../components/Hooks/HookUseState";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
    </div>
  );
};

export default Home;
