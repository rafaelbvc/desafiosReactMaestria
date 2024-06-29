import { SomeContext } from "../../components/Hooks/HookUseContext";
import styles from "./About.module.css";
import { useContext } from "react";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div className={styles.about_container}>
      <h3>About</h3>
      <p>Valor do context: {contextValue}</p>
    </div>
  );
};

export default About;
